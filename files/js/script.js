// переменные для выпадающего меню
const aboutFond = document.querySelector(".header__menu-item_fond");
const liFond = document.querySelector(".header__li_fond");

const aboutFamily = document.querySelector(".header__menu-item_family");
const liFamily = document.querySelector(".header__li_family");

const aboutHelp = document.querySelector(".header__menu-item_help");
const liHelp = document.querySelector(".header__li_help");

// класс, делающий меню выпадающим
class MenuItem {
  makeActive(item, menu) {
    item.addEventListener("mouseover", function() {
      menu.classList.toggle("header__li_active");
    });

    item.addEventListener("mouseout", function() {
      menu.classList.remove("header__li_active");
    });

    menu.addEventListener("mouseover", function() {
      menu.classList.toggle("header__li_active");
    });

    menu.addEventListener("mouseout", function() {
      menu.classList.remove("header__li_active");
    });
  }
}

// создаём новый объект, чтобы вызывать методы класса
const menuItem = new MenuItem();
// вызываем методы
menuItem.makeActive(aboutFond, liFond);
menuItem.makeActive(aboutFamily, liFamily);
menuItem.makeActive(aboutHelp, liHelp);

// код Яндекс карты
function init() {
  const myMap = new ymaps.Map(
      "map__api",
      {
        center: [60.83, 43.11],
        zoom: 5
      },
      {
        searchControlProvider: "yandex#search"
      }
    ),
    myPlacemark = new ymaps.Placemark(
      [56.907228, 31.260503],
      {
        balloonContentBody:
          "<img class=map__balloon-photo src='./images/map__balloon-photo.png'><a href=#><h6 class=map__balloon-subheader>Пермский край</h6><h4 class=map__balloon-headline>История Гульназ и ее сыночка Саида</h4><p class=map__balloon-text>Мне сложно и очень тяжело вспоминать, но я хочу поделиться с вами, как это было три ...</p></a>",
        hintContent: "История Гульназ и ее сыночка Саида"
      },
      {
        iconLayout: "default#image",
        iconImageHref: "./images/map__mark_inactive.png",
        iconImageSize: [22, 24],
        iconImageOffset: [0, 0],
        hideIconOnBalloonOpen: false
      }
    ),
    myPlacemark2 = new ymaps.Placemark(
      [56.907228, 36.260503],
      {
        balloonContentBody:
          "<img class=map__balloon-photo src='./images/map__balloon-photo.png'><a href=#><h6 class=map__balloon-subheader>Пермский край</h6><h4 class=map__balloon-headline>История Гульназ и ее сыночка Саида</h4><p class=map__balloon-text>Мне сложно и очень тяжело вспоминать, но я хочу поделиться с вами, как это было три ...</p></a>",
        hintContent: "История Гульназ и ее сыночка Саида"
      },
      {
        iconLayout: "default#image",
        iconImageHref: "./images/map__mark_inactive.png",
        iconImageSize: [22, 24],
        iconImageOffset: [0, 0],
        hideIconOnBalloonOpen: false
      }
    );
  // добавляем метки на карту
  myMap.geoObjects.add(myPlacemark);
  myMap.geoObjects.add(myPlacemark2);

  // слушаем открытый балун, чтобы делать активным
  myMap.events.add(["balloonopen", "balloonclose"], function(event) {
    const target = event.get("target");
    if (target.geometry && typeof target.getGeoObjects) {
      if (event.get("type") == "balloonopen") {
        target.options.set({
          iconImageHref: "./images/map__mark_active.png"
        });
      } else {
        target.options.set({
          iconImageHref: "./images/map__mark_inactive.png"
        });
      }
    }
  });
}

// блок, скрывающий карту, открывающий список детей с карты
const map = document.querySelector("#map__api");
const showList = document.querySelector(".map__button-item_list");
const showMap = document.querySelector(".map__button-item_show");
const list = document.querySelector(".map__list");

showList.addEventListener("click", function() {
  list.classList.add("map_mod-visible");
  map.classList.add("map_mod-invisible");
  showList.classList.add("map__button_mod-active");
  showMap.classList.add("map__button_mod-inactive");
});

showMap.addEventListener("click", function() {
  list.classList.remove("map_mod-visible");
  map.classList.remove("map_mod-invisible");
  map.classList.add("map_mod-visible");
  showList.classList.remove("map__button_mod-active");
  showMap.classList.remove("map__button_mod-inactive");
});

// запуск карты
ymaps.ready(init);


const header = document.querySelector(".header__nav");
const gamburger = document.querySelector(".header__gamburger");
const closeGamburger = document.querySelector(".header__gamburger-close"); 

gamburger.addEventListener("click", function () {
  header.classList.add("header__nav_visible");
})

closeGamburger.addEventListener("click", function () {
  header.classList.remove("header__nav_visible");
})