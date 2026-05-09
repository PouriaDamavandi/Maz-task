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
  gap: 16px;

  /* fluid responsive grid */
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

/* tablets */
@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 14px;
  }
}

/* mobile */
@media (max-width: 600px) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 10px;
  }
}

/* very small phones */
@media (max-width: 380px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
