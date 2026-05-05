<script setup lang="ts">
import { useRouter } from 'vue-router'
import MainLayout from '@/components/layouts/MainLayout.vue'
import Sidebar from '@/components/sidebar/AppSidebar.vue'
import ProductGrid from '@/components/product/ProductGrid.vue'
import ActiveFilters from '@/components/product/ActiveFilters.vue'

const filters = ['Phone', 'Cheap']
const router = useRouter()

const categories = [
  { id: '1', name: 'Phones', count: 12 },
  { id: '2', name: 'Laptops', count: 8 },
]

const products = [
  { id: '1', title: 'Phone', image: 'https://via.placeholder.com/200' },
  { id: '2', title: 'Laptop', image: 'https://via.placeholder.com/200' },
]

function onRemoveFilter(f: string) {
  console.log('remove', f)
}

function onView(id: string | number) {
  router.push(`/products/${id}`)
}

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
    <!-- Sidebar -->
    <div class="sidebar">
      <Sidebar
        @search="onSearch"
        @sort-change="onSort"
        @category-change="onCategory"
        :categories="categories"
      />
    </div>

    <!-- Content -->
    <div class="content">
      <ActiveFilters :filters="filters" @remove="onRemoveFilter" />

      <ProductGrid :products="products" @view="onView" />
    </div>
  </MainLayout>
</template>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 24px;
}

.content {
  display: flex;
  flex-direction: column;
}
</style>
