import { nameInput, profileName, jobInput, profileJob, popupProfile, popupCardOpenButton, popupProfileOpenButton, formElement, popupProfileCloseButton, popupCardCloseButton, popupPhotoCloseButton } from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { initialCards } from '../utils/initial-сards.js';
import { Section } from '../components/Section.js';
//import { Popup } from '../components/Popup.js';
import { PopupWithForm } from '../components/PopupWithForm.js';

// константы ниже потом убрать
const overlays = Array.from(document.querySelectorAll('.popup'));
const popupPhoto = document.querySelector('#popup_photo');

// use class Section
const section = new Section({
  items: initialCards,
  renderer: (cardData) => {
    const card = new Card(cardData, '#card-template');

    return card.render();
  }
}, '.elements__list');

section.render();

// use class Popup
const cardPopup = new PopupWithForm('#popup_card', (data) => {
  section.addItem(data);
  cardPopup.close();
}); // переименовать более удачно
//const newPopup = new PopupWithForm('#popup_card');

cardPopup.setEventListeners();

const profilePopup = new PopupWithForm('#popup', (personData) => {
  //section.addItem(personData);
  profilePopup.close();
});

profilePopup.setEventListeners();

// удалить, перенесла в class Popup
const openPopup = (popup) => {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', (event) => closePopupOnEscape(event));
};

// удалить, перенесла в class Popup
const closePopup = (popup) => {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', (event) => closePopupOnEscape(event));
};

// удалить, перенесла в class Popup
/*const closePopupOnEscape = event => {
  if (event.key === 'Escape') {
    const popupActive = document.querySelector('.popup_is-opened');
    closePopup(popupActive);
  }
};*/

// popupProfile functions
/*const openProfilePopup = () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;

  openPopup(popupProfile);

  const inputList = Array.from(popupProfile.querySelectorAll('.input-container__item'));
  inputList.forEach((input) => {
    profileFormValidator.hideInputError(input);
  });
};*/

const handleProfileFormSubmit = event => {
  event.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  profilePopup.close();
};

// popupCard functions
/*const openCardPopup = () => {
  openPopup(popupCard);
  popupCardForm.reset();

  cardFormValidator.toggleButtonState();

  const inputs = Array.from(popupCard.querySelectorAll('.input-container__item'));
  inputs.forEach((input) => {
    cardFormValidator.hideInputError(input);
  });
};*/

/*const handleCardFormSubmit = event => {
  event.preventDefault();

  const card = new Card( {
    name: placeInput.value,
    link: imageInput.value,
  }, '#card-template');

  section.addItem(card.render());

  popupCardForm.reset();
  closePopup(popupCard);
};*/

const config = {
  formSelector: '.form',
  inputSelector: '.input-container__item',
  submitButtonSelector: '.input-container__button',
  inputErrorClass: 'input-container__item_type_error',
  errorActiveClass: 'input-container__input-error_active',
};

//const profileFormValidator = new FormValidator(config, formElement);
//profileFormValidator.enableValidation();

//const cardFormValidator = new FormValidator(config, popupCardForm);
//cardFormValidator.enableValidation();

popupCardOpenButton.addEventListener('click', () => {
  newPopup.open();
  //openCardPopup()
});
popupProfileOpenButton.addEventListener('click', () => profilePopup.open());
formElement.addEventListener('submit', (event) => handleProfileFormSubmit(event));
//popupCard.addEventListener('submit', (event) => handleCardFormSubmit(event));
// удалить, перенесла в class Popup
popupProfileCloseButton.addEventListener('click', () => profilePopup.close());
//popupCardCloseButton.addEventListener('click', () => closePopup(popupCard));
popupPhotoCloseButton.addEventListener('click', () => closePopup(popupPhoto));

// Close on overlay
overlays.forEach((popup) => {
  popup.addEventListener('click', (event) => {
    if (event.target.classList.contains('popup')) {
      closePopup(popup);
    }
  })
});

export { openPopup, popupPhoto };
