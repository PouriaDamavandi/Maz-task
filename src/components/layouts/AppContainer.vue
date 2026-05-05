<script setup lang="ts"></script>

<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
}

/* Desktop */
@media (min-width: 1440px) {
  .container {
    padding-left: 164px;
    padding-right: 164px;
  }
}

/* Tablet */
@media (max-width: 1439px) and (min-width: 768px) {
  .container {
    padding-left: 80px;
    padding-right: 80px;
  }
}

/* Mobile */
@media (max-width: 767px) {
  .container {
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>
