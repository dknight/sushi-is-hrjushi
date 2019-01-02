<template>
  <div class="header">
    <!-- <router-link to="/" class="header__logo">Sushi-is-hrjushi</router-link> -->
    <span class="header__logo">Sushi-is-hrjushi</span>
    <div class="header__table-num">
      <span v-if="myTable.id">
        table {{ myTable.id }}.
      </span>
    </div>
    <div class="header__price">{{ total | currency }}</div>
    <router-link
      to="/make-order"
      class="header__btn"
      v-if="orderedProducts.length > 0">Make order</router-link>
  </div>
</template>

<script>
import types from '../../store/types'

export default {
  computed: {
    myTable() {
      return this.$store.getters[types.GET_RESERVED_TABLE];
    },
    total() {
      return this.$store.getters[types.GET_TOTAL];
    },
    orderedProducts() {
      return this.$store.getters[types.GET_ORDERED_PRODUCTS];
    }
  },
};
</script>

<style lang="scss">
@import "../../assets/sass/global";

.header {
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border-bottom: 2px solid darken($color-header-panel-bg, 50%);
  box-shadow: 0 .5rem 1rem rgba($color-black, .3);
  background-color: $color-header-panel-bg;
  position: relative;
  z-index: 1;

  display: grid;
  grid-template-columns: max-content repeat(2, minmax(max-content, 1fr)) max-content;
  grid-gap: 2rem;
  align-items: center;
  justify-items: end;

  @media only screen and (max-width: $bp-small) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: max-content 1fr;
    justify-items: start;
  }
  @media only screen and (max-width: $bp-nano) {
    grid-template-rows: repeat(4, max-content);
    grid-template-columns: max-content;
  }

  &__logo {
    font: normal 4rem/1 $font-display;
    text-decoration: none;
    letter-spacing: 3px;
    color: $color-primary;
    justify-self: start;
    @include text-outline($color-white);
  }

  &__table-num {
    justify-self: center;
    color: $color-secondary;
    font: normal 4rem/1 $font-display;
    @include text-outline($color-white);

    @media only screen and (max-width: $bp-small) {
      justify-self: start;
    }
  }

  &__price {
    font: normal 4rem/1 $font-display;
    letter-spacing: 3px;
    color: $color-quaternary;
    @include text-outline($color-white);
    margin-right: 1rem;

    @media only screen and (max-width: $bp-small) {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      justify-self: end;
    }

    @media only screen and (max-width: $bp-nano) {
      grid-column: auto;
      grid-row: auto;
      justify-self: start;
    }
  }

  &__btn {
    border: 3px solid $color-primary;
    border-radius: $common-border-radius;
    background-color: transparent;
    color: $color-white;
    padding: 1.2rem 2.8rem;
    font-size: 1.6rem;
    font-family: inherit;
    font-weight: 700;
    cursor: pointer;
    transition: all 200ms;
    text-decoration: none;

    @media only screen and (max-width: $bp-small) {
      justify-self: end;
    }
    @media only screen and (max-width: $bp-nano) {
      justify-self: start;
    }

    &:hover {
      background-color: $color-primary;
    }
    &:active {
      transform: translateY(2px);
      outline: none;
    }
  }
}
</style>