const openPopupButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('#popup');
const popup_card = document.querySelector('#popup_card');
const closePopupButton = document.querySelector('.popup__close');
const formElement = document.querySelector('[name="profile-form"]');
const openPopupCardButton = document.querySelector('.profile__add-button');
const closePopupCardButton = document.querySelector('#button');
const cardTemplate = document.querySelector('#card-template');
const placeInput = document.querySelector('[name="name"]');
const imageInput = document.querySelector('[name="link"]');
const container = document.querySelector('.elements');
const cardContainer = container.querySelector('.elements__list');
const addCardButton = document.querySelector('.input-container__addbutton');
let nameInput = document.querySelector('[name="user-name"]');
let jobInput = document.querySelector('[name="user-job"]');
let profileName = document.querySelector('.profile__user-name');
let profileJob = document.querySelector('.profile__user-job');

openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
closePopupCardButton.addEventListener('click', closePopupCard);
formElement.addEventListener('submit', handleFormSubmit);
openPopupCardButton.addEventListener('click', openPopupCard);
popup_card.addEventListener('submit', handleCardFormSubmit);

const popup_image = document.querySelector('#popup_photo');
const imageAsButton = document.querySelectorAll('.element__image');

function openPhotoPopup (event) {
  event.preventDefault ();

  createCard();

  popup_image.classList.add('popup_is-opened');
}

function closePhotoPopup() {
  popup_image.classList.remove('popup_is-opened');
}


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

// Создание и вывод карточек на страницу:
function createCard(title, link) {
  const newCard = cardTemplate.content.querySelector('.element').cloneNode(true);
  const cardRemoveButton = newCard.querySelector('.element__delete-button');

    const photo = newCard.querySelector('.element__image');
    photo.addEventListener('click', function () {
      console.log('Test'); // нажимается
    });

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
  /*const addCard = createCard(currentItem.name, currentItem.link); - переписала в 1 строчку*/
  cardContainer.append(createCard(currentItem.name, currentItem.link));
});

// Редактирования профиля
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

// Редактирование карточек
function openPopupCard(event) {
  event.preventDefault();
  popup_card.classList.add('popup_is-opened');
}

function closePopupCard() {
  popup_card.classList.remove('popup_is-opened');
}

function handleCardFormSubmit(event) {
  event.preventDefault();

  const title = placeInput.value;
  const link = imageInput.value;

  /*const addCard = createCard(title, link); - вместо этого записала в 1 строку*/
  cardContainer.prepend(createCard(title, link));

  placeInput.value = '';
  imageInput.value = '';

  closePopupCard();
};

/*function openLargCard() {
  createCard(title, link)

const photo = newCard.querySelector('.element__image');

  photo.addEventListener('click', function () {
    console.log('Test');
  });
};*/
