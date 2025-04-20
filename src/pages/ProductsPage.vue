<template>
  <q-page class="products-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <div
          v-motion
          class="header-content text-center"
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800 } }"
        >
          <h1 class="text-h2 q-mb-md">Our Products</h1>
          <p class="text-subtitle1">
            Discover our comprehensive range of injection molding solutions
          </p>
        </div>
      </div>
    </section>

    <!-- Products Section -->
    <section class="products-section">
      <div class="container">
        <!-- Filters -->
        <div
          v-motion
          class="filters q-mb-xl"
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 300, duration: 500 } }"
        >
          <div class="row items-center q-col-gutter-md">
            <div class="col-12 col-md-4">
              <q-input
                v-model="searchQuery"
                outlined
                dense
                placeholder="Search products"
                class="search-input"
              >
                <template v-slot:prepend>
                  <q-icon name="search" />
                </template>
              </q-input>
            </div>
            <div class="col-12 col-md-4">
              <q-select
                v-model="selectedCategory"
                :options="categories"
                outlined
                dense
                label="Category"
                class="category-select"
              />
            </div>
          </div>
        </div>

        <!-- Products Grid -->
        <div class="row q-col-gutter-xl">
          <div
            v-for="(product, index) in filteredProducts"
            :key="product.id"
            v-motion
            class="col-12 col-md-6 col-lg-4"
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 300 + index * 100, duration: 800 } }"
          >
            <q-card class="product-card" @click="openProductDetails(product)">
              <q-img :src="product.image" :ratio="16 / 9" />
              <q-card-section>
                <div class="text-overline text-primary">{{ product.category }}</div>
                <h3 class="text-h5 q-mt-sm q-mb-xs">{{ product.name }}</h3>
                <p class="text-body2 text-grey-7">{{ product.shortDescription }}</p>
              </q-card-section>
              <q-card-actions align="right">
                <q-btn flat color="primary" label="Learn More" no-caps />
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Details Dialog -->
    <q-dialog
      v-model="showProductDialog"
      maximized
      persistent
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="product-dialog">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">{{ selectedProduct?.name }}</div>
          <q-space />
          <q-btn v-close-popup icon="close" flat round dense />
        </q-card-section>

        <q-separator />

        <q-card-section v-if="selectedProduct" class="q-pt-md">
          <div class="row q-col-gutter-xl">
            <div class="col-12 col-md-6">
              <q-img :src="selectedProduct.image" class="rounded-borders" style="height: 400px" />
            </div>
            <div class="col-12 col-md-6">
              <div class="text-overline text-primary">{{ selectedProduct.category }}</div>
              <h3 class="text-h4 q-mt-sm q-mb-md">{{ selectedProduct.name }}</h3>
              <p class="text-body1 q-mb-lg">{{ selectedProduct.description }}</p>

              <div class="features q-mb-lg">
                <h4 class="text-h6 q-mb-md">Key Features</h4>
                <q-list dense>
                  <q-item v-for="feature in selectedProduct.features" :key="feature">
                    <q-item-section avatar>
                      <q-icon name="check_circle" color="primary" />
                    </q-item-section>
                    <q-item-section>{{ feature }}</q-item-section>
                  </q-item>
                </q-list>
              </div>

              <div class="specifications q-mb-lg">
                <h4 class="text-h6 q-mb-md">Technical Specifications</h4>
                <div class="row q-col-gutter-md">
                  <div
                    v-for="(spec, key) in selectedProduct.specifications"
                    :key="key"
                    class="col-6"
                  >
                    <div class="text-caption text-grey-7">{{ key }}</div>
                    <div class="text-subtitle1">{{ spec }}</div>
                  </div>
                </div>
              </div>

              <q-btn
                color="primary"
                label="Request Quote"
                class="q-mt-lg"
                no-caps
                unelevated
                @click="requestQuote(selectedProduct)"
              />
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'
import productHighlight1 from '../assets/images/products/product-highlight1.png'
import productHighlight2 from '../assets/images/products/product-highlight2.png'
import productHighlight3 from '../assets/images/products/product-highlight3.png'
import productHighlight4 from '../assets/images/products/product-highlight4.png'

// State
const searchQuery = ref('')
const selectedCategory = ref(null)
const showProductDialog = ref(false)
const selectedProduct = ref(null)

// Categories
const categories = [
  'All Products',
  'Injection Molding Machines',
  'Automation Systems',
  'Energy Solutions',
  'Digital Solutions',
]

