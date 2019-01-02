<template>
  <div class="seating-plan">
    <div class="seating-plan__interior">
      <button
        v-for="t in tables"
        :key="t.id"
        @click="t.status === 0 ? reserveTable(t.id) : () => 0"
        class="seating-plan__table-mark"
        :class="{
            ['seating-plan__table-mark--busy']: t.status === 1,
            [`seating-plan__table-mark--${t.id}`]: true
       }">{{ t.id }}.</button>
    </div>
  </div> 
</template>

<script>
import types from '../../store/types'

export default {
  computed: {
    tables() {
      return this.$store.getters[types.GET_ALL_TABLES]
    }
  },
  methods: {
    reserveTable(tableId) {
      // TODO: reserve table in database
      this.$store.dispatch('reserveTable', tableId)
      this.$router.push({ name: 'menu' })
      
    }
  },
}
</script>

<style lang="scss">
@import '../../assets/sass/global';

.seating-plan {
  background-color: $color-interior-bg;
  background-image: linear-gradient(
                      rgba($color-interior-bg, .6),
                      rgba($color-interior-bg, .6)
                    ),
                    url(../../assets/img/floor.jpg);

  display: grid;
  align-items: start;
  justify-items: center;
  padding-top: 5rem;
  height: 100vh;

  &__interior {
    position: relative;
    background-image: url(../../assets/img/interior.svg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    // border: 5px solid orangered;
    width: 120rem;
    height: 80rem;

    @media only screen and (max-width: $bp-largest) {
      width: 100rem;
      height: 66.6666667rem;
    }

    @media only screen and (max-width: $bp-small) {
      width: 85rem;
      height: 56.666667rem;
    }

    @media only screen and (max-width: $bp-tiny) {
      width: 60rem;
      height: 40rem;
    }

    @media only screen and (max-width: $bp-nano) {
      width: 50rem;
      height: 33.3333333rem;
    }
  }

  &__table-mark {
    position: absolute;
    top: 0;
    left: 0;
    width: 10rem;
    height: 10rem;
    background-color: $color-tertiary;
    border-radius: 50%;
    border: none;
    border-bottom: solid 3px darken($color-tertiary, 10%);
    outline: none;
    box-shadow: 0px 2px 2px rgba($color-black, 0.29);

    font: normal 5rem/1 $font-display;
    color: $color-white;
    
    cursor: pointer;
    transition: all .4s;

    display: grid;
    align-items: center;
    justify-items: center;

    animation: pulsate 800ms linear 0ms infinite alternate;

    @media only screen and (max-width: $bp-small) {
      width: 6rem;
      height: 6rem;
      font-size: 4rem;
    }

    &:focus {
      outline: none;
    }

    &::after {
      content: "available";
      display: block;
      font-size: 1.5rem;
      margin-top: 0;
      @media only screen and (max-width: $bp-small) {
        content: "" !important;
      }
    }

    @-moz-document url-prefix() {
      &::after {
        margin-top: -3rem;
      }
    }

    &--busy {
      animation: none;
      background-color: $color-quaternary;
      border-bottom: solid 3px darken($color-quaternary, 10%);
      cursor: auto;

      &::after {
        content: "busy";
      }
    }

    &--1 {
      left: 26%;
      top: 5%;
    }

    &--2 {
      left: 25.6%;
      top: 36%;
    }

    &--3 {
      left: 74%;
      top: 12%;
    }

    &--4 {
      left: 75%;
      top: 67%;
    }

    &--5 {
      left: 47%;
      top: 67%;
    }

    &--6 {
      left: 18%;
      top: 67%;
    }
  }
}

@keyframes pulsate {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
  }
}
</style>