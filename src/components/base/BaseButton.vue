<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary' | 'outline'
}>()
</script>

<template>
  <button :class="['btn', variant]">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
}

.primary {
  background: var(--btn-primary);
  color: white;
}

.outline {
  border: 1px solid var(--btn-primary);
  color: var(--btn-primary);
}
</style>
