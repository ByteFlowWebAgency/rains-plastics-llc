<template>
  <section id="hero-section" class="hero-section">
    <div class="hero-overlay"></div>
    <div class="container">
      <div class="row items-center hero-content">
        <div class="col-12 col-md-6">
          <img
            src="../../assets/images/backgrounds/machine-hero-img-removebg-preview.png"
            alt="Plastics Automation Machine"
            class="mobile-hero-image"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 500 } }"
          />
          <div
            class="hero-text"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800 } }"
          >
            <h1 class="q-mb-md">
              <span class="text-primary">75+ Years</span> of Excellence in Plastics Automation
            </h1>
            <p class="q-mb-lg">
              Providing cutting-edge automation solutions for the injection molding industry.
            </p>
            <div class="hero-actions">
              <q-btn
                label="Request a Custom Quote"
                color="primary"
                @click="navigateTo('/', 'contact')"
                no-caps
                unelevated
                class="custom-quote-btn"
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :enter="{ opacity: 1, y: 0, transition: { delay: 600, duration: 500 } }"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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

const navigateTo = async (path, section = null) => {
  if (route.path !== path) {
    await router.push(path)
    await new Promise((resolve) => setTimeout(resolve, 100))
  }

  if (section) {
    scrollToSection(section)
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<style lang="scss" scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  width: 100%;
  background: url('../../assets/images/backgrounds/hero-banner.png') no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  margin-top: -64px;
  padding-top: 64px;

  @media (max-width: 1023px) {
    min-height: 100vh;
    padding: 2rem 1rem;
    background: url('../../assets/images/backgrounds/hero-banner.png') no-repeat center center fixed;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mobile-hero-image {
    display: none;
    width: 100%;
    max-width: 200px;
    margin: 0 auto 1.5rem;
    border-radius: 8px;
    position: relative;
    z-index: 3;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

    @media (max-width: 1023px) {
      display: block;
    }
  }

  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  .container {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 1200px;
    padding: 0;

    @media (max-width: 1023px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .hero-content {
    min-height: 90vh;
    display: flex;
    align-items: center;

    @media (max-width: 1023px) {
      min-height: unset;
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: 100%;
      max-width: 500px;
      margin: 0 auto;
    }
  }

  .hero-text {
    background-color: white;
    padding: 3rem;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    max-width: 700px;
    margin-left: -180px;
    margin-bottom: -100px;
    position: relative;
    left: 0;

    @media (max-width: 1023px) {
      margin: 0;
      padding: 2rem;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.95);
    }

    h1 {
      font-size: 2.8rem;
      line-height: 1.2;
      text-wrap: balance;
      font-weight: 700;
      color: #000;

      @media (max-width: 1023px) {
        font-size: 2.4rem;
      }

      @media (max-width: 599px) {
        font-size: 1.8rem;
      }

      .text-primary {
        color: var(--q-primary);
      }
    }

    p {
      max-width: 600px;
      line-height: 1.5;
      font-size: 1rem;
      color: #000;

      @media (max-width: 1023px) {
        margin: 0 auto;
      }

      @media (max-width: 599px) {
        font-size: 0.9rem;
      }
    }
  }

  .hero-actions {
    margin-top: 2rem;

    @media (max-width: 1023px) {
      display: flex;
      justify-content: center;
    }

    .custom-quote-btn {
      width: 200px;
      height: 45px;
      font-size: 14px;
      font-weight: 500;
      border-radius: 12px;
      justify-content: center;
      align-items: center;
      line-height: 1;
    }
  }
}

// Tablet responsiveness
@media (max-width: 1023px) {
  .hero-section {
    .hero-text {
      padding: 2rem;
      margin: 1rem;

      h1 {
        font-size: 2.4rem;
      }
    }
  }
}

// Mobile responsiveness
@media (max-width: 599px) {
  .hero-section {
    .hero-text {
      padding: 1.5rem;
      margin: 1rem;

      h1 {
        font-size: 1.8rem;
      }

      p {
        font-size: 0.9rem;
      }
    }
  }
}
</style>
