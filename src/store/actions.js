import Vue from 'vue';
import types from '@/store/types';

export default  {
  reserveTable(context, id) {
    context.commit(types.RESERVE_TABLE, id);
  },
  addProductToOrder(context, payload) {
    context.commit(types.ADD_PRODUCT_TO_ORDER, payload);
  },
  removeProductFromOrder(context, payload) {
    context.commit(types.REMOVE_PRODUCT_FROM_ORDER, payload);
  },
  sendToKitchen(context) {
    context.commit(types.SEND_TO_KITCHEN);
  },
  fetchTables(context) {
    Vue.http.get('tables.json')
      .then(resp => resp.json())
      .then(data => {
        if (data) {
          context.commit(types.FETCH_TABLES, data.tables);
        }
      });
  }
};
