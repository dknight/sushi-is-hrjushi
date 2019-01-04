import Vue from 'vue';

Vue.filter('capitalize', value => {
  return value.charAt(0).toUpperCase()
            + value.substr(1).toLowerCase();
});

Vue.filter('currency', value => {
  let v = value;
  if (!v || Number.isNaN(v)) {
    v = Number(0);
  }
  return `${v.toFixed(2)} EUR`;
});

Vue.filter('formatTime', value => {
  let v = value;
  if (!v || Number.isNaN(v)) {
    return '00:00:00';
  }
  var h   = Math.floor(value / 3600);
  var m = Math.floor((value - (h * 3600)) / 60);
  var s = value - (h * 3600) - (m * 60);
  if (h < 10) {
    h  = `0${h}`;
  }
  if (m < 10) {
    m = `0${m}`;
  }
  if (s < 10) {
    s = `0${s}`;
  }
  return `${h}:${m}:${s}`;
});