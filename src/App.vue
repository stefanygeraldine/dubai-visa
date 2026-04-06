<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useSmoothScroll } from './composables/useSmoothScroll'
import HeroSection from './components/sections/HeroSection.vue'
import YearSection from './components/sections/YearSection.vue'
import CamelSection from './components/sections/CamelSection.vue'
import AtlantisSection from './components/sections/AtlantisSection.vue'
import PinnedSections from './components/sections/PinnedSections.vue'
import ContactSection from './components/sections/ContactSection.vue'

gsap.registerPlugin(ScrollTrigger)

useSmoothScroll()

const sliderRef = ref<HTMLElement | null>(null)
const trackRef = ref<HTMLElement | null>(null)
let ctx: gsap.Context

onMounted(() => {
  if (!sliderRef.value || !trackRef.value) return

  ctx = gsap.context(() => {
    const slides = trackRef.value!.children
    const slideCount = slides.length - 1
    const pauseDuration = 1   // pausa relativa al inicio y al final
    const slideDuration = 2   // duración del slide por cada sección
    const totalDuration = pauseDuration + slideCount * (slideDuration + pauseDuration) + pauseDuration
    const scrollDistance = totalDuration * 500

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sliderRef.value,
        pin: true,
        scrub: 1,
        start: 'top top',
        end: `+=${scrollDistance}`,
      }
    })

    tl.to({}, { duration: pauseDuration })                          // pausa al entrar

    for (let i = 1; i <= slideCount; i++) {
      tl.to(trackRef.value, {
        x: `-${i * 100}vw`,
        ease: 'power2.inOut',
        duration: slideDuration
      })
      tl.to({}, { duration: pauseDuration })                        // pausa entre slides
    }

    tl.to({}, { duration: pauseDuration })                          // pausa al salir
  })
})

onUnmounted(() => ctx?.revert())
</script>

<template>
  <div class="app">
    <HeroSection />
    <PinnedSections />

    <!-- Horizontal slider -->
    <div class="slider" id="slider" ref="sliderRef">
      <div class="slider-track" ref="trackRef">
        <div class="slide"><YearSection /></div>
        <div class="slide"><CamelSection /></div>
        <div class="slide"><AtlantisSection /></div>
      </div>
    </div>

    <ContactSection />
  </div>
</template>

<style>
.app {
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
}

.slider {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.slider-track {
  display: flex;
  width: 300vw;
  height: 100%;
  will-change: transform;
}

.slide {
  width: 100vw;
  height: 100vh;
  flex-shrink: 0;
  overflow: hidden;
}
</style>
