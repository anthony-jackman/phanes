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
  <div class="container">
    <div class="row">
      <div class="col-sm-8 offset-sm-2 mt-5">
        <router-view />
      </div>
    </div>
  </div>
</template>