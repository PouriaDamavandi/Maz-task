<script setup lang="ts">
import { useFilterStore } from '@/stores/filter.store'
import BaseRadio from '../base/BaseRadio.vue'

const store = useFilterStore()
</script>

<template>
  <label>
    <BaseRadio v-model="store.sort" value="price-asc" />
    Price ↑
  </label>

  <label>
    <BaseRadio v-model="store.sort" value="price-desc" />
    Price ↓
  </label>

  <label>
    <BaseRadio v-model="store.sort" value="alphabetical" />
    A → Z
  </label>

  <label>
    <BaseRadio v-model="store.sort" value="rating" />
    Rating
  </label>
</template>
