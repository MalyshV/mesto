import { Popup } from './Popup.js';

class PopupWithForm extends Popup {
  constructor(popupSelector, callBackSubmit) {
    super(popupSelector);
    this._callBackSubmit = callBackSubmit;
    this._formItem = this._popupItem.querySelector('.form');
    this._submitButton = this._popupItem.querySelector('.input-container__button');
  }

  _getInputValues() {
    const inputList = Array.from(this._formItem.querySelectorAll('.input-container__item'));
    const inputValues = {};

    inputList.forEach(item => {
      inputValues[item.name] = item.value;
    });

    return inputValues;
  }

  /*_changeAvatar() {
    const avatarLink = this._formItem.querySelector('.input-container__item');
    const userPhoto = document.querySelector('.profile__image');

    userPhoto.src =  avatarLink.value; // вставляет, но не то
  }*/

  setEventListeners() {
    super.setEventListeners();
    this._formItem.addEventListener('submit', (event) => {
      event.preventDefault();

      const data = this._getInputValues();
      this._callBackSubmit(data);
      //this._changeAvatar();
    });
  }

  renderLoading(isLoading) {
    if(isLoading) {
      this._submitButton.textContent = 'Сохранение...';
    } else {
      this._submitButton.textContent = 'Сохранить';
    }
  }

  close() {
    super.close();
    this._formItem.reset();
  }
}

export { PopupWithForm };
