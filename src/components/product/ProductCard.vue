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
    <div class="image-wrap">
      <img :src="product.image" class="image" />
    </div>

    <h3 class="title">{{ product.title }}</h3>

    <BaseButton class="btn" variant="outline" @click="emit('view', product.id.toString())">
      مشاهده جزییات >
    </BaseButton>
  </div>
</template>

<style scoped>
.card {
  background: white;
  padding: 12px;

  border-radius: 14px;

  display: flex;
  flex-direction: column;

  transition: 0.2s ease;
}

.card:hover {
  transform: translateY(-3px);
}

/* image container fixes overflow */
.image-wrap {
  width: 100%;
  aspect-ratio: 1 / 1;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  border-radius: 10px;
  background: #fafafa;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.card:hover .image {
  transform: scale(1.08);
}

.title {
  margin: 10px 0;
  font-size: 13px;

  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  overflow: hidden;
  min-height: 36px;
}

.btn {
  width: 100%;
  height: 38px;
  background-color: white;
  border-radius: 12px;
  font-size: 13px;
}

/* mobile tuning */
@media (max-width: 600px) {
  .card {
    padding: 10px;
  }

  .title {
    font-size: 12px;
  }
}
</style>
