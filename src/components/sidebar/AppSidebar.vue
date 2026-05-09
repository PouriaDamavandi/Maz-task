<!-- AppSidebar.vue -->
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

import DesktopSidebar from './DesktopSidebar.vue'
import MobileFilters from './MobileFilters.vue'

import type { SortType } from '@/stores/filter.store'

type Category = {
  id: string
  name: string
  count: number
}

defineProps<{
  categories: Category[]
}>()

const emit = defineEmits<{
  (e: 'search', value: string): void
  (e: 'sort-change', value: SortType): void
  (e: 'category-change', value: string): void
}>()

const isMobile = ref(false)

function updateScreen() {
  isMobile.value = window.innerWidth <= 1024
}

onMounted(() => {
  updateScreen()
  window.addEventListener('resize', updateScreen)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScreen)
})
</script>

<template>
  <MobileFilters v-if="isMobile" :categories="categories" />

  <DesktopSidebar
    v-else
    :categories="categories"
    @search="emit('search', $event)"
    @sort-change="emit('sort-change', $event)"
    @category-change="emit('category-change', $event)"
  />
</template>

