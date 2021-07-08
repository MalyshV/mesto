import { Popup } from './Popup.js';

class PopupWithSubmit extends Popup {
  constructor(popupSelector, callBackSubmit) {
    super(popupSelector, callBackSubmit);
    // хендлер удаления карточки??
    this._submitRemoveButton = this._popupItem.querySelector('.input-container__button_type_delete');
    console.log(this._submitRemoveButton);
  }

  setEventListeners() {
    this._popupItem.addEventListener('submit', (event) => {
      event.preventDefault();
      this._submitRemoveButton.addEventListener('click', () => {
        console.log('Click');
      });
    })

    super.setEventListeners();
  }
}

export { PopupWithSubmit };
