class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._element = document.querySelector(containerSelector);
  }

  addItem(htmlElement) {
    this._element.prepend(htmlElement);
  };

  render() {
    this._items.forEach(cardData => {
      const htmlElement = this._renderer(cardData)
      this.addItem(htmlElement);
    });
  }
}

export { Section };

