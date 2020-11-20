import Luhn from 'luhn-js';

export function onlyNumbers(str) {
  const notDigits = /\D/;

  return str.replace(notDigits, '');
}

export function onlyCharacters(str) {
  const notChars = /[^A-Za-z\s]/g;

  return str.replace(notChars, '');
}

export function validateCardNumber(cardNumber) {
  if (!cardNumber) {
    return false;
  }

  return Luhn.isValid(cardNumber);
}

export function validateName(name) {
  const letters = /^[A-Za-z]+$/;

  return name.match(letters);
}

export function validateExpDate(checkDate) {
  const currentYear = (new Date()).getFullYear();
  const currentMonth = (new Date()).getMonth();

  const [checkYear, checkMonth] = checkDate.split('-').map(num => +num);

  return currentYear < checkYear
    || (currentMonth < checkMonth && currentYear === checkYear);
}
