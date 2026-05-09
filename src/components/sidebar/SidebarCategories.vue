<script setup lang="ts">
import { useFilterStore } from '@/stores/filter.store'

import BaseAccordion from '../base/BaseAccordion.vue'
import BaseCheckbox from '../base/BaseCheckbox.vue'

type Category = {
  id: string
  name: string
  count: number
}

defineProps<{
  categories: Category[]
}>()

const store = useFilterStore()

function toggleCategory(id: string) {
  store.setCategory(store.category === id ? '' : id)
}
</script>

<template>
  <BaseAccordion>
    <template #header> دسته بندی </template>
    <div class="categories">
      <div
        v-for="cat in categories"
        :key="cat.id"
        class="category"
        :class="{ active: store.category === cat.id }"
        role="button"
        tabindex="0"
        @click="toggleCategory(cat.id)"
        @keydown.enter="toggleCategory(cat.id)"
        :aria-checked="store.category === cat.id"
      >
        <BaseCheckbox
          :modelValue="store.category === cat.id"
          @update:modelValue="() => toggleCategory(cat.id)"
        />

        <div class="name">
          {{ cat.name }}
        </div>

        <div class="count">
          {{ cat.count }}
        </div>
      </div>
    </div>
  </BaseAccordion>
</template>

<style scoped>
.categories {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 16px;
}

.category {
  display: grid;
  grid-template-columns: 40px 1fr 20px;
  align-items: center;
  cursor: pointer;
}

.count {
  width: 24px;
  height: 24px;
  border-radius: 6px;
  background: #182033;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
}

.name {
  color: #6e7b97;
  font-size: 16px;
  text-align: right;
}

.category input {
  width: 22px;
  height: 22px;

  accent-color: #ef0a5f;
}

.category.active .count {
  background: #ef0a5f;
}

.category.active .name {
  color: #ef0a5f;
  font-weight: 700;
}
</style>
