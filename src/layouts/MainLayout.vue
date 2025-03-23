<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Top black bar -->
    <div class="top-bar bg-black text-white q-py-sm">
      <div class="container row justify-between items-center">
        <div class="row items-center">
          <q-icon name="mail" class="q-mr-sm" />
          <span class="text-caption">info@rainsplastics.inc</span>
        </div>
        <div class="row items-center">
          <q-icon name="phone" class="q-mr-sm" />
          <span class="text-caption">666 888 0000</span>
        </div>
      </div>
    </div>

    <!-- Navbar -->
    <q-header elevated class="bg-white text-primary">
      <q-toolbar class="container">
        <!-- Logo -->
        <div class="logo-wrapper">
          <router-link to="/">
            <img
              src="../assets/images/logos/rains-plastic-logo-home.png"
              alt="Rains Plastics Inc"
              class="main-logo"
            />
          </router-link>
        </div>

        <!-- Navigation -->
        <div class="row no-wrap items-center full-width justify-end gt-sm">
          <q-btn flat no-caps to="/" label="Home" />
          <q-btn flat no-caps to="/about" label="About us" />
          <q-btn flat no-caps to="/industries" label="Industries" />
          <q-btn flat no-caps to="/news" label="News" />
          <q-btn flat no-caps to="/faqs" label="FAQs" />
          <q-btn flat no-caps to="/contact" label="Contact" />
        </div>

        <!-- Mobile menu -->
        <q-btn flat dense round icon="menu" aria-label="Menu" class="lt-md" @click="toggleDrawer" />
      </q-toolbar>
    </q-header>

    <!-- Mobile drawer -->
    <q-drawer v-model="drawerOpen" bordered class="bg-white" side="right">
      <q-list>
        <q-item clickable v-ripple to="/" exact>
          <q-item-section>Home</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/about">
          <q-item-section>About us</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/industries">
          <q-item-section>Industries</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/news">
          <q-item-section>News</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/faqs">
          <q-item-section>FAQs</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/contact">
          <q-item-section>Contact</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>

    <the-footer />
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import TheFooter from 'components/layout/TheFooter.vue'

const drawerOpen = ref(false)

const toggleDrawer = () => {
  drawerOpen.value = !drawerOpen.value
}
</script>

<style lang="scss">
.top-bar {
  font-size: 0.9rem;
}

.logo-wrapper {
  position: relative;
  z-index: 2;
  margin-right: 2rem;

  .main-logo {
    width: 140px;
    height: auto;
    margin-top: -20px; // This creates the overlap effect
    padding: 10px;
    background: white;
    border-radius: 4px;
  }
}

// Hide logo container on mobile
@media (max-width: 1023px) {
  .logo-wrapper {
    margin-right: 0;

    .main-logo {
      width: 100px;
      margin-top: 0;
    }
  }
}

// Page transition
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

// Custom container class
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}
</style>
