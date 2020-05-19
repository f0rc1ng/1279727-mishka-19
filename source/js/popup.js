var modal = document.getElementById("popup");
var btn = document.getElementById("btn_modal_window");
var span = document.getElementsByClassName("popup-cart__button")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
