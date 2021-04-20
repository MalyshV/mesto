let openPopupButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__close');

function togglePopup(event) {
  event.preventDefault();
  popup.classList.toggle('popup_is-opened');
}

openPopupButton.addEventListener('click', togglePopup);

closePopupButton.addEventListener('click', togglePopup);
function handleOverlayClick(event) {
  if (event.target === event.currentTarget) {
    togglePopup(event);
  }
}

popup.addEventListener('click', handleOverlayClick);


let formElement = document.querySelector('.input-container');

document.querySelector('.input-container__button').onclick = changeInfo;

function changeInfo(event) {
  event.preventDefault();
  let name = document.querySelector('.input-container__item').value;
  let job = document.querySelector('.input-container__item_about').value;

  document.querySelector('.profile__user-name').textContent = name;
  document.querySelector('.profile__user-description').textContent = job;

  togglePopup()
}

formElement.addEventListener('submit', changeInfo);
