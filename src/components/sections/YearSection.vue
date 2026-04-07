<template>
  <section class="year-section" ref="sectionRef">
    <!-- Red bottom strip -->
    <div class="red-strip">
      <!-- Right illustration: 2 red buildings -->
      <div class="right-illustration">
        <img :src="buildingRedSvg" alt="" class="building-large" />
        <img :src="buildingRed2Svg" alt="" class="building-small" />
      </div>
    </div>

    <!-- Stars background -->
    <div class="stars">
      <img :src="starSvg" class="star" style="left:19%;top:49%" alt="" />
      <img :src="starSvg" class="star" style="left:31%;top:57%" alt="" />
      <img :src="starSvg" class="star" style="left:45%;top:51%" alt="" />
      <img :src="starSvg" class="star" style="left:50%;top:57%" alt="" />
      <img :src="starSvg" class="star" style="left:60%;top:44%" alt="" />
      <img :src="starSvg" class="star" style="left:76%;top:52%" alt="" />
      <span class="dot" style="left:26%;top:53%"></span>
      <span class="dot" style="left:36%;top:46%"></span>
      <span class="dot" style="left:38%;top:62%"></span>
      <span class="dot" style="left:43%;top:40%"></span>
      <span class="dot" style="left:57%;top:48%"></span>
      <span class="dot" style="left:67%;top:42%"></span>
      <span class="dot" style="left:69%;top:58%"></span>
      <span class="dot" style="left:74%;top:46%"></span>
    </div>

    <!-- Left illustration: rueda -->
    <div class="left-illustration">
      <img :src="ruedaSvg" alt="" class="rueda-img" />
    </div>

    <!-- Center text -->
    <div class="year-content">
      <h2 class="year-title fade-in">A Year of Living (and Working) Beyond Limits.</h2>
      <p class="year-subtitle fade-in">
        Your Remote Work Visa is the key to a frictionless life. Swipe through to see how
        your daily routine transforms when the world's most ambitious city becomes your backyard.
      </p>
    </div>

  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ruedaSvg from '@/assets/rueda.svg'
import buildingRedSvg from '@/assets/building-red.svg'
import buildingRed2Svg from '@/assets/building-red-2.svg'
import starSvg from '@/assets/Star 4.svg'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!sectionRef.value) return

  gsap.fromTo(
    sectionRef.value.querySelectorAll('.fade-in'),
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    }
  )
})
</script>

<style scoped>
.year-section {
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--color-secondary);
  padding: 4rem 2rem;
}

/* Stars */
.stars {
  position: absolute;
  inset: 0;
  pointer-events: none;
  height: 40%;
}

.star {
  position: absolute;
  width: 22px;
  height: auto;
  opacity: 0.85;
}

.dot {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #d9d9d9;
  opacity: 0.7;
}

/* Center content */
.year-content {
  max-width: 680px;
  text-align: center;
  color: white;
  position: relative;
  z-index: 2;
  padding: 0 1rem;
}

.year-title {
  font-family: 'Nunito Sans', sans-serif;
  font-size: clamp(1.6rem, 3vw, 2.25rem);
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.25;
}

.year-subtitle {
  font-family: 'Nunito', sans-serif;
  font-size: clamp(0.95rem, 1.6vw, 1.3rem);
  line-height: 1.7;
  color: white;
  opacity: 0.9;
}

/* Left illustration */
.left-illustration {
  position: absolute;
  left: 4%;
  bottom: 0;
  width: 20%;
  max-width: 260px;
  z-index: 1;
}

.rueda-img {
  width: auto;
  height: 50vh;
}

/* Red bottom strip */
.red-strip {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30%;
  background: var(--color-primary);
}

/* Right illustration */
.right-illustration {
  position: absolute;
  right: 2%;
  bottom: 100%;
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  z-index: 1;
}

.building-large {
  height: 180px;
  width: auto;
}

.building-small {
  height: 130px;
  width: auto;
}

@media (max-width: 768px) {
  .left-illustration,
  .right-illustration {
    display: none;
  }
}
</style>
