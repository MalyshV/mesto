class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._containerSelector = containerSelector;
    this._element = document.querySelector(containerSelector);
  }

  addItem(domElement) {
    this._element.prepend(domElement);
  }

  renderInitialCards(items) {
    items.forEach(item => this._renderer(item));
  }
}

export { Section };
