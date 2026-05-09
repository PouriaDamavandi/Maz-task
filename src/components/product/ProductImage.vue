<script setup lang="ts">
defineProps<{
  src: string
}>()
</script>

<template>
  <div class="image-wrapper">
    <img :src="src" class="image" />
  </div>
</template>

<style scoped>
.image-wrapper {
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;

  border-radius: 12px;
  background: #fafafa;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: contain;

  transition: transform 0.3s ease;
}

.image:hover {
  transform: scale(1.1);
}
</style>
