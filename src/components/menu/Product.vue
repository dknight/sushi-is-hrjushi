<template>
  <div class="product" :id="`product-${product.id}`">
    <figure class="product__image">
      <sushi-for-adults v-if="category === 'alcohol'"></sushi-for-adults>
      <img :src="getPicUrl(product.id)" :alt="product.name" class="product__photo">
    </figure>
    <div class="product__info">
      <h3 class="heading-3 product__heading">
        {{ product.name }}
      </h3>
      <div class="product__price">
        <span v-if="currentQuantity > 1">{{ currentQuantity }}&times;{{ currentQuantity * product.price | currency }}</span>
        <span v-else>{{ product.price | currency }}</span>
      </div>
      <div class="product__description">{{ formatProductDescription(product) | capitalize }}.</div>
    </div>
    <div class="product__order">
      <button @click="decrement()" class="btn btn--primary btn--product" :disabled="currentQuantity <= 0">-</button>
      <input type="number" v-model="currentQuantity" class="product__input" maxlength="2" readonly>
      <button @click="increment()" class="btn btn--primary btn--product" :disabled="currentQuantity >= 99">+</button>
    </div>
  </div>
</template>

<script>
import ForAdults from '../shared/ForAdults.vue';

export default {
  data() {
    return {
      currentQuantity: this.quantity
    }
  },
  watch: {
    currentQuantity() {
      if (this.currentQuantity >= 99) {
        this.currentQuantity = 99;
      }
    }
  },
  methods: {
    getPicUrl(id) {
      return require(`../../assets/img/products/${id}.jpg`);
    },
    formatProductDescription(s) {
      let retval = s.ingredients.join(', ') + ', ';
      retval += Number.isInteger(s.amount) ? `${s.amount} pcs` : s.amount;
      return retval;
    },
    increment() {
      if (this.currentQuantity >= 99) {
        return;
      }
      this.currentQuantity++;
      this.$store.dispatch('addProductToOrder', {
        prodId: this.product.id,
        prodPrice: this.product.price,
        prodTime: this.product.time
      });
    },
    decrement() {
      if (this.currentQuantity <= 0) {
        return;
      }
      this.currentQuantity--;
      this.$store.dispatch('removeProductFromOrder', {
        prodId: this.product.id,
        prodPrice: this.product.price,
        prodTime: this.product.time
      });
    }
  },
  props: {
    product: {
      type: Object,
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      default: 0
    },
    category: {
      type: String,
      required: true
    }
  },
  components: {
    sushiForAdults: ForAdults
  }
};
</script>

<style lang="scss">
@import '../../assets/sass/global';
@import '../../assets/sass/base';

.product {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 4rem;
  align-items: center;
  justify-items: center;

  @media only screen and (max-width: $bp-tiny) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, max-content);
    grid-row-gap: 2rem;
  }
  
  padding: 1.5rem;
  border: 2px solid $color-grey-light-3;
  background-color: $color-white;

  &__image {
    position: relative;
  }

  &__photo {
    width: 20rem;
    height: auto;
  }

  &__info {
    justify-self: start;

    @media only screen and (max-width: $bp-tiny) {
      justify-self: center;
    }
  }

  &__description {
    font-size: 1.6rem;
    color: $color-grey-dark-1;
  }

  &__price {
    font: normal 4rem/1 $font-display;
    color: $color-quaternary;
  }

  &__order {
    display: grid;
    grid-template-columns: repeat(4, max-content);
    grid-column-gap: 1rem;
  }

  &__input {
    text-align: center;
    font-family: inherit;
    font-size: 3rem;
    color: $color-grey-dark-1;
    width: 10rem;
    border: 2px solid $color-grey-light-3;
    border-radius: $common-border-radius;
  }
}
.btn--product {
  padding-left: 0;
  padding-right: 0;
  width: 50px;

  @media only screen and (max-width: $bp-small) {
    width: 40px;
  }
}
</style>