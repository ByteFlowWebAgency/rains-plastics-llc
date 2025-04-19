<template>
  <section id="contact-section" class="contact-section q-py-xl">
    <div class="container q-mx-auto">
      <div class="text-center q-mb-xl">
        <div class="section-header">
          <div class="line"></div>
          <div class="text-overline text-primary q-mb-sm">CONTACT US</div>
        </div>
        <h2 class="text-h3 q-mt-md">Contact us</h2>
      </div>
      <div class="row q-col-gutter-xl">
        <div class="col-12 col-md-6">
          <div class="contact-image">
            <img src="../../assets/images/backgrounds/contact-us-img.png" alt="Contact Us" />
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="contact-content">
            <h3 class="text-h5 text-weight-bold q-mb-lg">Drop us a message!</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ContactForm from '../forms/ContactForm.vue'
</script>

<style scoped>
.contact-section {
  background: white;
  padding: 5rem 1rem;
}

.container {
  max-width: 1200px;
  width: 100%;
}

.section-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.line {
  width: 25px;
  height: 2px;
  background-color: #b71c1c;
}

.text-overline {
  letter-spacing: 2px;
  font-weight: 600;
  font-size: 0.875rem;
}

.text-h3 {
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: -0.5px;
}

.contact-image {
  border: 2px solid #b71c1c;
  border-radius: 4px;
  overflow: hidden;
}

.contact-image img {
  width: 100%;
  height: auto;
  display: block;
}

.contact-content {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.text-h5 {
  font-size: 1.25rem;
}

@media (max-width: 1023px) {
  .contact-section {
    padding: 4rem 1rem;
  }

  .text-h3 {
    font-size: 2.25rem;
  }
}

@media (max-width: 599px) {
  .contact-section {
    padding: 3rem 1rem;
  }

  .contact-image {
    margin-bottom: 2rem;
  }

  .text-h3 {
    font-size: 2rem;
  }

  .text-h5 {
    font-size: 1.15rem;
  }
}
</style>
