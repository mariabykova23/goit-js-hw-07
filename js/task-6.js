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

function createBoxes(numberOfBlocks) {
  containerBlock.innerHTML = "";
  let startWidth = 20;
  let startHeight = 20;
  const sizeIncrease = 10;
  for (let i = 0; i < numberOfBlocks; i++) {
    startWidth += sizeIncrease;
    startHeight += sizeIncrease;
    const divBlock = document.createElement("div");
    divBlock.style.width = startWidth + "px";
    divBlock.style.height = startHeight + "px";
    divBlock.style.backgroundColor = getRandomHexColor();
    containerBlock.appendChild(divBlock);
    inputNumber.value = "";
  }
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

console.log(createBtn);
console.log(destroyBtn);
console.log(inputNumber);
