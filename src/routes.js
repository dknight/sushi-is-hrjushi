import SeatingPlan from './components/seating-plan/SeatingPlan.vue';
import MenuHome from './components/menu/MenuHome.vue';
import MenuCategories from './components/menu/MenuCategories.vue';
import MenuProducts from './components/menu/MenuProducts.vue';
import OrderHome from './components/order/OrderHome.vue';
import store from './store/store';
import types from './store/types';

const beforeEnter = (to, from, next) => {
  if(!store.getters[types.GET_RESERVED_TABLE].id) {
    next('/');
  } else {
    next();
  }
};

const routes = [
  {
    name: 'tables',
    path: '/',
    component: SeatingPlan,
  },
  {
    path: '/menu',
    component: MenuHome,
    beforeEnter,
    children: [
      {
        name: 'menu',
        path: '',
        component: MenuCategories,
        beforeEnter
      },
      {
        name: 'products',
        path: ':name',
        component: MenuProducts,
        beforeEnter
      },
      {
        path: '*',
        redirect: '/menu',
        beforeEnter
      }
    ],
  },
  {
    name: 'order',
    path: '/make-order',
    component: OrderHome
  }
];

export default routes;