// Products Data
const products = [
  {
    id: 1,
    name: 'Smartpower: Minimal Resources, Maximum Performance',
    category: 'Injection Molding Machines',
    image: productHighlight1,
    shortDescription: 'Proven Technology, now more efficient than ever before',
    description:
      'The SmartPower is the new generation of injection molding machines from Wittmann Battenfeld. With its innovative drive concept, it combines maximum performance with minimum energy consumption.',
    features: [
      'Highly dynamic servo drive',
      'Optimized toggle lever geometry',
      'Integrated energy recovery',
      'Compact footprint',
      'User-friendly control system',
    ],
    specifications: {
      'Clamping Force': '25 - 1200 tons',
      'Injection Volume': 'up to 6,410 cm³',
      'Energy Efficiency': 'A++',
      'Control System': 'UNILOG B8',
      'Drive System': 'Servo-hydraulic',
    },
  },
  {
    id: 2,
    name: 'Wittmann 4.0 - Digital Excellence',
    category: 'Digital Solutions',
    image: productHighlight2,
    shortDescription: 'For some, digitization is a closed book - offers a comprehensive solution',
    description:
      'Wittmann 4.0 is the complete solution for the digital factory of the future. It enables seamless integration of robots, peripheral devices and injection molding machines.',
    features: [
      'Central control system',
      'Real-time monitoring',
      'Predictive maintenance',
      'Energy management',
      'Quality control',
    ],
    specifications: {
      Connectivity: 'OPC UA',
      Interface: 'Web-based',
      'Data Storage': 'Cloud/Local',
      'Supported Devices': 'Unlimited',
      'Remote Access': 'Yes',
    },
  },
  {
    id: 3,
    name: 'Eco Power B8X',
    category: 'Energy Solutions',
    image: productHighlight3,
    shortDescription: 'Effortless Precision and minimal energy consumption',
    description:
      'The EcoPower is an all-electric injection molding machine that combines maximum precision with outstanding energy efficiency. Its innovative drive technology ensures minimal energy consumption.',
    features: [
      'All-electric drive system',
      'High-precision injection control',
      'Energy recovery system',
      'Clean room capability',
      'Fast cycle times',
    ],
    specifications: {
      'Clamping Force': '55 - 650 tons',
      'Injection Speed': 'up to 450 mm/s',
      'Energy Savings': 'up to 60%',
      Precision: '±0.01 mm',
      'Noise Level': '<65 dB',
    },
  },
  {
    id: 4,
    name: 'Energy Consulting Services',
    category: 'Energy Solutions',
    image: productHighlight4,
    shortDescription: 'We will help you to keep your energy under control',
    description:
      'Our comprehensive energy consulting service helps you optimize your production processes for maximum energy efficiency. We analyze your current setup and provide tailored solutions.',
    features: [
      'Energy consumption analysis',
      'Process optimization',
      'Cost reduction strategies',
      'Implementation support',
      'Ongoing monitoring',
    ],
    specifications: {
      'Analysis Duration': '2-4 weeks',
      'Savings Potential': '20-40%',
      'Report Format': 'Detailed PDF',
      'Follow-up': 'Quarterly',
      'ROI Period': '6-18 months',
    },
  },
]

// Computed
const filteredProducts = computed(() => {
  let filtered = products

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.shortDescription.toLowerCase().includes(query),
    )
  }

  if (selectedCategory.value && selectedCategory.value !== 'All Products') {
    filtered = filtered.filter((product) => product.category === selectedCategory.value)
  }

  return filtered
})

// Methods
const openProductDetails = (product) => {
  selectedProduct.value = product
  showProductDialog.value = true
}

const requestQuote = (product) => {
  // Implement quote request logic
  console.log('Quote requested for:', product.name)
}
</script>

<style lang="scss" scoped>
.products-page {
  .page-header {
    background-color: #ffff;
    padding: 4rem 0;

    .header-content {
      max-width: 800px;
      margin: 0 auto;
    }

    .text-h2 {
      font-weight: 700;
    }

    .text-subtitle1 {
      color: rgba(0, 0, 0, 0.7);
    }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .products-section {
    padding: 4rem 0;
  }

  .product-card {
    height: 100%;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    .q-img {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }

  .product-dialog {
    .q-img {
      border-radius: 8px;
    }
  }

  @media (max-width: 599px) {
    .page-header {
      padding: 3rem 0;

      .text-h2 {
        font-size: 2rem;
      }
    }

    .products-section {
      padding: 2rem 0;
    }
  }
}
</style>
