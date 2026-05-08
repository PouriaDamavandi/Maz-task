<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

import AppLayout from '@/components/layouts/AppLayout.vue'
import ProductBreadcrumb from '@/components/product/ProductBreadcrumb.vue'
import ProductImage from '@/components/product/ProductImage.vue'
import ProductDetails from '@/components/product/ProductDetails.vue'

import { useProductStore } from '@/stores/product.store'

const route = useRoute()
const store = useProductStore()

const id = Number(route.params.id)

onMounted(() => {
  store.fetchProduct(id)
})

const product = computed(() => store.selectedProduct)

const details = computed(() => {
  if (!product.value) return []

  return [
    { label: 'Price', value: `$${product.value.price}` },
    { label: 'Category', value: product.value.category },
    { label: 'Rating', value: `${product.value.rating.rate} ⭐` },
    { label: 'Reviews', value: `${product.value.rating.count}` },
    { label: 'Description', value: product.value.description },
  ]
})
</script>

<template>
  <AppLayout>
    <div v-if="store.loading">Loading...</div>

    <div v-else-if="store.error">{{ store.error }}</div>

    <div v-else-if="product" class="page">
      <ProductBreadcrumb
        :items="[{ label: 'Home' }, { label: 'Products' }, { label: product.title }]"
      />

      <div class="top">
        <ProductImage :src="product.image" />
        <h1>{{ product.title }}</h1>
      </div>

      <ProductDetails :details="details" />
    </div>
  </AppLayout>
</template>
