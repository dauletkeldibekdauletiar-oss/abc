document.addEventListener('DOMContentLoaded', () => {
   
    const coffeeData = {
        name: "Капучино (с молоком)",
        price: 250,
        description: "Классический кофейный напиток на основе эспрессо с добавлением подогретого вспененного молока.",
        sizes: [200, 300, 400] 
    };


    const container = document.getElementById('product-container');

    if (container) {


  
        const desc = document.createElement('p');
        desc.innerText = coffeeData.description;
        desc.style.width = "100%";
        desc.style.textAlign = "center";

  
        const priceTag = document.createElement('h2');
        priceTag.innerText = `Цена: ${coffeeData.price} руб.`;

  
        const buyBtn = document.createElement('button');
        buyBtn.innerText = "Купить сейчас";
        

        buyBtn.className = "cofe"; 
        buyBtn.style.cursor = "pointer";
        buyBtn.style.marginTop = "20px";
        buyBtn.style.background = "rgba(208, 0, 255, 0.5)";


        buyBtn.addEventListener('click', () => {
            alert(`Вы добавили "${coffeeData.name}" в корзину за ${coffeeData.price} руб.`);
            buyBtn.innerText = "В корзине!";
            buyBtn.style.background = "#4CAF50";
        });

    
        const sizeSelect = document.createElement('select');
        sizeSelect.style.padding = "10px";
        sizeSelect.style.borderRadius = "5px";
        
        coffeeData.sizes.forEach(size => {
            const option = document.createElement('option');
            option.value = size;
            option.text = `${size} мл`;
            sizeSelect.appendChild(option);
        });

        container.appendChild(desc);
        container.appendChild(sizeSelect);
        container.appendChild(priceTag);
        container.appendChild(buyBtn);
    }
});