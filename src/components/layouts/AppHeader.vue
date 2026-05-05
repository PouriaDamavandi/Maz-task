<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from '../base/BaseButton.vue'

const isMenuOpen = ref(false)
</script>

<template>
  <header class="header">
    <div class="left">
      <BaseButton class="cta">Call to Action</BaseButton>
    </div>

    <div class="right desktop-nav">
      <nav aria-label="Main navigation">
        <ul>
          <li>Home</li>
          <li class="nav-item">
            Products
            <span class="dot" />
          </li>
          <li>About</li>
        </ul>
      </nav>
    </div>

    <div class="mobile-menu">
      <BaseButton @click="isMenuOpen = !isMenuOpen">☰</BaseButton>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
}

/* Nav */
ul {
  display: flex;
  gap: 24px;
  list-style: none;
}

/* Red dot */
.nav-item {
  position: relative;
}

.dot {
  width: 6px;
  height: 6px;
  background: var(--color-primary);
  border-radius: 50%;
  position: absolute;
  bottom: -6px;
  left: 50%;
}

li:hover {
  color: var(--color-primary);
  cursor: pointer;
}

/* Mobile */
.mobile-menu {
  display: none;
}

@media (max-width: 767px) {
  .desktop-nav {
    display: none;
  }

  .mobile-menu {
    display: block;
  }

  .header {
    padding-top: 16px;
    padding-bottom: 16px;
  }

  .btn {
    background: transparent;
    border: 1px solid var(--btn-primary);
    color: var(--btn-primary);
  }
}
</style>
