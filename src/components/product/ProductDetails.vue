<script setup lang="ts">
type DetailItem = {
  label: string
  value: string | number
}

defineProps<{
  details: DetailItem[]
}>()
</script>

<template>
  <div class="details">
    <div v-for="item in details" :key="item.label" class="row">
      <div class="label">{{ item.label }}</div>
      <div class="value">{{ item.value }}</div>
    </div>
  </div>
</template>

<style scoped>
.details {
  background: var(--bg-light);
  padding: 20px;
  border-radius: 12px;
  display: grid;
  gap: 12px;
}

.row {
  display: grid;
  grid-template-columns: 150px 1fr;
}

.label {
  color: var(--text-muted);
}

.value {
  color: var(--text-primary);
}
</style>
