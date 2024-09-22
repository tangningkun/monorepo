import { createRouter, createWebHistory } from 'vue-router';
import { App } from 'vue';

const microRouters = [
    {
        // path值必须与微应用中，路由前缀的`${parentBase}${packagejson.name}`中的${packagejson.name}值相同,
        // 否则访问会出错，${parentBase}为主应用部署的目录路径，后面内容中会讲
        path: '/app/mortal-sub-demo01/',
        // component: Layout,
        name: 'mortal-sub-demo01',
        meta: { title: '微应用测试1', icon: 'dashboard' },
        children: [
            // 想要显示的微应用路由，都需要在主应用中注册
            // {
            //     path: 'hello',
            //     component: () => import('@/components/MicroContainer.vue'), // 所有路由都使用同一个vue组件
            //     hidden: false,
            //     name: 'app2-hello',
            //     meta: { title: 'app2-hello', icon: 'dashboard' },
            // },
            {
                path: 'home',
                component: () => import('@/components/MicroContainer.vue'),
                name: 'mortal-sub-demo01-home',
                meta: { title: 'app2-home', icon: 'dashboard' },
            },
            {
                path: 'about',
                component: () => import('@/components/MicroContainer.vue'),
                name: 'mortal-sub-demo01-about',
                meta: { title: 'app2-about', icon: 'dashboard' },
            },
        ],
    },
];
export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: microRouters,
});

// config router
// 配置路由器
export function setupRouter(app: App<Element>) {
    app.use(router);
}
