<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(true)
</script>

<template>
  <div>
    <div @click="isOpen = !isOpen">
      <slot name="header" />
    </div>

    <div v-if="isOpen">
      <slot />
    </div>
  </div>
</template>
