var link = document.querySelector(".btn-map");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-circle-btn");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");
var form = popup.querySelector("form");
var storage = localStorage.getItem("login");

link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("modal-show");
    login.focus();
    if (storage) {
        login.value = storage;
        email.focus();
    } else {
        login.focus();
    }
});

close.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("modal-show");
});
form.addEventListener("submit", function (event) {
  if (!login.value || !email.value) {
    event.preventDefault();
  }else {
    localStorage.setItem("login", login.value);
  }
});
window.addEventListener("keydown", function (event) {
    if (event.keyCode == 27) {
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
        }
    }
});

function initMap() {
  var myLatLng = {lat: 45.056853, lng: 38.944155};

  var map = new google.maps.Map(document.querySelector('.map-script'), {
    zoom: 15,
    center: myLatLng
  });
  var image = 'img/map-marker.png';
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image,
  });
}
