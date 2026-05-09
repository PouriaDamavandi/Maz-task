<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

import AppLayout from '@/components/layouts/AppLayout.vue'
import ProductBreadcrumb from '@/components/product/ProductBreadcrumb.vue'
import ProductImage from '@/components/product/ProductImage.vue'
import ProductDetails from '@/components/product/ProductDetails.vue'

import IconHome from '@/components/icons/IconHome.vue'

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
    { label: 'قیمت', value: `$${product.value.price}` },
    { label: 'توضیحات', value: product.value.description },
    { label: 'دسته بندی', value: product.value.category },
    { label: 'رتبه بندی', value: `${product.value.rating.rate} ⭐` },
    { label: 'تعداد رتبه بندی', value: `${product.value.rating.count}` },
  ]
})
</script>

<template>
  <AppLayout>
    <div v-if="store.loading">Loading...</div>

    <div v-else-if="store.error">{{ store.error }}</div>

    <div v-else-if="product" class="product">
      <ProductBreadcrumb
        :items="[{ icon: IconHome }, { label: 'لیست محصولات' }, { label: product.title }]"
      />

      <div class="top">
        <h1>{{ product.title }}</h1>
        <ProductImage :src="product.image" />
      </div>

      <ProductDetails :details="details" />
    </div>
  </AppLayout>
</template>

<style scoped>
.product {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 24px;
  padding-bottom: 74px;
}

.top {
  border-radius: 24px;
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 32px 24px;
}
</style>
