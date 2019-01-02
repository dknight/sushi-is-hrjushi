import Vue from 'vue';
import Alert from './components/shared/Alert.vue';

export const openAlertHelper = function (title, text, props={}, parent='#wrapper') {
  var ComponentClass = Vue.extend(Alert);
  var instance = new ComponentClass({
    propsData: props
  });
  instance.$slots['alert-title'] = [title];
  instance.$slots['alert-text'] = [text];
  instance.$mount();
  document.querySelector(parent).append(instance.$el);
};