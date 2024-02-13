<script setup>
import { Alert } from '@/components/UserComponents';
import { useAlertStore } from '@/stores';

const alertStore = useAlertStore();
const { alert } = storeToRefs(alertStore);
</script>

<template>
  <div class="app-container" :class="authStore.user && 'bg-light'">
    <!-- <Nav /> -->
    <Alert />
    <div class="container pt-4 pb-4">
        <router-view />
    </div>
  </div>
</template>