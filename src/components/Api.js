class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  // 1. загрузка информации о пользователе с сервера
  getUserInfo() {  // не работает
    return fetch('https://mesto.nomoreparties.co/v1/cohort-25/users/me', {
      //method: 'GET',
      headers: {
        authorization: '61426457-aa06-4805-b055-d8aeddd40fb8',
        'Content-Type': 'application/json',
    }
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  // 2. загрузка карточек с сервера
  /*getInitialCards() {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-25/cards', {
      headers: {
        authorization: '61426457-aa06-4805-b055-d8aeddd40fb8',
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  } */

  // 3. Редактирование профиля
  setUserInfo(data) {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  // 4. добавление новой карточки

  // 5. отображение количества лайков карточки

  // 6. удаление карточки

  // 7. поставнока и снятие лайка карточки

  // 8. обновление аватара пользователя
  setUserAvatar(data) { // changeAvatar??  // не идет
    return fetch(`${this._baseUrl}users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  // 9. улучшенный UX всех форм
}

export { Api };

// мой токен: 61426457-aa06-4805-b055-d8aeddd40fb8
// идентификатор группы: cohort-25

