<script setup lang="ts">
import type { NavItem } from '@/types/navigation'

defineProps<{
  items: NavItem[]
}>()
</script>

<template>
  <nav>
    <ul class="nav-list">
      <li v-for="item in items" :key="item.to">
        <RouterLink :to="item.to" class="nav-link" active-class="active">
          <component :is="item.icon" v-bind="item.iconProps" class="cta-icon" />
          {{ item.label }}
          <span class="dot" />
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav-list {
  display: flex;
  align-items: center;
  gap: 24px;
  list-style: none;
}

.nav-link {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  position: relative;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: 0.2s;
}

.nav-link:hover,
.active {
  color: #ec1561;
}

.dot {
  position: absolute;
  left: 50%;
  bottom: -12px;
  transform: translateX(-50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--bg-red);
  opacity: 0;
  transition: 0.2s;
}

.nav-link:hover .dot,
.active .dot:hover {
  opacity: 1;
}
</style>
