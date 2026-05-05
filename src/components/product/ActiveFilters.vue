<script setup lang="ts">
import type { FilterItem } from '@/types/filter'

const { filters } = defineProps<{
  filters: FilterItem[]
}>()

const emit = defineEmits<{
  (e: 'remove', type: FilterItem['type']): void
}>()
</script>

<template>
  <div class="filters">
    <span v-for="f in filters" :key="f.type" class="chip" @click="emit('remove', f.type)">
      {{ f.label }} ✕
    </span>
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
