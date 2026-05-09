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
  padding: 16px;

  border-radius: 12px;

  display: grid;
  gap: 10px;
}

.row {
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 10px;
}

.label {
  color: var(--text-muted);
  font-size: 13px;
}

.value {
  font-size: 13px;
}

/* mobile stack */
@media (max-width: 600px) {
  .row {
    grid-template-columns: 1fr;
  }
}
</style>
