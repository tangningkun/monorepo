import { createRouter, createWebHistory } from 'vue-router';
import { App } from 'vue';

export const constantRoutes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        component: () => import('@/pages/micro/home.vue'),
    },
    {
        path: '/hello',
        component: () => import('@/pages/micro/hello.vue'),
    },
    {
        path: '/about',
        component: () => import('@/pages/micro/about.vue'),
    },
];

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: constantRoutes,
});

// config router
// 配置路由器
export function setupRouter(app: App<Element>) {
    app.use(router);
}

// export { router };
