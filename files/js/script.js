
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



// код карты
function init () {
    var myMap = new ymaps.Map("map", {
            center: [54.83, 37.11],
            zoom: 5
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark([56.907228, 31.260503], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            balloonContentHeader: "Балун метки",
            balloonContentBody: "Описание<br><img src='https://images.unsplash.com/photo-1495475163540-aea45ea95aed?w=150'>",
            balloonContentFooter: "Подвал",
            hintContent: "Хинт метки"
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: './images/map__mark_inactive.png',
            // Размеры метки.
            iconImageSize: [22, 24],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false
        }),
        myPlacemark2 = new ymaps.Placemark([56.907228, 36.260503], {
            balloonContentBody: "<img class=f src='https://images.unsplash.com/photo-1495475163540-aea45ea95aed?w=150'>",
            balloonContentFooter: "Подвал",
            hintContent: "Хинт метки",
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: './images/map__mark_inactive.png',
            // Размеры метки.
            iconImageSize: [22, 24],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false
        });;
    
    myMap.geoObjects.add(myPlacemark);
    myMap.geoObjects.add(myPlacemark2);

    myMap.events
		.add(['balloonopen', 'balloonclose'], function (event) {
	var target = event.get('target');
	if (target.geometry && typeof target.getGeoObjects) {
        if(event.get('type') == 'balloonopen') {
            target.options.set({
                iconImageHref: './images/map__mark_active.png'
            });       
    } else {
	   target.options.set({
           iconImageHref: './images/map__mark_inactive.png'
     }); 
    }
}

});
}


ymaps.ready(init);