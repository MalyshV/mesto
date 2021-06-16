export default class Section {
  constructor({items, renderer}, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
    // this._targetPlace = document.querySelector(targetPlaceSelector); - вместо пред.строки
  }

  // + задавать функцию как обработчик событий внутри класса

  // отрисовка всех элементов с помощью функции renderer;

  addItem() {

  };

  // получает разметку через функцию-колбэк и вставляет её в контейнер
}
