class Api {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
  }

  // 1. загрузка информации о пользователе с сервера
  getUserInfo() {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'GET',
      headers: this._headers,
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  // 2. загрузка карточек с сервера
  getInitialCards() {
    return fetch(`${this._baseUrl}cards`, {
      method: 'GET',
      headers: this._headers,
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  // 4. добавление новой карточки
  /*addNewCard(name, link) {
    return fetch(`${this._baseUrl}cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }*/

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

  // 5. отображение количества лайков карточки

  // 6. удаление карточки

  // 7. поставнока и снятие лайка карточки

  // 8. обновление аватара пользователя
  changeAvatar(link) {
    return fetch(`${this._baseUrl}users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: link,
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      //return Promise.reject(`Ошибка: ${res.status}`);
      return Promise.reject('Проверка ошибки!!!');
    });
  }

  // 9. улучшенный UX всех форм
}

export { Api };

// мой токен: 61426457-aa06-4805-b055-d8aeddd40fb8
// идентификатор группы: cohort-25

