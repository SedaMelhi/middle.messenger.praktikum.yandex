export const login = (value: string) => {
  if (value.length === 0) {
    return 'Field can not be empty';
  }
  if (value.length < 3) {
    return 'Length of login should not be less 3 letters.';
  }
  if (!/^(?=.*[A-Za-z])[A-Za-z0-9_-]+$/.test(value)) {
    return 'The login must include Latin letters and can also have digits, hyphens (-), and underscores (_).';
  }
  return false;
};

export const password = (value: string) => {
  if (value.length === 0) {
    return 'Field can not be empty';
  }
  if (value.length < 8 && value.length > 40) {
    return 'The password must contain from 8 to 40 characters.';
  }
  const hasUppercase = /[A-Z]/.test(value);
  const hasDigit = /\d/.test(value);
  if (!(hasUppercase && hasDigit)) {
    return 'The password must contain at least one uppercase letter and at least one digit.';
  }
  return false;
};

export const name = (value: string) => {
  // Регулярное выражение, которое проверяет условия
  if (!/^[A-ZА-Я][A-Za-zА-Яа-я-]*$/.test(value)) {
    return 'The name must consist of Latin or Cyrillic characters, the first letter must be uppercase, without spaces and without digits, no special characters allowed (only hyphen is permitted).';
  }
  return false;
};

export const email = (value: string) => {
  // Регулярное выражение для проверки электронной почты
  if (!/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value)) {
    return 'The email address is invalid. Please enter a valid email address.';
  }
  return false;
};

export const phone = (value: string) => {
  if (!/^\+?\d{10,15}$/.test(value)) {
    return 'The phone number is invalid. Please enter a valid phone number.';
  }
  return false;
};

export const message = (value: string) => {
  if (value.trim().length < 1) {
    return 'The field is empty';
  }
  return false;
};
