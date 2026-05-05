<script setup lang="ts">
type Crumb = {
  label: string
  link?: string
}

defineProps<{
  items: Crumb[]
}>()
</script>

<template>
  <nav class="breadcrumb">
    <span v-for="(item, index) in items" :key="index">
      <span class="crumb">
        <router-link v-if="item.link && index !== items.length - 1" :to="item.link">
          {{ item.label }}
        </router-link>

        <!-- Last crumb (or items with no link) as plain text -->
        <span v-else>
          {{ item.label }}
        </span>
      </span>

      <span v-if="index !== items.length - 1"> > </span>
    </span>
  </nav>
</template>

<style scoped>
.breadcrumb {
  margin-bottom: 24px;
  color: var(--text-muted);
}
</style>
