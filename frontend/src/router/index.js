import { createRouter, createWebHistory } from 'vue-router'
import Login from "../components/Login.vue"
import Register from '../components/Register.vue'
import Employee from '../components/Employee.vue'
import Home from '../components/Home.vue'
import NavBar from '../components/Navbar.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/employee',
      name: 'Employee',
      component: Employee
    },
  //   {
  //     path: '/about',
  //     name: 'about',
  //     // route level code-splitting
  //     // this generates a separate chunk (About.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () => import('../views/AboutView.vue')
  //   }
  ]
})

export default router
