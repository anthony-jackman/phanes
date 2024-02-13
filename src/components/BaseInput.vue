<script setup>
import { ref, computed, defineEmits } from 'vue';
import { v4 as uuidv4 } from 'uuid';

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  },
  error: {
    type: String,
    default: ''
  }
});

let modelValue = computed(() => props.modelValue);
let uuid = uuidv4();

const emit = defineEmits(['update:modelValue']);

const updateModelValue = ($event) => {
  emit('update:modelValue', $event.target.value);
};
</script>

<template>
  <input
    v-bind="$attrs"
    :value="modelValue"
    @input="updateModelValue"
    :id='uuid'
    :aria-describedby="error ? `${uuid}-error` : null"
    :aria-invalid="error ? true : null"
    class="input-field"
  />
  <label :for="uuid" v-if="label" class="label">{{ label }}</label>
  <div 
    v-if='error' 
    class="errorMessage"
    :id="`${uuid}-error`"
    aria-live="assertive"
    role="alert"
  >
    {{ error }}
  </div>
</template>
