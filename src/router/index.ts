import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/weather?lat=50.4501&lon=30.5234&name=Kyiv' },
  { path: '/search', name: 'home', component: () => import('@/components/HomeSearch.vue') },
  { path: '/weather', name: 'weather', component: () => import('@/views/WeatherDetails.vue') }
]

export const router = createRouter({
  history: createWebHistory('/forecast-app/'),  // Add base path here
  routes
})