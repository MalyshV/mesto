class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;;;
    this._containerSelector = containerSelector;
    this._element = document.querySelector(containerSelector);
  }

  addItem(domElement) {
    this._element.prepend(domElement);
  };

  renderInitialCards() {
    this._items.forEach(data => {
      this._element.append(this._renderer(data));
    });
  }
}

export { Section };
