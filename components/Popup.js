class Popup {
  constructor(popupSelector) {
    this.popupItem = document.querySelector(popupSelector);
    this._closeButtonIcon = this.popupItem.querySelector('.popup__close');
  }

  open() {
    this.popupItem.classList.add('popup_is-opened');
  }

  close() {
    this.popupItem.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', () => this._handleEscClose());
  }

  _handleOverlayClose(event) {
    if (event.target.classList.contains('popup')) {
      this.close();
    }
  }

  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.close();
    };
  }

  setEventListeners() {
    document.addEventListener('keydown', this._handleEscClose);
    this.popupItem.addEventListener('click', this._handleOverlayClose);
    this._closeButtonIcon.addEventListener('click', () => {
      this.close();
    });
  }
}

export { Popup };
