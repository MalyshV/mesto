export const popupSelector = document.querySelector('.popup');

export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
    this._popup = document.querySelector(this._popupSelector);
  }

  open() {
    this._popup.classList.add('popup_is-opened');
    //document.addEventListener('keydown', () => this._handleEscClose());
  }

  close() {
    this._popup.classList.remove('popup_is-opened');
    //document.removeEventListener('keydown', () => this._handleEscClose());
  }

  _handleEscClose() {
    // переписываем логику на class Popup:
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        Popup.close();
      }
    })
  }

  setEventListeners() {
    // переписываем логику на class Popup:
    this._closeButton = this._popup.querySelector('.popup__close');

    this._closeButton.addEventListener('click', Popup._close());
  }
}
