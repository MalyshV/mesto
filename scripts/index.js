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

function openPopup(popup) {
  popup.classList.add('popup_is-opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_is-opened');
}

// profile popup
function openProfilePopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;

  openPopup(popupProfile);
}

function closeProfilePopup() {
  closePopup(popupProfile);
}

function handleProfileFormSubmit(event) {
  event.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closeProfilePopup();
}

// card popup
function openCardPopup() {
  openPopup(popupCard);
}

function closeCardPopup() {
  closePopup(popupCard);
}

function handleCardFormSubmit(event) {
  event.preventDefault();

  const title = placeInput.value;
  const link = imageInput.value;
  const alt = placeInput.value;

  cardContainer.prepend(createCard(title, link, alt));

  popupCardForm.reset();

  closeCardPopup();
}

function createCard(title, link, alt) {
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
}

function addLike(event) {
  event.target.classList.toggle('element__like-button_active');
}

function removeCard(event) {
  event.target.closest('.element').remove();
}

// image popup
function openPhotoPopup(event) {
  openPopup(popupPhoto);

  const bigPhoto = document.querySelector('.popup__image');
  const bigPhotoTitle = document.querySelector('.popup__text');

  bigPhoto.src = event.target.src;
  bigPhotoTitle.textContent = event.target.alt;
}

function closePhotoPopup() {
  closePopup(popupPhoto);
}

// close popup via overlay & Escape
const overlay = Array.from(document.querySelectorAll('.popup'));

overlay.forEach((element) => {
  element.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(element);
    }
  })
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      closePopup(element);
    }
  })
});

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

// create initial cards
initialCards.forEach(function (currentItem) {
  cardContainer.append(createCard(currentItem.name, currentItem.link, currentItem.alt));
});
