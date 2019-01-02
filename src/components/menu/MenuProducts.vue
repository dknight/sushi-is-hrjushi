<template>
  <sushi-menu-layout>
    <template slot="menu-content">
      <div class="menu-products">
        <sushi-product
          v-for="product in products[currentCategory]"
          :key="product.id"
          :product="product"
          :quantity="getProductQuantity(product.id)"
          :category="currentCategory">
          </sushi-product>
      </div>
    </template>
    <template slot="menu-navigation">
      <router-link
        to="/menu"
        class="menu-navigation btn btn--secondary"
      >&larr; Categories</router-link>
    </template>
    <template slot="menu-title">
      <span>Menu - {{ currentCategory| capitalize }}</span>
    </template>
  </sushi-menu-layout>
</template>

<script>
import MenuLayout from '../shared/MenuLayout.vue';
import Product from './Product';
import products from '../../data/products';
import types from '../../store/types';

export default {
  data() {
    return {
      products
    };
  },
  computed: {
    currentCategory() {
      return this.$route.params.name;
    },
    orderedProducts() {
      return this.$store.getters[types.GET_ORDERED_PRODUCTS];
    }
  },
  methods: {
    getProductQuantity(id) {
      const record = this.orderedProducts.find(el => el.id === id);
      if (record) {
        return record.quantity;
      } else {
        return 0;
      }
    }
  },
  components: {
    sushiMenuLayout: MenuLayout,
    sushiProduct: Product
  }
}
</script>

<style lang="scss">
@import '../../assets/sass/global';

.menu-products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
  grid-gap: 3rem;
}
</style>
