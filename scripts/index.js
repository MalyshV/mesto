const popupProfileOpenButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('#popup');
const popupCard = document.querySelector('#popup_card');
const popupPhoto = document.querySelector('#popup_photo');
const popupProfileCloseButton = document.querySelector('.popup__close');
const formElement = document.querySelector('[name="profile-form"]');
const popupCardOpendButton = document.querySelector('.profile__add-button');
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

const openPopup = (popup) => {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', closePopupOnEscape);

  toggleButtonState (buttonElement, inputList);
};

const closePopup = (popup) => {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closePopupOnEscape);
};

const closePopupOnEscape = event => {
  if (event.key === 'Escape') {
    const popupActive = document.querySelector('.popup_is-opened');
    closePopup(popupActive);
    popupCardForm.reset();
    toggleButtonState (buttonElement, inputList);
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
};

const closeCardPopup = () => {
  closePopup(popupCard);
};

const handleCardFormSubmit = event => {
  event.preventDefault();

  const title = placeInput.value;
  const link = imageInput.value;
  const alt = placeInput.value;

  cardContainer.prepend(createCard(title, link, alt));

  closeCardPopup();
  popupCardForm.reset();
};

const createCard = (title, link, alt) => {
  const newCard = cardTemplate.content.querySelector('.element').cloneNode(true);
  const cardRemoveButton = newCard.querySelector('.element__delete-button');
  const photo = newCard.querySelector('.element__image');

  newCard.querySelector('.element__title').textContent = title;
  newCard.querySelector('.element__image').src = link;
  newCard.querySelector('.element__image').alt = alt;

  photo.addEventListener('click', openPhotoPopup);
  cardRemoveButton.addEventListener('click', removeCard);
  newCard.querySelector('.element__like-button').addEventListener('click', addLike);

  return newCard;
};

const addLike = event => {
  event.target.classList.toggle('element__like-button_active');
};

const removeCard = event => {
  event.target.closest('.element').remove();
};

// PopupPhoto functions
const openPhotoPopup = event => {
  openPopup(popupPhoto);

  const bigPhoto = document.querySelector('.popup__image');
  const bigPhotoTitle = document.querySelector('.popup__text');

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
popupCardOpendButton.addEventListener('click', openCardPopup);
popupCardCloseButton.addEventListener('click', closeCardPopup);
popupPhotoCloseButton.addEventListener('click', closePhotoPopup);
popupCard.addEventListener('submit', handleCardFormSubmit);
formElement.addEventListener('submit', handleProfileFormSubmit);

// Close on overlay
const overlay = Array.from(document.querySelectorAll('.popup'));

overlay.forEach((element) => {
  element.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
      closePopup(element);
      popupCardForm.reset();
    }
  })
});

// Create initial cards
initialCards.forEach(function (currentItem) {
  cardContainer.append(createCard(currentItem.name, currentItem.link, currentItem.alt));
});
