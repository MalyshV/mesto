import { Popup } from './Popup.js';

class PopupWithSubmit extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._submitButton = this._popupItem.querySelector('.input-container__button');
  }

  setOnSubmit(event) {
    this._handleRemoveClick = event;
  }

  setEventListeners() {
    this._submitButton.addEventListener('click', () => {
      this._handleRemoveClick();
    });
    this._popupItem.addEventListener('submit', (event) => {
      event.preventDefault();
      this.setOnSubmit(event);
    });

    super.setEventListeners();
  }
}

export { PopupWithSubmit };
