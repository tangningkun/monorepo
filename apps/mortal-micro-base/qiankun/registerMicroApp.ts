import { registerMicroApps } from 'qiankun';

export const apps = [
    {
        name: 'mortal-sub-demo01', // 子应用名称，跟package.json一致
        entry: '//localhost:3010', // 子应用入口，本地环境下指定端口
        container: '#sub-container', // 挂载子应用的dom
        activeRule: '/app/mortal-sub-demo01', // 路由匹配规则
        props: {} // 主应用与子应用通信传值
    },
    {
        name: 'mortal-sub-demo02',
        entry: '//localhost:3020',
        container: '#sub-container',
        activeRule: '/app/mortal-sub-demo02',
        props: {}
    },
    {
        name: 'mortal-sub-demo03',
        entry: '//localhost:3030',
        container: '#sub-container',
        activeRule: '/app/mortal-sub-demo03',
        props: {}
    }
];

export function setupRegisterMicroAsync() {
    registerMicroApps(apps);
}
