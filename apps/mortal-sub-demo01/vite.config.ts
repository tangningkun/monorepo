import { defineConfig, ConfigEnv, UserConfig } from 'vite';
import { createViteConfig } from '@setting/vite';
import qiankun from 'vite-plugin-qiankun';

export default defineConfig(async (config: ConfigEnv): Promise<UserConfig> => {
    var conf = await createViteConfig(config);

    var qiankunPlugins = qiankun('sub-vue', {
        useDevMode: true,
    });
    conf.plugins?.push(qiankunPlugins);
    // conf.base = '/app2/';
    return conf;
});
