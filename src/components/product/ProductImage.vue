<script setup lang="ts">
import IconSearch from '../icons/IconSearch.vue'

defineProps<{
  src: string
}>()
</script>

<template>
  <div class="image-wrapper">
    <img :src="src" class="image" />
    <component :is="IconSearch" class="zoom" />
  </div>
</template>

<style scoped>
.image-wrapper {
  width: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 12px;
}

.zoom {
  background-color: grey;
  border-radius: 8px;
  position: absolute;
  padding: 4px;
  z-index: 100;
  top: 30px;
  right: 30px;
}

svg {
  width: 48px;
  height: 48px;
  color: white;
}
.image {
  width: 100%;
  height: 310px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.image:hover {
  transform: scale(1.5);
}
</style>
