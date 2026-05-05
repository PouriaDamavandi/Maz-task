<script setup lang="ts">
import SidebarSection from './SidebarSection.vue'

type Category = {
  id: string
  name: string
  count: number
}

const { categories } = defineProps<{
  categories: Category[]
}>()

const emit = defineEmits<{
  (e: 'change', value: string): void
}>()
</script>

<template>
  <SidebarSection title="Categories">
    <div v-for="cat in categories" :key="cat.id" class="category" @click="emit('change', cat.id)">
      <span>{{ cat.name }}</span>
      <span>{{ cat.count }}</span>
    </div>
  </SidebarSection>
</template>

<style scoped>
.category {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
</style>
