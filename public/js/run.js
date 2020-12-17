// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const btnClose = document.querySelector(".btn-close");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");
const navSubItems = document.querySelectorAll(".nav-sub-item");

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add("close");
        btnClose.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        navItems.forEach((item) => item.classList.add("show"));
        navSubItems.forEach((item) => item.classList.add("show"));

        // Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove("close");
        btnClose.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        navItems.forEach((item) => item.classList.remove("show"));
        navSubItems.forEach((item) => item.classList.add("show"));

        // Set Menu State
        showMenu = false;
    }
}



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// (function () {
//     //Remember if the menu is opened or not
//     var menuOpened = false;
//     var menuElement = document.getElementById('menu_control');
//     var menuContainer = document.getElementById('menu-standard');

//     // Add click listener on menu icon
//     menuElement.addEventListener('click', onMenu_click);

//     // Add click listener on menu 
//     menuContainer.addEventListener('click', onMenuContainer_click);

//     function toggleMenu() {
//         menuOpened = !menuOpened;

//         if (menuOpened) {
//             menuContainer.className += ' show_menu';
//             document.addEventListener('click', onDoc_click);
//         }
//         else {
//             menuContainer.className = menuContainer.className.replace('show_menu', '').trim();
//             document.removeEventListener('click', onDoc_click);
//         }
//     }

//     function onMenu_click(domEvent) {
//         domEvent.stopPropagation();
//         toggleMenu();
//     }

//     function onDoc_click(domEvent) {
//         domEvent.stopPropagation();
//         toggleMenu();
//     }
// }
// )