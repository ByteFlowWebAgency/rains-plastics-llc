<template>
  <div class="contact-form">
    <q-form ref="contactForm" @submit.prevent="onSubmit" class="q-gutter-y-md">
      <q-input
        v-model="form.name"
        label="Name"
        filled
        bg-color="grey-2"
        class="no-border"
        dense
        :rules="[(val) => !!val || 'Name is required']"
      />
      <q-input
        v-model="form.email"
        label="Email*"
        type="email"
        filled
        bg-color="grey-2"
        class="no-border"
        dense
        :rules="[
          (val) => !!val || 'Email is required',
          (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) || 'Please enter a valid email',
        ]"
      />
      <q-input
        v-model="form.message"
        label="Message"
        type="textarea"
        filled
        bg-color="grey-2"
        class="no-border"
        rows="6"
        :rules="[(val) => !!val || 'Message is required']"
      />

      <div class="submit-section">
        <q-btn
          type="submit"
          style="background: #aa111f; color: white"
          label="Send Message"
          class="full-width custom-button"
          unelevated
          :loading="loading"
        >
          <template v-slot:loading>
            <q-spinner-dots />
          </template>
        </q-btn>
        <p class="text-caption text-grey-7 q-mt-sm text-center">
          This site is protected by reCAPTCHA and the google
          <a href="#" @click.prevent="showPrivacyPolicy = true" style="color: #aa111f"
            >privacy policy</a
          >
          and
          <a href="#" @click.prevent="showTermsOfService = true" style="color: #aa111f"
            >terms of service</a
          >
          apply.
        </p>
      </div>
    </q-form>

    <!-- Privacy Policy Modal -->
    <q-dialog v-model="showPrivacyPolicy" persistent>
      <q-card style="min-width: 350px; max-width: 600px">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Privacy Policy</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="q-pt-md">
          <p>
            Google's reCAPTCHA service helps protect our website from spam and abuse while providing
            you with a seamless experience. By using our contact form, you agree to Google's Privacy
            Policy:
          </p>
          <ul>
            <li>Information collected may include your IP address</li>
            <li>Browser and device information</li>
            <li>Usage patterns and interactions</li>
          </ul>
          <p>
            For more details, please visit
            <a href="https://policies.google.com/privacy" target="_blank" style="color: #aa111f"
              >Google's Privacy Policy</a
            >.
          </p>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Close" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Terms of Service Modal -->
    <q-dialog v-model="showTermsOfService" persistent>
      <q-card style="min-width: 350px; max-width: 600px">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Terms of Service</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="q-pt-md">
          <p>By using our contact form, you agree to Google's Terms of Service for reCAPTCHA:</p>
          <ul>
            <li>The service helps prevent automated spam submissions</li>
            <li>Your use of reCAPTCHA is subject to Google's terms</li>
            <li>The service may analyze your behavior to determine if you're human</li>
          </ul>
          <p>
            For more details, please visit
            <a href="https://policies.google.com/terms" target="_blank" style="color: #aa111f"
              >Google's Terms of Service</a
            >.
          </p>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Close" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { z } from 'zod'
import Swal from 'sweetalert2'

const loading = ref(false)
const showPrivacyPolicy = ref(false)
const showTermsOfService = ref(false)
const contactForm = ref(null)

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message is required'),
})

const form = ref({
  name: '',
  email: '',
  message: '',
})

const resetForm = async () => {
  // First reset the form data
  form.value = {
    name: '',
    email: '',
    message: '',
  }

  // Wait for the next DOM update cycle
  await nextTick()

  // Then reset validation states
  if (contactForm.value) {
    contactForm.value.resetValidation()
  }
}

const onSubmit = async () => {
  try {
    loading.value = true

    const validatedData = contactSchema.parse(form.value)

    // Determine the correct API URL based on environment
    const baseUrl = import.meta.env.PROD ? 'https://rainsplastics.com' : ''
    const apiUrl = `${baseUrl}/contact`

    // Send form data to API
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(validatedData),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error || 'Failed to send message')
    }

    // Show success message
    await Swal.fire({
      title: 'Success!',
      text: 'Your message has been sent successfully.',
      icon: 'success',
      confirmButtonColor: '#AA111F',
    })

    // Reset form after successful submission
    await resetForm()
  } catch (error) {
    if (error instanceof z.ZodError) {
      const firstError = error.errors[0]
      await Swal.fire({
        title: 'Validation Error',
        text: firstError.message,
        icon: 'error',
        confirmButtonColor: '#AA111F',
      })
      return
    }

    await Swal.fire({
      title: 'Error',
      text: error.message || 'Failed to send message. Please try again later.',
      icon: 'error',
      confirmButtonColor: '#AA111F',
    })
  } finally {
    loading.value = false
  }
}
</script>

<style lang="scss" scoped>
.contact-form {
  max-width: 800px;
  margin: 0 auto;

  .q-field {
    border-radius: 4px;

    &.no-border {
      .q-field__control {
        &:before {
          border: none;
        }
      }
    }
  }

  .submit-section {
    margin-top: 2rem;

    .q-btn {
      height: 48px;
      font-size: 1rem;
      font-weight: 500;
    }

    .custom-button {
      border-radius: 12px;
    }

    a {
      text-decoration: underline;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  }
}

@media (max-width: 599px) {
  .contact-form {
    .submit-section {
      margin-top: 1.5rem;

      .q-btn {
        height: 44px;
      }
    }
  }
}
</style>
