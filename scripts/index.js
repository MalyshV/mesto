const openPopupButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('#popup');
const popup_card = document.querySelector('#popup_card');
const popup_photo = document.querySelector('#popup_photo');
const closePopupButton = document.querySelector('.popup__close');
const formElement = document.querySelector('[name="profile-form"]');
const openPopupCardButton = document.querySelector('.profile__add-button');
const closePopupCardButton = document.querySelector('#button');
const placeInput = document.querySelector('[name="name"]'); // название из инпута
const imageInput = document.querySelector('[name="link"]'); // ссылка из инпута
const placeTitle = document.querySelector('.element__title'); // название из темплейта
const placeImage = document.querySelector('.element__image'); // ссылка из темплейта
let nameInput = document.querySelector('[name="user-name"]');
let jobInput = document.querySelector('[name="user-job"]');
let profileName = document.querySelector('.profile__user-name');
let profileJob = document.querySelector('.profile__user-job');
const createCardButton = document.querySelector('.input-container__addbutton');

/*createCardButton.addEventListener('click', function() {
  const cardValue = input.value;
  const newCard = cardTemplate.content.querySelector('.element').cloneNode(true);

  const cardName = newCard.querySelector('.element__title');
  cardName.textContent = cardValue;

  cardContainer.append(newCard);
});*/

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
const addCardButton = document.querySelector('.input-container__addbutton'); // кнока в попапе

function createCard(title, link) {
  const newCard = cardTemplate.content.querySelector('.element').cloneNode(true);
  const cardRemoveButton = newCard.querySelector('.element__delete-button');

  newCard.querySelector('.element__title').textContent = title;
  newCard.querySelector('.element__image').src = link;
  newCard.querySelector('.element__like-button').addEventListener('click', function (event) {
    event.target.classList.toggle('element__like-button_active');
  });

  cardRemoveButton.addEventListener('click', function(event) {
    event.target.closest('.element').remove();
  });

  return newCard;
}

initialCards.forEach(function (currentItem) {
  const addCard = createCard(currentItem.name, currentItem.link);

  cardContainer.append(addCard);
});

// Не работает пока !!!

function handleCardFormSubmit(event) {
  event.preventDefault();

  const addCard = createCard(title, link);

  title = placeInput.Value;
  link = imageInput.Value;

  cardContainer.prepend(addCard);

  closePopupCard();

  placeInput.value = '';
  imageInput.value = '';
}

popup_card.addEventListener('submit', handleCardFormSubmit);

// Редактирование попапа с карточкой:
function openPopupCard(event) {
  event.preventDefault();
  popup_card.classList.add('popup_is-opened');
}

function closePopupCard() {
  popup_card.classList.remove('popup_is-opened');
}

// Редактирования профиля:
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

// 3. Фнукции для попапа с фото большого размера: открыть, закрыть.
/*const popupImage = document.querySelector('.element__image');

function openPopupImage(event) {
  event.preventDefault();
  popup_photo.classList.add('popup_is-opened');

  // картинка = картинке
  // подпись = подпись
  popup_photo.classList.toggle('popup__content_image');
}

popupImage.addEventListener('click', openPopupImage);*/

// let placeName = document.querySelector('.element__title');
// let placeImage = document.querySelector('.element__image');

/*const createCardButton = document.querySelector('.input-container__addbutton');
//const input = document.querySelector('.input-container');
const cardContainer = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#card-template');*/


