<template>
  <sushi-menu-layout>
    <template slot="menu-title">Make order</template>
    <template slot="menu-navigation">
      <router-link to="/menu" class="menu-navigation btn btn--secondary">&larr; Menu</router-link>
    </template>
    <template slot="menu-content">
      <div class="order">
        <table v-if="orderedProducts.length > 0" class="order__table">
          <thead>
            <tr>
              <th class="textual-cell">Name</th>
              <th class="numeric-cell">Price</th>
              <th class="numeric-cell">Quantity</th>
              <th class="numeric-cell">Totals</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="prod in orderedProducts" :key="prod.id">
              <td class="textual-cell">{{ getProductData(prod.id).name  | capitalize }}</td>
              <td class="numeric-cell">{{ getProductData(prod.id).price | currency }}</td>
              <td class="numeric-cell">{{ prod.quantity }}</td>
              <td class="numeric-cell">{{ prod.quantity * getProductData(prod.id).price | currency }}</td>
            </tr>
          </tbody>
          <tfoot>
            <td colspan="4" class="order__total numeric-cell">
              Total: {{ total | currency }}
            </td>
          </tfoot>
        </table>
        <a
          href="#"
          class="btn btn--primary"
          @click.prevent="sendToKitchen()"
          v-if="orderedProducts.length > 0">Send to kitchen</a>
          <p class="order__empty" v-else>Your order is empty</p>
      </div>
    </template>
  </sushi-menu-layout>
</template>

<script>
import MenuLayout from '../shared/MenuLayout.vue';
import types from '../../store/types';
import products from '../../data/products';
import { openAlertHelper } from '../../helpers';

export default {
  data() {
    return {
      products
    }
  },
  computed: {
    orderedProducts() {
      return this.$store.getters[types.GET_ORDERED_PRODUCTS];
    },
    total() {
      return this.$store.getters[types.GET_TOTAL];
    }
  },
  methods: {
    getProductData(id) {
      for (let ctg in products) {
        const record = products[ctg].find(p => p.id === id);
        if (record) {
          return record;
        } 
      }
    },
    getPicUrl(id) {
      return require(`../../assets/img/products/${id}.jpg`);
    },
    sendToKitchen() {
      if (window.confirm('Is your order really ready?')) {
        this.$store.dispatch('sendToKitchen');
        const time = this.$store.getters[types.GET_ORDERED_TIME];
        openAlertHelper('Your order is sent to kitchen',
                        'Thank you! Your order will be ready in:',
                        { showButton: false, productTime: time });
      }
    }
  },
  components: {
    sushiMenuLayout: MenuLayout
  }
};
</script>

<style lang="scss">
@import '../../assets/sass/global';

.order {
  display: grid;
  grid-template-rows: repeat(2, max-content);
  grid-gap: 2rem;
  justify-items: end;

  padding-bottom: 10rem;

  &__photo {
    width: 8rem;
    height: auto;
  }

  &__table {
    width: 100%;
    font-size: 1.8rem;
    border-collapse: collapse;

    th,
    td {
      background-color: $color-white;
      padding: 1rem;
      border-bottom: 1px solid $color-grey-light-3;
    }
  }

  &__empty {
    font-size: 2.5rem;
    justify-self: start;
    color: $color-grey-dark-1;
  }

  &__total {
    font-size: 2rem;
    font-weight: bold;
  }
}
</style>