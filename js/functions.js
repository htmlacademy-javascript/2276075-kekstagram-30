function checksLength (string, number) {
  return string.length <= number;
}

(checksLength('проверяемая строка', 20));
(checksLength('проверяемая строка', 18));
(checksLength('проверяемая строка', 10));
