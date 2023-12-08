//функция случайных чисел в диапазоне
/*const getRandomInteger = (min, max) => {
  const minNum = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const maxNum = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
  return result;
};

const getRandomElement = (element) => element[getRandomInteger(0, element.length -1)];

function createIdGenerator () {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId ++;
    return lastGeneratedId;
  };
};
*/
const onEscapeKey = (evt) => evt.key === 'Escape';

function isEscapeKey(evt) {
  if (onEscapeKey) {
    return true;
  }
}
//export {getRandomInteger, getRandomElement, createIdGenerator, onEscapeKey};

export { onEscapeKey, isEscapeKey };
