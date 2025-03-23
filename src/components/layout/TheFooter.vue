<template>
  <footer class="bg-grey-2">
    <div class="container q-py-lg">
      <div class="row q-col-gutter-lg">
        <!-- Company Info -->
        <div class="col-12 col-md-3">
          <img
            src="../../assets/images/logos/rains-plastic-footer-logo.png"
            alt="Rains Plastics, Inc."
            class="footer-logo q-mb-md"
          />
          <p class="text-body2">
            Providing cutting-edge automation solutions for the injection molding industry.
          </p>
          <div class="social-links q-mt-md">
            <a href="#" target="_blank">
              <img src="../../assets/images/icons/footer-twitter-icon.png" alt="Twitter" />
            </a>
            <a href="#" target="_blank">
              <img src="../../assets/images/icons/footer-facebook.png" alt="Facebook" />
            </a>
            <a href="#" target="_blank">
              <img src="../../assets/images/icons/footer-linked-in.png" alt="LinkedIn" />
            </a>
            <a href="#" target="_blank">
              <img src="../../assets/images/icons/footer-instagram.png" alt="Instagram" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="col-12 col-md-3">
          <h6 class="text-weight-bold q-mb-md">Quick Links</h6>
          <ul class="footer-links">
            <li><a href="/about">About us</a></li>
            <li><a href="/services">Our services</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/team">Our Team</a></li>
            <li><a href="/pricing">Pricing Plan</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact us</a></li>
          </ul>
        </div>

        <!-- Official Information -->
        <div class="col-12 col-md-3">
          <h6 class="text-weight-bold q-mb-md">Official Information</h6>
          <div class="footer-info">
            <div class="info-item q-mb-md">
              <div class="info-label">Address:</div>
              <div>5919 Trussville Crossings Pkwy, Birmingham</div>
            </div>
            <div class="info-item q-mb-md">
              <div class="info-label">Email:</div>
              <div>Info@Rainsplastics,INC.Com</div>
            </div>
            <div class="info-item">
              <div class="info-label">Phone:</div>
              <div>+123 345987678</div>
            </div>
          </div>
        </div>

        <!-- Newsletter -->
        <div class="col-12 col-md-3">
          <newsletter-form />
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="divider"></div>
    <div class="copyright text-center q-py-sm">
      <p class="q-ma-none">
        Copyright © {{ new Date().getFullYear() }}
        <span class="text-primary text-weight-bold">RAINS PLASTICS</span>, inc. All Rights Reserved.
      </p>
    </div>
  </footer>
</template>

<script setup>
import NewsletterForm from '../newsletter/NewsletterForm.vue'
</script>

<style lang="scss" scoped>
.footer-logo {
  max-width: 200px;
  height: auto;
}

.social-links {
  display: flex;
  align-items: center;

  a {
    margin-right: 16px;
    display: inline-block;
    border-radius: 50%;
    border: 1px solid var(--q-primary);
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:last-child {
      margin-right: 0;
    }

    img {
      width: 18px;
      height: 18px;
    }
  }
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 12px;

    a {
      color: inherit;
      text-decoration: none;

      &:hover {
        color: var(--q-primary);
      }
    }
  }
}

.footer-info {
  .info-item {
    .info-label {
      font-weight: 500;
    }
  }
}

.divider {
  height: 1px;
  background: rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  max-width: 1200px;
}

.copyright {
  font-size: 0.9rem;
}
</style>
