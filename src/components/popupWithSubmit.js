import { Popup } from './Popup.js';

class PopupWithSubmit extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._submitButton = this._popupItem.querySelector('.input-container__button');
  }

  setOnSubmit(newHandler) {
    this._handleRemoveClick = newHandler;
  }

  setEventListeners() {
    this._submitButton.addEventListener('click', () => {
      this._handleRemoveClick();
    });

    super.setEventListeners();
  }
}

export { PopupWithSubmit };
