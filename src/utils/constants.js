export const popupCardForm = document.querySelector('[name="card-form"]');
export const popupCardOpenButton = document.querySelector('.profile__add-button');
export const popupProfileOpenButton = document.querySelector('.profile__edit-button');
export const formElement = document.querySelector('[name="profile-form"]');
export const nameInput = document.querySelector('[name="user-name"]');
export const jobInput = document.querySelector('[name="user-job"]');
export const profileName = document.querySelector('.profile__user-name');
export const profileJob = document.querySelector('.profile__user-job');
export const bigPhoto = document.querySelector('.popup__image');
export const bigPhotoTitle = document.querySelector('.popup__text');
const popupCard = document.querySelector('#popup_card');
const popupProfile = document.querySelector('#popup');
export const inputs = Array.from(popupCard.querySelectorAll('.input-container__item'));
export const inputList = Array.from(popupProfile.querySelectorAll('.input-container__item'));

export const config = {
  formSelector: '.form',
  inputSelector: '.input-container__item',
  submitButtonSelector: '.input-container__button',
  inputErrorClass: 'input-container__item_type_error',
  errorActiveClass: 'input-container__input-error_active',
  containerSelector: '.elements__list',
};
