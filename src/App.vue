<template>
  <main id="wrapper">
    <sushi-header></sushi-header>
    <transition name="route-trans" mode="out-in">
      <router-view></router-view>
    </transition>
    <sushi-call-staff></sushi-call-staff>
  </main>
</template>

<script>
import Header from '@/components/shared/Header.vue';
import CallStaff from '@/components/shared/CallStaff.vue';

export default {
  components: {
    sushiHeader: Header,
    sushiCallStaff: CallStaff
  },
  created() {
    this.$store.dispatch('fetchTables')
  }
};
</script>

<style lang="scss">
@import './assets/sass/global';

// Global reset
@include hide-outline();


// Hide numbers spinner
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
input[type="number"] {
    -moz-appearance: textfield;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

// base styles
html {
  box-sizing: border-box;
  font-size: 62.5%; // 10px = 1rem
  font-family: $font-common;

  @media only screen and (max-width: $bp-largest) {
    font-size: 56.25%;
  }
  @media only screen and (max-width: $bp-large) {
    font-size: 50%;
  }
  @media only screen and (max-width: $bp-medium) {
    font-size: 43.75%;
  }
}

body {
  background-color: $color-grey-light-1;
}

#wrapper {
  position: relative; 
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr;
}

.route-trans-enter-active {
  animation: trans-in 200ms ease-out forwards;
}
.route-trans-leave-active {
  animation: trans-out 200ms ease-out forwards;
}

@keyframes trans-in {
  from {
    opacity: 0;
    // transform: scale(0);
    transform: translateY(-15rem);
  }
  to {
    opacity: 1;
    // transform: scale(1);
    transform: translateY(0);
  }
}
@keyframes trans-out {
  from {
    opacity: 1;
    // transform: scale(1);
    transform: translateY(0);
  }
  to {
    opacity: 0;
    // transform: scale(0);
    transform: translateY(-15rem);
  }
}
</style>
