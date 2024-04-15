import "./style.css";

// Form Submit
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  if (!e.target.checkValidity()) {
    e.preventDefault();
  } else {
    alert("High Five!");
  }
});

// Email Input
const emailInput = document.querySelector("input#email");
emailInput.addEventListener("input", (e) => {
  const errorMessage = document.querySelector("input#email + span.error");
  if (!e.target.validity.valid) {
    errorMessage.textContent = "Please enter an email address";
  } else {
    errorMessage.textContent = "";
  }
});

// Country Input
const countryInput = document.querySelector("input#country");
countryInput.addEventListener("input", (e) => {
  const errorMessage = document.querySelector("input#country + span.error");
  if (!e.target.validity.valid) {
    errorMessage.textContent = "Please enter a country";
  } else {
    errorMessage.textContent = "";
  }
});

// Zip Code Input
const zipCodeInput = document.querySelector("input#zip-code");
zipCodeInput.addEventListener("input", (e) => {
  const errorMessage = document.querySelector("input#zip-code + span.error");
  if (!e.target.validity.valid) {
    errorMessage.textContent = "Please enter a zip code";
  } else {
    errorMessage.textContent = "";
  }
});

// Password & Password Confirmation Inputs
const passwordInput = document.querySelector("input#password");
passwordInput.addEventListener("input", (e) => {
  const errorMessage = document.querySelector("input#password + span.error");
  if (!e.target.validity.valid) {
    errorMessage.textContent = "Please enter a password";
  } else {
    errorMessage.textContent = "";
  }
});

const passwordConfirmationInput = document.querySelector(
  "input#password-confirmation",
);
passwordConfirmationInput.addEventListener("input", (e) => {
  const errorMessage = document.querySelector(
    "input#password-confirmation + span.error",
  );
  if (passwordInput.value !== passwordConfirmationInput.value) {
    e.target.setCustomValidity("Passwords must match");
    errorMessage.textContent = "Passwords must match";
  } else {
    e.target.setCustomValidity("");
    errorMessage.textContent = "";
  }
});
