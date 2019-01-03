import types from '@/store/types';

export default {
  [types.FETCH_TABLES]: (state, tables) => state.tables = tables,
  [types.RESERVE_TABLE]: (state, payload) => {
    state.reserved = {
      id: payload,
      at: Date.now()
    }
  },
  [types.ADD_PRODUCT_TO_ORDER]: (state, { prodId, prodPrice, prodTime }) => {
    const record = state.order.products.find(el => el.id === prodId);
    if (record) {
      record.quantity++;
    } else {
      state.order.products.push({
        id: prodId,
        quantity: 1
      });
    }
    state.order.total += prodPrice;
    state.order.productsTime += prodTime;
  },
  [types.REMOVE_PRODUCT_FROM_ORDER]: (state, { prodId, prodPrice, prodTime }) => {
    const record = state.order.products.find(el => el.id === prodId);
    if (record.quantity > 1) {
      record.quantity--;
    } else {
      const recordIndex = state.order.products.indexOf(record);
      state.order.products.splice(recordIndex, 1);
    }
    state.order.total -= prodPrice;
    state.order.productsTime -= prodTime;
  },
  [types.SEND_TO_KITCHEN]: state => {
    state.order.products = [];
    state.order.total = 0;
    state.order.ordered_at = Date.now();
  }
};