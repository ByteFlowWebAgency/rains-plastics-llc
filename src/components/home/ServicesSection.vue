<template>
  <section id="services-section" class="services-section q-py-xl">
    <div class="container">
      <div
        v-motion
        class="section-header text-center q-mb-xl"
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800 } }"
      >
        <div class="section-label">OUR SERVICES</div>
        <h2 class="section-title">Our services</h2>
      </div>

      <!-- Desktop View -->
      <div class="row q-col-gutter-xl desktop-services">
        <div
          v-for="service in services"
          :key="service.id"
          v-motion
          class="col-12 col-sm-6 col-md-4"
          :initial="{ opacity: 0, y: 50 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { delay: 200 + service.id * 100, duration: 800 },
          }"
        >
          <div class="service-card">
            <div class="service-image">
              <img :src="service.image" :alt="service.title" />
            </div>
            <div class="service-icon">
              <img :src="service.icon" :alt="service.title + ' Icon'" />
            </div>
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.shortDescription }}</p>
            <div class="learn-more">
              <q-btn
                flat
                class="learn-more-btn"
                label="Learn More"
                no-caps
                icon-right="arrow_forward"
                @click="openServiceModal(service)"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Carousel View -->
      <div class="mobile-services">
        <q-carousel
          v-model="slide"
          animated
          arrows
          navigation
          infinite
          :autoplay="5000"
          class="mobile-carousel"
        >
          <q-carousel-slide
            v-for="service in services"
            :key="service.id"
            :name="service.id"
            class="column no-wrap"
          >
            <div class="service-card mobile">
              <div class="service-image">
                <img :src="service.image" :alt="service.title" />
              </div>
              <div class="service-content">
                <h3 class="service-title">{{ service.title }}</h3>
                <p class="service-description">{{ service.shortDescription }}</p>
                <q-btn
                  flat
                  class="learn-more-btn"
                  label="Learn More"
                  no-caps
                  icon-right="arrow_forward"
                  @click="openServiceModal(service)"
                />
              </div>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>

    <service-modal v-model="showModal" :service="selectedService" />
  </section>
</template>

<script setup>
import ServiceModal from '../modals/ServiceModal.vue'
import { ref } from 'vue'

// Import service images
import serviceImage1 from '../../assets/images/products/services-image1.png'
import serviceImage2 from '../../assets/images/products/services-image2.png'
import serviceImage3 from '../../assets/images/products/services-image3.png'
import serviceImage4 from '../../assets/images/products/services-image4.png'
import serviceImage5 from '../../assets/images/products/services-image5.png'
import serviceImage6 from '../../assets/images/products/services-image6.png'

// Import service icons
import serviceIcon1 from '../../assets/images/icons/services-icon1.png'
import serviceIcon2 from '../../assets/images/icons/services-icon2.png'
import serviceIcon3 from '../../assets/images/icons/services-icon3.png'
import serviceIcon4 from '../../assets/images/icons/services-icon4.png'
import serviceIcon5 from '../../assets/images/icons/services-icon5.png'
import serviceIcon6 from '../../assets/images/icons/services-icon6.png'

const selectedService = ref(null)
const showModal = ref(false)
const slide = ref(1)

