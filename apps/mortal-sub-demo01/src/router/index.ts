import { createWebHashHistory, createRouter } from 'vue-router';
// import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
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

// const base = qiankunWindow.__POWERED_BY_QIANKUN__ ? `${parentBase}${packagejson.name}` : '/app2';

// const base = '/app2';

export const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes,
});

// config router
// 配置路由器
export function setupRouter(app: App<Element>) {
    app.use(router);
}

// export { router };
