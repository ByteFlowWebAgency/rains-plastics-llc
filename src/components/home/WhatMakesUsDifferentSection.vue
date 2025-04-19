<template>
  <div class="section-wrapper">
    <section class="what-makes-different-section">
      <div class="overlay"></div>
      <div class="container">
        <div class="content text-center">
          <h2 class="text-h2 text-white q-mb-md">What Makes Us Different?</h2>
          <p class="text-body1 text-white q-mb-xl">
            Universal Plastic Mold is proud to offer premier, full-service program management,
            convenient assembly, product distribution, and logistics services
          </p>
          <q-btn
            unelevated
            color="primary"
            label="Contact Us Now"
            class="contact-btn"
            @click="navigateToContact"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToContact = async () => {
  await router.push('/')
  setTimeout(() => {
    const element = document.getElementById('contact-section')
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
</script>

<style lang="scss" scoped>
.section-wrapper {
  background: #ffffff;
  padding: 4rem 2rem;
  max-width: 1500px;
  margin: 0 auto;

  @media (max-width: 599px) {
    padding: 3rem 1rem;
  }
}

.what-makes-different-section {
  position: relative;
  min-height: 400px;
  background-image: url('../../assets/images/backgrounds/what-makes-us-different-img.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  border-radius: 24px;
  overflow: hidden;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5));
  }

  .container {
    position: relative;
    z-index: 1;
    width: 100%;
    margin: 0 auto;
    padding: 4rem 1rem;

    @media (max-width: 599px) {
      padding: 3rem 1rem;
    }
  }

  .content {
    max-width: 750px;
    margin: 0 auto;
  }

  h2 {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1.5rem;

    @media (max-width: 599px) {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    @media (min-width: 600px) and (max-width: 1023px) {
      font-size: 2.75rem;
    }
  }

  p {
    font-size: 1.25rem;
    line-height: 1.6;
    opacity: 0.9;
    margin: 0 auto 2.5rem;
    max-width: 600px;

    @media (max-width: 599px) {
      font-size: 1.125rem;
      margin-bottom: 2rem;
    }
  }

  .contact-btn {
    font-size: 1rem;
    padding: 0.75rem 2.5rem;
    border-radius: 12px;
    font-weight: 500;
    background: #b01e23;

    &:hover {
      background: darken(#b01e23, 10%);
    }

    @media (max-width: 599px) {
      width: 100%;
      max-width: 300px;
    }
  }
}
</style>
