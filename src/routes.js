import { createRouter, createWebHistory } from "vue-router";
import Projects from './views/Projects.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'

const routes = [
    {
        path: '/Projects',
        component: Projects
    },
    {
        path: '/',
        component: Home
    },
    {
        path: '/About',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export { router };
  