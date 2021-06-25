import { Popup } from './Popup.js';

class PopupWithForm extends Popup {
  constructor(popupSelector, callBackSubmit) {
    super(popupSelector);
    this._callBackSubmit = callBackSubmit;
    this._formItem = this._popupItem.querySelector('.form');
  }

  _getInputValues() {
    const inputList = Array.from(this._formItem.querySelectorAll('.input-container__item'));
    const inputValues = {};

    inputList.forEach(item => {
      inputValues[item.name] = item.value;
    });

    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formItem.addEventListener('submit', (event) => {
      event.preventDefault();

      const data = this._getInputValues();
      this._callBackSubmit(data);
    });
  }

  close() {
    super.close();
    this._formItem.reset();
  }
}

export { PopupWithForm };