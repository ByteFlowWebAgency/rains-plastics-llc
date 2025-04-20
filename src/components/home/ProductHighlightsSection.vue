<template>
  <section id="products-section" class="product-highlights-section">
    <div class="container">
      <!-- Section Header -->
      <div
        v-motion
        class="section-header text-center q-mb-xl"
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800 } }"
      >
        <p class="text-primary text-overline q-mb-sm">PRODUCTS</p>
        <h2 class="text-h2 q-mb-md">Product Highlights</h2>
        <p class="text-subtitle1">
          Providing cutting-edge automation solutions for the injection molding industry.
        </p>
      </div>

      <!-- Products Grid -->
      <div class="row q-col-gutter-xl">
        <!-- Product Card 1 -->
        <div
          v-motion
          class="col-12 col-md-6 col-lg-3"
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 300, duration: 800 } }"
        >
          <q-card class="product-card" flat>
            <q-img :src="productHighlight1" :ratio="4 / 3" />
            <q-card-section>
              <h3 class="text-h6">Smartpower: minimal resources, Maximum Performance</h3>
              <p class="text-subtitle2">Proven Technology, now more efficient than ever before</p>
            </q-card-section>
          </q-card>
        </div>

        <!-- Product Card 2 -->
        <div
          v-motion
          class="col-12 col-md-6 col-lg-3"
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 800 } }"
        >
          <q-card class="product-card" flat>
            <q-img :src="productHighlight2" :ratio="4 / 3" />
            <q-card-section>
              <h3 class="text-h6">Wittmann 4.0 - Digital excellence injection processes</h3>
              <p class="text-subtitle2">
                For some, digitization is a closed book - offers a comprehensive.
              </p>
            </q-card-section>
          </q-card>
        </div>

        <!-- Product Card 3 -->
        <div
          v-motion
          class="col-12 col-md-6 col-lg-3"
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 500, duration: 800 } }"
        >
          <q-card class="product-card" flat>
            <q-img :src="productHighlight3" :ratio="4 / 3" />
            <q-card-section>
              <h3 class="text-h6">Next-level manufacturing with Eco Power B8X</h3>
              <p class="text-subtitle2">Effortless Precision and minimal energy consumption</p>
            </q-card-section>
          </q-card>
        </div>

        <!-- Product Card 4 -->
        <div
          v-motion
          class="col-12 col-md-6 col-lg-3"
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 600, duration: 800 } }"
        >
          <q-card class="product-card" flat>
            <q-img :src="productHighlight4" :ratio="4 / 3" />
            <q-card-section>
              <h3 class="text-h6">Energy consulting from Rains Plansict, INC.</h3>
              <p class="text-subtitle2">We will help you to keep your energy under control</p>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <!-- View All Products Button -->
      <div
        v-motion
        class="text-center q-mt-xl"
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 700, duration: 500 } }"
      >
        <q-btn
          color="primary"
          label="View all Products"
          class="view-all-btn"
          no-caps
          unelevated
          :to="{ path: '/products' }"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import productHighlight1 from '../../assets/images/products/product-highlight1.png'
import productHighlight2 from '../../assets/images/products/product-highlight2.png'
import productHighlight3 from '../../assets/images/products/product-highlight3.png'
import productHighlight4 from '../../assets/images/products/product-highlight4.png'
</script>

<style lang="scss" scoped>
.product-highlights-section {
  padding: 6rem 0;
  background-color: #e2dfdf;

  @media (max-width: 599px) {
    padding: 4rem 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .section-header {
    max-width: 600px;
    margin: 0 auto;

    .text-overline {
      font-size: 0.875rem;
      font-weight: 600;
      letter-spacing: 2px;
    }

    .text-h2 {
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 1rem;

      @media (max-width: 599px) {
        font-size: 2rem;
      }
    }

    .text-subtitle1 {
      font-size: 1.1rem;
      line-height: 1.6;
      color: rgba(0, 0, 0, 0.7);

      @media (max-width: 599px) {
        font-size: 1rem;
      }
    }
  }

  .product-card {
    height: 100%;
    transition: transform 0.3s ease;
    background: transparent;

    &:hover {
      transform: translateY(-5px);
    }

    .q-img {
      border-radius: 12px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    .q-card-section {
      padding: 1.5rem 0.5rem;

      .text-h6 {
        font-size: 1.1rem;
        font-weight: 600;
        line-height: 1.4;
        margin-bottom: 0.5rem;
      }

      .text-subtitle2 {
        font-size: 0.9rem;
        line-height: 1.5;
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }

  .view-all-btn {
    height: 45px;
    padding: 0 2rem;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 12px;
  }
}
</style>
