import Vue from 'vue';
import App from './App.vue';
import store from './store';
import directives from './directives.js';
import filters from './filters.js';
import { eventbus, moment } from './plugins';
import router from './router/index.js';

import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css';

Vue.use(Vuesax);
Vue.use(eventbus);
Vue.use(moment);

directives.forEach(f => {
  Vue.directive(f.name, f.execute);
});

filters.forEach(f => {
  Vue.filter(f.name, f.execute);
});

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
