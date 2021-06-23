class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._containerSelector = containerSelector;
    this._element = document.querySelector(containerSelector);
  }

  addItem(domElement) {
    this._element.append(domElement);
  };

  renderInitialCards() {
    this._items.forEach(data => {
      const domElement = this._renderer(data);
      this.addItem(domElement);
    });
  }
}

export { Section };
