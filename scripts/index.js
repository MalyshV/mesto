const openPopupButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('#popup');
const popup_card = document.querySelector('#popup_card');
const closePopupButton = document.querySelector('.popup__close');
const formElement = document.querySelector('[name="profile-form"]');
const openPopupCardButton = document.querySelector('.profile__add-button');
const closePopupCardButton = document.querySelector('#button');
const addNewCardButton = document.querySelector('.input-container__addbutton');
let nameInput = document.querySelector('[name="user-name"]');
let jobInput = document.querySelector('[name="user-job"]');
let profileName = document.querySelector('.profile__user-name');
let profileJob = document.querySelector('.profile__user-job');
let placeInput = document.querySelector('[name="name"]');
let imageInput = document.querySelector('[name="link"]');
let placeName = document.querySelector('.element__title');
let placeImage = document.querySelector('.element__image');

openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
closePopupCardButton.addEventListener('click', closePopupCard);
formElement.addEventListener('submit', formSubmitHandler);
openPopupCardButton.addEventListener('click', openPopupCard);
addNewCardButton.addEventListener('click', addNewCard);

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

function addNewCard(event) {
  event.preventDefault();

  placeName.textContent = placeInput.value;
  placeImage.textContent = imageInput.value;

  popup_card.classList.remove('popup_is-opened');
}

// удаление карточки:

const cardRemoveButton = document.querySelector('.element__delete-button');

cardRemoveButton.addEventListener('click', function(e) {
  e.target.closest('.element').remove();
});

/* лайк карточки: - ДОРАБОТАТЬ

const likeButton = document.querySelector('.element__like-button');

function likeCard(event) {
  event.target.classList.toggle('.element__like-button_active');
}

likeButton.addEventListener('click', likeCard)*/
