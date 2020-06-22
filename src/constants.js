const BASE_API = '';

export const API_URL = process.env.NODE_ENV === 'development' ? BASE_API : '';

export const HIDE_ERROR_DELAY = 2000;

export const ERRORS_MESSAGES = {
  isFieldRequired: 'Пожалуйста, заполните все недостающие данные.'
};
