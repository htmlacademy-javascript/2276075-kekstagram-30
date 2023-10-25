//функция случайных чисел в диапазоне
const getRandomInteger = (min, max) => {
  const minNum = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const maxNum = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
  return result;
};

const getRandomElement = (element) => element[getRandomInteger(0, element.length -1)];

const DESCRIPTIONS = [
  "Замечательный отпуск",
  "Моя кошка",
  "Море",
  "С друзьями",
];

const MESSAGES = [
  "Всё отлично!",
  "В целом всё неплохо. Но не всё.",
  "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
  "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
  "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
  "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"
];

const NAMES = [
 "Андрей",
 "Юлия",
 "Сергей",
 "Георгий"
];

function createIdGenerator () {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId ++;
    return lastGeneratedId;
  };
};

const generateId = createIdGenerator();

const createComments = () => {
  const comment = [];

  for(let i = 0; i <= getRandomInteger(1, 30); i++) {
    comment[i] = {
      id: generateId(),
      avatar: 'img/avatar-${getRandomInteger(1, 6)}.svg',
      message: getRandomElement(MESSAGES),
      name: getRandomElement(NAMES)
    };
  };
  return comment;
};

const createDate = (nom) => {
  const arrayPhotos = [];

  for(let i = 0; i < nom; i++) {
    arrayPhotos[i] = {
      id:generateId(),
      url:'photos/${i + 1}.jpg',
      descriptions: getRandomElement(DESCRIPTIONS),
      likes: getRandomInteger(15, 200),
      comments: createComments()
    }
  };
  return arrayPhotos;
};

console.log(createDate(25));
