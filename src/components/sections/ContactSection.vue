<template>
  <section class="section contact-section" ref="sectionRef">
    <div class="contact-content-full">
      <h2 class="contact-title fade-in">A Year of Living (and Working) Beyond Limits.</h2>
      <p class="contact-text fade-in">
        Your Remote Work Visa is the key to a frictionless life. Swipe through to see how your
        daily routine transforms when the world's most ambitious city becomes your backyard.
      </p>
      <div class="contact-illustration fade-in">
        <div class="desert-scene">
          <div class="ferris-wheel"></div>
          <div class="buildings"></div>
          <div class="camel"></div>
          <div class="dunes"></div>
        </div>
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

// Component logic here

onMounted(() => {
  if (!sectionRef.value) return

  const fadeInElements = sectionRef.value.querySelectorAll('.fade-in')

  fadeInElements.forEach((element, index) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100,
        rotationY: index % 2 === 0 ? -15 : 15
      },
      {
        opacity: 1,
        x: 0,
        rotationY: 0,
        duration: 1.2,
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
.contact-section {
  background: linear-gradient(180deg, var(--color-secondary) 0%, var(--color-secondary) 50%, var(--color-neutral) 50%, var(--color-primary) 100%);
  color: white;
  position: relative;
  overflow: hidden;
}

.contact-content-full {
  max-width: 900px;
  text-align: center;
  margin: 0 auto;
  padding: 4rem 2rem;
  position: relative;
  z-index: 2;
}

.contact-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  margin-bottom: 2rem;
  color: white;
}

.contact-text {
  font-size: clamp(1rem, 2vw, 1.35rem);
  line-height: 1.8;
  margin-bottom: 3rem;
  opacity: 0.95;
  color: white;
}

.contact-illustration {
  width: 100%;
  min-height: 400px;
  position: relative;
}

.desert-scene {
  width: 100%;
  height: 400px;
  position: relative;
}

.ferris-wheel {
  position: absolute;
  left: 15%;
  bottom: 30%;
  width: 100px;
  height: 100px;
  border: 8px solid white;
  border-radius: 50%;
}

.ferris-wheel::before,
.ferris-wheel::after {
  content: '';
  position: absolute;
  background: white;
}

.ferris-wheel::before {
  width: 2px;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
}

.ferris-wheel::after {
  width: 100%;
  height: 2px;
  top: 50%;
  transform: translateY(-50%);
}

.buildings {
  position: absolute;
  right: 10%;
  bottom: 30%;
  width: 120px;
  height: 150px;
  background: var(--color-primary);
  display: flex;
  gap: 10px;
}

.buildings::before,
.buildings::after {
  content: '';
  background: var(--color-primary);
}

.buildings::before {
  width: 35px;
  height: 100px;
  align-self: flex-end;
}

.buildings::after {
  width: 40px;
  height: 120px;
  align-self: flex-end;
}

.camel {
  position: absolute;
  left: 50%;
  bottom: 15%;
  transform: translateX(-50%);
  width: 80px;
  height: 60px;
  background: var(--color-neutral-dark);
  border-radius: 40% 40% 20% 20%;
}

.camel::before {
  content: '';
  position: absolute;
  top: -20px;
  left: 10px;
  width: 30px;
  height: 30px;
  background: var(--color-neutral-dark);
  border-radius: 50% 50% 0 0;
}

.dunes {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background:
    radial-gradient(ellipse at 30% 100%, var(--color-neutral-dark) 0%, transparent 50%),
    radial-gradient(ellipse at 70% 100%, var(--color-primary) 0%, transparent 50%);
}

@media (max-width: 768px) {
  .contact-content-full {
    padding: 3rem 1.5rem;
  }

  .desert-scene {
    height: 300px;
  }

  .ferris-wheel {
    width: 70px;
    height: 70px;
  }

  .buildings {
    width: 80px;
    height: 100px;
  }

  .camel {
    width: 60px;
    height: 45px;
  }
}
</style>
