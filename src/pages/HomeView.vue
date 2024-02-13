<script setup>
import { storeToRefs } from 'pinia';

import { useAuthStore } from '@/stores';

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
</script>

<template>
  <h1>Home Page</h1>
  <div v-if="user">
    <h1>Hi {{user.firstName}}!</h1>
    <p>You're logged in with Vue 3 + Pinia & JWT!!</p>
    <p><router-link to="/users">Manage Users</router-link></p>
  </div>
</template>
