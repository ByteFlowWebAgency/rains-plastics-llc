<template>
  <div class="newsletter-section">
    <h6 class="text-weight-bold q-mb-md">Newsletter</h6>
    <p class="text-body2 q-mb-md">
      Join Our Subscribers List To Get Latest News And Special Offers.
    </p>

    <form @submit.prevent="handleSubmit">
      <q-input
        v-model="email"
        type="email"
        placeholder="Enter Your Email"
        outlined
        bg-color="white"
        class="newsletter-input q-mb-sm"
        :rules="[(val) => validateEmail(val) || 'Please enter a valid email']"
        :error="!!errorMessage"
        :error-message="errorMessage"
      />

      <q-btn
        label="Subscribe Now"
        color="primary"
        class="full-width subscribe-btn"
        type="submit"
        :loading="loading"
        :disable="!email || loading"
        unelevated
        no-caps
      />
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const loading = ref(false)
const errorMessage = ref('')

const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const handleSubmit = async () => {
  if (!validateEmail(email.value)) {
    errorMessage.value = 'Please enter a valid email'
    return
  }

  loading.value = true
  errorMessage.value = ''
  try {
    // Add your newsletter subscription logic here
    await new Promise((resolve) => setTimeout(resolve, 1000))
    email.value = ''
    // Show success message
  } catch (error) {
    errorMessage.value = error?.message || 'Failed to subscribe. Please try again.'
    console.error('Newsletter subscription error:', error)
  } finally {
    loading.value = false
  }
}
</script>

<style lang="scss" scoped>
.newsletter-section {
  .newsletter-input {
    width: 100%;
    margin-bottom: 8px;
  }

  .subscribe-btn {
    height: 42px;
    font-weight: 500;
    border-radius: 4px;
  }
}
</style>
