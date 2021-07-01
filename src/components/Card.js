class Card {
  constructor (cardData, templateSelector, handleCardClick) {
    this._title = cardData.name;
    this._link = cardData.link;
    this._templateSelector = templateSelector;
    this.handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardTemplate = document.querySelector(this._templateSelector);
    this._newCard = cardTemplate.content.querySelector('.element').cloneNode(true);
  }

  _createCard() {
    this._getTemplate();

    this._cardRemoveButton = this._newCard.querySelector('.element__delete-button');
    this._cardLikeButton = this._newCard.querySelector('.element__like-button');
    this._photo = this._newCard.querySelector('.element__image');

    this._newCard.querySelector('.element__title').textContent = this._title;
    this._photo.src = this._link;
    this._photo.alt = this._title;
  }

  _setEventListeners() {
    this._photo.addEventListener('click', () => {
      this.handleCardClick(this._title, this._link);
    });
    this._cardRemoveButton.addEventListener('click', (event) => this._handleRemoveClick(event));
    this._cardLikeButton.addEventListener('click', (event) => this._handleLikeClick(event));
    //this._cardLikeButton.addEventListener('click', (event) => this._countLikes(event));
  }

  _handleLikeClick() {
    this._cardLikeButton.classList.toggle('element__like-button_active');
    const likeCounter = this._newCard.querySelector('.element__like-counter');

    likeCounter.textContent = 667;

    console.log(likeCounter.textContent);
    //likeCounter.textContent += 1;
  }

  // Тестим счетчик лайков
  /*_countLikes() {
    const likeCounter = document.querySelector('.element__like-counter');
    this._cardLikeButton.addEventListener('click', () => {
      if (this._cardLikeButton.classList.contains('element__like-button_active')) {
        this._cardLikeButton.classList.remove('element__like-button_active');
        likeCounter -= 1;
      } else {
        likeCounter += 1;
        this._cardLikeButton.classList.add('element__like-button_active');
      }
    })
  }*/

  _handleRemoveClick() {
    this._newCard.closest('.element').remove();
  }

  render() {
    this._createCard();
    this._setEventListeners();

    return this._newCard;
  }
}

export { Card };
