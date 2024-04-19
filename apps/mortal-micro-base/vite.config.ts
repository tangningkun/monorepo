import { ConfigEnv, loadEnv, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default ({ command, mode, isSsrBuild, isPreview }: ConfigEnv): UserConfig => {
    console.log('command==>', command);
    console.log('mode==>', mode);
    console.log('isSsrBuild==>', isSsrBuild);
    console.log('isPreview==>', isPreview);
    console.log('process===>', process.env.npm_lifecycle_script);

    const root = process.cwd(); //根目录
    const env = loadEnv(mode, root); // loadEnv读取的布尔类型是一个字符串。此函数可以转换为布尔类型
    console.log('env==>', env);
    // const isBuild = command === 'build';

    return {
        server: {
            // 默认为'127.0.0.1'，如果将此设置为 `0.0.0.0` 或者 `true` 将监听所有地址，包括局域网和公网地址
            host: true,
            //项目端口号
            port: 3100,
            /**自动打开浏览器页面 */
            open: true
            // 从.env加载代理配置
            // proxy: createProxy(VITE_PROXY)
        },
        /**
         * Array of vite plugins to use.
         * vite插件数组。
         */
        plugins: [vue()]
    };
};
