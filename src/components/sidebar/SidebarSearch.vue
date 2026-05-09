<script setup lang="ts">
import { ref, watch } from 'vue'

import { useFilterStore } from '@/stores/filter.store'

import BaseInput from '../base/BaseInput.vue'
import BaseButton from '../base/BaseButton.vue'
import BaseAccordion from '../base/BaseAccordion.vue'

import IconSearch from '../icons/IconSearch.vue'

const store = useFilterStore()

// local state ONLY
const search = ref(store.search)

// sync if store changes externally
watch(
  () => store.search,
  (val) => {
    search.value = val
  },
)

function submitSearch() {
  store.setSearch(search.value)
}

function clearSearch() {
  search.value = ''
  store.setSearch('')
}
</script>

<template>
  <BaseAccordion>
    <template #header> فیلتر و جستجو </template>

    <div class="search-wrapper">
      <div class="input-box">
        <BaseInput
          v-model="search"
          placeholder="جستجو کنید..."
          :right-icon="IconSearch"
          @keyup.enter="submitSearch"
        />

        <BaseButton v-if="search" class="clear-btn" @click="clearSearch"> ✕ </BaseButton>
      </div>

      <BaseButton class="search-btn" @click="submitSearch"> جستجو </BaseButton>
    </div>
  </BaseAccordion>
</template>

<style scoped>
.search-wrapper {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.input-box {
  position: relative;
}

.clear-btn {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 999px;
  border: none;
  z-index: 10;
}

.search-btn {
  height: 54px;

  border-radius: 18px;

  background: #ef0a5f;

  color: white;

  font-weight: 700;

  border: none;

  font-size: 15px;

  transition: 0.2s;
}

.search-btn:hover {
  opacity: 0.9;
}
</style>
