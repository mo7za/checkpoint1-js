let plusBtns = document.getElementsByClassName("plus-btn");
let minusBtns = document.getElementsByClassName("minus-btn");
let trashBtns = document.getElementsByClassName("fa-trash");
let heartBtns = document.getElementsByClassName("fa-heart");

function total() {
  let sum = 0;
  let total = document.querySelector("#total-price");
  let qtes = document.getElementsByClassName("qte");
  let price = document.getElementsByClassName("price");
  for (let i = 0; i < price.length; i++) {
    sum = sum + Number(qtes[i].textContent) * Number(price[i].textContent);
  }
  total.textContent = sum;
}

for (let plusBtn of plusBtns) {
  plusBtn.addEventListener("click", function () {
    plusBtn.nextElementSibling.textContent++;
    total();
  });
}
for (let minusBtn of minusBtns) {
  minusBtn.addEventListener("click", function () {
    if (minusBtn.previousElementSibling.textContent > 0)
      minusBtn.previousElementSibling.textContent--;
    total();
  });
}

for (const btn of heartBtns) {
  btn.addEventListener("click", function () {
    btn.classList.toggle("toggleHeart");
  });
}
for (const btn of trashBtns) {
  btn.addEventListener("click", function () {
    btn.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    total();
  });
}
