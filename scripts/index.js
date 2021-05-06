const openPopupButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('#popup');
const popupCard = document.querySelector('#popup_card');
const popupPhoto = document.querySelector('#popup_photo');
const closePopupButton = document.querySelector('.popup__close');
const formElement = document.querySelector('[name="profile-form"]');
const openPopupCardButton = document.querySelector('.profile__add-button');
const closePopupCardButton = document.querySelector('#button');
const closePhotoPopupButton = document.querySelector('#button_photo');
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

openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
closePopupCardButton.addEventListener('click', closePopupCard);
closePhotoPopupButton.addEventListener('click', closePhotoPopup);
formElement.addEventListener('submit', handleFormSubmit);
openPopupCardButton.addEventListener('click', openPopupCard);
popupCard.addEventListener('submit', handleCardFormSubmit);


// Клонирование и наполнение карточек
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

// Вывод карточек на страницу
initialCards.forEach(function (currentItem) {
  cardContainer.append(createCard(currentItem.name, currentItem.link, currentItem.alt));
});

// Действия с профилем
function openPopup(event) {
  event.preventDefault();
  popup.classList.add('popup_is-opened');

  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closePopup() {
  popup.classList.remove('popup_is-opened');
}

function handleFormSubmit(event) {
  event.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  popup.classList.remove('popup_is-opened');
}

// Действия с карточками
function addLike(event) {
  event.target.classList.toggle('element__like-button_active');
}

function removeCard(event) {
  event.target.closest('.element').remove();
}

function openPopupCard(event) {
  event.preventDefault();
  popupCard.classList.add('popup_is-opened');
}

function closePopupCard() {
  popupCard.classList.remove('popup_is-opened');
}

function handleCardFormSubmit(event) {
  event.preventDefault();

  const title = placeInput.value;
  const link = imageInput.value;
  const alt = placeInput.value;

  cardContainer.prepend(createCard(title, link, alt));

  popupCardForm.reset();

  closePopupCard();
}

//Действия с попапом-картинкой
function openPhotoPopup(event) {
  event.preventDefault();
  popupPhoto.classList.add('popup_is-opened');

  const bigPhoto = document.querySelector('.popup__image');
  const bigPhotoTitle = document.querySelector('.popup__text');

  bigPhoto.src = event.target.src;
  bigPhotoTitle.textContent = event.target.alt;
}

function closePhotoPopup(event) {
  event.preventDefault();
  popupPhoto.classList.remove('popup_is-opened');
}
