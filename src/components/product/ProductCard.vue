<script setup lang="ts">
type Product = {
  id: string
  title: string
  image: string
}

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

    <button class="btn" @click="emit('view', product.id)">View Details</button>
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
