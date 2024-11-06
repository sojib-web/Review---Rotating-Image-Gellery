// @ts-nocheck
const imageContainer = document.querySelector(".image-container");
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");
let x = 0;
let timer;
prevEl.addEventListener("click", () => {
  x = x + 45;
  clearTimeout(timer);
  updateGellery();
});

nextEl.addEventListener("click", () => {
  x = x - 45;
  clearTimeout(timer);
  updateGellery();
});

const updateGellery = () => {
  imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;

  timer = setTimeout(() => {
    x = x - 45;
    updateGellery();
  }, 3000);
};

updateGellery();
