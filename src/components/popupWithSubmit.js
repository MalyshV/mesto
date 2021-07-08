import { Popup } from './Popup.js';

class PopupWithSubmit extends Popup { // не идет, переделать
    setOnSubmit(action) {
      this._handleRemoveClick = action;
    }
    // хендлер удаления карточки??

    //this._submitButton = this._popupItem.querySelector('.input-container__button');

  setEventListeners() {
    this._popupItem.addEventListener('submit', (event) => {
      event.preventDefault();
      this._handleRemoveClick();
    });

    super.setEventListeners();
  }
}

export { PopupWithSubmit };
