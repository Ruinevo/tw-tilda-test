const BASE_API = '';

export const API_URL = process.env.NODE_ENV === 'development' ? BASE_API : '';

/** error messages hide delay */

export const HIDE_ERROR_DELAY = 2000;

/** error messages */
export const ERRORS_MESSAGES = {
  isFieldRequired: 'Пожалуйста, заполните все недостающие данные.'
};

/** max count of user's elements on page */
export const MAX_USER_ELEMENTS_COUNT = 10;

export const ELEMENTS_TYPES = [
  {
    id: 1,
    name: 'Заголовок',
    component: 'TypeTitle'
  },
  {
    id: 2,
    name: 'Картинка',
    component: 'TypeImage'
  }
];
