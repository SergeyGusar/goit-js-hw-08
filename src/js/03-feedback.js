import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCAL_KEY = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInputData, 500));

let dataForm = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
const { email, message } = form.elements;
reload();

function onInputData(evt) {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm));
}

function reload() {
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  
if (email.value === '' || message.value === '') {
  return alert("Будь ласка, заповніть обов'язкові поля");
}
  localStorage.removeItem(LOCAL_KEY);
  evt.currentTarget.reset();
  
  dataForm = {};
}
console.log(dataForm);



