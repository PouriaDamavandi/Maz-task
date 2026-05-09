<!-- BaseSwitch.vue -->
<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

function toggle() {
  emit('update:modelValue', !props.modelValue)
}
</script>

<template>
  <button class="switch" :class="{ active: modelValue }" type="button" @click="toggle">
    <span class="thumb">
      <span class="dot"></span>
    </span>
  </button>
</template>

<style scoped>
.switch {
  width: 52px;
  height: 28px;
  border: none;
  border-radius: 999px;
  background: #d8dce7;
  padding: 4px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition:
    background 0.25s ease,
    justify-content 0.25s ease;
  justify-content: flex-start;
}

.switch.active {
  background: #ef0a5f;
  justify-content: flex-end;
}

.thumb {
  width: 20px;
  height: 20px;
  border-radius: 999px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: #d7dce7;
}
.switch.active .dot {
  background: #ef0a5f;
}
</style>
