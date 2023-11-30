const valueScale = document.querySelector('.scale__control--value');
const previewImg = document.querySelector('.img-upload__preview');

const MAX_SCALE = 100;
const MIN_SCALE = 25;
const STEP_SCALE = 25;

function resetScale() {
  previewImg.style.transform = 'scale(1)';
  valueScale.value = '100%';
}

function scaleImg (value) {
  previewImg.style.transform = 'scale(${value / 100})';
  valueScale.value = '${value}%';
}

function onSmallButtonClick () {
  scaleImg(Math.max(parseInt(valueScale.value ,10) - STEP_SCALE, MIN_SCALE));
}

function onBigButtonClick () {
  scaleImg(Math.min(parseInt(valueScale.value ,10) + STEP_SCALE, MAX_SCALE));
}

export {resetScale, onBigButtonClick, onSmallButtonClick};
