<template>
  <section class="showcase-section">
    <div class="showcase-container">
      <!-- Left Content -->
      <div
        v-motion
        class="content-left"
        :initial="{ opacity: 0, x: -50 }"
        :enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 800 } }"
      >
        <div class="content-wrapper">
          <h2 class="showcase-title">
            Universal Plastic Mold (UPM) is Your Injection Molding Partner
          </h2>
          <p class="showcase-description">
            Universal Plastic Mold is proud to offer premier, full-service program management,
            convenient assembly, product distribution, and logistics services
          </p>
          <q-btn
            label="Contact Us Now"
            color="primary"
            class="contact-btn"
            no-caps
            unelevated
            @click="scrollToContact"
          />
        </div>
      </div>

      <!-- Right Image -->
      <div
        v-motion
        class="content-right"
        :initial="{ opacity: 0, x: 50 }"
        :enter="{ opacity: 1, x: 0, transition: { delay: 400, duration: 800 } }"
      >
        <img :src="productHighlight" alt="UPM Injection Molding Machine" class="showcase-image" />
      </div>
    </div>
  </section>
</template>

<script setup>
import productHighlight from '../../assets/images/products/product-highlight1.png'

const scrollToContact = () => {
  const contactSection = document.querySelector('#contact-section')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style lang="scss" scoped>
.showcase-section {
  position: relative;
  width: 100%;
  overflow: hidden;
  margin: 4rem auto;
  max-width: 1300px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 1400px) {
    margin: 4rem 2rem;
  }

  @media (max-width: 599px) {
    margin: 2rem auto;
    border-radius: 8px;
    max-width: 350px;
    width: 100%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  }

  .showcase-container {
    position: relative;
    width: 100%;
    display: flex;
    align-items: stretch;
    background: url('../../assets/images/backgrounds/UPM-img.png') no-repeat center center;
    background-size: cover;
    min-height: 500px;

    @media (max-width: 1023px) {
      flex-direction: column;
      min-height: auto;
      align-items: center;
      text-align: center;
      background: #000;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 50%;
      bottom: 0;
      background: rgba(0, 0, 0, 0.85);
      z-index: 1;

      @media (max-width: 1023px) {
        display: none;
      }
    }
  }

  .content-right {
    flex: 0 0 50%;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1023px) {
      flex: 0 0 100%;
      width: 100%;
      display: flex;
      order: 1;
      overflow: visible;
      justify-content: center;
      align-items: center;
      background: none;
    }

    .showcase-image {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;

      @media (max-width: 1023px) {
        position: relative;
        width: 100%;
        height: auto;
        max-width: 100%;
        aspect-ratio: 16/9;
        object-fit: contain;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        margin: 0 auto;
        display: block;
      }
      @media (max-width: 599px) {
        max-width: 100%;
        width: 100%;
        height: auto;
        margin: 0 auto;
        border-radius: 8px 8px 0 0;
      }
    }
  }

  .content-left {
    flex: 0 0 50%;
    position: relative;
    padding: 5rem 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    z-index: 2;

    @media (max-width: 1200px) {
      padding: 4rem 3rem;
    }

    @media (max-width: 1023px) {
      flex: 0 0 100%;
      padding: 2.5rem 2rem;
      padding-right: 70px;
      order: 2;
      background: #000;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      align-items: center;
      text-align: center;
    }

    @media (max-width: 599px) {
      padding: 2rem 1rem 1.5rem 1rem;
      align-items: center;
      text-align: center;
    }
  }

  .content-wrapper {
    @media (max-width: 1023px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }

  .showcase-title {
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    color: white;
    max-width: 550px;

    @media (max-width: 1023px) {
      font-size: 2rem;
      margin-bottom: 1rem;
      text-align: center;
      max-width: 100%;
    }

    @media (max-width: 599px) {
      font-size: 1.3rem;
      line-height: 1.3;
      margin-bottom: 0.75rem;
      text-align: center;
    }
  }

  .showcase-description {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2.5rem;
    opacity: 0.9;
    max-width: 500px;

    @media (max-width: 1023px) {
      font-size: 1rem;
      margin-bottom: 1.5rem;
      text-align: center;
      opacity: 0.8;
      max-width: 100%;
    }

    @media (max-width: 599px) {
      font-size: 0.95rem;
      line-height: 1.5;
      margin-bottom: 1.25rem;
      text-align: center;
    }
  }

  .contact-btn {
    height: 45px;
    padding: 0 2rem;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 8px;
    background: #b01e23;
    transition: all 0.3s ease;
    align-self: flex-start;

    &:hover {
      background: #8b171b;
      transform: translateY(-2px);
    }

    @media (max-width: 1023px) {
      width: 100%;
      max-width: 300px;
      height: 48px;
      font-size: 0.95rem;
      align-self: center;
      margin: 0;
    }

    @media (max-width: 599px) {
      height: 44px;
      font-size: 0.9rem;
      max-width: 100%;
      align-self: center;
      margin-top: 0.5rem;
    }
  }
}

@media (max-width: 1200px) {
  .showcase-section {
    margin: 4rem 1rem;
  }
}

@media (max-width: 599px) {
  .showcase-section {
    margin: 2rem 1rem;
    border-radius: 8px;
  }
}
</style>
