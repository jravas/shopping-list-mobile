
export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('pages/AppHome')
  },
  {
    path: '/shopping-list',
    name: 'Shopping List',
    component: () => import('pages/ShoppingList')
  },
  {
    path: '/stock-list',
    name: 'Stock',
    component: () => import('pages/StockList')
  },
  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
