import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { setupRouter } from '@/router';
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';

async function InitAppAsync() {
    const app = createApp(App);
    if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
        console.log('init app');
        setupRouter(app);
        app.mount('#app');
    } else {
        console.log('init quankun app');
        renderWithQiankun({
            mount(props: any) {
                setupRouter(app);
                app.mount(props.container?.querySelector('#app'));
            },
            bootstrap() {},
            update() {},
            unmount() {
                app?.unmount();
            },
        });
    }
}

await InitAppAsync();
