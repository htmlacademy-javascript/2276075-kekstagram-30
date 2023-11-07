import { onEscapeKey } from "./util";
import { renderComments, initCommentsList } from "./create-comments";

const userModalElement = document.querySelector('.big-picture');
const userModalOpenElement = document.querySelector('.pictures');
const userModalCloseElement = userModalElement.querySelector('.big-picture__cancel');
const bigPictureImg = document.querySelector('.big-picture__img img');
const likesCount = document.querySelector('.likes-count');
const pictureDescription = document.querySelector('.social__caption');

const onDocumentKeydown = (evt) => {
  if(onEscapeKey(evt)) {
evt.preventDefault();
closeUserModal();
  };
};

function openUserModal () {
  userModalElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

function closeUserModal () {
  userModalElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('click', userModalCloseElement);
};

userModalOpenElement.addEventListener('click', () => {
  openUserModal();
});

userModalCloseElement.addEventListener('click', () => {
  closeUserModal();
});

function createBigPicture(picture) {
  openUserModal();
  bigPictureImg.src = picture.url;
  likesCount.textContent = picture.likes;
  pictureDescription.textContent = picture.description;
  renderComments(picture.comments);
  initCommentsList();
};

export {createBigPicture};
