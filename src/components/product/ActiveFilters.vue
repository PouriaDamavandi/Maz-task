<script setup lang="ts">
defineProps<{
  filters: string[]
}>()

const emit = defineEmits<{
  (e: 'remove', value: string): void
}>()
</script>

<template>
  <div class="filters">
    <span v-for="f in filters" :key="f" class="chip" @click="emit('remove', f)"> {{ f }} ✕ </span>
  </div>
</template>

<style scoped>
.filters {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.chip {
  background: var(--bg-light);
  padding: 6px 10px;
  border-radius: 20px;
  cursor: pointer;
}
</style>
