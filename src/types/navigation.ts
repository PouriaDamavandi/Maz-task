import type { Component } from 'vue'

export interface NavItem {
  label: string
  to: string
  icon?: Component
  iconProps?: Record<string, unknown>
}
