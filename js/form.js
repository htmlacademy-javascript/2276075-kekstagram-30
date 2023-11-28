import { onEscapeKey } from "./util";
const form = document.querySelector('.img-upload__form');
const uploadFormInput = form.querySelector('.img-upload__input');
const uploadFormOverlay = form.querySelector('.img-upload__overlay');
const uploadFormCancel = form.querySelector('.img-upload__cancel');
const inputHashtags = document.querySelector('.text__hashtags');
const inputDescription = document.querySelector('.text__description');

const MAX_LENGHT_COMMENTS = 140;
const HASHTAG__VALID = /^#[a-zа-яё0-9]{1,19}$/i;
const HASHTAG__COUNT = 5;

let arrayTags = [];

const onDocumentKeydown = (evt) => {
  if(onEscapeKey(evt)){
    evt.preventDefault();
    closeForm();
  }
};

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
}, false);

function openForm () {
  uploadFormOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  inputHashtags.value = '';
  inputDescription.value = '';
  uploadFormInput.value = '';
  pristine.reset();
}

function closeForm () {
  uploadFormOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

function normalizeTags(tagString) {
  return tagString.trim().split(' ').filter((tag) => Boolean(tag.length));
}

function validateHashtag() {
  if(arrayTags.every((tag) => HASHTAG__VALID.test(tag))) {
    return true;
  }
  return false;
}

function validateUniqueHashtag() {
  const arrayTagsLowerCase = arrayTags.map((tag) => tag.toLowerCase());
  if (arrayTagsLowerCase.length === new Set(arrayTagsLowerCase).size) {
    return true;
  }
  return false;
}

function validateCountHashtag() {
  if(arrayTags.length <= HASHTAG__COUNT) {
    return true;
  }
  return false;
}

uploadFormCancel.addEventListener('click', () => {
  closeForm();
});

function validateComment() {
  if (inputDescription.value.lenght <= MAX_LENGHT_COMMENTS) {
    return true;
  }
  return false;
}

pristine.addValidator(inputDescription, validateComment, 'длина комментария больше 140 символов');
pristine.addValidator(inputHashtags, validateCountHashtag, 'превышено количество хэш-тегов', 1, true);
pristine.addValidator(inputHashtags, validateHashtag, 'введён невалидный хэш-тег', 2, true);
pristine.addValidator(inputHashtags, validateUniqueHashtag, 'хэш-теги повторяются', 3, true);

form.addEventListener('sumbit', (evt) => {
  evt.preventDefault();
  arrayTags = normalizeTags(inputHashtags.value);
  pristine.validate();
});

function onInputChange() {
  openForm();
}

function onClickCancel() {
  closeForm();
}

function showForm() {
  uploadFormInput.addEventListener('change', onInputChange);
  uploadFormCancel.addEventListener('click', onClickCancel);
}

export { showForm };
