<script setup lang="ts">
import { computed } from 'vue'

import { useFilterStore } from '@/stores/filter.store'

import BaseAccordion from '../base/BaseAccordion.vue'
import BaseSwitch from '../base/BaseSwitch.vue'

const store = useFilterStore()

const enabled = computed({
  get: () => store.hideZeroPrice,
  set: (val: boolean) => store.setHideZeroPrice(val),
})
</script>

<template>
  <BaseAccordion>
    <template #header> کالاهای موجود </template>
    <div class="availability">
      <p>کالاهای موجود</p>
      <BaseSwitch v-model="enabled" />
    </div>
  </BaseAccordion>
</template>

<style scoped>
.availability {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
}
</style>
