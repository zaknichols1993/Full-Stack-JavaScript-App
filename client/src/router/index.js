import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Navbar from '@/components/Navbar'
import Login from '@/components/Login'
import ViewBeer from '@/components/ViewBeer/BeerIndex'
import Beers from '@/components/Beers/BeersIndex'
import CreateBeer from '@/components/CreateBeer'
import EditBeer from '@/components/EditBeer'
import DeleteBeer from '@/components/ViewBeer/DeleteBeer'
import SuccessRegister from '@/components/SuccessRegister'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/beers',
      name: 'beers', 
      component: Beers
    },
    {
      path: '/beers/create',
      name: 'beers-create',
      component: CreateBeer
    },
    {
      path: '/beers/:beerId',
      name: 'beer',
      component: ViewBeer
    },
    {
      path: '/beers/:beerId/edit',
      name: 'edit-beer',
      component: EditBeer
    },
    {
      path: '/beers/:beerId/delete',
      name: 'delete-beer',
      component: DeleteBeer
    },
    {
      path: '/register-success',
      name: 'register-success',
      component: SuccessRegister
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '*',
      redirect: '/beers'
    }
  ]
})
