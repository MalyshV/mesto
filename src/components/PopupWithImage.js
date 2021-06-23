import { Popup } from './Popup.js';

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._popupTitle = this.popupItem.querySelector('.popup__text');
    this._popupLink = this.popupItem.querySelector('.popup__image');
  }

  open(link, title) {
    super.open();

    this._popupLink.src = link;
    this._popupLink.alt = link;
    this._popupTitle.textContent = title;
  }

  setEventListeners() {
    super.setEventListeners();
  }
}

export { PopupWithImage };
