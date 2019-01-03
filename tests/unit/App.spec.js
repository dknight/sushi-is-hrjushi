import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import VueResource from 'vue-resource';
import App from '@/App.vue';
import store from '@/store/store';
import VueRouter from 'vue-router';
import router from '@/router';

describe('App.vue', () => {

  Vue.use(VueResource);
  Vue.use(VueRouter);
  const wrapper = shallowMount(App, {
    store,
    router
  });

  it('Should be a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
});