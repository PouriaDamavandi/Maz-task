<script setup lang="ts">
import type { Product } from '@/types/product'
import BaseButton from '../base/BaseButton.vue'

const { product } = defineProps<{
  product: Product
}>()

const emit = defineEmits<{
  (e: 'view', id: string): void
}>()
</script>

<template>
  <div class="card">
    <img :src="product.image" class="image" />

    <h3 class="title">{{ product.title }}</h3>

    <BaseButton class="btn" @click="emit('view', product.id.toString())">View Details</BaseButton>
  </div>
</template>

<style scoped>
.card {
  background: white;
  padding: 16px;
  border-radius: 12px;
}

.card:hover {
  transform: translateY(-4px);
  transition: 0.2s;
}

.image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.title {
  margin: 12px 0;
}

.btn {
  background: var(--btn-primary);
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
}
</style>
