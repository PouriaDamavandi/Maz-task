<script setup lang="ts">
import { ref } from 'vue'
import SidebarSection from './SidebarSection.vue'

const selected = ref('')

const emit = defineEmits<{
  (e: 'change', value: string): void
}>()

function update(value: string) {
  selected.value = value
  emit('change', value)
}
</script>

<template>
  <SidebarSection title="Sort By">
    <label v-for="item in ['price', 'name', 'rank', 'latest']" :key="item">
      <input type="radio" :value="item" v-model="selected" @change="update(item)" />
      {{ item }}
    </label>
  </SidebarSection>
</template>
