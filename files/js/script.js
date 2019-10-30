
const aboutFond = document.querySelector(".header__menu-item_fond");
const liFond = document.querySelector(".header__li_fond");

const aboutFamily = document.querySelector(".header__menu-item_family");
const liFamily = document.querySelector(".header__li_family");

const aboutHelp = document.querySelector(".header__menu-item_help");
const liHelp = document.querySelector(".header__li_help");

const headerLiContainer = document.querySelector(".header__li-container");

class MenuItem {
    makeActive (item, menu) {
        
        item.addEventListener("mouseover", function () {
            menu.classList.toggle("header__li_active")
            headerLiContainer.classList.toggle("li-container_active")
        });

        item.addEventListener("mouseout", function () {
            menu.classList.remove("header__li_active")
            headerLiContainer.classList.remove("li-container_active")
        });
        
        menu.addEventListener("mouseover", function () {
            menu.classList.toggle("header__li_active")
            headerLiContainer.classList.toggle("li-container_active")
        });

        menu.addEventListener("mouseout", function () {
            menu.classList.remove("header__li_active")
            headerLiContainer.classList.remove("li-container_active")
        });

    }
}

const menuItem = new MenuItem;
menuItem.makeActive(aboutFond,liFond);
menuItem.makeActive(aboutFamily,liFamily);
menuItem.makeActive(aboutHelp,liHelp);