<template>
  <q-dialog v-model="isOpen" persistent>
    <q-card class="about-modal">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">About Rains Plastics</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section class="q-pt-md">
        <div class="text-body1 q-mb-md">
          Rains Plastics LLC is a leading manufacturer of high-quality plastic products,
          specializing in custom injection molding and innovative plastic solutions.
        </div>

        <div class="section q-mb-md">
          <div class="text-subtitle1 text-weight-bold q-mb-sm">Our Expertise</div>
          <ul class="q-pl-md">
            <li>Custom injection molding</li>
            <li>Product design and development</li>
            <li>Prototyping services</li>
            <li>Quality control and testing</li>
            <li>Material selection consulting</li>
          </ul>
        </div>

        <div class="section q-mb-md">
          <div class="text-subtitle1 text-weight-bold q-mb-sm">Quality Standards</div>
          <p>
            We maintain the highest quality standards in the industry, ensuring each product meets
            or exceeds customer specifications. Our state-of-the-art facility is equipped with
            advanced machinery and staffed by skilled professionals.
          </p>
        </div>

        <div class="section">
          <div class="text-subtitle1 text-weight-bold q-mb-sm">Our Commitment</div>
          <p>At Rains Plastics, we are committed to:</p>
          <ul class="q-pl-md">
            <li>Environmental sustainability</li>
            <li>Customer satisfaction</li>
            <li>Continuous innovation</li>
            <li>On-time delivery</li>
          </ul>
        </div>
      </q-card-section>

      <q-card-actions align="right" class="bg-white text-primary">
        <q-btn flat label="Close" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'AboutModal',
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    isOpen: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.about-modal {
  width: 100%;
  max-width: 600px;
  border-radius: 8px;

  .section {
    ul {
      margin: 0;
      li {
        margin-bottom: 4px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
