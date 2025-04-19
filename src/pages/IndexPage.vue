<template>
  <q-page>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <ShowcaseSection />
    <ProductHighlightsSection />
    <ContactSection />
    <WhatMakesUsDifferentSection />
  </q-page>
</template>

<script setup>
import HeroSection from '../components/home/HeroSection.vue'
import AboutSection from '../components/home/AboutSection.vue'
import ServicesSection from '../components/home/ServicesSection.vue'
import ShowcaseSection from '../components/home/ShowcaseSection.vue'
import WhatMakesUsDifferentSection from '../components/home/WhatMakesUsDifferentSection.vue'
import ProductHighlightsSection from 'components/home/ProductHighlightsSection.vue'
import ContactSection from '../components/home/ContactSection.vue'
</script>

<style lang="scss" scoped>
.q-page {
  min-height: unset;
}
</style>
