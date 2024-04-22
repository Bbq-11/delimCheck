import { createRouter, createWebHistory } from 'vue-router';
import Calculating from '../pages/Precheck.vue';
import Home from '../pages/Home.vue';
import Results from '../pages/Result.vue';
import Users from '../pages/Usernames.vue';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home,
    },
    {
        name: 'Usernames',
        path: '/usernames',
        component: Users,
    },
    {
        name: 'Prechek',
        path: '/precheck',
        component: Calculating,
    },
    {
        name: 'Result',
        path: '/result',
        component: Results,
    },
];

export const router = createRouter({
    history: createWebHistory('/delim-check/'),
    routes,
});
