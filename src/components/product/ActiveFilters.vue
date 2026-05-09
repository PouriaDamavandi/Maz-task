<!-- components/product/ActiveFilters.vue -->

<script setup lang="ts">
import { computed } from 'vue'
import type { FilterItem } from '@/types/filter'

const props = defineProps<{
  filters: FilterItem[]
}>()

const emit = defineEmits<{
  (e: 'remove', type: FilterItem['type']): void
}>()

const sortLabels: Record<string, string> = {
  'price-asc': 'Price ↑',
  'price-desc': 'Price ↓',
  alphabetical: 'A → Z',
  rating: 'Rating',
}

function getLabel(f: FilterItem) {
  if (f.type === 'sort') {
    return sortLabels[f.label] ?? ''
  }
  if (f.type === 'none-zero') {
    return 'فقط موجود'
  }

  return f.label || ''
}

const visibleFilters = computed(() =>
  props.filters
    .map((f) => ({
      ...f,
      resolvedLabel: getLabel(f),
    }))
    .filter((f) => f.resolvedLabel.trim().length > 0),
)
</script>

<template>
  <div v-if="visibleFilters.length" class="filters">
    <p class="title">فیلترهای اعمال شده</p>

    <div class="chips-list">
      <span v-for="f in visibleFilters" :key="f.type" class="chip" @click="emit('remove', f.type)">
        {{ f.resolvedLabel }}
        ✕
      </span>
    </div>
  </div>
</template>

<style scoped>
.filters {
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-radius: 16px;
  border: 1px solid #eee;
  gap: 12px;
  flex-wrap: wrap;
}

.title {
  font-size: 14px;
  font-weight: 600;
}

.chips-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.chip {
  background: #f5f5f5;
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 13px;
  cursor: pointer;
  transition: 0.2s;
}

.chip:hover {
  background: #ef394e;
  color: white;
}

@media (max-width: 599px) {
  .filters {
    display: none;
  }
}
</style>
