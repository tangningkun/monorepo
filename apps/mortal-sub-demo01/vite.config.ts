import { defineConfig, ConfigEnv, UserConfig } from 'vite';
import { createViteConfig } from '@setting/vite';

export default defineConfig(async (config: ConfigEnv): Promise<UserConfig> => {
    var conf = await createViteConfig(config);
    conf.plugins?.push();
    return conf;
});
