import './index.css';
import { formElement, popupCardForm, popupCardOpenButton, popupProfileOpenButton, nameInput, jobInput, config, profileIcon, changePhotoForm } from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { initialCards } from '../utils/initial-сards.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';

// Вы уверены?
/*const OpenButton = document.querySelector('.profile__image');
const deletePopup = document.querySelector('#popup_delete');

console.log(deletePopup);
console.log(OpenButton);

OpenButton.addEventListener('click', () => {
  deletePopup.classList.add('popup_is-opened')}
);*/


// Classes:

const api = new Api({
  //baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-42',
  headers: {
    //authorization: 'c56e30dc-2883-4270-a59e-b2f7bae969c6',
    //'Content-Type': 'application/json'
  }
});

const section = new Section({
  items: initialCards, // в новой функции здесь будет пустой массив
  renderer: (data) => {
    createCard(data);

    return createCard(data).render();
  }
}, config.containerSelector);

const popupAddCard = new PopupWithForm(config.popupCardSelector, (data) => {
  createCard(data);
  section.addItem(createCard(data).render());

  popupAddCard.close();
});

const popupEditProfile = new PopupWithForm(config.popupProfileSelector, () => {
  userInfo.setUserInfo({name: nameInput.value, job: jobInput.value});

  popupEditProfile.close();
});

const popupChangeUserPhoto = new PopupWithForm(config.popupUserPhotoSelector, () => {
  popupChangeUserPhoto.close();
});

const userInfo = new UserInfo({
  nameSelector: '.profile__user-name',
  jobSelector: '.profile__user-job',
})

const popupWithImage = new PopupWithImage(config.popupPhotoSelector);
const cardFormValidator = new FormValidator(config, popupCardForm);
const profileFormValidator = new FormValidator(config, formElement);
const changePhotoValidator = new FormValidator(config, changePhotoForm);

// Functions:
const createCard = (data) => {
  const card = new Card(data, config.templateSelector, handleCardClick);

  return card;
};

const handleCardClick = (title, link) => {
  popupWithImage.open(title, link);
};

section.renderInitialCards();
popupAddCard.setEventListeners();
popupEditProfile.setEventListeners();
popupWithImage.setEventListeners();
popupChangeUserPhoto.setEventListeners();
cardFormValidator.enableValidation();
profileFormValidator.enableValidation();
changePhotoValidator.enableValidation();


// Listeners:
popupCardOpenButton.addEventListener('click', () => {
  popupAddCard.open();

  cardFormValidator.toggleButtonState();
  cardFormValidator.removeFormErrors();
});

popupProfileOpenButton.addEventListener('click', () => {
  popupEditProfile.open();

  const data = userInfo.getUserInfo();
  nameInput.value = data.name;
  jobInput.value = data.job;

  profileFormValidator.removeFormErrors();
});

profileIcon.addEventListener('click', () => {
  popupChangeUserPhoto.open();

  changePhotoValidator.toggleButtonState();
  changePhotoValidator.removeFormErrors();
});


