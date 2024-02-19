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

<style scoped>
.login_box {
  position: relative;
  width: 450px;
  backdrop-filter: blur(25px);
  border: 2px solid var(--primary-color);
  border-radius: 15px;
  padding: 7.5em 2.5em 4em 2.5em;
  color: var(--second-color);
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
}
.login_header {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  width: 140px;
  height: 70px;
  border-radius: 0 0 20px 20px;
  font-size: 24px;
  /* color: var(--black-color); */
  color: black;
}
.login-header::before {
  content: "";
  position: absolute;
  top: 0;
  left: -30px;
  width: 30px;
  height: 30px;
  border-top-right-radius: 50%;
  background: transparent;
  box-shadow: 15px 0 0 0 var(--primary-color);
}

.login-header::after {
  content: "";
  position: absolute;
  top: 0;
  right: -30px;
  width: 30px;
  height: 30px;
  border-top-left-radius: 50%;
  background: transparent;
  box-shadow: -15px 0 0 0 var(--primary-color); /* Removed space before --primary-color */
}
.input_box {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
}
.input_box input {
  width: 100%;
  height: 55px;
  font-size: 16px;
  background: transparent;
  color: var(--secondary-color);
  padding-inline: 20px 50px;
  border: 2px solid var(--primary-color);
  border-radius: 30px;
  outline: none;
}
.input_box label {
  margin-bottom: 10px;
}
.input_box .label {
  position: absolute;
  top: 15px;
  left: 20px;
  transition: 0.2s;
  text-transform: capitalize;
}
.input-field:focus ~ .label,
.input-field:valid .label {
  position: absolute;
  top: -10px;
  left: 20px;
  font-size: 14px;
  background-color: var(--primary-color);
  border-radius: 30px;
  color: var(--black-color);
  padding: 0 10px;
}
/* .icon {
  position: absolute;
  top: 18px;
  right: 25px;
  font-size: 20px;
}

.remember-forgot {
  display: flex;
  justify-content: space-between;
  font-size: 15px;
} */
.input-submit {
  width: 100%;
  height: 50px;
  background: #ececec;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s;
}
.input-submit:hover {
  background: var(--second-color);
}
.register {
  text-align: center;
}

.register a {
  font-weight: 500;
}

@media only screen and (max-width: 564px) {
  .wrapper {
    padding: 20px;
  }
  .login_box {
    padding: 7.5em 1.5em 4em 1.5em;
  }
}

</style>
