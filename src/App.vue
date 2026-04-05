<script setup lang="ts">
import { useSmoothScroll } from './composables/useSmoothScroll'
import HeroSection from './components/sections/HeroSection.vue'
import YearSection from './components/sections/YearSection.vue'
import PinnedSections from './components/sections/PinnedSections.vue'
import ContactSection from './components/sections/ContactSection.vue'

// Initialize smooth scroll with Lenis
useSmoothScroll()
</script>

<template>
  <div class="app">
    <HeroSection />
    <YearSection />
    <PinnedSections />
    <ContactSection />
  </div>
</template>

<style>
.app {
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
}
</style>
