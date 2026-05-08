<script setup lang="ts">
import { ref, type Component } from 'vue'
import type { NavItem } from '@/types/navigation'

import BaseButton from '@/components/base/BaseButton.vue'
import AppNav from './AppNav.vue'
import AppMobileMenu from './AppMobileMenu.vue'

const isMenuOpen = ref(false)

defineProps<{
  ctaText: string
  ctaIcon?: Component
  ctaIconProps?: Record<string, unknown>
  navItems: NavItem[]
  ctaAction?: () => void
}>()
</script>

<template>
  <header class="header">
    <div class="desktop-nav">
      <AppNav :items="navItems" />
    </div>

    <BaseButton class="mobile-btn" variant="outline" @click="isMenuOpen = !isMenuOpen">
      ☰
    </BaseButton>

    <AppMobileMenu :open="isMenuOpen" :items="navItems" @close="isMenuOpen = false" />
    <BaseButton class="cta" variant="outline" @click="ctaAction">
      <span class="cta-text">{{ ctaText }}</span>
      <component :is="ctaIcon" v-bind="ctaIconProps" class="cta-icon" />
    </BaseButton>

  </header>
</template>

<style scoped>
.header {
  height: 120px;
  background: var(--bg-white);
  border-radius: 0 0 28px 28px;
  padding-inline: 40px 164px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
}

.desktop-nav {
  flex: 1;
  display: flex;
  justify-content: center;
}

.cta {
  min-width: 110px;
  height: 48px;
  border-radius: 16px;
  background: var(--btn-primary);
  color: var(--text-white);
  border: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.mobile-btn {
  display: none;
  font-size: 16px;
}

@media (max-width: 1439px) and (min-width: 769px) {
  .header {
    padding-inline: 40px 80px;
  }
}

@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }

  .mobile-btn {
    display: block;
    background: transparent;
    font-size: 16px;
    border: 1px solid var(--bg-red);
  }

  .cta {
    min-width: 40px;
    width: 40px;
    height: 40px;
    background-color: var(--bg-white);
    color: var(--text-primary);
    border: 1px solid var(--bg-red);
    padding: 0;
    border-radius: 8px;
  }

  .cta-text {
    display: none;
  }

  .cta-icon {
    display: inline-block;
  }

  .header {
    padding-inline: 16px;
  }
}
</style>
