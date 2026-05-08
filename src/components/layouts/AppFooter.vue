<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

import telegram from '@/assets/images/socials/telegram.png'
import instagram from '@/assets/images/socials/instagram.png'
import linkedin from '@/assets/images/socials/linkedin.png'

import telegramRed from '@/assets/images/socials/telegram-pink.png'
import instagramRed from '@/assets/images/socials/instagram-pink.png'
import youtubeRed from '@/assets/images/socials/youtube-pink.png'
import xRed from '@/assets/images/socials/twitter-red.png'
import linkedinRed from '@/assets/images/socials/linkedin-pink.png'

import enamad from '@/assets/images/licenses/etemad-license.png'
import samandehi from '@/assets/images/licenses/samandehi-license.png'
import BaseButton from '../base/BaseButton.vue'

const router = useRouter()

interface SocialLink {
  name: string
  url: string
  ariaLabel: string
  icon: string
  footerIcon?: string
  external?: boolean
}

interface FooterLink {
  title: string
  url: string
  ariaLabel?: string
  icon?: string
  external?: boolean
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

const socialLinks: SocialLink[] = [
  {
    name: 'تلگرام',
    url: 'https://t.me/yourchannel',
    ariaLabel: 'Telegram channel',
    icon: telegram,
    footerIcon: telegramRed,
    external: true,
  },
  {
    name: 'اینستاگرام',
    url: 'https://instagram.com/yourprofile',
    ariaLabel: 'Instagram profile',
    icon: instagram,
    footerIcon: instagramRed,
    external: true,
  },
  {
    name: 'لینکدین',
    url: 'https://linkedin.com/company/yourcompany',
    ariaLabel: 'LinkedIn company page',
    icon: linkedin,
    footerIcon: linkedinRed,
    external: true,
  },
]

const quickAccessLinks: FooterLink[] = [
  {
    title: 'درباره ما',
    url: '/about',
  },
  {
    title: 'وبلاگ',
    url: '/blog',
  },
  {
    title: 'تماس با ما',
    url: '/contact',
  },
  {
    title: 'خدمات پس از فروش',
    url: '/after-sales',
  },
]

const guideLinks: FooterLink[] = [
  {
    title: 'قوانین و مقررات',
    url: '/terms',
  },
  {
    title: 'دریافت مشاوره',
    url: '/consultation',
  },
  {
    title: 'انتقادات و پیشنهادات',
    url: '/feedback',
  },
]

const footerSections = computed<FooterSection[]>(() => [
  {
    title: 'دسترسی سریع',
    links: quickAccessLinks,
  },
  {
    title: 'راهنمای سایت',
    links: guideLinks,
  },
  {
    title: 'شبکه‌های اجتماعی',
    links: socialLinks.map((social) => ({
      title: social.name,
      url: social.url,
      ariaLabel: social.ariaLabel,
      icon: social.icon,
      external: true,
    })),
  },
])

const footerSocialAccess = socialLinks.map((social) => ({
  icon: social.footerIcon,
  url: social.url,
  alt: social.name,
}))

const extraSocials = [
  {
    icon: xRed,
    url: 'https://x.com',
    alt: 'X',
  },
  {
    icon: youtubeRed,
    url: 'https://youtube.com',
    alt: 'YouTube',
  },
]

const handleNavigation = async (link: FooterLink) => {
  if (link.external) {
    window.open(link.url, '_blank', 'noopener,noreferrer')
    return
  }

  await router.push(link.url)
}
</script>

<template>
  <footer class="footer" role="contentinfo" aria-label="Website footer">
    <div class="footer-top">
      <p class="footer-moto">هفت روز هفته از ۸ صبح تا ۱۲ شب پاسخگو هستیم</p>

      <div class="footer-top-navigation">
        <section
          v-for="section in footerSections"
          :key="section.title"
          class="column"
          :aria-labelledby="`footer-section-${section.title}`"
        >
          <h3 :id="`footer-section-${section.title}`">
            {{ section.title }}
          </h3>

          <BaseButton
            v-for="link in section.links"
            :key="`${section.title}-${link.title}`"
            class="footer-link"
            type="button"
            :aria-label="link.ariaLabel || link.title"
            @click="handleNavigation(link)"
          >
            <img v-if="link.icon" :src="link.icon" :alt="link.title" loading="lazy" />

            <span>{{ link.title }}</span>
          </BaseButton>
        </section>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-bottom-content">
        <p class="copyright">
          تمامی حقوق مادی و معنوی این وبسایت متعلق به می‌باشد و هر گونه کپی‌برداری پیگرد قانونی
          دارد.
        </p>

        <div class="footer-pages">
          <a
            v-for="item in [...footerSocialAccess, ...extraSocials]"
            :key="item.alt"
            :href="item.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="item.alt"
          >
            <img :src="item.icon" :alt="item.alt" loading="lazy" />
          </a>
        </div>
      </div>

      <div class="licenses">
        <img :src="enamad" alt="Enamad license" loading="lazy" />

        <img :src="samandehi" alt="Samandehi license" loading="lazy" />
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--bg-white);
  border-top: 1px solid var(--bg-soft);
}

.footer-top {
  background: var(--bg-white);
  border-radius: 32px 32px 0 0;
  display: flex;
  justify-content: center;
  padding: 40px 160px;
}

.footer-top-navigation {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex: 2;
  column-gap: 120px;
  justify-items: end;
}

.footer-moto {
  display: flex;
  align-items: end;
  flex: 1;
  font-size: 13px;
  line-height: 24px;
  font-weight: 500;
  color: var(--text-muted);
}

.column {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.column h3 {
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  color: var(--text-primary);
}

.footer-link {
  display: flex;
  align-items: center;
  gap: 12px;
  width: fit-content;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  color: var(--text-primary);
  font-size: 13px;
  font-weight: 500;
  line-height: 24px;
  transition: transform 0.2s ease;
}

.footer-link:hover {
  transform: translateX(-4px);
}

.footer-link img {
  width: 24px;
}

.footer-bottom {
  flex: 1;
  background: var(--bg-soft);
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  justify-content: center;
  padding: 40px 160px;
}

.footer-bottom-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.footer-pages {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 16px;
}

.footer-pages img {
  width: 24px;
  height: 24px;
}

.footer-bottom p {
  color: #667085;
  font-size: 14px;
  line-height: 1.6;
}

.copyright {
  margin-top: 16px;
  padding-top: 16px;
  font-size: 13px;
  color: #5a6e85;
}

.licenses {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-self: start;
}

@media (max-width: 1280px) and (min-width: 769px) {
  .footer-top {
    padding: 40px 80px;
    gap: 32px;
  }

  .footer-top-navigation {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 10px;
    justify-items: start;
  }

  .footer-link {
    font-size: 16px;
    padding: 4px 0;
  }

  .footer-bottom {
    padding: 40px 80px;
  }

  .footer-bottom p {
    font-size: 13px;
  }
}

@media (max-width: 768px) {
  .footer-top {
    padding: 44px 36px;
    margin-top: 116px;
  }

  .footer-top-navigation {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 65px;
    row-gap: 68px;
    justify-items: center;
    font-size: 13px;
  }

  .footer-moto {
    display: none;
  }

  .footer-link {
    font-size: 16px;
  }

  .footer-bottom {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 30px 20px;
  }

  .footer-bottom p {
    font-size: 13px;
  }
}
</style>