const services = [
  {
    id: 1,
    title: 'Plastic Injection Molding',
    shortDescription:
      'We have been injection molding for 40+ years, serving markets as military and medical devices...',
    description:
      'Our state-of-the-art plastic injection molding services combine precision engineering with decades of expertise. We specialize in producing high-quality plastic components for various industries, with a particular focus on military and medical applications.',
    image: serviceImage1,
    icon: serviceIcon1,
    features: [
      'Advanced injection molding machinery',
      'Precision tooling and quality control',
      'Custom material selection',
      'Complex part capability',
      'High-volume production capacity',
    ],
    applications: [
      'Medical devices and components',
      'Military equipment parts',
      'Aerospace components',
      'Consumer products',
      'Industrial applications',
    ],
    benefits: [
      'Consistent high-quality production',
      'Cost-effective manufacturing',
      'Rapid production cycles',
      'Design flexibility',
      'Material versatility',
    ],
  },
  {
    id: 2,
    title: 'Tooling And Fabrication',
    shortDescription:
      'We have been injection molding for 40+ years, serving markets as military and medical devices...',
    description:
      'Our tooling and fabrication services provide comprehensive solutions for custom manufacturing needs. We utilize advanced technology and skilled craftsmanship to create precise tools and components.',
    image: serviceImage2,
    icon: serviceIcon2,
    features: [
      'Custom tool design and manufacturing',
      'Precision machining',
      'Advanced CAD/CAM technology',
      'Quality control and testing',
      'Rapid prototyping',
    ],
    applications: [
      'Injection mold tooling',
      'Custom machinery parts',
      'Production equipment',
      'Specialized tools',
      'Manufacturing fixtures',
    ],
    benefits: [
      'Reduced production time',
      'Improved product quality',
      'Cost-effective solutions',
      'Enhanced manufacturing efficiency',
      'Custom design capabilities',
    ],
  },
  {
    id: 3,
    title: 'Assembly Services',
    shortDescription:
      'We have been injection molding for 40+ years, serving markets as military and medical devices...',
    description:
      'Our assembly services offer complete product assembly solutions, from simple components to complex systems. We ensure precise assembly and quality control at every step.',
    image: serviceImage3,
    icon: serviceIcon3,
    features: [
      'Automated and manual assembly',
      'Quality control procedures',
      'Component testing',
      'Packaging solutions',
      'Inventory management',
    ],
    applications: [
      'Medical device assembly',
      'Electronic components',
      'Military equipment',
      'Consumer products',
      'Industrial assemblies',
    ],
    benefits: [
      'Streamlined production',
      'Quality assurance',
      'Reduced labor costs',
      'Flexible capacity',
      'Fast turnaround times',
    ],
  },
  {
    id: 4,
    title: 'Water Injection',
    shortDescription:
      'We have been injection molding for 40+ years, serving markets as military and medical devices...',
    description:
      'Our water injection services provide specialized solutions for complex plastic components. We utilize advanced water injection technology to create hollow parts with precise dimensions.',
    image: serviceImage4,
    icon: serviceIcon4,
    features: [
      'Advanced water injection technology',
      'Precision control systems',
      'Custom tooling solutions',
      'Quality monitoring',
      'High-volume production',
    ],
    applications: [
      'Automotive components',
      'Medical devices',
      'Industrial parts',
      'Consumer products',
      'Specialized components',
    ],
    benefits: [
      'Reduced material usage',
      'Improved part strength',
      'Cost-effective production',
      'Design flexibility',
      'Consistent quality',
    ],
  },
  {
    id: 5,
    title: 'Third Party Logistics',
    shortDescription:
      'We have been injection molding for 40+ years, serving markets as military and medical devices...',
    description:
      'Our third-party logistics services provide comprehensive supply chain solutions, ensuring efficient storage, handling, and distribution of your products.',
    image: serviceImage5,
    icon: serviceIcon5,
    features: [
      'Warehouse management',
      'Inventory control',
      'Distribution services',
      'Order fulfillment',
      'Supply chain optimization',
    ],
    applications: [
      'Product storage',
      'Order processing',
      'Distribution management',
      'Returns handling',
      'Supply chain integration',
    ],
    benefits: [
      'Reduced operational costs',
      'Improved efficiency',
      'Scalable solutions',
      'Real-time tracking',
      'Professional handling',
    ],
  },
  {
    id: 6,
    title: 'Program Management',
    shortDescription:
      'We have been injection molding for 40+ years, serving markets as military and medical devices...',
    description:
      'Our program management services ensure successful project execution from concept to completion. We provide comprehensive oversight and coordination of all project aspects.',
    image: serviceImage6,
    icon: serviceIcon6,
    features: [
      'Project planning and coordination',
      'Resource management',
      'Timeline tracking',
      'Quality assurance',
      'Risk management',
    ],
    applications: [
      'Manufacturing programs',
      'Product development',
      'Process improvement',
      'Facility optimization',
      'Supply chain management',
    ],
    benefits: [
      'Streamlined operations',
      'Improved efficiency',
      'Cost control',
      'Quality maintenance',
      'Timely delivery',
    ],
  },
]

