<template>
  <q-dialog
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    persistent
    maximized
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <q-card class="service-modal">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">{{ service?.title }}</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section class="q-pt-sm">
        <div class="row q-col-gutter-lg">
          <!-- Left Column -->
          <div class="col-12 col-md-6">
            <q-img :src="service?.image" :ratio="16 / 9" class="rounded-borders" />
            <div class="text-body1 q-mt-md description">
              {{ service?.description }}
            </div>
          </div>

          <!-- Right Column -->
          <div class="col-12 col-md-6">
            <!-- Features -->
            <div class="section-container">
              <h4 class="text-h6 text-primary q-mb-md">Key Features</h4>
              <q-list>
                <q-item v-for="(feature, index) in service?.features" :key="index">
                  <q-item-section avatar>
                    <q-icon name="check_circle" color="primary" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>{{ feature }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>

            <!-- Applications -->
            <div class="section-container q-mt-lg">
              <h4 class="text-h6 text-primary q-mb-md">Applications</h4>
              <q-list>
                <q-item v-for="(application, index) in service?.applications" :key="index">
                  <q-item-section avatar>
                    <q-icon name="arrow_right" color="primary" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>{{ application }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>

            <!-- Benefits -->
            <div class="section-container q-mt-lg">
              <h4 class="text-h6 text-primary q-mb-md">Benefits</h4>
              <q-list>
                <q-item v-for="(benefit, index) in service?.benefits" :key="index">
                  <q-item-section avatar>
                    <q-icon name="star" color="primary" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>{{ benefit }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </div>
        </div>
      </q-card-section>

      <q-card-actions align="right" class="q-pa-md">
        <q-btn flat label="Close" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  service: {
    type: Object,
    required: true,
  },
})

defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
.service-modal {
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
  overflow-y: auto;

  .text-h6 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .description {
    font-size: 1rem;
    line-height: 1.6;
    color: rgba(0, 0, 0, 0.7);
  }

  .section-container {
    background: #f5f5f5;
    padding: 1.5rem;
    border-radius: 8px;

    .text-h6 {
      font-size: 1.25rem;
      color: var(--q-primary);
    }

    .q-item {
      padding: 8px 0;
    }
  }
}

@media (max-width: 599px) {
  .service-modal {
    .text-h6 {
      font-size: 1.25rem;
    }

    .description {
      font-size: 0.9rem;
    }

    .section-container {
      padding: 1rem;
      margin-bottom: 1rem;

      .text-h6 {
        font-size: 1.1rem;
      }

      .q-item {
        min-height: 40px;
        padding: 4px 0;
      }

      .q-item-label {
        font-size: 0.9rem;
        line-height: 1.4;
      }
    }

    .q-card-section {
      padding: 12px 16px;
    }
  }
}
</style>
