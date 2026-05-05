<script setup lang="ts">
import { useRouter } from 'vue-router'
import MainLayout from '@/components/layouts/MainLayout.vue'
import Sidebar from '@/components/sidebar/AppSidebar.vue'
import ProductGrid from '@/components/product/ProductGrid.vue'
import ActiveFilters from '@/components/product/ActiveFilters.vue'

import { useProducts } from '@/composables/useProducts'
import { useFilters } from '@/composables/useFilters'
import { computed, onMounted } from 'vue'
import type { FilterItem } from '@/types/filter'

const { products, fetchProducts } = useProducts()

const { search, sort, category, setSearch, setSort, setCategory, clearFilter } = useFilters()

onMounted(() => {
  fetchProducts()
})

const filtersList = computed<FilterItem[]>(() => {
  const list: FilterItem[] = []

  if (search.value) {
    list.push({ type: 'search', label: search.value })
  }

  if (category.value) {
    list.push({ type: 'category', label: category.value })
  }

  if (sort.value) {
    list.push({ type: 'sort', label: sort.value })
  }

  return list
})

const router = useRouter()

const categories = [
  { id: '1', name: 'Phones', count: 12 },
  { id: '2', name: 'Laptops', count: 8 },
]

function onView(id: string | number) {
  router.push(`/products/${id}`)
}
</script>

<template>
  <MainLayout>
    <!-- Sidebar -->
    <div class="sidebar">
      <Sidebar
        @search="setSearch"
        @sort-change="setSort"
        @category-change="setCategory"
        :categories="categories"
      />
    </div>

    <!-- Content -->
    <div class="content">
      <ActiveFilters :filters="filtersList" @remove="clearFilter" />

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
