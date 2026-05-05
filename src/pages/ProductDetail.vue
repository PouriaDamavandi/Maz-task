<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import ProductBreadcrumb from '@/components/product/ProductBreadcrumb.vue'
import ProductImage from '@/components/product/ProductImage.vue'
import ProductDetails from '@/components/product/ProductDetails.vue'
import MainLayout from '@/components/layouts/MainLayout.vue'

const route = useRoute()
const router = useRouter()

const productId = route.params.id

// Mock data (later → API)
const product = {
  id: productId,
  title: 'Sample Product',
  image: 'https://via.placeholder.com/400',
  details: [
    { label: 'Price', value: '$100' },
    { label: 'Description', value: 'Good product' },
    { label: 'Category', value: 'Electronics' },
    { label: 'Rank', value: 'A' },
    { label: 'Amount', value: '50' },
  ],
}
</script>

<template>
  <MainLayout>
    <div class="page">
      <ProductBreadcrumb
        :items="[{ label: 'Home' }, { label: 'Products' }, { label: product.title }]"
      />

      <div class="top">
        <ProductImage :src="product.image" />

        <h1>{{ product.title }}</h1>
      </div>

      <ProductDetails :details="product.details" />
    </div>
  </MainLayout>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
}

.top {
  display: flex;
  gap: 24px;
  align-items: center;
  margin-bottom: 32px;
}

@media (max-width: 768px) {
  .top {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
