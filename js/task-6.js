"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsList = document.querySelector("#controls");
const containerBlock = document.querySelector("#boxes");
const createBtn = controlsList.querySelector("[data-create]");
const destroyBtn = controlsList.querySelector("[data-destroy]");
const inputNumber = controlsList.querySelector("input");
const startWidth = 30;
const startHeight = 30;
const sizeIncrease = 10;

function createBoxes(numberOfBlocks) {
  containerBlock.innerHTML = "";
  let currentWidth=startWidth;
  let currentHeight=startHeight;
  for (let i = 0; i < numberOfBlocks; i++) {
    const divBlock = document.createElement("div");
    divBlock.style.width = currentWidth + "px";
    divBlock.style.height = currentHeight + "px";
    divBlock.style.backgroundColor = getRandomHexColor();
    containerBlock.appendChild(divBlock);

    currentWidth += sizeIncrease;
    currentHeight += sizeIncrease;
  }
  inputNumber.value = "";
}

createBtn.addEventListener("click", (e) => {
  const numberOfBlocks = inputNumber.value;
  if (numberOfBlocks > 0 && numberOfBlocks <= 100) {
    return createBoxes(numberOfBlocks);
  }
});

destroyBtn.addEventListener("click", (e) => {
  containerBlock.innerHTML = "";
});
