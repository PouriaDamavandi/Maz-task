<script setup lang="ts">
import AppHeader from '@/components/layouts/AppHeader.vue'
import AppFooter from '@/components/layouts/AppFooter.vue'
import AppContainer from './AppContainer.vue'

import IconPhone from '../icons/IconPhone.vue'
import type { NavItem } from '@/types/navigation'
import IconSquares from '../icons/IconSquares.vue'
import IconChat from '../icons/IconChat.vue'
import IconFaq from '../icons/IconFaq.vue'
import IconPhoneCall from '../icons/IconPhoneCall.vue'

const navItems: NavItem[] = [
  {
    label: 'لیست محصولات',
    to: '/products',
    icon: IconSquares,
    iconProps: { size: 16 },
  },
  {
    label: 'دریافت مشاوره',
    to: '/consultation',
    icon: IconChat,
    iconProps: { size: 16 },
  },
  {
    label: 'سوالات متداول',
    to: '/faq',
    icon: IconFaq,
    iconProps: { size: 16 },
  },
  {
    label: 'تماس با ما',
    to: '/contact',
    icon: IconPhone,
    iconProps: { size: 16 },
  },
]
</script>

<template>
  <div class="layout">
    <AppHeader
      cta-text="تماس"
      :cta-icon="IconPhoneCall"
      :cta-icon-props="{ size: 16 }"
      :nav-items="navItems"
    />
    <AppContainer>
      <slot />
    </AppContainer>
    <AppFooter />
  </div>
</template>
