<template>
  <footer class="bg-grey-2">
    <div class="container q-py-xl">
      <div class="row q-col-gutter-xl">
        <!-- Company Info -->
        <div class="col-12 col-md-4 company-info">
          <a href="#" @click.prevent="scrollToTop">
            <img
              src="../../assets/images/logos/rains-plastic-footer-logo.png"
              alt="Rains Plastics, Inc."
              class="footer-logo q-mb-md"
            />
          </a>
          <p class="text-body2 q-mb-lg">
            Providing cutting-edge automation solutions for the injection molding industry.
          </p>
          <div class="social-links">
            <a href="#" target="_blank" class="social-link">
              <img src="../../assets/images/icons/footer-twitter-icon.png" alt="Twitter" />
            </a>
            <a href="#" target="_blank" class="social-link">
              <img src="../../assets/images/icons/footer-facebook.png" alt="Facebook" />
            </a>
            <a href="#" target="_blank" class="social-link">
              <img src="../../assets/images/icons/footer-linked-in.png" alt="LinkedIn" />
            </a>
            <a href="#" target="_blank" class="social-link">
              <img src="../../assets/images/icons/footer-instagram.png" alt="Instagram" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="col-12 col-md-4">
          <h6 class="text-weight-bold q-mb-lg">Quick Links</h6>
          <ul class="footer-links">
            <li><a href="#" @click.prevent="navigateTo('/', 'about')">About us</a></li>
            <li><a href="#" @click.prevent="navigateTo('/', 'services')">Our services</a></li>
            <li><a href="#" @click.prevent="navigateTo('/', 'products')">Products</a></li>
            <li><a href="#" @click.prevent="navigateTo('/', 'contact')">Contact us</a></li>
          </ul>
        </div>

        <!-- Official Information -->
        <div class="col-12 col-md-4">
          <h6 class="text-weight-bold q-mb-lg">Official Information</h6>
          <div class="footer-info">
            <div class="info-item q-mb-md">
              <div class="info-label q-mb-sm">Address:</div>
              <div>873 Kings Cross Dr Wadsworth, OH, 44281-8902 United States</div>
            </div>
            <div class="info-item q-mb-md">
              <div class="info-label q-mb-sm">Email:</div>
              <div>trains@neo.rr.com</div>
            </div>
            <div class="info-item">
              <div class="info-label q-mb-sm">Phone:</div>
              <div>+123 345987678</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="divider"></div>
    <div class="copyright q-py-md">
      <div class="container">
        <p class="q-ma-none">
          Copyright © {{ new Date().getFullYear() }}
          <span class="text-primary">RAINS PLASTICS</span>, inc. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const scrollToSection = (sectionId) => {
  setTimeout(() => {
    const element = document.getElementById(sectionId + '-section')
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }, 100)
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const navigateTo = async (path, section = null) => {
  if (route.path !== path) {
    await router.push(path)
    await new Promise((resolve) => setTimeout(resolve, 100))
  }

  if (section) {
    scrollToSection(section)
  } else {
    scrollToTop()
  }
}
</script>

<style lang="scss" scoped>
.footer-logo {
  max-width: 180px;
  height: auto;
  display: block;
}

.social-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 2rem;

  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid var(--q-primary);
    width: 36px;
    height: 36px;
    transition: all 0.3s ease;

    &:hover {
      background: var(--q-primary);
      img {
        filter: brightness(0) invert(1);
      }
    }

    img {
      width: 16px;
      height: 16px;
      transition: all 0.3s ease;
    }
  }
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 1.25rem;

    &:last-child {
      margin-bottom: 0;
    }

    a {
      color: inherit;
      text-decoration: none;
      transition: color 0.3s ease;
      cursor: pointer;
      font-size: 1rem;

      &:hover {
        color: var(--q-primary);
      }
    }
  }
}

.footer-info {
  .info-item {
    margin-bottom: 1.5rem;

    &:last-child {
      margin-bottom: 0;
    }

    .info-label {
      font-weight: 600;
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }

    div:last-child {
      font-size: 1rem;
      line-height: 1.5;
      color: rgba(0, 0, 0, 0.7);
    }
  }
}

h6 {
  font-size: 1.25rem;
  margin-bottom: 2rem;
}

.text-body2 {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.7);
}

.divider {
  height: 1px;
  background: rgba(0, 0, 0, 0.1);
}

.copyright {
  font-size: 0.875rem;
  background: rgba(0, 0, 0, 0.02);

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
  }

  p {
    text-align: center;
  }
}

// Mobile styles
@media (max-width: 599px) {
  .company-info,
  .footer-links,
  .footer-info {
    text-align: center;
  }

  .footer-logo {
    margin: 0 auto 1.5rem;
  }

  .social-links {
    justify-content: center;
  }

  h6 {
    text-align: center;
    margin-top: 2.5rem;
  }

  .container {
    padding: 3rem 1.5rem;
  }

  .footer-info .info-item {
    margin-bottom: 2rem;
  }
}

// Tablet and desktop styles
@media (min-width: 600px) {
  .container {
    padding: 4rem 2rem;
  }

  .company-info,
  .footer-links,
  .footer-info {
    text-align: left;
  }

  .social-links {
    justify-content: flex-start;
  }
}

// Large desktop styles
@media (min-width: 1024px) {
  .container {
    padding: 5rem 2rem;
  }
}
</style>
