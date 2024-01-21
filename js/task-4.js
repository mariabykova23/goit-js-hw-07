"use strict";

const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (submitBtnForm) => {
  submitBtnForm.preventDefault();

  const formData = submitBtnForm.target;
  const userEmail = formData.elements.email.value.trim();
  const userPassword = formData.elements.password.value.trim();

  if (
    formEl.email.value === "" ||
    formEl.password.value === "" ||
    formEl.email.value === " " ||
    formEl.password.value === " "
  ) {
    alert("All form fields must be filled in");
  }

  console.log(`Email: ${userEmail}, Passwords: ${userPassword}`);
  formData.reset();
});

const formSubmitText = formEl.querySelector("button");

formSubmitText.textContent = "Log in";
