// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'  // ← HASH
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/category/:name', name: 'Category', component: Category }
]

const router = createRouter({
  history: createWebHashHistory(),  // ← HASH MODE
  routes
})

export default router