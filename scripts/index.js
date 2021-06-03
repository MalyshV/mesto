import { Card } from './Card.js';

const popupProfileOpenButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('#popup');
const popupCard = document.querySelector('#popup_card');
const popupPhoto = document.querySelector('#popup_photo');
const popupProfileCloseButton = document.querySelector('.popup__close');
const formElement = document.querySelector('[name="profile-form"]');
const popupCardOpenButton = document.querySelector('.profile__add-button');
const popupCardCloseButton = document.querySelector('#button');
const popupPhotoCloseButton = document.querySelector('#button_photo');
const cardTemplate = document.querySelector('#card-template');
const placeInput = document.querySelector('[name="name"]');
const imageInput = document.querySelector('[name="link"]');
const container = document.querySelector('.elements');
const cardContainer = container.querySelector('.elements__list');
const nameInput = document.querySelector('[name="user-name"]');
const jobInput = document.querySelector('[name="user-job"]');
const profileName = document.querySelector('.profile__user-name');
const profileJob = document.querySelector('.profile__user-job');
const popupCardForm = document.querySelector('[name="card-form"]');
const buttonElement = formElement.querySelector('.input-container__button');
const inputList = Array.from(formElement.querySelectorAll('.input-container__item'));
const bigPhoto = document.querySelector('.popup__image');
const bigPhotoTitle = document.querySelector('.popup__text');
const overlays = Array.from(document.querySelectorAll('.popup'));

const createCard = (title, link) => {
  const card = new Card(title, link, '#card-template');

  return card.render();
};

const openPopup = (popup) => {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', closePopupOnEscape);
};

const closePopup = (popup) => {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closePopupOnEscape);
};

const closePopupOnEscape = event => {
  if (event.key === 'Escape') {
    const popupActive = document.querySelector('.popup_is-opened');
    closePopup(popupActive);
  }
};

// popupProfile functions
const openProfilePopup = () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;

  openPopup(popupProfile);
};

const closeProfilePopup = () => {
  closePopup(popupProfile);
};

const handleProfileFormSubmit = event => {
  event.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closeProfilePopup();
};

// popupCard functions
const openCardPopup = () => {
  openPopup(popupCard);
  popupCardForm.reset();

  const button = popupCardForm.querySelector('.input-container__button');
  const inputs = Array.from(popupCardForm.querySelectorAll('.input-container__item'));

  toggleButtonState(button, inputs);
};

const closeCardPopup = () => {
  closePopup(popupCard);
};

const handleCardFormSubmit = event => {
  event.preventDefault();

  const title = placeInput.value;
  const link = imageInput.value;
  const alt =  placeInput.value;

  cardContainer.prepend(createCard(title, link, alt));

  popupCardForm.reset();
  closeCardPopup();
};

// PopupPhoto functions
const openPhotoPopup = event => {
  openPopup(popupPhoto);
  bigPhoto.src = event.target.src;
  bigPhotoTitle.textContent = event.target.alt;
};

const closePhotoPopup = () => {
  closePopup(popupPhoto);
};

enableValidation({
  formSelector: '.form',
  inputSelector: '.input-container__item',
  submitButtonSelector: '.input-container__button',
  inputErrorClass: 'input-container__item_type_error',
  errorActiveClass: 'input-container__input-error_active',
});

popupProfileOpenButton.addEventListener('click', openProfilePopup);
popupProfileCloseButton.addEventListener('click', closeProfilePopup);
popupCardOpenButton.addEventListener('click', openCardPopup);
popupCardCloseButton.addEventListener('click', closeCardPopup);
popupPhotoCloseButton.addEventListener('click', closePhotoPopup);
popupCard.addEventListener('submit', handleCardFormSubmit);
formElement.addEventListener('submit', handleProfileFormSubmit);

// Close on overlay
overlays.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
      closePopup(popup);
    }
  })
});

// Create initial cards
initialCards.forEach(function (currentItem) {
  cardContainer.append(createCard(currentItem.name, currentItem.link, currentItem.alt));
});

export { openPopup, popupPhoto, bigPhoto, bigPhotoTitle };
