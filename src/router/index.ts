import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/search' },
  { path: '/search', name: 'home', component: () => import('@/components/HomeSearch.vue') },
  { path: '/weather', name: 'weather', component: () => import('@/views/WeatherDetails.vue') }
]

export const router = createRouter({
  history: createWebHistory('/forecast-app/'),  // Add base path here
  routes
})