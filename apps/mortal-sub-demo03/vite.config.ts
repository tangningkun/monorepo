import { defineConfig, ConfigEnv, UserConfig } from 'vite';
import { createViteConfig } from '@setting/vite';

export default defineConfig(async (config: ConfigEnv): Promise<UserConfig> => {
    return await createViteConfig(config);
});
