<template>
    <div class="main">
        <h2>Vue 微应用</h2>
        <router-link to="/home">home</router-link>|
        <router-link to="/about">about</router-link>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>
<script setup lang="ts"></script>

<style scoped>
    .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
    }
    .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.vue:hover {
        filter: drop-shadow(0 0 2em #42b883aa);
    }
</style>
