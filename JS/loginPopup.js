var loginPopupOpen = document.querySelector(".user-navigation__link");
var loginPopupClose = document.querySelector(".modal-login__button_close");
var loginPopup = document.querySelector(".page__modal-login");
var overlay = document.querySelector(".page__overlay");

var login = loginPopup.querySelector("[name=login]");
var password = loginPopup.querySelector("[name=password]");

var loginForm = loginPopup.querySelector(".modal-login__form");

var isLocalStorage = true;
var loginStorage = "";

try{
    localStorage.getItem("login");
} catch(err) {
    isLocalStorage = false;
}

loginPopupOpen.addEventListener("click", function(evt){
    evt.preventDefault();
    loginPopup.classList.add("modal-show");
    overlay.classList.add("overlay-show");

    if(loginStorage){
        login.value = loginStorage;
        password.focus();
    } else {
    login.focus();
    }
});

loginPopupClose.addEventListener('click', function(evt){
    evt.preventDefault();
    loginPopup.classList.remove("modal-show");
    overlay.classList.remove("overlay-show");
    loginPopup.classList.remove("modal-error");
});

loginForm.addEventListener("submit", function(evt){
    evt.preventDefault();

    if(!login.value || !password.value){
        loginPopup.classList.add("modal-error");
    } else {
        if(isLocalStorage){
            localStorage.setItem("login", login.value);
        }
    }
});

window.addEventListener("keydown", function(evt){
    if (evt.keyCode === 27){
    evt.preventDefault();
        if(loginPopup.classList.contains("modal-show")){
            loginPopup.classList.remove("modal-show");
            overlay.classList.remove("overlay-show");
            loginPopup.classList.error("modal-error");
        }
    }
});