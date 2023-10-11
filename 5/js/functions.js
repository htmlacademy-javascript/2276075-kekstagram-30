//функция для проверки длины строки
function checksLength (string, number) {
  return string.length <= number;
}

checksLength('проверяемая строка', 20);
checksLength('проверяемая строка', 18);
checksLength('проверяемая строка', 10);

//функция для проверки, является ли строка палиндромом
function checksPalindrome (string) {
  string = string.replaceAll(' ','').toLowerCase();
  let word = '';
  for(let i = string.length - 1; i >= 0; i--) {
    word += string[i];
  }
  return (word === string);
}

// дополнительное задание
function getNumber (string) {
  string = string(string);
  let number = '';
  for(let i = 0; i < string.length; i++) {
    if(!Number.isNaN(parseInt(string.at(i)))) {
      number += string.at(i);
    }
  }
}
