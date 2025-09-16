const inputName = document.querySelector('input#name');
const inputEmail = document.querySelector('input#email');
const formButton = document.querySelector('button[data-button="form-button"]');

const nameRegex = /^[A-Za-zА-Яа-яЁё\s]+$/;
const emailRegex = /^\S+@\S+\.\S+$/;

function isNameValid(value) {
  return nameRegex.test(value);
}

function isEmailValid(value) {
  return emailRegex.test(value);
}

function validateName() {
  if (isNameValid(inputName.value)) {
    inputName.style.color = '#ffffff';
    inputName.style.backgroundColor = 'transparent';
  } else {
    inputName.style.color = '#ff0000';
    inputName.style.backgroundColor = '#ffffff';
  }
}

function validateEmail() {
  if (isEmailValid(inputEmail.value)) {
    inputEmail.style.color = '#ffffff';
    inputEmail.style.backgroundColor = 'transparent';
  } else {
    inputEmail.style.color = '#ff0000';
    inputEmail.style.backgroundColor = '#ffffff';
  }
}

function onInputName() {
  validateName();
}

function onInputEmail() {
  validateEmail();
}

function onButtonClick(event) {
  event.preventDefault();
  validateName();
  validateEmail();
}

function submitForm() {
  if (formButton) {
    formButton.addEventListener('click', onButtonClick);
  }

  inputName.addEventListener('input', onInputName);
  inputEmail.addEventListener('input', onInputEmail);
}

submitForm();
