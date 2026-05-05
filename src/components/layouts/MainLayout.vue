<script setup lang="ts">
import AppHeader from '@/components/layouts/AppHeader.vue'
import AppFooter from '@/components/layouts/AppFooter.vue'
import AppContainer from '@/components/layouts/AppContainer.vue'
</script>

<template>
  <AppContainer>
    <AppHeader />
  </AppContainer>

  <main>
    <slot />
  </main>

  <AppFooter />
</template>
