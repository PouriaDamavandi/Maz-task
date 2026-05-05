<script setup lang="ts">
import SidebarSearch from './SidebarSearch.vue'
import SidebarSort from './SidebarSort.vue'
import SidebarCategories from './SidebarCategories.vue'

type Category = {
  id: string
  name: string
  count: number
}

const { categories } = defineProps<{
  categories: Category[]
}>()

const emit = defineEmits(['search', 'sort-change', 'category-change'])
</script>

<template>
  <aside class="sidebar">
    <SidebarSearch @search="emit('search', $event)" />

    <SidebarSort @change="emit('sort-change', $event)" />

    <SidebarCategories :categories="categories" @change="emit('category-change', $event)" />
  </aside>
</template>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
