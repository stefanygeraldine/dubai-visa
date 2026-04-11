<template>
  <section class="contact-section" ref="sectionRef">

    <!-- Left panel: orange with coral card + form -->
    <div class="contact-left">
      <div class="contact-card fade-in">
        <h2 class="contact-title">Contact Us</h2>
        <input class="contact-input" type="text"  placeholder="Name" />
        <input class="contact-input" type="email" placeholder="Email" />
        <textarea class="contact-textarea"         placeholder="Message"></textarea>
        <Btn3D style="align-self: flex-start">SEND</Btn3D>
      </div>
    </div>

    <!-- Right panel: light with building -->
    <div class="contact-right">
      <img :src="alaraSvg" alt="" class="contact-building fade-in" />
    </div>

  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Btn3D from '@/components/Btn3D.vue'
import alaraSvg from '@/assets/alara.svg'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!sectionRef.value) return
  const st = { trigger: sectionRef.value, start: 'top 80%', toggleActions: 'play none none reverse' }

  gsap.fromTo('.contact-building',
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: st }
  )
  gsap.fromTo('.fade-in',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out', scrollTrigger: st }
  )
})
</script>

<style scoped>
.contact-section {
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
}

/* Left: orange */
.contact-left {
  width: 52%;
  background: var(--color-neutral);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
}

.contact-card {
  background: var(--color-primary);
  border-radius: 8px;
  padding: 2rem;
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-title {
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 400;
  color: white;
  margin: 0 0 0.5rem;
}

.contact-input,
.contact-textarea {
  width: 100%;
  background: var(--color-neutral-light);
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1rem;
  font-family: 'Nunito', sans-serif;
  font-size: 0.9rem;
  color: #333;
  outline: none;
  box-sizing: border-box;
}

.contact-input { height: 40px; }

.contact-textarea {
  height: 100px;
  resize: none;
}

.contact-input::placeholder,
.contact-textarea::placeholder { color: #888; }

.contact-btn { align-self: flex-start; }

/* Right: white/light with building */
.contact-right {
  width: 48%;
  background: var(--color-neutral-light);
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
}

.contact-building {
  height: 90%;
  width: auto;
}

@media (max-width: 768px) {
  .contact-section { flex-direction: column; height: auto; }
  .contact-left, .contact-right { width: 100%; }
  .contact-right { min-height: 40vh; }
}
</style>
