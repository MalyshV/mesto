import './index.css';
import { formElement, popupCardForm, popupCardOpenButton, popupProfileOpenButton, nameInput, jobInput, config, changePhotoForm, profileName, profileJob, profileIcon } from '../utils/constants.js';
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

let section;

//рендер дефолтных карточек
api.getInitialCards()
  .then((data) => {
    section = new Section({
      items: data,
      renderer: (item) => {
        addNewCard(item);
      }
    }, config.containerSelector)
    section.renderInitialCards();
  })
  .catch((error) => {
    console.log(error);
  })

let userId = null;

api.getUserInfo()
  .then((data) => {
    console.log(data);
    profileName.textContent = data.name;
    profileJob.textContent = data.about;
    profileIcon.src = data.avatar;
  })

const popupAddCard = new PopupWithForm(config.popupCardSelector, (data) => {
  addNewCard(data);
  popupAddCard.renderLoading(true);

  //.finally() {
    // popupAddCard.renderLoading(true);;
  //}

  popupAddCard.close();
});

const popupEditProfile = new PopupWithForm(config.popupProfileSelector, () => {
  popupEditProfile.renderLoading(true);
  api.setUserInfo({name: nameInput.value, about: jobInput.value}) // test
   .then((data) => {
     userInfo.setUserInfo(data);
   })
   .catch((error) => {
     console.log(error);
   })
   .finally(() => {
    popupEditProfile.renderLoading(false);
  })

  popupEditProfile.close();
});

const popupChangeUserPhoto = new PopupWithForm(config.popupUserPhotoSelector, (info) => {
  popupChangeUserPhoto.renderLoading(true);
  api.setUserAvatar(info.link)
    .then((data) => {
      userInfo.setUserAvatar(data);
    })
    .then(() => {
      popupChangeUserPhoto.close();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      popupChangeUserPhoto.renderLoading(false);
   })
});

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
// рендер карточки
const createCard = (data) => {
  const card = new Card(data, config.templateSelector, handleCardClick);

  const cardItem = card.createCard();
  return cardItem;
};

function addNewCard(item){
  const cardItem = createCard(item);
        section.addItem(cardItem);
}

const handleCardClick = (title, link) => {
  popupWithImage.open(title, link);
};

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
  jobInput.value = data.about;

  profileFormValidator.removeFormErrors();
});

profileIcon.addEventListener('click', () => {
  popupChangeUserPhoto.open();

  changePhotoValidator.toggleButtonState();
  changePhotoValidator.removeFormErrors();
});
