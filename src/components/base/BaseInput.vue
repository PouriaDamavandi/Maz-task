<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  modelValue: string
  placeholder?: string
  rightIcon?: Component
  leftIcon?: Component
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

function onInput(event: Event) {
  const target = event.target

  if (!(target instanceof HTMLInputElement)) return

  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="input-wrapper">
    <component :is="rightIcon" />
    <input :value="modelValue" :placeholder="placeholder" class="input" @input="onInput" />
    <component :is="leftIcon" />
  </div>
</template>

<style scoped>
.input-wrapper {
  display: flex;
  align-items: center;
  background: #f7f7f7;
  border: 1px solid #e7e7e7;
  border-radius: 14px;
  padding: 0 14px;
  transition: 0.2s;
  gap: 8px;
}

.input-wrapper:focus-within {
  border-color: #ef394e;
  background: white;
  box-shadow: 0 0 0 4px rgba(239, 57, 78, 0.08);
}

.icon {
  color: #999;
  flex-shrink: 0;
  margin-right: 10px;
}

.input {
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  padding: 14px 0;
  font-size: 14px;
  color: #222;
}

.input::placeholder {
  color: #999;
}
</style>
