<template>
  <section class="camel-section" ref="sectionRef">
    <!-- Coral center block -->
    <div class="coral-block"></div>

    <!-- Date palms left (large→small = bottom→top, aligned to trapezoid left edge) -->
    <img :src="datilSvg" alt="" class="datil datil-l-1" />
    <img :src="datilSvg" alt="" class="datil datil-l-2" />
    <img :src="datilSvg" alt="" class="datil datil-l-3" />

    <!-- Camel -->
    <img :src="camelloSvg" alt="Camel" class="camel" />

    <!-- Date palms right (large→small = bottom→top, aligned to trapezoid right edge) -->
    <img :src="datilSvg" alt="" class="datil datil-r-1" />
    <img :src="datilSvg" alt="" class="datil datil-r-2" />
    <img :src="datilSvg" alt="" class="datil datil-r-3" />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import camelloSvg from '@/assets/camello.svg'
import datilSvg from '@/assets/datil-tree.svg'


gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!sectionRef.value) return

  const st = { trigger: sectionRef.value, start: 'top 80%', toggleActions: 'play none none reverse' }
  gsap.fromTo('.datil-l-1, .datil-l-2, .datil-l-3',
    { opacity: 0, x: -30 },
    { opacity: 1, x: 0, duration: 1, stagger: 0.12, ease: 'power3.out', scrollTrigger: st }
  )
  gsap.fromTo('.datil-r-1, .datil-r-2, .datil-r-3',
    { opacity: 0, x: 30 },
    { opacity: 1, x: 0, duration: 1, stagger: 0.12, ease: 'power3.out', scrollTrigger: st }
  )
  // Camel fade in — xPercent keeps horizontal centering managed by GSAP
  gsap.fromTo('.camel',
    { opacity: 0, y: 30, xPercent: -50 },
    {
      opacity: 1, y: 0, xPercent: -50, duration: 1.2, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.value, start: 'top 80%', toggleActions: 'play none none reverse' }
    }
  )
  // Airplane drift in
  gsap.fromTo('.avion',
    { opacity: 0, x: -60 },
    {
      opacity: 1, x: 0, duration: 1.5, ease: 'power2.out',
      scrollTrigger: { trigger: sectionRef.value, start: 'top 80%', toggleActions: 'play none none reverse' }
    }
  )
})
</script>

<style scoped>
.camel-section {
  width: 100%;
  height: 100vh;
  position: relative;
  background: var(--color-neutral);
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

/* Coral center block — trapezoid simulating road perspective */
.coral-block {
  position: absolute;
  inset: 0;
  background: var(--color-primary);
  clip-path: polygon(35% 0%, 65% 0%, 100% 100%, 0% 100%);
  z-index: 0;
}

/* Camel */
.camel {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: none;
  height: 50%;
  width: auto;
  z-index: 2;
}

/* Date palms — aligned to trapezoid edges in perspective
   Trapezoid left edge:  x = 35% * (1 - bottom/100vh)
   Trapezoid right edge: x = 65% + 35% * (1 - bottom/100vh) → right = 35% * (1 - bottom/100vh)
*/
.datil {
  position: absolute;
  z-index: 1;
  width: auto;
  transform-origin: bottom center;
}

/* Left side — left = 35% × (bottom / 100%) */
.datil-l-1 { bottom: 0;   left: 0%;    height: 54%; }
.datil-l-2 { bottom: 40%; left: 14%;   height: 30%; }
.datil-l-3 { bottom: 78%; left: 27.3%; height: 14%; }

/* Right side — mirror */
.datil-r-1 { bottom: 0;   right: 0%;    height: 54%; }
.datil-r-2 { bottom: 40%; right: 14%;   height: 30%; }
.datil-r-3 { bottom: 78%; right: 27.3%; height: 14%; }

/* Airplane */
.avion {
  position: absolute;
  top: 12%;
  left: 35%;
  width: 120px;
  height: auto;
  z-index: 3;
}

@media (max-width: 768px) {
  .datil-left-small,
  .datil-right-small {
    display: none;
  }
  .avion {
    width: 80px;
  }
}
</style>
