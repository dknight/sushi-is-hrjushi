import types from '@/store/types';
import tables from '@/data/tables';

export default  {
  fetchTables(context) {
    context.commit(types.FETCH_TABLES, tables);
  },
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
    context.commit(types.SEND_TO_KITCHEN)
  }
};
