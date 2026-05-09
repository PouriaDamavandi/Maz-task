<script setup lang="ts">
import { ref, computed } from 'vue'
import { useFilterStore, type SortType } from '@/stores/filter.store'

import BaseButton from '../base/BaseButton.vue'
import BaseInput from '../base/BaseInput.vue'

type Category = {
  id: string
  name: string
  count: number
}

const props = defineProps<{
  categories: Category[]
}>()

const store = useFilterStore()

const showPanel = ref(false)
const categorySearch = ref('')

const sorts: { label: string; value: SortType }[] = [
  { label: 'Price ↑', value: 'price-asc' },
  { label: 'Price ↓', value: 'price-desc' },
  { label: 'A → Z', value: 'alphabetical' },
  { label: 'Rating', value: 'rating' },
]

const filteredCategories = computed(() => {
  const q = categorySearch.value.trim().toLowerCase()
  if (!q) return props.categories
  return props.categories.filter((c) => c.name.toLowerCase().includes(q))
})

function closePanel() {
  showPanel.value = false
  categorySearch.value = ''
}

function clearCategory() {
  store.setCategory('')
}
</script>

<template>
  <div class="mobile-filters">
    <!-- FILTER BAR -->
    <div class="filter-bar">
      <!-- SEARCH -->
      <BaseInput v-model="store.search" placeholder="جستجو کنید ..." />

      <!-- CHIPS -->
      <div class="chips-rail">
        <BaseButton class="chip primary" @click="showPanel = true"> فیلترها </BaseButton>

        <BaseButton
          class="chip"
          :class="{ active: store.hideZeroPrice }"
          @click="store.setHideZeroPrice(!store.hideZeroPrice)"
        >
          {{ store.hideZeroPrice ? 'فقط موجودها' : 'همه' }}
        </BaseButton>

        <BaseButton
          v-for="s in sorts"
          :key="s.value"
          class="chip"
          :class="{ active: store.sort === s.value }"
          @click="store.setSort(s.value)"
        >
          {{ s.label }}
        </BaseButton>
      </div>
    </div>

    <!-- OVERLAY -->
    <div v-if="showPanel" class="overlay" @click.self="closePanel">
      <div class="panel">
        <!-- HEADER -->
        <div class="panel-header">
          <h3>فیلترها</h3>
          <button class="close" @click="closePanel">✕</button>
        </div>

        <!-- SEARCH -->
        <div class="search-wrapper">
          <BaseInput v-model="categorySearch" placeholder="Search categories..." />
        </div>

        <!-- ACTIONS -->
        <div class="panel-actions">
          <BaseButton class="action-btn" @click="clearCategory"> پیش فرض </BaseButton>

          <BaseButton class="action-btn primary-btn" @click="closePanel"> تایید </BaseButton>
        </div>

        <!-- TITLE -->
        <div class="section-title">دسته بندی ها</div>

        <!-- CATEGORY LIST -->
        <div class="category-list">
          <button
            v-for="cat in filteredCategories"
            :key="cat.id"
            class="cat-item"
            :class="{ active: store.category === cat.id }"
            @click="store.setCategory(cat.id)"
          >
            <span>{{ cat.name }}</span>
            <span class="count">{{ cat.count }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ROOT */
.mobile-filters {
  position: sticky;
  top: 0;
  z-index: 50;
  background: white;
  border-bottom: 1px solid #eee;
  border-radius: 16px;
  overflow: hidden;
}

/* FILTER BAR */
.filter-bar {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 12px 14px;
}

/* CHIP RAIL */
.chips-rail {
  display: flex;
  gap: 10px;

  overflow-x: auto;
  overflow-y: hidden;

  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;

  padding-bottom: 4px;
}

.chips-rail::-webkit-scrollbar {
  display: none;
}

/* CHIP */
.chip {
  flex-shrink: 0;
  white-space: nowrap;

  padding: 10px 14px;
  border-radius: 999px;

  border: 1px solid #e5e5e5;
  background: white;

  font-size: 13px;

  scroll-snap-align: start;

  transition: 0.2s ease;
}

.chip.active {
  background: #ef394e;
  color: white;
  border-color: #ef394e;
}

.chip.primary {
  background: #111;
  color: white;
  border: none;
}

/* OVERLAY */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);

  display: flex;
  justify-content: center;
  align-items: flex-end;

  backdrop-filter: blur(4px);
}

/* PANEL */
.panel {
  width: 100%;
  max-width: 520px;

  background: white;
  border-radius: 18px 18px 0 0;

  padding: 16px 16px 24px;

  max-height: 85vh;
  overflow-y: auto;

  animation: slideUp 0.25s ease-out;
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0.7;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* HEADER */
.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 16px;

  position: sticky;
  top: 0;
  background: white;
  padding-bottom: 10px;
}

.close {
  width: 42px;
  height: 42px;

  border-radius: 50%;
  border: none;

  background: #f5f5f5;
  cursor: pointer;
}

/* SEARCH */
.search-wrapper {
  margin-bottom: 16px;
}

/* ACTIONS */
.panel-actions {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.action-btn {
  flex: 1;
  border-radius: 12px;
}

.primary-btn {
  background: #111;
  color: white;
}

/* SECTION TITLE */
.section-title {
  font-size: 12px;
  color: #777;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* CATEGORY LIST */
.category-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.cat-item {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px;
  border-radius: 16px;

  border: 1px solid #eee;

  cursor: pointer;
  transition: 0.2s;
}

.cat-item.active {
  background: #ef394e;
  color: white;
  border-color: #ef394e;
}

.count {
  opacity: 0.7;
  font-size: 12px;
}


</style>
