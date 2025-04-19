<template>
  <footer class="footer q-pa-lg bg-grey-2">
    <div class="container">
      <div class="row q-col-gutter-xl">
        <!-- Company Info -->
        <div class="col-12 col-md-3">
          <img
            src="~/assets/images/logo.png"
            alt="Rains Plastics, Inc."
            class="footer__logo q-mb-md"
          />
          <p class="text-body2 q-mb-lg">
            Providing cutting-edge automation solutions for the injection molding industry.
          </p>
          <div class="footer__social">
            <q-btn flat round color="primary" icon="fab fa-twitter" href="#" target="_blank" />
            <q-btn flat round color="primary" icon="fab fa-facebook" href="#" target="_blank" />
            <q-btn flat round color="primary" icon="fab fa-linkedin" href="#" target="_blank" />
            <q-btn flat round color="primary" icon="fab fa-instagram" href="#" target="_blank" />
          </div>
        </div>

        <!-- Quick Links -->
        <div class="col-12 col-md-3">
          <h6 class="text-weight-bold q-mb-lg">Quick Links</h6>
          <ul class="footer__links">
            <li><router-link to="/about">About us</router-link></li>
            <li><router-link to="/services">Our services</router-link></li>
            <li><router-link to="/projects">Projects</router-link></li>
            <li><router-link to="/team">Our Team</router-link></li>
            <li><router-link to="/pricing">Pricing Plan</router-link></li>
            <li><router-link to="/blog">Blog</router-link></li>
            <li><router-link to="/contact">Contact us</router-link></li>
          </ul>
        </div>

        <!-- Official Information -->
        <div class="col-12 col-md-3">
          <h6 class="text-weight-bold q-mb-lg">Official Information</h6>
          <div class="footer__info">
            <div class="footer__info-item q-mb-md">
              <h6 class="text-weight-medium q-mb-sm">Address:</h6>
              <p>873 Kings Cross Dr Wadsworth, OH, 44281-8902 United States</p>
            </div>
            <div class="footer__info-item q-mb-md">
              <h6 class="text-weight-medium q-mb-sm">Email:</h6>
              <a href="mailto:Info@RainsplasticsINC.Com">trains@neo.rr.com</a>
            </div>
            <div class="footer__info-item">
              <h6 class="text-weight-medium q-mb-sm">Phone:</h6>
              <a href="tel:+1234567890">+123 345987678</a>
            </div>
          </div>
        </div>

        <!-- Newsletter -->
        <div class="col-12 col-md-3">
          <h6 class="text-weight-bold q-mb-lg">Newsletter</h6>
          <p class="text-body2 q-mb-md">
            Join Our Subscribers List To Get Latest News And Special Offers.
          </p>
          <newsletter-form />
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="footer__copyright q-mt-xl text-center">
      <p class="text-caption">
        Copyright © {{ new Date().getFullYear() }}
        <span class="text-primary text-weight-bold">RAINS PLASTICS</span>, inc. All Rights Reserved.
      </p>
    </div>
  </footer>
</template>

<script setup>
import NewsletterForm from '../newsletter/NewsletterForm.vue'
</script>

<style lang="scss" scoped>
.footer {
  &__logo {
    max-width: 180px;
    height: auto;
  }

  &__social {
    display: flex;
    gap: 1rem;
  }

  &__links {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 0.75rem;

      a {
        color: inherit;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: var(--q-primary);
        }
      }
    }
  }

  &__info {
    &-item {
      h6 {
        margin: 0;
        color: var(--q-primary);
      }

      a {
        color: inherit;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: var(--q-primary);
        }
      }
    }
  }

  &__copyright {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding-top: 2rem;
  }
}
</style>
