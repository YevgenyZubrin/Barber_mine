var loginPopupOpen = document.querySelector(".user-navigation__link");
var loginPopupClose = document.querySelector(".modal-login__button_close");
var loginPopup = document.querySelector(".page__modal-login");
var overlay = document.querySelector(".page__overlay");

var login = loginPopup.querySelector("[name=login]");
var login = loginPopup.querySelector("[name=password]");

loginPopupOpen.addEventListener("click", function(evt){
    evt.preventDefault();
    loginPopup.classList.add("modal-show");
    overlay.classList.add("overlay-show");
    login.focus();
});

loginPopupClose.addEventListener('click', function(evt){
    evt.preventDefault();
    loginPopup.classList.remove("modal-show");
    overlay.classList.remove("overlay-show");
});

