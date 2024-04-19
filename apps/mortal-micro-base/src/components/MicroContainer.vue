<!--
 * @ Author: TANGNK
 * @ Create Time: 2024-04-17 09:56:14
 * @ Modified by: TANGNK
 * @ Modified time: 2024-04-19 15:57:27
 * @ Description:微服务挂载应用
 -->

<template>
    <div class="micro-container" id="micro-container"></div>
</template>

<script setup lang="ts" name="MicroContainer">
import { start } from 'qiankun';
import { registerApps } from '@/utils/qiankun';

        if (!window.qiankunStarted) {
            window.qiankunStarted = true;
            registerApps();
            start({
                sandbox: {
                    experimentalStyleIsolation: true // 样式隔离
                }
            });
        }

};
</script>

<style lang="less"></style>
