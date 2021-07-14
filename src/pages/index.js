import './index.css';
import { formElement, popupCardForm, popupCardOpenButton, popupProfileOpenButton, nameInput, jobInput, config, changePhotoForm, profileIcon } from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithSubmit } from '../components/PopupWithSubmit.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';

let myUserId;


// Classes:
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-25/',
  headers: {
    authorization: '61426457-aa06-4805-b055-d8aeddd40fb8',
    'Content-Type': 'application/json'
  }
});

const section = new Section({
  renderer: (item) => {
    addCart(item);
  }
}, config.containerSelector);

const userInfo = new UserInfo({
  nameSelector: '.profile__user-name',
  aboutSelector: '.profile__user-job',
  avatarSelector: '.profile__image',
});

const popupAddCard = new PopupWithForm(config.popupCardSelector, (data) => {
  popupAddCard.renderLoading(true);
  api.addNewCard(data)
    .then((cardData) => {
      addCart(cardData);
      popupAddCard.close();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      popupAddCard.renderLoading(false);
    })
});

const popupEditProfile = new PopupWithForm(config.popupProfileSelector, (data) => {
  popupEditProfile.renderLoading(true);
  api.setUserInfo(data)
   .then((data) => {
     userInfo.setUserInfo(data);
     popupEditProfile.close();
   })
   .catch((error) => {
     console.log(error);
   })
   .finally(() => {
    popupEditProfile.renderLoading(false);
  })
});

const popupChangeUserPhoto = new PopupWithForm(config.popupUserPhotoSelector, (data) => {
  popupChangeUserPhoto.renderLoading(true);
  api.setUserAvatar(data)
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

const popupDelete = new PopupWithSubmit(config.popupDeleteSelector);
const popupWithImage = new PopupWithImage(config.popupPhotoSelector);
const cardFormValidator = new FormValidator(config, popupCardForm);
const profileFormValidator = new FormValidator(config, formElement);
const changePhotoValidator = new FormValidator(config, changePhotoForm);


// Functions:
api.loadData()
  .then(([userData, cardsData]) => {
    userInfo.setUserInfo(userData);

    myUserId = userData._id;

    section.renderInitialCards(cardsData);
  })
  .catch((error) => {
    console.log(error);
  });

const createCard = (cardData) => {
  const card = new Card({
    cardData: { ...cardData, myUserId },
    handleCardClick: (title, link) => {
      popupWithImage.open(title, link);
    },
    handleRemoveClick: (cardId) => {
      popupDelete.open();
      popupDelete.setOnSubmit(() => {
        api.removeCard(cardId)
          .then(() => {
            popupDelete.close();
            return cardItem.remove();
          })
          .catch((error) => {
            console.log(error);
          })
      })
    },
    likeCard: (cardId) => {
      api.setlike(cardId)
        .then((data) => {
          return data.likes.length;
        })
        .then((data) => {
          card.showAllLikes(data);
        })
        .catch((error) => {
          console.log(error);
        })
    },
    unLikeCard: (cardId) => {
      api.removeLike(cardId)
        .then((data) => {
          return data.likes.length;
        })
        .then((data) => {
          card.showAllLikes(data);
        })
        .catch((error) => {
          console.log(error);
        })
    }}, config.templateSelector);

  const cardItem = card.createCard();
  return cardItem;
};

function addCart(item) {
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
