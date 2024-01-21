"use strict";

// 1. Порахує й виведе в консоль кількість
// категорій в ul#categories, тобто елементів li.item.

const listOfLi = document.querySelectorAll(".item");
const numberOfTags = listOfLi.length;
console.log("Number of categories:  " + `${numberOfTags}`);

// Для кожного елемента li.item у списку ul#categories
// знайде й виведе в консоль текст заголовка елемента
// (тегу <h2>) і кількість елементів у категорії
// (усіх <li>, вкладених у нього).

const titlesEach = document.querySelectorAll("h2");
const ulQuantities = document.querySelectorAll(".item>ul");

let listOfTitles = [];
let quanOfSubTitles = [];

titlesEach.forEach((titleEach) => listOfTitles.push(titleEach.textContent));

ulQuantities.forEach((ulQuantity) => {
  const liQuantity = ulQuantity.querySelectorAll("li");
  quanOfSubTitles.push(liQuantity.length);
});

console.log("Category:  " + `${listOfTitles[0]}`);
console.log("Elements:  " + `${quanOfSubTitles[0]}`);

console.log("Category:  " + `${listOfTitles[1]}`);
console.log("Elements:  " + `${quanOfSubTitles[1]}`);

console.log("Category:  " + `${listOfTitles[2]}`);
console.log("Elements:  " + `${quanOfSubTitles[2]}`);
