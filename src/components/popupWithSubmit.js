import { Popup } from './Popup.js';

class PopupWithSubmit extends Popup {
  constructor(popupSelector, callBackSubmit) {
    super(popupSelector);
    this._callBackSubmit = callBackSubmit;
  }

  setEventListeners() {
    this._popupItem.addEventListener('submit', (event) => {
      event.preventDefault();
      this._callBackSubmit;
    })

    super.setEventListeners();
  }
}

export { PopupWithSubmit };
