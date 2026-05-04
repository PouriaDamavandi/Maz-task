<script setup lang="ts">
defineProps<{
  modelValue: string
  placeholder?: string
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
  <input :value="modelValue" @input="onInput" :placeholder="placeholder" class="input" />
</template>
