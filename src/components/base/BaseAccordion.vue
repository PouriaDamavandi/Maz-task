<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from './BaseButton.vue'

defineProps<{
  defaultOpen?: boolean
}>()

const isOpen = ref(true)
</script>

<template>
  <div class="accordion">
    <BaseButton class="accordion-header" @click="isOpen = !isOpen">
      <span class="title">
        <slot name="header" />
      </span>

      <span class="icon" :class="{ open: isOpen }"> ⌄ </span>
    </BaseButton>

    <transition name="accordion">
      <div v-if="isOpen" class="accordion-body">
        <slot />
      </div>
    </transition>
  </div>
</template>

<style scoped>
.accordion {
  background: #fff;

  border-radius: 28px;

  padding: 20px;

  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
}

.accordion-header {
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: none;
  border: none;

  padding: 0;

  cursor: pointer;
}

.title {
  font-size: 18px;
  font-weight: 700;
  color: #5d6d8a;
}

.icon {
  font-size: 24px;

  color: #6b7a99;

  transition: 0.25s;
}

.icon.open {
  transform: rotate(180deg);
}

.accordion-body {
  margin-top: 18px;
}

.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.25s ease;
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
