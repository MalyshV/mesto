import './index.css';
import { formElement, popupCardForm, popupCardOpenButton, popupProfileOpenButton, nameInput, jobInput, config, changePhotoForm, profileName, profileJob, profileIcon, avatarInput } from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithSubmit } from '../components/popupWithSubmit.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';


// Classes:

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-25/',
  headers: {
    authorization: '61426457-aa06-4805-b055-d8aeddd40fb8',
    'Content-Type': 'application/json'
  }
});

let userId = null;
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

api.getUserInfo(userInfo => {
  userId = userInfo._id;
})
  .then((data) => {
    console.log(data);
    profileName.textContent = data.name;
    profileJob.textContent = data.about;
    profileIcon.src = data.avatar;
  })

  const popupAddCard = new PopupWithForm(config.popupCardSelector, (data) => {
    popupAddCard.renderLoading(true);
    addNewCard(data);
      //.finally(() => {
        //popupAddCard.renderLoading(false);
      //})

    popupAddCard.close();
  });

const popupEditProfile = new PopupWithForm(config.popupProfileSelector, () => {
  popupEditProfile.renderLoading(true);
  api.setUserInfo({name: nameInput.value, about: jobInput.value})
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

const popupChangeUserPhoto = new PopupWithForm(config.popupUserPhotoSelector, () => {
  popupChangeUserPhoto.renderLoading(true);
  api.setUserAvatar({link: avatarInput.value})
    .then((data) => {
      userInfo.setUserAvatar(data);
      popupChangeUserPhoto.close();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      popupChangeUserPhoto.renderLoading(false);
   })
});

const popupDelete = new PopupWithSubmit(config.popupDeleteSelector, () => {
  const cardId = popupDelete.cardObject._cardId;
  api.popupDelete(cardId)
    .then(() => {
      popupDelete.cardObject.removeCard();
      popupDelete.close();
      popupDelete.cardObject = '';
    })
})

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
const createCard = (cardData) => {
  const card = new Card({
    cardData: { ...cardData, userId},
    handleCardClick: (title, link) => {
      popupWithImage.open(title, link);
    },
    handleRemoveClick: (data) => {
      popupDelete.data = data;
      popupDelete.open();
    },
    // handleLikeClick:
  }, config.templateSelector);

  const cardItem = card.createCard();
  return cardItem;
};

function addNewCard(item){
  const cardItem = createCard(item);
        section.addItem(cardItem);
}

popupAddCard.setEventListeners();
popupEditProfile.setEventListeners();
popupWithImage.setEventListeners();
popupChangeUserPhoto.setEventListeners();
popupDelete.setEventListeners();
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

const OpenButton = document.querySelector('.header__logo');

OpenButton.addEventListener('click', () => {
  popupDelete.open();
});
