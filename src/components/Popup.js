class Popup {
  constructor(popupSelector) {
    this._popupItem = document.querySelector(popupSelector);
    this._closeButtonIcon = this._popupItem.querySelector('.popup__close');
  }

  open() {
    this._popupItem.classList.add('popup_is-opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popupItem.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleOverlayClose = event => {
    if (event.target.classList.contains('popup')) {
      this.close();
    };
  }

  _handleEscClose = event => {
    if (event.key === 'Escape') {
      this.close();
    };
  }

  setEventListeners() {
    this._popupItem.addEventListener('click', this._handleOverlayClose);
    this._closeButtonIcon.addEventListener('click', () => {
      this.close();
    });
  }
}

export { Popup };
