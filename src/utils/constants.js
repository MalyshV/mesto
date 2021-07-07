export const popupCardForm = document.querySelector('[name="card-form"]');
export const popupCardOpenButton = document.querySelector('.profile__add-button');
export const popupProfileOpenButton = document.querySelector('.profile__edit-button');
export const formElement = document.querySelector('[name="profile-form"]');
export const changePhotoForm = document.querySelector('[name="userPhotoform"]');
export const nameInput = document.querySelector('[name="user-name"]');
export const jobInput = document.querySelector('[name="user-job"]');
export const profileName = document.querySelector('.profile__user-name');
export const profileJob = document.querySelector('.profile__user-job');
export const profileIcon = document.querySelector('.profile__image');
export const submitButton = document.querySelector('.input-container__button');

export const config = {
  formSelector: '.form',
  inputSelector: '.input-container__item',
  submitButtonSelector: '.input-container__button',
  inputErrorClass: 'input-container__item_type_error',
  errorActiveClass: 'input-container__input-error_active',
  containerSelector: '.elements__list',
  templateSelector: '#card-template',
  popupCardSelector: '#popup_card',
  popupProfileSelector: '#popup',
  popupPhotoSelector: '#popup_photo',
  popupDeleteSelector: '#popup_delete',
  popupUserPhotoSelector: '#popup_profile_photo',
};
