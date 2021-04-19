const openPopupButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close');

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



