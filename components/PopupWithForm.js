import { Popup } from './Popup.js';

class PopupWithForm extends Popup {
  constructor(popupSelector, callBackSubmit) {
    super(popupSelector);
    this._callBackSubmit = callBackSubmit;
    this._formItem = this.popupItem.querySelector('.form');
    this._inputList = this._formItem.querySelectorAll('.input-container__item');
    this._placeInput = this._formItem.querySelector('[name="name"]');
    this._imageInput = this._formItem.querySelector('[name="link"]');
  }

  // ниже код для индекса
  /* const popupAdd = new PopupWithForm({
    popupSelector: popupPlace,
    handleFormSubmit: () => {
      // предотвращаем стандартное поведение формы при submit и описываем логику передачи данных в зависимости от формы
    }
  })*/

  _getInputValues = () => {
    const inputList = Array.from(this._formItem.querySelectorAll('.input-container__item'));
    const object = {};

    inputList.forEach(item => {
      object[item.name] = item.value;
    });

    return object;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formItem.addEventListener('submit', (event) => {
      event.preventDefault();

      const data = this._getInputValues();
      this._callBackSubmit(data);
    })
  }

  /*close() {
    super.close();
  }*/
}

export { PopupWithForm };
