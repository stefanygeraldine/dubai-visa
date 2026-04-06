<template>
  <section class="atlantis-section" ref="sectionRef">
    <!-- Navy water strip -->
    <div class="water-strip"></div>

    <!-- Clouds -->
    <img :src="nubeSvg" alt="" class="cloud atl-cloud-1" />
    <img :src="nubeSvg" alt="" class="cloud atl-cloud-2" />
    <img :src="nubeSvg" alt="" class="cloud atl-cloud-3" />

    <!-- Atlantis building -->
    <img :src="atlantisSvg" alt="Atlantis" class="atlantis" />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import atlantisSvg from '@/assets/atlantis.svg'
import nubeSvg from '@/assets/images/nube.svg'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!sectionRef.value) return
  const st = { trigger: sectionRef.value, start: 'top 80%', toggleActions: 'play none none reverse' }

  gsap.fromTo('.atlantis',
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: st }
  )
  gsap.fromTo('.atl-cloud-1, .atl-cloud-2, .atl-cloud-3',
    { opacity: 0, x: -30 },
    { opacity: 1, x: 0, duration: 1, stagger: 0.2, ease: 'power2.out', scrollTrigger: st }
  )
})
</script>

<style scoped>
.atlantis-section {
  width: 100%;
  height: 100vh;
  position: relative;
  background: var(--color-accent);
  overflow: hidden;
}

/* Navy water strip — bottom 30% */
.water-strip {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30%;
  background: var(--color-secondary);
}

/* Atlantis */
.atlantis {
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 84%;
  height: auto;
  z-index: 2;
}

/* Clouds */
.cloud {
  position: absolute;
  height: auto;
  z-index: 1;
  opacity: 0.95;
}

.atl-cloud-1 {
  top: 8%;
  left: 39%;
  width: 130px;
  animation: drift 22s linear infinite;
  animation-delay: -6s;
}

.atl-cloud-2 {
  top: 28%;
  left: -120px;
  width: 160px;
  animation: drift 28s linear infinite;
  animation-delay: -14s;
}

.atl-cloud-3 {
  top: 15%;
  left: -100px;
  width: 140px;
  animation: drift 20s linear infinite;
  animation-delay: -3s;
}

@keyframes drift {
  from { transform: translateX(0); }
  to   { transform: translateX(calc(100vw + 160px)); }
}
</style>
