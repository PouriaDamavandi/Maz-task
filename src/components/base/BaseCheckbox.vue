<script setup lang="ts">
const { modelValue } = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

function onChange(e: Event) {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.checked)
}
</script>

<template>
  <input type="checkbox" :checked="modelValue" @change="onChange" />
</template>
