import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

async function InitAppAsync() {
    const app = createApp(App);

    app.mount('#app');
}
await InitAppAsync();
