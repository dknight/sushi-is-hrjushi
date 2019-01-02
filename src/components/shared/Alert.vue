<template>
  <div class="alert" :class="state">
    <div class="alert__content">
      <h4 class="heading-4">
        <slot name="alert-title"></slot>
      </h4>
      <p class="alert__text">
        <slot name="alert-text"></slot>
      </p>
      <div class="alert__timer" v-if="productTime">
        {{ remaining | formatTime }}
      </div>
      <button
        class="btn btn--primary alert__button"
        @click="closeAlert()"
        v-if="isbtn">OK</button>
    </div>
    <img src="../../assets/img/waitress.png" alt="Waitress" class="alert__waitress">
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: '',
      remaining: this.productTime,
      isbtn: this.showButton
    }
  },
  methods: {
    closeAlert() {
      this.state = '';
      const vm = this;
      setTimeout(function () {
        vm.$el.remove();
        vm.$destroy();
      }, 1000);
    }
  },
  created() {
    const vm = this;
    setTimeout(function () {
      vm.state = 'active';
    }, 100);

    if (this.productTime) {
      const timer = setInterval(() => {
        vm.remaining--;
        if (vm.remaining <= 0) {
          clearInterval(timer);
          vm.isbtn = true;
        }
      }, 1000);
    }
  },
  props: {
    showButton: {
      type: Boolean,
      default: true
    },
    productTime: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss">
@import '../../sass/global';
.alert {
  width: 100vw;
  height: 100vh;
  background-color: rgba($color-black, 0);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  overflow: hidden;
  transition: all 300ms ease-out 100ms;

  -webkit-backdrop-filter: blur(10px);
  -moz-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);

  &.active {
    background-color: rgba($color-black, .95);
  }

  &.active  &__content {
    transform: scale(1);
  }

  &.active  &__waitress {
    right: 0;
    @media only screen and (max-width: $bp-tiny) {
      right: -18%;
    }
  }

  display: grid;
  align-items: center;
  justify-items: center;

  &__content {
    width: 60vw;
    height: 60vh;
    background-color: $color-grey-light-1;
    padding: 6rem;
    border-radius: $common-border-radius;
    border: 8px solid $color-secondary;
    overflow: hidden;
    font-size: 2.8rem;

    @media only screen and (max-width: $bp-tiny) {
      width: 90vw;
    }

    display: grid;
    grid-gap: 3rem;
    grid-template-rows: repeat(3, max-content);
    justify-items: start;
    align-content: center;
    transition: transform 300ms ease-out 300ms;

    transform: scale(0);
  }

  &__timer {
    font-size: 5rem;
  }

  &__waitress {
    width: 50rem;
    height: auto;
    position: absolute;
    bottom: 0;
    right: -500px;
    transition: right 300ms ease-out 400ms;

    @media only screen and (max-width: $bp-largest) {
      width: 45rem;
    }
    @media only screen and (max-width: $bp-tiny) {
      width: 40rem;
    }
    @media only screen and (max-width: $bp-nano) {
      width: 35rem;
      bottom: -20%;
    }
  }

  &__text {
    color: $color-grey-dark-1;
  }

  &__button {
    justify-self: center;
    font-size: 3.4rem !important;
  }
}
</style>