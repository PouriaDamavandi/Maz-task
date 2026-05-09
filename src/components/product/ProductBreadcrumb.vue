<script setup lang="ts">
import type { Component } from 'vue'

type Crumb = {
  label?: string
  link?: string
  icon?: Component
}

defineProps<{
  items: Crumb[]
}>()
</script>

<template>
  <nav class="breadcrumb" aria-label="Breadcrumb">
    <ol class="breadcrumb-list">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="breadcrumb-item"
        :class="{ active: index === items.length - 1 }"
        aria-current="page"
      >
        <router-link
          v-if="item.link && index !== items.length - 1"
          :to="item.link"
          class="breadcrumb-link"
        >
          <component v-if="item.icon" :is="item.icon" class="icon" />
          <span>{{ item.label }}</span>
        </router-link>

        <span v-else class="breadcrumb-text">
          <component v-if="item.icon" :is="item.icon" class="icon" />
          <span>{{ item.label }}</span>
        </span>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.breadcrumb {
  margin-bottom: 24px;
  color: var(--text-muted);
  font-size: 14px;
}

.breadcrumb-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
}

/* Separator */
.breadcrumb-item:not(:last-child)::after {
  content: '›';
  margin: 0 8px;
  color: var(--text-muted);
}

/* Link styling */
.breadcrumb-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.15s ease;
}

.breadcrumb-link:hover {
  color: var(--text);
}

/* Current item */
.breadcrumb-item.active {
  color: var(--text);
  font-weight: 500;
}

/* Icon */
.icon {
  width: 16px;
  height: 16px;
  display: inline-flex;
}

/* Text wrapper */
.breadcrumb-text {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
</style>
