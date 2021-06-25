class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._name = document.querySelector(nameSelector);
    this._job = document.querySelector(jobSelector);
  }

  getUserInfo() {
    this._userObject = {
      name: this._name.textContent,
      job: this._job.textContent,
    }
    return this._userObject;
  };

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._job.textContent = data.job;
  };
}

export { UserInfo };