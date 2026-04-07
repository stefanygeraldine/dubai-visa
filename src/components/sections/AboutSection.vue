<template>
  <section class="section about-section" ref="sectionRef">
    <div class="about-content-full">
      <h2 class="about-title fade-in">Your Office. No Strings Attached.</h2>
      <p class="about-text fade-in">
        The Dubai Remote Work Visa is more than a document; it's your all-access pass to a
        tax-free, high-speed lifestyle. Live in the city of the future for a full year while
        keeping your global job. No local sponsor, no bureaucracy—just you and the skyline.
      </p>
      <div class="about-cta fade-in">
        <Btn3D>DISCOVER</Btn3D>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Btn3D from '@/components/Btn3D.vue'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!sectionRef.value) return

  const fadeInElements = sectionRef.value.querySelectorAll('.fade-in')

  fadeInElements.forEach((element, index) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  })
})
</script>

<style scoped>
.about-section {
  background: var(--color-secondary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
}

.about-content-full {
  max-width: 900px;
  text-align: center;
}

.about-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  margin-bottom: 2rem;
  color: white;
}

.about-text {
  font-size: clamp(1rem, 2vw, 1.35rem);
  line-height: 1.8;
  margin-bottom: 3rem;
  opacity: 0.95;
  color: white;
}

.about-cta {
  display: flex;
  justify-content: center;
}

@media (max-width: 768px) {
  .about-section {
    padding: 3rem 1.5rem;
  }
}
</style>
