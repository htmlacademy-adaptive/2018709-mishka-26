let orderButton = document.querySelector(".top-product__button");
let Button = document.querySelectorAll(".button");
let Modal = document.querySelector(".modal--hidden");

orderButton.onclick = function () {
  Modal.classList.toggle("modal--hidden");
}
