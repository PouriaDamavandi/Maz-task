<script setup lang="ts">
import { useFilterStore } from '@/stores/filter.store'
import type { SortType } from '@/stores/filter.store'

import BaseAccordion from '../base/BaseAccordion.vue'
import BaseRadio from '../base/BaseRadio.vue'

const store = useFilterStore()

const options: { label: string; value: SortType }[] = [
  {
    label: 'تعداد: کم به زیاد',
    value: 'price-asc',
  },
  {
    label: 'تعداد: زیاد به کم',
    value: 'price-desc',
  },
  {
    label: 'رتبه: زیاد به کم',
    value: 'alphabetical',
  },
  {
    label: 'رتبه: کم به زیاد',
    value: 'rating',
  },
]
</script>

<template>
  <BaseAccordion>
    <template #header> مرتب سازی </template>

    <div class="sort-list">
      <label v-for="o in options" :key="o.value" class="sort-item">
        <BaseRadio v-model="store.sort" :value="o.value" />
        <span>{{ o.label }}</span>
      </label>
    </div>
  </BaseAccordion>
</template>

<style scoped>
.sort-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.sort-item {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  color: #6f7d98;
  font-size: 16px;
  gap:8px
}

.sort-item input {
  width: 22px;
  height: 22px;
  accent-color: #ef0a5f;
}
</style>
