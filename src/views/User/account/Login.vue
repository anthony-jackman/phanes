<script setup>
import { ref, watch } from 'vue';
import * as Yup from 'yup';

import BaseInput from '@/components/BaseInput.vue';
import { useAuthStore } from '@/stores';

const username = ref('');
const password = ref('');
const isSubmitting = ref(false);
const usernameError = ref('');
const passwordError = ref('');

const schema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required')
});

watch(username, async (newUsername) => {
  try {
    await schema.validateAt('username', { username: newUsername });
    passwordError.value = '';
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      usernameError.value = error.message;
    }
  }
});

watch(password, async (newPassword) => {
  try {
    await schema.validateAt('password', { password: newPassword });
    passwordError.value = '';
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      passwordError.value = error.message;
    }
  }
});
async function onSubmit() {
  isSubmitting.value = true;
  try {
    await schema.validate({ username: username.value, password: password.value });
    const authStore = useAuthStore();
    await authStore.login(username.value, password.value);
  } catch (error) {
    isSubmitting.value = false; // prevent form submission
    if (error instanceof Yup.ValidationError) {
      if (error.path === 'username') usernameError.value = error.message;
      if (error.path === 'password') passwordError.value = error.message;
    }
    return; // prevent form submission if entries are invalid
  }
  isSubmitting.value = false;
}
</script>

<template>
    <form @submit.prevent="onSubmit" class="login_box">
      <fieldset>
        <legend class="login_header">Please Login</legend>
        <div class="input_box">
          <BaseInput
            v-model="username"
            label="username"
            type="text"
            :error="usernameError"
          />
        </div>
        
        <div class="input_box">
          <BaseInput
            v-model="password"
            label="password"
            type="password"
            :error="passwordError"
          />
        </div>
      </fieldset>
      <!-- <div class="remember-forgot">
        <div class="remember-me">
          <input type="checkbox" id="remember">
          <label for="remember">Remember me</label>
        </div>

        <div class="forgot">
          <a href="#">Forgot password?</a>
        </div>
      </div> -->
      <button type="submit" class="input-submit">
        <span v-show="isSubmitting">Submitting...</span>
        <span v-show="!isSubmitting">Login</span>
      </button>
      <div class="register">
        <span>Don't have an account? <router-link to="register">Register</router-link></span>
      </div>
      
    </form>
</template>
