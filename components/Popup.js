class Popup {
  constructor(popupSelector) {
    this.popupItem = document.querySelector(popupSelector);
  }

  open() {
    this.popupItem.classList.add('popup_is-opened');
    //document.addEventListener('keydown', () => this._handleEscClose());
  }

  close() {
    this.popupItem.classList.remove('popup_is-opened');
    //document.removeEventListener('keydown', () => this._handleEscClose());
  }

  _handleEscClose() {
    // переписываем логику на class Popup:
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this.close();
        // или this.close();
      }
    })
  }

  setEventListeners() {
    // переписываем логику на class Popup:
    /*this._closeButton = this._popup.querySelector('.popup__close');

    this._closeButton.addEventListener('click', Popup._close());*/
  }
}

export { Popup };
