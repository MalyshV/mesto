const openPopupButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('#popup');
const popup_card = document.querySelector('#popup_card');
const popup_photo = document.querySelector('#popup_photo');
const closePopupButton = document.querySelector('.popup__close');
const formElement = document.querySelector('[name="profile-form"]');
const openPopupCardButton = document.querySelector('.profile__add-button');
const closePopupCardButton = document.querySelector('#button');
let nameInput = document.querySelector('[name="user-name"]');
let jobInput = document.querySelector('[name="user-job"]');
let profileName = document.querySelector('.profile__user-name');
let profileJob = document.querySelector('.profile__user-job');

openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
closePopupCardButton.addEventListener('click', closePopupCard);
formElement.addEventListener('submit', formSubmitHandler);
openPopupCardButton.addEventListener('click', openPopupCard);

const initialCards = [
  {
    name: 'Карачаево-Черкесия',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// Вывод карточек на страницу:
const container = document.querySelector('.elements'); // div
const cardContainer = container.querySelector('.elements__list'); // ul, в который добавляем
const cardTemplate = document.querySelector('#card-template'); // темплейт
const addCardButton = document.querySelector('.input-container__addbutton'); // кнока Создать в попапе

function createCard(elem) {
  const newCard = cardTemplate.content.querySelector('.element').cloneNode(true);
  const cardRemoveButton = newCard.querySelector('.element__delete-button');
  const likeButton = document.querySelector('.element__like-button');

  newCard.querySelector('.element__title').textContent = elem.name;
  newCard.querySelector('.element__image').src = elem.link;

  cardRemoveButton.addEventListener('click', function(event) {
    event.target.closest('.element').remove();
  });

  newCard.querySelector('.element__like-button').addEventListener('click', function (event) {
    event.target.classList.toggle('element__like-button_active');
  });

  return newCard;
}

initialCards.forEach(function (currentItem) {
  const addCard = createCard(currentItem);

  cardContainer.append(addCard);
})

// 1. Функции для редактирования профиля:
function openPopup(event) {
  event.preventDefault();
  popup.classList.add('popup_is-opened');

  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closePopup() {
  popup.classList.remove('popup_is-opened');
}

function formSubmitHandler(event) {
  event.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  popup.classList.remove('popup_is-opened');
}

// 2. Функции для редактирования фоток: открыть, закрыть, сохранить.
function openPopupCard(event) {
  event.preventDefault();
  popup_card.classList.add('popup_is-opened');
}

function closePopupCard() {
  popup_card.classList.remove('popup_is-opened');
}

/*function addPhotoSubmitHandler(event) {
  event.preventDefault();

  const title = placeInput.value;
  const photo = imageInput.value;

  const newCard = createCard(title, photo);

  elementsList.append(newCard);

  closePopupCard();

  placeInput.value = '';
  imageInput.value = '';
}

popup_card.addEventListener('submit', addPhotoSubmitHandler);
*/ // не работает

/*
// 3. Фнукции для попапа с фото большого размера: открыть, закрыть.
const popupImage = document.querySelector('.element__image');

function openPopupImage(event) {
  event.preventDefault();
  popup_photo.classList.add('popup_is-opened');
  popup_photo.classList.toggle('popup__content_image');
}

/*popupImage.addEventListener('click', openPopupImage);*/ // Пока закрыла!!!

// let placeName = document.querySelector('.element__title');
// let placeImage = document.querySelector('.element__image');

/*const createCardButton = document.querySelector('.input-container__addbutton');
//const input = document.querySelector('.input-container');
const cardContainer = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#card-template');

createCardButton.addEventListener('click', function() {
  const cardValue = input.value;
  const newCard = cardTemplate.content.querySelector('.element').cloneNode(true);

  const cardName = newCard.querySelector('.element__title');
  cardName.textContent = cardValue;

  cardContainer.append(newCard);
});
*/

// Добавление карты

/*function addCard(event, placeName, placeImage) {
  event.preventDefault();
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

  cardElement.querySelector('.element__title').textContent = placeName;
  cardElement.querySelector('.element__image').src = placeImage;

  elementsList.append(cardElement);
  popup_card.classList.add('popup_is-opened');
}*/
