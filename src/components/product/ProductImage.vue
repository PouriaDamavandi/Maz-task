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
  max-width: 400px;
  overflow: hidden;
}

.image {
  width: 100%;
  transition: transform 0.3s;
}

/* Basic zoom effect */
.image:hover {
  transform: scale(1.2);
}
</style>
