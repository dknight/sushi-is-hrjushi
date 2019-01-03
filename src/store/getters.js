import types from '@/store/types'

export default {
  [types.GET_ALL_TABLES]: state => state.tables,
  [types.GET_RESERVED_TABLE]: state => state.reserved,
  [types.GET_TOTAL]: state => state.order.total,
  [types.GET_ORDERED_PRODUCTS]: state => state.order.products,
  [types.GET_ORDERED_TIME]: state => state.order.productsTime
}