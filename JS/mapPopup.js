var mapPopupOpen = document.querySelector(".column__button_map");
var mapPopupClose = document.querySelector(".modal-map__button_close");
var mapPopup = document.querySelector(".page__modal-map");
var overlay = document.querySelector(".page__overlay");


mapPopupOpen.addEventListener('click', function(evt){
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
    overlay.classList.add("overlay-show");

});

mapPopupClose.addEventListener('click', function(evt){
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
    overlay.classList.remove("overlay-show");

});

window.addEventListener("keydown", function(evt){
    if (evt.keyCode === 27){
        evt.preventDefault();
        if(mapPopup.classList.contains("modal-show")){
            mapPopup.classList.remove("modal-show");
            overlay.classList.remove("overlay-show");
        }
    }
});