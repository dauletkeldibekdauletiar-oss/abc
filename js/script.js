


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
    // Переключаем класс 'active' для самого заголовка (для поворота стрелки)
    element.classList.toggle("active");
    
    // Находим следующий элемент (это наш .submenu)
    var submenu = element.nextElementSibling;
    
    // Переключаем класс 'open' для раскрытия
    if (submenu.classList.contains("open")) {
        submenu.classList.remove("open");
    } else {
        submenu.classList.add("open");
    }
}