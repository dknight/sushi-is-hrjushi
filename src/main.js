import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';
import router from './router';
import store from './store/store';
import './filters';

Vue.use(VueResource);

Vue.http.options.root = process.env.BASE_URL;
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});