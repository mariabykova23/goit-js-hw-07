"use strict";

const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (submitBtnForm) => {
  submitBtnForm.preventDefault();

  const formData = submitBtnForm.target;
  const userEmail = formData.elements.email.value.trim();
  const userPassword = formData.elements.password.value.trim();
  const userEmailKey = formData.elements.email.name;
  const userPasswordKey = formData.elements.password.name;

  if (userEmail === "" || userPassword === "") {
    alert("All form fields must be filled in");
  }

  console.log(
    `${userEmailKey}: ${userEmail}, ${userPasswordKey}: ${userPassword}`
  );
  formData.reset();
});

const formSubmitText = formEl.querySelector("button");

formSubmitText.textContent = "Log in";
