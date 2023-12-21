<!-- ChatRoom.vue -->

<template>
    <div>
      <!-- Display the list of servers -->
      <div v-for="server in servers" :key="server.id" class="server-item">
        <router-link :to="{ name: 'server', params: { id: server.id }}">
          {{ server.name }}
        </router-link>
      </div>
  
      <!-- Form to create a new private server -->
      <form @submit.prevent="createServer">
        <label for="newServerName">Server Name:</label>
        <input v-model="newServerName" type="text" id="newServerName" required />
        <button type="submit">Create Server</button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const servers = ref([
    { id: 1, name: 'Public Server' },
    { id: 2, name: 'Private Server 1' },
  ]);
  
  const newServerName = ref('');
  const router = useRouter();
  
  const createServer = () => {
    // Create a new private server
    const newServer = { id: servers.value.length + 1, name: newServerName.value };
    servers.value.push(newServer);
    newServerName.value = '';
  
    // Redirect to the newly created server
    router.push({ name: 'server', params: { id: newServer.id } });
  };
  </script>
  
  <style scoped>
  /* Your styles here */
  </style>
  