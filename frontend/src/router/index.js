import Vue from 'vue'
import Router from 'vue-router'
import Buku from '@/components/Buku'
import FormBuku from '@/components/FormBuku'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/buku',
      name: 'Buku',
      component: Buku
    },
    {
      path: '/buku/create',
      name: 'BukuCreate',
      component: FormBuku
    },
    {
      path: '/buku/:id',
      name: 'BukuUbah',
      component: FormBuku
    }
  ]
})
