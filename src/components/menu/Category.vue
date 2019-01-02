<template>
  <router-link :to="`/menu/${name}`" class="category u-text-align-center">
    <sushi-for-adults v-if="name === 'alcohol'">18+</sushi-for-adults>
    <figure class="category__image">
      <img :src="getPicUrl(name)" :alt="`Category ${name}`" class="category__photo">
    </figure>
    <h4 class="category__heading heading-4">{{ name | capitalize }}</h4>
    <div v-if="orderedProducts > 0" class="category__ordered-count">
      Ordered {{ orderedProducts }} {{ orderedProducts === 1 ? 'item' : 'items' }}
    </div>
  </router-link>
</template>

<script>
import ForAdults from '../shared/ForAdults.vue';

export default {
  methods: {
    getPicUrl(name) {
      return require(`../../assets/img/categories/${name}.jpg`)
    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    orderedProducts: Number
  },
  components: {
    sushiForAdults: ForAdults
  }
}
</script>

<style lang="scss">
@import '../../sass/global';

.category {
  padding: 1.5rem;
  border-radius: $common-border-radius;
  overflow: hidden;
  border: 2px solid $color-grey-light-3;
  position: relative;

  &:link,
  &:visited {
    background-color: $color-white;
    text-decoration: none;
  }

  &__photo {
    display: block;
    width: 100%;
    height: auto;
    transition: all 300ms;
  }

  &:hover &__photo {
    transform: scale(1.05) translateY(-10px);
  }

  &__ordered-count {
    color: $color-secondary;
    font-size: 2rem;
    width: 100%;
  }

  &__heading {
    position: relative;
    z-index: 2;
  }
}
</style>