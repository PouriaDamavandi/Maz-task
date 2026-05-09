<!-- DesktopSidebar.vue -->
<script setup lang="ts">
import SidebarSearch from './SidebarSearch.vue'
import SidebarSort from './SidebarSort.vue'
import SidebarCategories from './SidebarCategories.vue'

import type { SortType } from '@/stores/filter.store'
import SidebarSwitch from './SidebarSwitch.vue'

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
</script>

<template>
  <aside class="sidebar">
    <SidebarSearch @search="emit('search', $event)" />
    <SidebarSwitch />

    <SidebarSort @change="emit('sort-change', $event)" />

    <SidebarCategories :categories="categories" @change="emit('category-change', $event)" />
  </aside>
</template>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: sticky;
}
</style>
