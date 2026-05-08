<script setup lang="ts"></script>

<template>
  <main class="container">
    <slot />
  </main>
</template>

<style scoped>
.container {
  max-width: 1440px;
  margin-inline: auto;
  padding-inline: 64px;
  flex: 1;
  padding-bottom: 64px;
}

/* Large Desktop */
@media (min-width: 1440px) {
  .container {
    padding-inline: 164px;
  }
}

/* Tablet */
@media (max-width: 1439px) and (min-width: 361px) {
  .container {
    padding-inline: 80px;
  }
}

/* Mobile */
@media (max-width: 360px) {
  .container {
    padding-inline: 16px;
  }
}
</style>
