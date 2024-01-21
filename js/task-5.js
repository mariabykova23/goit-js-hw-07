"use strict";

const bodyChangeColor = document.querySelector("body");
const btnChange = document.querySelector(".change-color");
const spanChangeColor = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnChange.addEventListener("click", (changeColorBtn) => {
  const newColor = getRandomHexColor();
  spanChangeColor.style.backgroundColor = newColor;
  bodyChangeColor.style.backgroundColor = newColor;
});


// console.log(spanChangeColor);
// console.log(bodyChangeColor);