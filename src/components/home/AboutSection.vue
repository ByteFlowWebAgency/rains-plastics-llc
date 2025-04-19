<template>
  <section class="about-section q-py-xl">
    <div class="container">
      <div class="row items-start q-col-gutter-xl">
        <div class="col-12 col-md-6">
          <div
            class="image-grid"
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 800 } }"
          >
            <img
              src="../../assets/images/backgrounds/about-us-img.jpg"
              alt="About Rains Plastics"
              class="main-image"
            />
            <div class="stats-card">
              <div class="stats-number">75+</div>
              <div class="stats-text">smart Product</div>
              <div class="stats-description">
                The smart robotic operator can reach the already powerful and resource-saving smart
                power even more performing as real efficiency.
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div
            class="about-content"
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :enter="{ opacity: 1, x: 0, transition: { delay: 400, duration: 800 } }"
          >
            <div class="section-label">— ABOUT US</div>
            <h2 class="section-title">Excellence in<br />Plastic Experience<br />Automation</h2>
            <p class="section-text">
              Rains Plastics serves the plastics injection molding industry, providing cutting-edge
              automation solutions and custom plastic system installations. They represent Wittmann
              USA, Dynamic Conveyor, and Great Lakes Machinery & Automation. They are committed to
              exceeding automation expectations and have 75+ years of combined experience in the
              industry.
            </p>
            <q-btn
              label="About us"
              color="primary"
              no-caps
              unelevated
              class="about-btn q-mt-md"
              @click="showAboutModal = true"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <about-modal v-model="showAboutModal" />
</template>

<script>
import AboutModal from 'components/modals/AboutModal.vue'

export default {
  components: {
    AboutModal,
  },
  data() {
    return {
      showAboutModal: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.about-section {
  background: white;
  padding: 6rem 0;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .image-grid {
    position: relative;
    margin-bottom: 2rem;

    .main-image {
      width: 100%;
      border-radius: 0;
    }

    .stats-card {
      position: absolute;
      bottom: -40px;
      left: -40px;
      background: black;
      color: white;
      padding: 2rem;
      border-radius: 0;
      max-width: 280px;

      .stats-number {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 0.25rem;
      }

      .stats-text {
        font-size: 1.1rem;
        font-weight: 500;
        margin-bottom: 0.75rem;
        text-transform: capitalize;
      }

      .stats-description {
        font-size: 0.875rem;
        line-height: 1.5;
        opacity: 0.8;
      }
    }
  }

  .about-content {
    padding-top: 1rem;

    .section-label {
      color: #b01e23;
      font-weight: 500;
      font-size: 0.875rem;
      margin-bottom: 1.5rem;
      letter-spacing: 0.5px;
    }

    .section-title {
      font-size: 2.75rem;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 1.5rem;
      color: #000;
    }

    .section-text {
      font-size: 0.875rem;
      line-height: 1.6;
      color: rgba(0, 0, 0, 0.7);
      margin-bottom: 2rem;
      max-width: 90%;
    }

    .about-btn {
      height: 45px;
      padding: 0 2rem;
      border-radius: 12px;
      font-weight: 500;
      background: #b01e23;
    }
  }
}

@media (max-width: 1023px) {
  .about-section {
    padding: 4rem 0;

    .image-grid {
      margin: 0 1rem 4rem;

      .stats-card {
        position: relative;
        bottom: -20px;
        left: 50%;
        transform: translateX(-50%);
        width: 90%;
        max-width: 280px;
      }
    }

    .about-content {
      padding: 0 1rem;
      text-align: center;

      .section-title {
        font-size: 2rem;
        br {
          display: none;
        }
      }

      .section-text {
        max-width: 100%;
      }
    }
  }
}

@media (max-width: 599px) {
  .about-section {
    .section-title {
      font-size: 1.8rem;
    }

    .stats-card {
      padding: 1.5rem;

      .stats-number {
        font-size: 2rem;
      }

      .stats-text {
        font-size: 1rem;
      }
    }
  }
}
</style>
