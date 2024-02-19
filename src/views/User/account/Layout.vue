<script setup>
/*
The account layout component is the root component of the account section / feature, it contains the outer HTML for all /account pages and a <router-view /> for rendering the currently routed component.
*/
import { useAuthStore } from '@/stores';
import { router } from '@/router';

// redirect home if already logged in
const authStore = useAuthStore();
if (authStore.user) {
    router.push('/');
}
</script>

<template>
  <div class="wrapper">

      <!-- <div class="wrapper"> -->
        <router-view />
      <!-- </div> -->

  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
}
</style>