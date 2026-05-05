<script setup lang="ts">
type Product = {
  id: string
  title: string
  image: string
}

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

<script lang="ts">
import ProductCard from './ProductCard.vue'
export default { components: { ProductCard } }
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

/* Tablet */
@media (max-width: 1028px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
}
</style>
