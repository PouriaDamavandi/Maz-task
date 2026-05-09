<script setup lang="ts"></script>

<template>
  <main class="container">
    <slot />
  </main>
</template>

<style scoped>
.container {
  margin: auto;
  padding: 16px 164px;
  flex: 1;
}

/* Tablet */
@media (max-width: 1439px) and (min-width: 361px) {
  .container {
    padding: 16px 80px;
  }
}

/* Mobile */
@media (max-width: 360px) {
  .container {
    padding: 16px;
  }
}
</style>
