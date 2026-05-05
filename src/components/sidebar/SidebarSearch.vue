<script setup lang="ts">
import { ref } from 'vue'
import SidebarSection from './SidebarSection.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'

const search = ref('')

const emit = defineEmits<{
  (e: 'search', value: string): void
}>()

function onSearch() {
  emit('search', search.value)
}
</script>

<template>
  <SidebarSection title="Search">
    <BaseInput v-model="search" placeholder="Search..." />
    <BaseButton @click="onSearch">Search</BaseButton>
  </SidebarSection>
</template>
