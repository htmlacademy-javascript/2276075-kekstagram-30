import { createBigPicture } from "./create-big-pictures";
import { loadPicture } from "./api";
import { showMessageloadError } from './message';
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

const createPicture = ({url, description, comments, likes}) => {
  const pictureElement = pictureTemplate.cloneNode(true);

  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').alt = description;
  picture.querySelector('.picture__comments').textContent = comments.length;
  picture.querySelector('.picture__likes').textContent = likes;

  return picture;
};

try {
  let pictures = {};
  pictures = await loadPicture();
  createPicture(pictures);
} catch {
  showMessageloadError();
}

const renderPicture = (pictures) => {
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const creatingPicture = createPicture(picture);
    pictureElement.addEventListener('click', (evt) => {
      evt.preventDefault();
      createBigPicture(picture);
    });
    fragment.append(picture);
  });

  container.append(fragment);
}

export {renderPicture};
