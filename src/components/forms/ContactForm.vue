<template>
  <div class="contact-form">
    <q-form @submit="onSubmit" class="q-gutter-y-md">
      <q-input v-model="form.name" label="Name" filled bg-color="grey-2" class="no-border" dense />
      <q-input
        v-model="form.email"
        label="Email*"
        type="email"
        filled
        bg-color="grey-2"
        class="no-border"
        dense
      />
      <q-input
        v-model="form.message"
        label="Message"
        type="textarea"
        filled
        bg-color="grey-2"
        class="no-border"
        rows="6"
      />

      <div class="submit-section">
        <q-btn
          type="submit"
          style="background: #aa111f; color: white"
          label="Send Message"
          class="full-width custom-button"
          unelevated
        />
        <p class="text-caption text-grey-7 q-mt-sm text-center">
          This site is protected by reCAPTCHA and the google
          <a href="#" style="color: #aa111f">privacy policy</a> and
          <a href="#" style="color: #aa111f">terms of service</a> apply.
        </p>
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const onSubmit = async () => {
  console.log('Form submitted:', form)
  // Reset form after successful submission
  Object.keys(form).forEach((key) => (form[key] = ''))
}
</script>

<style lang="scss" scoped>
.contact-form {
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
