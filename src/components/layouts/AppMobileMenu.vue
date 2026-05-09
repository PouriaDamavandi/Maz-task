<script setup lang="ts">
import type { NavItem } from '@/types/navigation'

defineProps<{
  open: boolean
  items: NavItem[]
}>()

defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <Teleport to="body">
    <transition name="fade">
      <div v-if="open" class="overlay" @click="$emit('close')">
        <aside class="drawer" @click.stop>
          <button class="close" @click="$emit('close')">✕</button>

          <RouterLink
            v-for="item in items"
            :key="item.to"
            :to="item.to"
            class="mobile-link"
            @click="$emit('close')"
          >
            {{ item.label }}
          </RouterLink>
        </aside>
      </div>
    </transition>
  </Teleport>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;

  display: flex;
}

.drawer {
  width: 280px;
  height: 100vh;
  background: white;
  padding: 24px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  position: relative;
}

.mobile-link {
  text-decoration: none;
  color: inherit;
}

.close {
  align-self: flex-end;
}

/* optional fade animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
