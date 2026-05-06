<script setup lang="ts">
import { computed } from 'vue'
import { useFilterStore } from '@/stores/filter.store'
import BaseInput from '../base/BaseInput.vue'

const store = useFilterStore()

const search = computed({
  get: () => store.search,
  set: (val: string) => store.setSearch(val),
})
</script>

<template>
  <BaseInput v-model="search" placeholder="Search..." />
</template>
