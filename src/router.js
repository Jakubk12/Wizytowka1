import { createRouter, createWebHistory,} from 'vue-router';
import ComponentHome from './pages/routercomponents/ComponentHome.vue';
import ComponentProjects from './pages/routercomponents/ComponentProjects.vue';
import ComponentAbout from './pages/routercomponents/ComponentAbout.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/routercomponents', 
            component: ComponentHome
        },
        {
            path: '/projects',
            component: ComponentProjects
        },
        {
            path: '/routercomponents/:id',
            component: ComponentAbout
        },
    ]
})
export default router;