import './index.css';
import { formElement, popupCardForm, popupCardOpenButton, popupProfileOpenButton, submitButton, nameInput, jobInput, config, popupCard, popupProfile } from '../utils/constants.js';
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

const cardPopup = new PopupWithForm('#popup_card', (data) => {
  const card = new Card(data, '#card-template');
  section.addItem(card.render(), '#card-template');

  cardPopup.close();
});

const profilePopup = new PopupWithForm('#popup', () => {
  userInfo.setUserInfo({name: nameInput.value, job: jobInput.value});

  profilePopup.close();
});

const userInfo = new UserInfo({
  name: '.profile__user-name',
  job:'.profile__user-job',
})

const popupWithImage = new PopupWithImage('#popup_photo');
const cardFormValidator = new FormValidator(config, popupCardForm);
const profileFormValidator = new FormValidator(config, formElement);


// Functions:
section.renderInitialCards();
cardPopup.setEventListeners();
profilePopup.setEventListeners();
popupWithImage.setEventListeners();
cardFormValidator.enableValidation();
profileFormValidator.enableValidation();


// Listeners:
popupCardOpenButton.addEventListener('click', () => {
  cardPopup.open();

  cardFormValidator.toggleButtonState();

  const inputs = Array.from(popupCard.querySelectorAll('.input-container__item'));
  inputs.forEach((input) => {
    cardFormValidator.hideInputError(input);
  });
});

popupProfileOpenButton.addEventListener('click', () => {
  profilePopup.open();

  const data = userInfo.getUserInfo();
  nameInput.value = data.name;
  jobInput.value = data.job;

  submitButton.disabled = true;

  const inputList = Array.from(popupProfile.querySelectorAll('.input-container__item'));
  inputList.forEach((input) => {
    profileFormValidator.hideInputError(input);
  });
});


export { popupWithImage };
