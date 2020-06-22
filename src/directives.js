import Ripple from 'vue-ripple-directive';
import { directive as onClickout } from 'vue-clickout';

export default [
  {
    name: 'round',
    execute: (el, binding) => {
      el.value = Number(el.value).toFixed(binding.value);
    }
  },
  {
    name: 'ripple',
    execute: Ripple
  },
  {
    name: 'clickout',
    execute: onClickout
  }
];
