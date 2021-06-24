import './index.css';
import { formElement, popupCardForm, popupCardOpenButton, popupProfileOpenButton, nameInput, jobInput, config, inputs, inputList } from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { initialCards } from '../utils/initial-сards.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { UserInfo } from '../components/UserInfo.js';


// Classes:
const section = new Section({
  items: initialCards,
  renderer: (data) => {
    const card = new Card(data, '#card-template');

    return card.render();
  }
}, '.elements__list');

const popupAddCard = new PopupWithForm('#popup_card', (data) => {
  const card = new Card(data, '#card-template');
  section.addItem(card.render());

  popupAddCard.close();
});

const popupEditProfile = new PopupWithForm('#popup', () => {
  userInfo.setUserInfo({name: nameInput.value, job: jobInput.value});

  popupEditProfile.close();
});

const userInfo = new UserInfo({
  nameSelector: '.profile__user-name',
  jobSelector:'.profile__user-job',
})

const popupWithImage = new PopupWithImage('#popup_photo');
const cardFormValidator = new FormValidator(config, popupCardForm);
const profileFormValidator = new FormValidator(config, formElement);


// Functions:
section.renderInitialCards();
popupAddCard.setEventListeners();
popupEditProfile.setEventListeners();
popupWithImage.setEventListeners();
cardFormValidator.enableValidation();
profileFormValidator.enableValidation();


// Listeners:
popupCardOpenButton.addEventListener('click', () => {
  popupAddCard.open();

  cardFormValidator.toggleButtonState();

  inputs.forEach((input) => {
    cardFormValidator.hideInputError(input);
  });
});

popupProfileOpenButton.addEventListener('click', () => {
  popupEditProfile.open();

  const data = userInfo.getUserInfo();
  nameInput.value = data.name;
  jobInput.value = data.job;

  inputList.forEach((input) => {
    profileFormValidator.hideInputError(input);
  });
});


export { popupWithImage }; // удалить, когда поправлю класс Card - открытие картинки
