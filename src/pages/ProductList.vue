<script setup lang="ts">
import { useRouter } from 'vue-router'
import MainLayout from '@/components/layouts/MainLayout.vue'
import Sidebar from '@/components/sidebar/AppSidebar.vue'
import ProductGrid from '@/components/product/ProductGrid.vue'
import ActiveFilters from '@/components/product/ActiveFilters.vue'

import { useFilters } from '@/composables/useFilters'
import { computed, onMounted } from 'vue'

import type { FilterItem } from '@/types/filter'
import { useProductStore } from '@/stores/product.store'
import BaseButton from '@/components/base/BaseButton.vue'

const productStore = useProductStore()

onMounted(() => productStore.fetchProducts())

const products = computed(() => productStore.products)
const loading = computed(() => productStore.loading)
const error = computed(() => productStore.error)

const { search, sort, category, setSearch, setSort, setCategory, clearFilter } = useFilters()

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

      <div v-if="loading" class="skeleton-grid">
        <div v-for="i in 6" :key="i" class="skeleton-card" />
      </div>
      <ProductGrid v-else :products="products" @view="onView" />

      <div class="empty">
        <p>No results found</p>
        <BaseButton @click="clearFilter">Reset Filters</BaseButton>
      </div>

      <div v-if="error">{{ error }}</div>
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

.skeleton-card {
  height: 200px;
  background: #eee;
  border-radius: 12px;
}
</style>
