<template>
  <a href="#" @click.prevent="callStuffDialog()" class="call-staff-btn" title="Call staff">
    <svg class="call-staff-btn__icon">
      <use xlink:href="img/sprite.svg#icon-bell"></use>
    </svg>
    <div class="call-staff-btn__label">Call staff</div>
  </a>
</template>

<script>
import { openAlertHelper } from '../../helpers';
export default {
  methods: {
    callStuffDialog() {
      openAlertHelper('I will come in a minute', 'Please be patient');
    }
  }
};
</script>
<style lang="scss">
@import '../../sass/global';

.call-staff-btn {
  &:link,
  &:visited {
    position: fixed;
    z-index: 2;
    right: 5rem;
    bottom: 5rem;
    background-color: $color-white;
    border-radius: 50%;
    padding: 2rem;
    border: 6px solid $color-primary;
    outline: none;
    transition: all 400ms;

    font-size: 1.6rem;
    font-weight: bold;
    color: $color-primary;
    text-decoration: none;

    @media only screen and (max-width: $bp-small) {
      border-width: 3px;
    }
  }

  &:hover,
  &:active {
    transform: scale(1.2);
  }

  &__label {
    position: absolute;
    bottom: -3rem;
    margin-left: -.9rem;
    text-align: center;
    @media only screen and (max-width: $bp-small) {
      display: none;
    }
  }

  &__icon {
    width: 5rem;
    height: 5rem;
    fill: $color-primary;
    @media only screen and (max-width: $bp-small) {
      width: 3rem;
      height: 3rem;
    }
  }
}
</style>