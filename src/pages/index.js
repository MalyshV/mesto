import './index.css';
import { formElement, popupCardForm, popupCardOpenButton, popupProfileOpenButton, nameInput, jobInput, config } from '../utils/constants.js';
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

const userInfo = new UserInfo({
  nameSelector: '.profile__user-name',
  jobSelector:'.profile__user-job',
})

const popupWithImage = new PopupWithImage(config.popupPhotoSelector);
const cardFormValidator = new FormValidator(config, popupCardForm);
const profileFormValidator = new FormValidator(config, formElement);


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
cardFormValidator.enableValidation();
profileFormValidator.enableValidation();


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
