<!-- BaseIcon.vue -->
<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: number | string
    strokeWidth?: number | string
    viewBox?: string
  }>(),
  {
    size: 24,
    strokeWidth: 1.5,
    viewBox: '0 0 24 24',
  },
)
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    :viewBox="viewBox"
    stroke="currentColor"
    :stroke-width="strokeWidth"
    :width="size"
    :height="size"
    v-bind="$attrs"
  >
    <slot />
  </svg>
</template>
