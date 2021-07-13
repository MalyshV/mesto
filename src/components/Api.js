class Api {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'GET',
      headers: this._headers,
  })
  .then(this._checkRespons);
  }

  setUserInfo(data) {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      })
    })
    .then(this._checkRespons);
  }

  setUserAvatar(data) {
    return fetch(`${this._baseUrl}users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.link,
      })
    })
    .then(this._checkRespons);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}cards`, {
      method: 'GET',
      headers: this._headers,
    })
    .then(this._checkRespons);
  }

  addNewCard(data) {
    return fetch(`${this._baseUrl}cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      })
    })
    .then(this._checkRespons);
  }

  removeCard(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
    .then(this._checkRespons);
  }

  setlike(cardId) {
    return fetch(`${this._baseUrl}cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this._headers,
    })
    .then(this._checkRespons);
  }

  removeLike(cardId) {
    return fetch(`${this._baseUrl}cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
    .then(this._checkRespons);
  }

  waitPromise() {
    return Promise.all([this.getUserInfo(), this.getInitialCards()]);
  }


_checkRespons(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
  }
}

export { Api };

// мой токен: 61426457-aa06-4805-b055-d8aeddd40fb8
// идентификатор группы: cohort-25
