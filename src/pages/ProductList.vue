<script setup lang="ts">
import { onMounted, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import MainLayout from '@/components/layouts/MainLayout.vue'
import AppSidebar from '@/components/sidebar/AppSidebar.vue'
import ProductGrid from '@/components/product/ProductGrid.vue'
import ActiveFilters from '@/components/product/ActiveFilters.vue'
import BaseButton from '@/components/base/BaseButton.vue'

import { useProducts } from '@/composables/useProducts'
import { useFilterStore } from '@/stores/filter.store'
import type { FilterItem } from '@/types/filter'

const router = useRouter()
const route = useRoute()

const { products, categories, fetchProducts, loading, error } = useProducts()
const filterStore = useFilterStore()

// ✅ INIT (URL → STORE)
onMounted(() => {
  filterStore.setFromQuery(route.query)
  fetchProducts()
})

// ✅ STORE → URL
watch(
  () => ({
    search: filterStore.search,
    category: filterStore.category,
    sort: filterStore.sort,
    hideZero: filterStore.hideZeroPrice,
  }),
  (filters) => {
    const query = Object.fromEntries(
      Object.entries({
        search: filters.search,
        category: filters.category,
        sort: filters.sort,
        hideZero: filters.hideZero ? 'true' : '',
      }).filter(([, v]) => v),
    )

    router.replace({ query })
  },
  { deep: true },
)

// ✅ Filters UI
const filtersList = computed<FilterItem[]>(() => {
  const list: FilterItem[] = []

  if (filterStore.search) {
    list.push({ type: 'search', label: filterStore.search })
  }

  if (filterStore.category) {
    list.push({ type: 'category', label: filterStore.category })
  }

  if (filterStore.sort) {
    list.push({ type: 'sort', label: filterStore.sort })
  }

  return list
})

function onView(id: number) {
  router.push(`/products/${id}`)
}

function resetFilters() {
  filterStore.resetAll()
}
</script>

<template>
  <MainLayout>
    <div class="layout">
      <!-- Sidebar -->
      <AppSidebar
        :categories="categories"
        @search="filterStore.setSearch"
        @category-change="filterStore.setCategory"
        @sort-change="filterStore.setSort"
        @toggle-zero-price="filterStore.setHideZeroPrice"
      />

      <!-- Content -->
      <div class="content">
        <ActiveFilters :filters="filtersList" @remove="filterStore.clearFilter" />

        <!-- Loading -->
        <div v-if="loading">Loading...</div>

        <!-- Error -->
        <div v-else-if="error" class="error">
          <p>Something went wrong</p>
          <small>{{ error }}</small>
          <BaseButton @click="fetchProducts">Retry</BaseButton>
        </div>

        <!-- Empty -->
        <div v-else-if="products.length === 0" class="empty">
          <p>No results found</p>
          <BaseButton @click="resetFilters">Reset Filters</BaseButton>
        </div>

        <!-- Products -->
        <ProductGrid v-else :products="products" @view="onView" />
      </div>
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

.empty {
  text-align: center;
  margin-top: 40px;
}

.error {
  color: red;
}
</style>
