<!--
 * @ Author: TANGNK
 * @ Create Time: 2024-04-17 09:56:14
 * @ Modified by: TANGNK
 * @ Modified time: 2024-05-31 15:06:01
 * @ Description:微服务挂载应用
 -->

<template>
    <div class="micro-container" id="micro-container"></div>
</template>

<script setup lang="ts" name="MicroContainer">
    import { start } from 'qiankun';
    import { setupRegisterMicroAsync } from '@/utils/qiankun';
    if (!(window as any).qiankunStarted) {
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
</script>

<style lang="less"></style>
