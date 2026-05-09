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
    <h3>مشخصات فنی</h3>
    <div v-for="item in details" :key="item.label" class="row">
      <div class="label">{{ item.label }}</div>
      <div class="value">{{ item.value }}</div>
    </div>
  </div>
</template>

<style scoped>
.details {
  display: grid;
  gap: 10px;
  background: var(--bg-white);
  border-radius: 12px;
  padding: 16px;
}

.row {
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 10px;
}

.label {
  background-color: #f5f7fa;
  color: var(--text-muted);
  font-size: 13px;
  border-radius: 4px 16px 16px 4px;
  padding: 16px;
}

.value {
  font-size: 13px;
  background-color: #f5f7fa;
  color: var(--text-primary);
  font-size: 13px;
  border-radius: 16px 4px 4px 16px;
  padding: 16px;
}

/* mobile stack */
@media (max-width: 600px) {
  .row {
    grid-template-columns: 1fr;
  }
}
</style>
