export class PopupWithForm extends Popup {
  constructor({popupSelector, handleFormSubmit}) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.form');
    this._inputList = this._form.querySelectorAll('.input-container__item');
  }

  // ниже код для индекса
  /* const popupAdd = new PopupWithForm({
    popupSelector: popupPlace,
    handleFormSubmit: () => {
      // предотвращаем стандартное поведение формы при submit и описываем логику передачи данных в зависимости от формы
    }
  })*/

  _getInputValues = () => {

  }

  setEventListeners() {

  }

  close() {
    super.close();
  }
}

// Для каждого попапа создавайте свой экземпляр класса PopupWithForm