const openServiceModal = (service) => {
  selectedService.value = service
  showModal.value = true
}
</script>

<style lang="scss" scoped>
.services-section {
  background: #e2dfdf;
  padding: 6rem 0;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .section-header {
    .section-label {
      color: #b01e23;
      font-weight: 600;
      font-size: 0.875rem;
      margin-bottom: 0.5rem;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1a1a1a;
      margin: 0;
      text-transform: capitalize;
    }
  }

  .mobile-services {
    display: none;
  }

  .service-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    height: 100%;
    position: relative;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    padding-bottom: 1.5rem;
    display: flex;
    flex-direction: column;

    &.mobile {
      padding-bottom: 0;
      height: auto;
      box-shadow: none;
      background: transparent;

      .service-image {
        border-radius: 12px;
        margin-bottom: 1rem;
      }

      .service-content {
        padding: 0 1rem;
      }

      .service-title {
        color: #1a1a1a;
        font-size: 1.5rem;
        margin: 0 0 0.5rem;
        text-align: left;
      }

      .service-description {
        color: rgba(0, 0, 0, 0.7);
        margin: 0 0 1rem;
        text-align: left;
      }

      .learn-more-btn {
        padding: 0;
        color: #b01e23;
        font-weight: 500;
      }
    }

    .service-image {
      position: relative;
      overflow: hidden;
      aspect-ratio: 16/9;
      border-radius: 12px 12px 0 0;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .service-icon {
      width: 60px;
      height: 60px;
      background: #b01e23;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: -30px auto 1.5rem;
      position: relative;
      z-index: 2;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

      img {
        width: 30px;
        height: 30px;
        object-fit: contain;
      }
    }

    .service-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #000;
      margin: 0 1.5rem 1rem;
      text-align: center;
    }

    .service-description {
      font-size: 0.875rem;
      line-height: 1.6;
      color: rgba(0, 0, 0, 0.7);
      margin: 0 1.5rem 1.5rem;
      text-align: center;
      flex-grow: 1;
    }

    .learn-more {
      text-align: center;
      margin-top: auto;

      .learn-more-btn {
        color: #b01e23;
        font-weight: 500;
        padding: 0;
        text-transform: none;

        .q-icon {
          font-size: 1.2rem;
          margin-left: 0.25rem;
        }
      }
    }
  }
}

@media (max-width: 1023px) {
  .services-section {
    padding: 4rem 0;

    .section-header {
      .section-title {
        font-size: 2rem;
      }
    }
  }
}

@media (max-width: 599px) {
  .services-section {
    padding: 3rem 0;

    .desktop-services {
      display: none;
    }

    .mobile-services {
      display: block;
    }

    .mobile-carousel {
      height: auto;
      min-height: 550px;
      background: transparent;
      position: relative;
      padding-bottom: 80px;

      :deep() {
        .q-carousel__navigation {
          bottom: 20px;
          position: absolute;
          width: 100%;

          .q-btn {
            font-size: 10px;
            margin: 6px 4px;
            padding: 0;
            min-height: 0;
            opacity: 0.5;

            &--active {
              opacity: 1;
              color: #b01e23;
            }
          }
        }

        .q-carousel__arrow {
          position: absolute;
          top: unset;
          bottom: 0;
          color: #fff;
          background: #b01e23;
          box-shadow: 0 2px 8px rgba(176, 30, 35, 0.3);
          font-size: 1.2rem;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          transition: all 0.3s ease;

          &:hover {
            background: #8b171b;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(176, 30, 35, 0.4);
          }

          &.q-carousel__arrow--prev {
            left: calc(50% - 100px);
          }

          &.q-carousel__arrow--next {
            right: calc(50% - 100px);
          }
        }
      }

      .q-carousel__slide {
        padding: 0;
      }
    }

    .section-header {
      .section-title {
        font-size: 1.8rem;
      }
    }
  }
}
</style>
