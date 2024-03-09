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
