<script setup lang="ts">
import type { Product } from '@/types/product'
import ProductCard from './ProductCard.vue'

defineProps<{
  products: Product[]
}>()

const emit = defineEmits(['view'])
</script>

<template>
  <div class="grid">
    <ProductCard
      v-for="item in products"
      :key="item.id"
      :product="item"
      @view="emit('view', $event)"
    />
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

/* Tablet */
@media (max-width: 1028px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
}

/* Mobile */
@media (max-width: 767px) {
  .grid {
    grid-template-columns: repeat(1, 1fr);
    gap: 8px;
  }
}
</style>
