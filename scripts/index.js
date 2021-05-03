const openPopupButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('#popup');
const popup_card = document.querySelector('#popup_card');
const closePopupButton = document.querySelector('.popup__close');
const formElement = document.querySelector('[name="profile-form"]');
const openPopupCardButton = document.querySelector('.profile__add-button');
const closePopupCardButton = document.querySelector('#button');
const addCardButton = document.querySelector('.input-container__addbutton');
const elementsList = document.querySelector('.elements__list');
let nameInput = document.querySelector('[name="user-name"]');
let jobInput = document.querySelector('[name="user-job"]');
let profileName = document.querySelector('.profile__user-name');
let profileJob = document.querySelector('.profile__user-job');
// let placeInput = document.querySelector('[name="name"]');
// let imageInput = document.querySelector('[name="link"]');
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


openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
closePopupCardButton.addEventListener('click', closePopupCard);
formElement.addEventListener('submit', formSubmitHandler);
openPopupCardButton.addEventListener('click', openPopupCard);
//addCardButton.addEventListener('click', addCard);


function openPopup(event) {
  event.preventDefault();
  popup.classList.add('popup_is-opened');

  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closePopup(event) {
  event.preventDefault();
  popup.classList.remove('popup_is-opened');
}

function formSubmitHandler(event) {
  event.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  popup.classList.remove('popup_is-opened');
}

function openPopupCard(event) {
  event.preventDefault();
  popup_card.classList.add('popup_is-opened');
}

function closePopupCard(event) {
  event.preventDefault();
  popup_card.classList.remove('popup_is-opened');
}

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

// удаление карточки:

const cardRemoveButton = document.querySelector('.element__delete-button');

cardRemoveButton.addEventListener('click', function(e) {
  e.target.closest('.element').remove();
});

/* лайк карточки: - ДОРАБОТАТЬ

Урок 8: объект event: Внутри функции addsong

 songElement.querySelector('.song__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('song__like_active');
  });

const likeButton = document.querySelector('.element__like-button');

function likeCard(event) {
  event.target.classList.toggle('element__like-button_active');
}

likeButton.addEventListener('click', likeCard);*/

// Вывод карточек на страницу

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

const initialCardsList = document.querySelector('.elements__list');
const initialCardTemplate = document.querySelector('#card-template').content;

initialCards.forEach(function (element) {
  const initialCardElement = initialCardTemplate.cloneNode(true);

  initialCardElement.querySelector('.element__title').textContent = element.name;

  initialCardElement.querySelector('.element__image').src = element.link;

  initialCardsList.append(initialCardElement)
});


