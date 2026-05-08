<script setup lang="ts">
import AppContainer from './AppContainer.vue'
</script>

<template>
  <footer class="footer">
    <AppContainer>
      <div class="footer-top">
        <div class="column">
          <h3>شبکه‌های اجتماعی</h3>
          <a href="#">تلگرام</a>
          <a href="#">اینستاگرام</a>
          <a href="#">لینکدین</a>
        </div>

        <div class="column">
          <h3>راهنمای سایت</h3>
          <a href="#">قوانین و مقررات</a>
          <a href="#">دریافت مشاوره</a>
          <a href="#">انتقادات و پیشنهادات</a>
        </div>

        <div class="column">
          <h3>دسترسی سریع</h3>
          <a href="#">درباره ما</a>
          <a href="#">وبلاگ</a>
          <a href="#">تماس با ما</a>
          <a href="#">خدمات پس از فروش</a>
        </div>
      </div>

      <div class="footer-bottom">
        <p>خدمات پس از فروش را به شما پاسخگو هستیم.</p>
        <p>تمام روزهای هفته از ۸ صبح تا ۱۲ شب پاسخگو هستیم.</p>
        <p class="copyright">تمامی حقوق محفوظ است</p>
      </div>
    </AppContainer>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: 80px;
  background: white;
}

.footer-top {
  background: white;
  border-radius: 32px 32px 0 0;
  padding: 56px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  border-top: 1px solid #eef1f6;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.column h3 {
  font-size: 18px;
  color: #1a2a3a;
  margin-bottom: 8px;
}

.column a {
  color: #667085;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
}

.column a:hover {
  color: #ec1561;
}

.footer-bottom {
  background: #f6f7fb;
  padding: 32px 24px;
  text-align: center;
  border-top: 1px solid #ececec;
}

.footer-bottom p {
  color: #667085;
  font-size: 14px;
  margin-bottom: 8px;
}

.footer-bottom .copyright {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #e2e8f0;
  font-size: 13px;
}

@media (max-width: 768px) {
  .footer-top {
    grid-template-columns: 1fr;
    padding: 32px 24px;
    gap: 32px;
  }

  .footer-bottom {
    padding: 24px 16px;
  }
}
</style>
