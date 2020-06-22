
import moment from 'moment';
moment.locale('ru');
moment.suppressDeprecationWarnings = true;

export default function install (Vue) {
  Object.defineProperties(Vue.prototype, {
    $moment: {
      get () {
        return moment;
      }
    }
  })
}
