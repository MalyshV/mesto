let openPopupButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__close');
let formElement = document.querySelector('[name="profile-form"]');
let nameInput = document.querySelector('[name="user-name"]');
let jobInput = document.querySelector('[name="user-job"]');
let profileName = document.querySelector('.profile__user-name');
let profileJob = document.querySelector('.profile__user-job');

openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);

function openPopup(event) {
  event.preventDefault();
  popup.classList.add('popup_is-opened');

  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closePopup(event) {
  event.preventDefault();
  popup.classList.remove('popup_is-opened');
}

function formSubmitHandler(event) {
  event.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  popup.classList.remove('popup_is-opened');
}
