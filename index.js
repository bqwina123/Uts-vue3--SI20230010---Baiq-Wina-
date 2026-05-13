import { createRouter, createWebHistory } from 'vue-router'

import Login from '../pages/Login.vue'
import Dashboard from '../pages/Dashboard.vue'
import BarangMasuk from '../pages/BarangMasuk.vue'
import BarangKeluar from '../pages/BarangKeluar.vue'

const routes = [
  {
    path: '/',
    component: Login,
  },

  {
    path: '/dashboard',
    component: Dashboard,
  },

  {
    path: '/barang-masuk',
    component: BarangMasuk,
  },

  {
    path: '/barang-keluar',
    component: BarangKeluar,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
