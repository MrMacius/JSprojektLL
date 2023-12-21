<script setup lang="ts">
import { createRouter, createWebHistory } from 'vue-router';
import ChatRoom from './components/ChatRoom.vue';
import ChatInterface from './components/ChatInterface.vue';

const routes = [
  { path: '/', component: ChatRoom },
  { path: '/server/:id', component: ChatInterface, name: 'server' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})
</script>

<template>
  <div id="app">
    <header>
      <h1>QuickChat</h1>
    </header>
    <main>
      
    </main>
  </div>
</template>

<style>

</style>
