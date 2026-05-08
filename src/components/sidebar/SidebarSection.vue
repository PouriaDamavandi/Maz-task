<script setup lang="ts">
import BaseAccordion from '@/components/base/BaseAccordion.vue'

defineProps<{
  title: string
}>()
</script>

<template>
  <BaseAccordion>
    <template #header>
      <div class="header">{{ title }}</div>
    </template>

    <div class="content">
      <slot />
    </div>
  </BaseAccordion>
</template>

<style scoped>
.header {
  font-weight: bold;
  cursor: pointer;
}
</style>
