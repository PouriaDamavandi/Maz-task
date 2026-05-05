<script setup lang="ts">
import MainLayout from '@/components/layouts/MainLayout.vue'
import Sidebar from '@/components/sidebar/AppSidebar.vue'

const categories = [
  { id: '1', name: 'Phones', count: 12 },
  { id: '2', name: 'Laptops', count: 8 },
]

function onSearch(val: string) {
  console.log('search:', val)
}

function onSort(val: string) {
  console.log('sort:', val)
}

function onCategory(val: string) {
  console.log('category:', val)
}
</script>

<template>
  <MainLayout>
    <Sidebar
      :categories="categories"
      @search="onSearch"
      @sort-change="onSort"
      @category-change="onCategory"
    />
  </MainLayout>
</template>
