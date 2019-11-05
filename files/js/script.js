// переменные для выпадающего меню
const aboutFond = document.querySelector(".header__menu-item_fond");
const liFond = document.querySelector(".header__list_fond");

const aboutFamily = document.querySelector(".header__menu-item_family");
const liFamily = document.querySelector(".header__list_family");

const aboutHelp = document.querySelector(".header__menu-item_help");
const liHelp = document.querySelector(".header__list_help");

const menuActive = "header__list_active";

// класс, делающий меню выпадающим
class MenuItem {
  makeHoverActive(item, menu) {
    item.addEventListener("mouseover", function() {
      menu.classList.toggle(menuActive);
    });

    item.addEventListener("mouseout", function() {
      menu.classList.remove(menuActive);
    });

    menu.addEventListener("mouseover", function() {
      menu.classList.toggle(menuActive);
    });

    menu.addEventListener("mouseout", function() {
      menu.classList.remove(menuActive);
    });
  }

  makeClickActive(item, menu) {
    item.addEventListener("click", function() {
      menu.classList.toggle(menuActive);
    });
  }
}

// создаём новый объект, чтобы вызывать методы класса
const menuItem = new MenuItem();
// функция для изменения выпадения меню + вызываем методы в ней

function changeShowMenu() {
  if (window.innerWidth > 768) {
    menuItem.makeHoverActive(aboutFond, liFond);
    menuItem.makeHoverActive(aboutFamily, liFamily);
    menuItem.makeHoverActive(aboutHelp, liHelp);
  }
  else {
    menuItem.makeClickActive(aboutFond, liFond);
    menuItem.makeClickActive(aboutFamily, liFamily);
    menuItem.makeClickActive(aboutHelp, liHelp);
  } 
}

changeShowMenu ();


// объект, в котором хранятся данные для балуна
const stories = [
  {
    src: "./images/map__balloon-photo.png",
    subheader: "Пермский край",
    header: "История Гульназ и ее сыночка Саида",
    text: "Мне сложно и очень тяжело вспоминать, но я хочу поделиться с вами, как это было три ..."
  },
  {
    src: "./images/map__balloon-photo.png",
    subheader: "Пермский край",
    header: "История Гульназ и ее сыночка Саида",
    text: "Мне сложно и очень тяжело вспоминать, но я хочу поделиться с вами, как это было три ..."
  }
];

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
        balloonContentBody: `<img class=map__balloon-photo src=${stories[0].src}>
          <a href=#><h6 class=map__balloon-subheader>${stories[0].subheader}</h6>
          <h4 class=map__balloon-headline>${stories[0].header}</h4>
          <p class=map__balloon-text>${stories[0].text}</p></a>`,
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
        balloonContentBody: `<img class=map__balloon-photo src=${stories[1].src}>
          <a href=#><h6 class=map__balloon-subheader>${stories[1].subheader}</h6>
          <h4 class=map__balloon-headline>${stories[1].header}</h4>
          <p class=map__balloon-text>${stories[1].text}</p></a>`,
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

const mapVisible = "map_view_visible";
const mapInvisible = "map_view_invisible";
const mapColorActive = "map__button_color_active";
const mapColorInactive = "map__button_color_inactive";

showList.addEventListener("click", function() {
  list.classList.add(mapVisible);
  map.classList.add(mapInvisible);
  showList.classList.add(mapColorActive);
  showMap.classList.add(mapColorInactive);
});

showMap.addEventListener("click", function() {
  list.classList.remove(mapVisible);
  map.classList.remove(mapInvisible);
  map.classList.add(mapVisible);
  showList.classList.remove(mapColorActive);
  showMap.classList.remove(mapColorInactive);
});

// запуск карты
ymaps.ready(init);

const header = document.querySelector(".header__nav");
const gamburger = document.querySelector(".header__gamburger");
const closeGamburger = document.querySelector(".header__gamburger-close");

gamburger.addEventListener("click", function() {
  header.classList.add("header__nav_visible");
});

closeGamburger.addEventListener("click", function() {
  header.classList.remove("header__nav_visible");
});
