<template>
  <section class="pinned-container" ref="containerRef">
    <div class="pinned-content" ref="pinnedRef">
      <!-- Sección 2 - About -->
      <div class="content-slide" ref="slide1Ref">
        <h2 class="slide-title" ref="title1Ref">Your Office. No Strings Attached.</h2>
        <p class="slide-text" ref="text1Ref">
          The Dubai Remote Work Visa is more than a document; it's your all-access pass to a
          tax-free, high-speed lifestyle. Live in the city of the future for a full year while
          keeping your global job. No local sponsor, no bureaucracy—just you and the skyline.
        </p>
      </div>

      <!-- Sección 3 - Services -->
      <div class="content-slide" ref="slide2Ref">
        <h2 class="slide-title" ref="title2Ref">Three Steps to Your New View.</h2>
        <div class="services-list" ref="list2Ref">
          <div class="service-item" v-for="(service, index) in services" :key="index">
            <span class="service-number">{{ index + 1 }}</span>
            <p class="service-text">{{ service.text }}</p>
          </div>
        </div>
        <div class="slide-cta" ref="cta2Ref">
          <button class="btn btn-primary-alt" @click="scrollToSlider">Start Journey</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const containerRef = ref<HTMLElement | null>(null)
const pinnedRef = ref<HTMLElement | null>(null)
const slide1Ref = ref<HTMLElement | null>(null)
const slide2Ref = ref<HTMLElement | null>(null)
const title1Ref = ref<HTMLElement | null>(null)
const text1Ref = ref<HTMLElement | null>(null)
const title2Ref = ref<HTMLElement | null>(null)
const list2Ref = ref<HTMLElement | null>(null)
const cta2Ref = ref<HTMLElement | null>(null)

const services = [
  { text: 'Apply Online: Simple digital application.' },
  { text: 'Get Approved: Fast-track processing for digital pros.' },
  { text: 'Pack Your Laptop: Welcome to your new headquarters.' }
]

let ctx: gsap.Context

const scrollToSlider = () => {
  document.getElementById('slider')?.scrollIntoView({ behavior: 'smooth' })
}

// Helper function para dividir texto en palabras
const splitTextIntoWords = (element: HTMLElement) => {
  const text = element.textContent || ''
  const words = text.split(' ')

  element.innerHTML = words
    .map(word => `<span class="word"><span class="word-inner">${word}</span></span>`)
    .join(' ')

  return element.querySelectorAll('.word-inner')
}

onMounted(() => {
  if (!containerRef.value || !pinnedRef.value || !slide1Ref.value || !slide2Ref.value) return
  if (!title1Ref.value || !text1Ref.value || !title2Ref.value || !list2Ref.value) return

  ctx = gsap.context(() => {
    // Dividir textos en palabras
    const title1Words = splitTextIntoWords(title1Ref.value!)
    const text1Words = splitTextIntoWords(text1Ref.value!)
    const title2Words = splitTextIntoWords(title2Ref.value!)

    // También dividir las service-text en palabras
    const serviceTexts = list2Ref.value!.querySelectorAll('.service-text')
    const serviceWords: Element[] = []
    serviceTexts.forEach(text => {
      const words = splitTextIntoWords(text as HTMLElement)
      serviceWords.push(...Array.from(words))
    })

    const serviceNumbers = list2Ref.value!.querySelectorAll('.service-number')

    // Set inicial: palabras del slide 2 invisibles
    gsap.set(title2Words, { opacity: 0, y: 40 })
    gsap.set(serviceNumbers, { opacity: 0, y: 30 })
    gsap.set(serviceWords, { opacity: 0, y: 30 })
    gsap.set(cta2Ref.value, { opacity: 0, y: 30 })

    // Timeline para la animación completa
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.value,
        start: 'top top',
        end: '+=300%', // Aumentado de 200% a 300% para más scroll
        scrub: 1.5, // Aumentado de 1 a 1.5 para más suavidad
        pin: pinnedRef.value,
        anticipatePin: 1,
        // markers: true
      }
    })

    // SECCIÓN 1: Aparece con stagger al entrar
    tl.fromTo(title1Words,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8, // Aumentado de 0.3 a 0.8
        stagger: 0.05, // Aumentado de 0.02 a 0.05
        ease: 'power2.out'
      },
      0
    )

    tl.fromTo(text1Words,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8, // Aumentado de 0.3 a 0.8
        stagger: 0.03, // Aumentado de 0.01 a 0.03
        ease: 'power2.out'
      },
      '<0.2'
    )

    // Espacio para leer el contenido (aumentado)
    tl.to({}, { duration: 1 }) // Aumentado de 0.3 a 1

    // TRANSICIÓN: Stagger OUT palabras del slide 1
    tl.to(title1Words, {
      opacity: 0,
      y: -30,
      duration: 0.8, // Aumentado de 0.3 a 0.8
      stagger: 0.05, // Aumentado de 0.02 a 0.05
      ease: 'power2.in'
    })

    tl.to(text1Words, {
      opacity: 0,
      y: -30,
      duration: 0.8, // Aumentado de 0.3 a 0.8
      stagger: 0.03, // Aumentado de 0.01 a 0.03
      ease: 'power2.in'
    }, '<0.2')

    // Cambio de background (más lento)
    tl.to(pinnedRef.value, {
      background: 'var(--color-primary)',
      duration: 0.8 // Aumentado de 0.4 a 0.8
    }, '<0.3')

    // SECCIÓN 2: Stagger IN palabras del slide 2
    tl.to(title2Words, {
      opacity: 1,
      y: 0,
      duration: 0.8, // Aumentado de 0.3 a 0.8
      stagger: 0.05, // Aumentado de 0.02 a 0.05
      ease: 'power2.out'
    }, '-=0.3')

    tl.to(serviceNumbers, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power2.out'
    }, '<0.1')

    tl.to(serviceWords, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.04,
      ease: 'power2.out'
    }, '<0.1')

    tl.to(cta2Ref.value, {
      opacity: 1,
      y: 0,
      duration: 0.5
    }, '<0.3')
  })
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<style scoped>
.pinned-container {
  width: 100vw;
  height: 400vh; /* Altura total para el scroll - aumentado para más tiempo */
  position: relative;
}

.pinned-content {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-secondary); /* Empieza con azul oscuro */
  color: white;
  position: relative;
  overflow: hidden;
}

.content-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
}

.content-slide:nth-child(2) {
  /* Slide 2 - las palabras empiezan invisibles, no todo el slide */
}

.slide-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  margin-bottom: 2rem;
  max-width: 900px;
  color: white;
}

.slide-text {
  font-size: clamp(1rem, 2vw, 1.35rem);
  line-height: 1.8;
  margin-bottom: 3rem;
  max-width: 900px;
  opacity: 0.95;
  color: white;
}

/* Estilos para palabras (word stagger effect) */
.word {
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
}

.word-inner {
  display: inline-block;
  will-change: transform, opacity;
}

.services-list {
  text-align: left;
  margin-bottom: 3rem;
  max-width: 900px;
  width: 100%;
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

.slide-cta {
  display: flex;
  justify-content: center;
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
  .content-slide {
    padding: 3rem 1.5rem;
  }

  .service-item {
    gap: 1rem;
  }
}
</style>
