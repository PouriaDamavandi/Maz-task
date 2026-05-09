<script setup lang="ts">
import { onMounted, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import AppLayout from '@/components/layouts/AppLayout.vue'
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

onMounted(() => {
  filterStore.setFromQuery(route.query)
  fetchProducts()
})

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

const filtersList = computed<FilterItem[]>(() => {
  const list: FilterItem[] = []

  if (filterStore.search) list.push({ type: 'search', label: filterStore.search })
  if (filterStore.category) list.push({ type: 'category', label: filterStore.category })
  if (filterStore.sort) list.push({ type: 'sort', label: String(filterStore.sort) })
  if (filterStore.hideZeroPrice) list.push({ type: 'none-zero', label: 'فقط موجود' })

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
  <AppLayout>
    <div class="page-layout">
      <!-- sidebar (hidden on mobile later via CSS or inside component) -->
      <AppSidebar :categories="categories" class="sidebar" />

      <div class="content">
        <ActiveFilters :filters="filtersList" @remove="filterStore.clearFilter" />

        <div v-if="loading">Loading...</div>

        <div v-else-if="error" class="error">
          <p>Something went wrong</p>
          <small>{{ error }}</small>
          <BaseButton @click="fetchProducts">Retry</BaseButton>
        </div>

        <div v-else-if="products.length === 0" class="empty">
          <p>No results found</p>
          <BaseButton @click="resetFilters">Reset Filters</BaseButton>
        </div>

        <ProductGrid v-else :products="products" @view="onView" />
      </div>
    </div>
  </AppLayout>
</template>

<style scoped>
.page-layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 16px;
  padding: 12px;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.empty,
.error {
  text-align: center;
  margin-top: 40px;
}

/* TABLET */
@media (max-width: 1024px) {
  .page-layout {
    grid-template-columns: 1fr;
  }
}

/* MOBILE */
@media (max-width: 600px) {
  .page-layout {
    padding: 8px;
    gap: 10px;
  }

  .content {
    gap: 10px;
  }
}
</style>
