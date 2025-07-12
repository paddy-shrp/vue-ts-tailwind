import { createRouter, createWebHistory } from 'vue-router'

// Example views (create these files or change to your components)
import Home from '../components/HelloWorld.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  // Add more routes here
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
