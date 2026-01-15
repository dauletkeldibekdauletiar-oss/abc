


function toggleNav() {
    const sidebar = document.getElementById("sidePanel");
    
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
}


window.addEventListener('click', function(event) {
    const sidebar = document.getElementById("sidePanel");
    const openBtn = document.querySelector(".open-menu");
    

    if (sidebar.style.width === "250px" && 
        !sidebar.contains(event.target) && 
        event.target !== openBtn) {
        sidebar.style.width = "0";
    }
});
function searchMenu() {
  
    let input = document.getElementById('sidebarSearch');
    let filter = input.value.toLowerCase();
    
  
    let sidebar = document.getElementById("sidePanel");
    let links = sidebar.getElementsByTagName('a');


    for (let i = 0; i < links.length; i++) {
        let textValue = links[i].textContent || links[i].innerText;
        
     
        if (textValue.toLowerCase().indexOf(filter) > -1) {
            links[i].style.display = "";
        } else {
            links[i].style.display = "none";
        }
    }
}
function toggleCategory(element) {
   
    element.classList.toggle("active");
    
 
    var submenu = element.nextElementSibling;
    
    
    if (submenu.classList.contains("open")) {
        submenu.classList.remove("open");
    } else {
        submenu.classList.add("open");
    }
}
let totalAmount = 0;

function addToCart(price) {
    totalAmount += price;
    document.getElementById('totalSum').innerText = totalAmount;
    
   
    const panel = document.getElementById('cartPanel');
    panel.style.background = '#ff00ff';
    setTimeout(() => {
        panel.style.background = '#d000ff';
    }, 200);
}

function confirmOrder() {
    if (totalAmount > 0) {
        alert("Заказ оформлен! К оплате: " + totalAmount + " ₽");

        totalAmount = 0;
        document.getElementById('totalSum').innerText = totalAmount;
    } else {
        alert("Выберите напиток для заказа!");
    }
}

let currDeg = 0;

function rotateCarousel(direction) {
    const ring = document.getElementById('carouselRing');
    
    if (direction === 'next') {
        currDeg -= 60;
    } else {
        currDeg += 60;
    }
    
    ring.style.transform = `rotateY(${currDeg}deg)`;
}