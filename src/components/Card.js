class Card {
  constructor ({ cardData, handleCardClick, handleLikeClick, handleRemoveClick }, templateSelector) {
    this._cardData = cardData;
    this._title = cardData.name;
    this._link = cardData.link;
    this._likes = cardData.likes; // массив с поставленными пользователями лайками
    this.cardId = cardData._id;
    this._thisUserId = cardData.myUserId; // мой id
    this._ownerId = cardData.owner._id; // id любого, кто добавляет карточку
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
    this.showAllLikes(); // добавила в карточку количество лайков

    if (this._ownerId !== this._thisUserId) {
      this._cardRemoveButton.remove(); // добавляется-удаляется иконка удаления
    }

    return this._newCard;
  }

  _setEventListeners() {
    this._photo.addEventListener('click', () => {
      this.handleCardClick(this._title, this._link);
    });
    this._cardRemoveButton.addEventListener('click', () => this._handleRemoveClick(this.cardId));
    this._cardLikeButton.addEventListener('click', () => this.deleteLike());
    this._cardLikeButton.addEventListener('click', () => this.setLike());
    // вернуть handleLikeClick + дописать функционал, чтобы количество лайков отправлялось на сервер
  }

  remove() {
    this._newCard.remove();
  }

  // показать количество лайков
  showAllLikes() {
    this._likeCounter.textContent = this._likes.length;
  }

  // дальше можно найти пользователя, лайкнувшего в массиве

  // поставить лайк
  setLike() {
    this._cardLikeButton.classList.add('element__like-button_active');
    // дописать функцию
  }

  deleteLike() {
    this._cardLikeButton.classList.remove('element__like-button_active');
    // дописать функцию
  }



  /*_getLike() {
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

      //console.log(likeCounter.textContent);
      //likeCounter.textContent += 1;
    }
  }*/

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
}

export { Card };
