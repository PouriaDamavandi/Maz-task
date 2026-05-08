<script setup lang="ts">
const { value, modelValue } = defineProps<{
  modelValue: string
  value: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

function onChange() {
  emit('update:modelValue', value)
}
</script>

<template>
  <input type="radio" :checked="modelValue === value" @change="onChange" />
</template>
