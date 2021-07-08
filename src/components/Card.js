class Card {
  constructor ({ cardData, handleCardClick, handleLikeClick, handleRemoveClick }, templateSelector, /*userId*/) {
    this._cardData = cardData;
    this._title = cardData.name;
    this._link = cardData.link;
    this._likes = cardData.likes;
    this._cardId = cardData._id;
    //this._userId = cardData.userId; // мои данные
    this._templateSelector = templateSelector;
    this.handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleRemoveClick = handleRemoveClick;
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

    /*if (this._cardData.owner._id !== this._userId) {
      //console.log('чужие карточки');
      this._cardRemoveButton.remove(); // из-за этого перестала добавляться новая карточка
    }*/

    return this._newCard;
  }

  _setEventListeners() {
    this._photo.addEventListener('click', () => {
      this.handleCardClick(this._title, this._link);
    });
    this._cardRemoveButton.addEventListener('click', () => this._handleRemoveClick(this)); // нужен ли аргумент?
    this._cardLikeButton.addEventListener('click', (event) => this._handleLikeClick(event));
    //this._cardLikeButton.addEventListener('click', (event) => this._countLikes(event));
  }

  _getLike() {
    this._handleLikeClick(this._userId, this.liked)
      .then((data) => {
        this._cardLikeButton.classList.toggle('element__like-button_active');
        this.liked = !this.liked;
        this._likeCounter.textContent = data.likes.length;
      })
      .catch((error) => {
        console.log(error);
      })

    {
      this._cardLikeButton.classList.toggle('element__like-button_active');
      const likeCounter = this._newCard.querySelector('.element__like-counter');

      likeCounter.textContent = 667;

      console.log(likeCounter.textContent);
      //likeCounter.textContent += 1;
    }
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

  removeCard() {
    this._newCard.remove();
  }
}

export { Card };
