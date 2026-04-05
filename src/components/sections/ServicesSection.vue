<template>
  <section class="section services-section" ref="sectionRef">
    <div class="services-content-full">
      <h2 class="services-title fade-in">Three Steps to Your New View.</h2>
      <div class="services-list fade-in">
        <div class="service-item" v-for="(service, index) in services" :key="index">
          <span class="service-number">{{ index + 1 }}</span>
          <p class="service-text">{{ service.text }}</p>
        </div>
      </div>
      <div class="services-cta fade-in">
        <button class="btn btn-primary-alt">START JOURNEY</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref<HTMLElement | null>(null)

const services = [
  {
    text: 'Apply Online: Simple digital application.'
  },
  {
    text: 'Get Approved: Fast-track processing for digital pros.'
  },
  {
    text: 'Pack Your Laptop: Welcome to your new headquarters.'
  }
]

onMounted(() => {
  if (!sectionRef.value) return

  const header = sectionRef.value.querySelector('.services-header')
  const cards = sectionRef.value.querySelectorAll('.service-card')

  gsap.fromTo(
    header,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: header,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }
  )

  cards.forEach((card, index) => {
    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: 100,
        scale: 0.8
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  })
})
</script>

<style scoped>
.services-section {
  background: var(--color-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
}

.services-content-full {
  max-width: 900px;
  text-align: center;
}

.services-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  margin-bottom: 3rem;
  color: white;
}

.services-list {
  text-align: left;
  margin-bottom: 3rem;
}

.service-item {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  align-items: flex-start;
}

.service-number {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  flex-shrink: 0;
}

.service-text {
  font-size: clamp(1rem, 2vw, 1.35rem);
  line-height: 1.6;
  color: white;
  opacity: 0.95;
}

.services-cta {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}

.btn-primary-alt {
  background: var(--color-secondary);
  color: white;
  padding: 1.2rem 2.5rem;
  border: none;
  border-radius: 5px;
  font-family: var(--font-primary);
  font-size: 1.05rem;
  font-weight: 700;
  cursor: pointer;
  transition: all var(--transition-normal);
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.btn-primary-alt:hover {
  background: var(--color-secondary-light);
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(10, 46, 78, 0.4);
}

@media (max-width: 768px) {
  .services-section {
    padding: 3rem 1.5rem;
  }

  .service-item {
    gap: 1rem;
  }
}
</style>
