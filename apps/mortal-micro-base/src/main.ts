import { createApp } from 'vue';
import '@/style.css';
import App from '@/App.vue';
import { setupRouter } from '@/router';
import { start } from 'qiankun';
import { setupRegisterMicroAsync } from '@/utils/qiankun';

async function InitAppAsync() {
    const app = createApp(App);

    setupRouter(app);

    app.mount('#app');

    if (!(window as any).qiankunStarted) {
        console.log('qiankun instance');
        (window as any).qiankunStarted = true;
        setupRegisterMicroAsync();
        start({
            sandbox: {
                /**
                 *样式隔离
                 */
                experimentalStyleIsolation: true,
            },
        });
    }
}
await InitAppAsync();
