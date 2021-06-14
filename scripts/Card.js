import { bigPhoto, bigPhotoTitle } from '../utils/constants.js';
import { openPopup, popupPhoto } from '../pages/index.js';

class Card {
  constructor (title, link, templateSelector){
    this._title = title;
    this._link = link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardTemplate = document.querySelector(this._templateSelector);
    this._newCard = cardTemplate.content.querySelector('.element').cloneNode(true);
  }

  _createCard() {
    this._getTemplate();

    this._cardRemoveButton = this._newCard.querySelector('.element__delete-button');
    this._cardLikeButton = this._newCard.querySelector('.element__like-button');
    this._photo = this._newCard.querySelector('.element__image');

    this._newCard.querySelector('.element__title').textContent = this._title;
    this._photo.src = this._link;
    this._photo.alt = this._title;
  }

  _setEventListeners() {
    this._photo.addEventListener('click', () => this._handleOpenPhotoClick());
    this._cardRemoveButton.addEventListener('click', (event) => this._handleRemoveClick(event));
    this._cardLikeButton.addEventListener('click', (event) => this._handleLikeClick(event));
  }

  _handleLikeClick() {
    this._cardLikeButton.classList.toggle('element__like-button_active');
  }

  _handleRemoveClick() {
    this._newCard.closest('.element').remove();
  }

  _handleOpenPhotoClick() {
    openPopup(popupPhoto);
    bigPhoto.src = this._link;
    bigPhotoTitle.textContent = this._title;
    bigPhoto.alt = this._title
  }

  render() {
    this._createCard();
    this._setEventListeners();

    return this._newCard;
  }
}

export { Card };
