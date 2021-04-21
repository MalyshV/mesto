let openPopupButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__close');
let closeFormButton = document.querySelector('.input-container__button');
let formElement = document.querySelector('.input-container');

openPopupButton.addEventListener('click', togglePopup);
closeFormButton.addEventListener('click', togglePopup);
closePopupButton.addEventListener('click', togglePopup);
popup.addEventListener('click', handleOverlayClick);
formElement.addEventListener('submit', changeInfo);

function togglePopup(event) {
  event.preventDefault();
  popup.classList.toggle('popup_is-opened');
}

function handleOverlayClick(event) {
  if (event.target === event.currentTarget) {
    togglePopup(event);
  }
}

document.querySelector('.input-container__button').onclick = changeInfo;

function changeInfo(event) {
  event.preventDefault();
  let name = document.querySelector('.input-container__name').value;
  let job = document.querySelector('.input-container__job').value;

  document.querySelector('.profile__user-name').textContent = name;
  document.querySelector('.profile__user-description').textContent = job;
}
