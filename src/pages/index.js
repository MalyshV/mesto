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
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-25/',
  headers: {
    authorization: '61426457-aa06-4805-b055-d8aeddd40fb8',
    'Content-Type': 'application/json'
  }
});

/*const getUserInfo = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-25',
  headers: {
    authorization: '61426457-aa06-4805-b055-d8aeddd40fb8',
    'Content-Type': 'application/json'
  }
}*/

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
  api.setUserInfo({name: nameInput.value, about: jobInput.value}) // test
   .then((data) => {
     userInfo.setUserInfo(data);
   })

  popupEditProfile.close();
});

const popupChangeUserPhoto = new PopupWithForm(config.popupUserPhotoSelector, (data) => {
  handleAvatarFormSubmit(data);

  popupChangeUserPhoto.close();
});

function handleAvatarFormSubmit(data) {
  api.setUserAvatar(data)
    /*.then((data) => {
      userInfo.setUserInfo(data);

      //popupChangeUserPhoto.close();
    })*/
}

const userInfo = new UserInfo({
  nameSelector: '.profile__user-name',
  aboutSelector: '.profile__user-job',
  avatarSelector: '.profile__image',
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

/*api.getUserInfo()
  .then((data) => {
    userInfo.getUserInfo(data)
  });*/
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

  /*api.getUserInfo() // пока не работает, поправить
  .then((data) => {
    userInfo.getUserInfo(data)
    nameInput.value = data.name;
    jobInput.value = data.about;
  });*/

  const data = userInfo.getUserInfo();
  nameInput.value = data.name;
  jobInput.value = data.about;

  profileFormValidator.removeFormErrors();
});

profileIcon.addEventListener('click', () => {
  popupChangeUserPhoto.open();

  changePhotoValidator.toggleButtonState();
  changePhotoValidator.removeFormErrors();
});


