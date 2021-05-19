const hideInputError = (formElement, inputElement) => {
  // hide error
  // find error element
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove('input-container__item_type_error');
  errorElement.classList.remove('input-container__input-error_active');
  errorElement.textContent = '';
}

const showInputError = (formElement, inputElement) => {
  // show error
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add('input-container__item_type_error');
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add('input-container__input-error_active');
}

const checkInputValidity = (formElement, inputElement) => {
  //check input is valid
  console.log(inputElement.validity.valid);

  if (inputElement.validity.valid) {
    hideInputError(formElement, inputElement);
  } else {
    showInputError(formElement, inputElement);
  }
  // if valid, hide error else show error
}

const hasInvalidInput = (inputList) => {
  return inputList.some(inputElement => !inputElement.validity.valid)
}

const toggleButtonState = (buttonElement, inputList) => {
  // if form valid enable button, else disable
  if (hasInvalidInput(inputList)) {
    // disable
    buttonElement.disabled = true;
  } else {
    // enable
    buttonElement.disabled = false;
  }
}

const setEventListeners = (formElement) => {
  // find all inputs
  // prevent page reload
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });
  const inputList = Array.from(formElement.querySelectorAll('.input-container__item'));
  //find submit button
  const buttonElement = formElement.querySelector('.input-container__button');
  // add listeners for each input
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      // check input is valid
      checkInputValidity(formElement, inputElement);
      toggleButtonState(buttonElement, inputList);
    });
  })
  // set initial button state
  toggleButtonState(buttonElement, inputList);
}

const enableValidation = () => {

  // find all forms
  const formList = Array.from(document.querySelectorAll('.form'));
  // set eventListeners for each form
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  })
};
