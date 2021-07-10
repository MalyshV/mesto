import { Popup } from './Popup.js';

class PopupWithSubmit extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._submitButton = this._popupItem.querySelector('.input-container__button');
  }

  setOnSubmit(submit) {
    this._handleRemoveClick = submit;
  }

  setEventListeners() {
    this._submitButton.addEventListener('click', () => {
      this._handleRemoveClick();
    });
    this._popupItem.addEventListener('submit', (event) => {
      event.preventDefault();
      this.setOnSubmit(action);
    });

    super.setEventListeners();
  }
}

export { PopupWithSubmit };
