export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(photo, title) {
    const photoPopup = document.querySelector('.popup__image');
    const titlePopup = document.querySelector('.popup__text');

    super.open();

    photoPopup.src = photo;
    photoPopup.alt = photo;
    titlePopup.textContent = title;
  }
}
