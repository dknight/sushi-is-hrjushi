<template>
  <sushi-menu-layout>
    <template slot="menu-content">
      <div class="menu-categories">
        <sushi-category
          v-for="(ctg, key) in products"
          :key="key"
          :name="key"
          :orderedProducts="countProductsByCategory(key)"
        >
        </sushi-category>
      </div>
    </template>
  </sushi-menu-layout>
</template>

<script>
import Category from '@/components/menu/Category.vue';
import products from '@/data/products';
import MenuLayout from '@/components/shared/MenuLayout.vue';
import types from '@/store/types';

export default {
  data() {
    return {
      products
    }
  },
  methods: {
    countProductsByCategory(categoryName) {
      const orderedProducts = this.$store.getters[types.GET_ORDERED_PRODUCTS];
      let cnt = 0;
      this.products[categoryName].map(p => {
        const record = orderedProducts.find(op => op.id === p.id);
        if (record) {
          cnt += record.quantity;
        }
      });
      return cnt;
    }
  },
  components: {
    sushiCategory: Category,
    sushiMenuLayout: MenuLayout
  }
};
</script>

<style lang="scss">
@import '../../assets/sass/global';
@import '../../assets/sass/base';

.menu-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
}
</style>