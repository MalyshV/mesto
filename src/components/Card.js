class Card {
  constructor ({ cardData, handleCardClick, likeCard, unLikeCard, handleRemoveClick }, templateSelector) {
    this._cardData = cardData;
    this._title = cardData.name;
    this._link = cardData.link;
    this._likes = cardData.likes; // массив с поставленными пользователями лайками
    this._cardLikes = cardData.likes.length; // количество лайков у карточки
    this._cardId = cardData._id;
    this._thisUserId = cardData.myUserId; // мой id
    this._ownerId = cardData.owner._id; // id добавившего карточку

    this._templateSelector = templateSelector;

    this._handleCardClick = handleCardClick;
    this._handleRemoveClick = handleRemoveClick;
    this._likeCard = likeCard;
    this._unLikeCard = unLikeCard;
  }

  _getTemplate() {
    const cardItem = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);

    return cardItem;
  }

  createCard() {
    this._newCard = this._getTemplate();
    this._cardRemoveButton = this._newCard.querySelector('.element__delete-button');
    this._cardLikeButton = this._newCard.querySelector('.element__like-button');
    this._photo = this._newCard.querySelector('.element__image');
    this._newCard.querySelector('.element__title').textContent = this._title;
    this._photo.src = this._link;
    this._photo.alt = this._title;
    this._likeCounter = this._newCard.querySelector('.element__like-counter');

    this._setEventListeners();
    this.showAllLikes(this._cardLikes);

    const myLikes = this._likes.some(like => like._id === this._thisUserId);
    if (myLikes) {
      this.setLike();
    } else {
      this.deleteLike();
    }

    if (this._ownerId !== this._thisUserId) {
      this._cardRemoveButton.remove();
    }

    return this._newCard;
  }

  _setEventListeners() {
    this._photo.addEventListener('click', () => {
      this._handleCardClick(this._title, this._link);
    });
    this._cardRemoveButton.addEventListener('click', () => this._handleRemoveClick(this._cardId));
    this._cardLikeButton.addEventListener('click', () => this._updateLikes());
  }

  showAllLikes(number) {
    this._likeCounter.textContent = number;
  }

  setLike() {
    this._cardLikeButton.classList.add('element__like-button_active');
  }

  deleteLike() {
    this._cardLikeButton.classList.remove('element__like-button_active');
  }

  _updateLikes() {
    if(this._cardLikeButton.classList.contains('element__like-button_active')) {
      this.deleteLike();
      this._unLikeCard(this._cardId);
    } else {
      this.setLike();
      this._likeCard(this._cardId);
    }
  }
}

export { Card };
