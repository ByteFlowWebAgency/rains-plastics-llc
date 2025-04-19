<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Top black bar -->
    <div class="top-bar bg-black text-white q-py-sm">
      <div class="container row justify-between items-center">
        <div class="row items-center">
          <q-icon name="mail" class="q-mr-sm" />
          <span class="text-caption">trains@neo.rr.com</span>
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
          <a href="#" @click.prevent="navigateTo('/')">
            <img
              src="../assets/images/logos/rains-plastic-logo-home.png"
              alt="Rains Plastics Inc"
              class="main-logo"
            />
          </a>
        </div>

        <!-- Navigation -->
        <div class="row no-wrap items-center full-width justify-between gt-sm">
          <div class="nav-links">
            <q-btn flat no-caps @click="navigateTo('/', 'hero')" label="Home" />
            <q-btn flat no-caps @click="navigateTo('/', 'about')" label="About us" />
            <q-btn flat no-caps @click="navigateTo('/', 'services')" label="Services" />
            <q-btn flat no-caps @click="navigateTo('/', 'products')" label="Products" />
            <q-btn flat no-caps @click="navigateTo('/', 'contact')" label="Contact" />
          </div>

          <!-- Social Media Icons -->
          <div class="social-icons">
            <a href="#" target="_blank">
              <img src="../assets/images/icons/footer-facebook.png" alt="Facebook" />
            </a>
            <a href="#" target="_blank">
              <img src="../assets/images/icons/footer-twitter-icon.png" alt="Twitter" />
            </a>
            <a href="#" target="_blank">
              <img src="../assets/images/icons/footer-linked-in.png" alt="LinkedIn" />
            </a>
            <a href="#" target="_blank">
              <img src="../assets/images/icons/footer-instagram.png" alt="Instagram" />
            </a>
          </div>
        </div>

        <!-- Mobile menu button -->
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          class="lt-md mobile-menu-btn"
          @click="toggleDrawer"
        />
      </q-toolbar>
    </q-header>

    <!-- Mobile drawer -->
    <q-drawer v-model="drawerOpen" bordered class="bg-white" side="right">
      <q-list>
        <q-item clickable v-ripple @click="navigateTo('/', 'hero')">
          <q-item-section>Home</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="navigateTo('/', 'about')">
          <q-item-section>About us</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="navigateTo('/', 'services')">
          <q-item-section>Services</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="navigateTo('/', 'products')">
          <q-item-section>Products</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="navigateTo('/', 'contact')">
          <q-item-section>Contact</q-item-section>
        </q-item>

        <!-- Social Media Icons in Mobile Menu -->
        <q-item class="social-icons-mobile q-pa-md">
          <div class="row justify-center full-width q-gutter-md">
            <a href="#" target="_blank">
              <img src="../assets/images/icons/footer-facebook.png" alt="Facebook" />
            </a>
            <a href="#" target="_blank">
              <img src="../assets/images/icons/footer-twitter-icon.png" alt="Twitter" />
            </a>
            <a href="#" target="_blank">
              <img src="../assets/images/icons/footer-linked-in.png" alt="LinkedIn" />
            </a>
            <a href="#" target="_blank">
              <img src="../assets/images/icons/footer-instagram.png" alt="Instagram" />
            </a>
          </div>
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
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import TheFooter from 'components/layout/TheFooter.vue'

const router = useRouter()
const route = useRoute()
const drawerOpen = ref(false)

const toggleDrawer = () => {
  drawerOpen.value = !drawerOpen.value
}

const scrollToSection = (sectionId) => {
  // Close drawer if open
  drawerOpen.value = false

  // Add a small delay to ensure the DOM is ready
  setTimeout(() => {
    const element = document.getElementById(sectionId + '-section')
    if (element) {
      const headerOffset = 80 // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    } else if (sectionId === 'hero') {
      // If hero section, scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }, 100)
}

// Handle navigation and scrolling
const navigateTo = async (path, section = null) => {
  drawerOpen.value = false // Close mobile drawer if open

  if (route.path !== path) {
    // If navigating to a different page
    await router.push(path)
    // Wait for navigation and DOM update
    await new Promise((resolve) => setTimeout(resolve, 100))
  }

  if (section) {
    scrollToSection(section)
  } else {
    // Scroll to top for main pages
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

// Handle initial navigation with hash
onMounted(() => {
  if (route.hash) {
    const section = route.hash.slice(1) // Remove the # from the hash
    scrollToSection(section)
  }
})
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
    margin-top: -20px;
    padding: 10px;
    background: white;
    border-radius: 4px;
  }
}

.nav-links {
  .q-btn {
    font-weight: 500;
    padding: 8px 16px;
    color: #1a1a1a;

    &:hover {
      color: #aa111f;
    }
  }
}

.social-icons {
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid #aa111f;
    transition: all 0.3s ease;

    img {
      width: 16px;
      height: 16px;
    }

    &:hover {
      background: #aa111f;
      img {
        filter: brightness(0) invert(1);
      }
    }
  }
}

.social-icons-mobile {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 1rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid #aa111f;

    img {
      width: 16px;
      height: 16px;
    }

    &:hover {
      background: #aa111f;
      img {
        filter: brightness(0) invert(1);
      }
    }
  }
}

.mobile-menu-btn {
  margin-left: auto;
  color: #1a1a1a;
}

// Mobile drawer styles
.q-drawer {
  .q-item {
    color: #1a1a1a;
    font-weight: 500;

    &:hover {
      color: #aa111f;
    }

    &--active {
      color: #aa111f;
    }
  }
}

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
