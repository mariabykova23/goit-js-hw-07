"use strict";

const bodyChangeColor = document.querySelector("body");
const btnChange = document.querySelector(".change-color");
const spanChangeColor = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnChange.addEventListener("click", (e) => {
  const newColor = getRandomHexColor();
  spanChangeColor.textContent = newColor;
  bodyChangeColor.style.backgroundColor = newColor;
});

// console.log(spanChangeColor);
// console.log(bodyChangeColor);
