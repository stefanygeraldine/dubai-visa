<template>
  <section class="section hero-section" ref="sectionRef">
    <div class="hero-split">
      <div class="hero-left">
        <div class="hero-content">
          <h1 class="hero-title fade-in">Work From the Future</h1>
          <p class="hero-subtitle fade-in">
            Land in Dubai and join a thriving community of digital pioneers beneath the
            world's most iconic skyline
          </p>
          <div class="hero-cta fade-in">
            <button class="btn btn-hero">START JOURNEY</button>
          </div>
        </div>
      </div>
      <div class="hero-right">
        <div class="corner-circle"></div>
        <div class="hero-illustration">
          <div class="sky-background">
            <div class="blue-circle"></div>
            <img :src="nubeSvg" alt="Cloud" class="cloud cloud-1" />
            <img :src="nubeSvg" alt="Cloud" class="cloud cloud-2" />
            <img :src="nubeSvg" alt="Cloud" class="cloud cloud-3" />
            <img :src="nubeSvg" alt="Cloud" class="cloud cloud-4" />
            <img :src="nubeSvg" alt="Cloud" class="cloud cloud-5" />
            <div class="sun"></div>
            <svg ref="burjRef" width="158" height="554" viewBox="0 0 158 554" fill="none" xmlns="http://www.w3.org/2000/svg" class="burj-khalifa" style="overflow: visible">
              <g clip-path="url(#clip0_23_14)">
                <g class="bk-tier">
                  <path d="M87.0032 30.8618H80.1295V59.6465H87.0032V30.8618Z" fill="#093F61" stroke="white" stroke-width="0.3968" stroke-miterlimit="10"/>
                  <path d="M92.4075 37.9541H87.0032V69.3946H92.4075V37.9541Z" fill="#093F61" stroke="white" stroke-width="0.3968" stroke-miterlimit="10"/>
                  <path d="M87.0032 16.6921H82.5826V30.8619H87.0032V16.6921Z" fill="#093F61" stroke="white" stroke-width="0.3968" stroke-miterlimit="10"/>
                  <path d="M95.2008 53.667H77.0083V103.031H95.2008V53.667Z" fill="#093F61" stroke="white" stroke-width="0.3968" stroke-miterlimit="10"/>
                </g>
                <g class="bk-tier">
                  <path d="M86.1045 122.958H72.0291V92.1701C72.0291 92.1701 74.0815 90.7902 79.0607 90.7902C84.3436 90.7902 86.0924 92.1701 86.0924 92.1701V122.958H86.1045Z" fill="#093F61" stroke="white" stroke-width="0.3968" stroke-miterlimit="10"/>
                  <path d="M99.4392 130.05H85.3637V99.2476C85.3637 99.2476 87.4161 97.8677 92.3954 97.8677C97.6782 97.8677 99.427 99.2476 99.427 99.2476V130.05H99.4392Z" fill="#093F61" stroke="white" stroke-width="0.3968" stroke-miterlimit="10"/>
                  <path d="M102.22 147.321H68.8351V122.958L86.1046 115.287L102.22 122.958V147.321Z" fill="#093F61" stroke="white" stroke-width="0.3968" stroke-miterlimit="10"/>
                  <path d="M85.9223 94.2919C85.9223 94.2919 83.4813 93.4165 78.8907 93.4165C74.2393 93.4165 71.859 94.2919 71.859 94.2919V92.3185C71.859 92.3185 73.9964 90.8941 78.8907 90.8941C84.0764 90.8941 85.9223 92.3185 85.9223 92.3185V94.2919Z" fill="white"/>
                  <path d="M99.4392 101.265C99.4392 101.265 96.9981 100.39 92.4075 100.39C87.7562 100.39 85.3759 101.265 85.3759 101.265V99.2921C85.3759 99.2921 87.5133 97.8677 92.4075 97.8677C97.5932 97.8677 99.4392 99.2921 99.4392 99.2921V101.265Z" fill="white"/>
                </g>
                <g class="bk-tier">
                  <path d="M83.3356 250.129H54.5531V143.923C54.5531 143.923 58.7551 139.145 68.9443 139.145C79.7408 139.145 83.3356 143.923 83.3356 143.923V250.129Z" fill="#093F61" stroke="white" stroke-width="0.3968" stroke-miterlimit="10"/>
                  <path d="M111.365 242.295H82.5826V136.074C82.5826 136.074 86.7846 131.296 96.9739 131.296C107.77 131.296 111.365 136.074 111.365 136.074V242.295Z" fill="#093F61" stroke="white" stroke-width="0.3968" stroke-miterlimit="10"/>
                  <path d="M111.365 143.152C111.365 143.152 106.374 140.11 96.9739 140.11C87.4526 140.11 82.5826 143.152 82.5826 143.152V136.356C82.5826 136.356 86.9547 131.445 96.9739 131.445C107.588 131.445 111.365 136.356 111.365 136.356V143.152Z" fill="white"/>
                  <path d="M82.5826 150.748C82.5826 150.748 77.7127 147.707 68.5071 147.707C59.2044 147.707 54.4316 150.748 54.4316 150.748V143.953C54.4316 143.953 58.7065 139.042 68.5071 139.042C78.8907 139.042 82.5826 143.137 82.5826 143.137V150.748Z" fill="white"/>
                </g>
                <g class="bk-tier">
                  <path d="M115.482 553.614H82.5826V182.1C82.5826 182.1 87.3797 177.322 99.0263 177.322C111.365 177.322 115.47 182.1 115.47 182.1V553.614H115.482Z" fill="#093F61" stroke="white" stroke-width="0.3968" stroke-miterlimit="10"/>
                  <path d="M83.3356 553.273H50.1811V220.187C50.1811 220.187 55.0146 215.41 66.7583 215.41C79.1943 215.41 83.3356 220.187 83.3356 220.187V553.273Z" fill="#093F61" stroke="white" stroke-width="0.3968" stroke-miterlimit="10"/>
                  <path d="M71.1303 553.347H37.9758V251.628C37.9758 251.628 42.8093 246.85 54.5531 246.85C66.989 246.85 71.1303 251.628 71.1303 251.628V553.347Z" fill="#093F61" stroke="white" stroke-width="0.3968" stroke-miterlimit="10"/>
                  <path d="M125.562 554H92.4075V279.463C92.4075 279.463 97.241 274.685 108.985 274.685C121.421 274.685 125.562 279.463 125.562 279.463V554Z" fill="#093F61" stroke="white" stroke-width="0.3968" stroke-miterlimit="10"/>
                  <path d="M115.288 189.029C115.288 189.029 109.592 185.987 98.8441 185.987C87.9626 185.987 82.4005 189.029 82.4005 189.029V182.233C82.4005 182.233 87.404 177.322 98.8441 177.322C110.976 177.322 115.288 182.233 115.288 182.233V189.029Z" fill="white"/>
                  <path d="M83.3356 227.117C83.3356 227.117 77.5912 224.075 66.7583 224.075C55.7919 224.075 50.1811 227.117 50.1811 227.117V220.321C50.1811 220.321 55.2211 215.41 66.7583 215.41C78.9879 215.41 83.3356 220.321 83.3356 220.321V227.117Z" fill="white"/>
                  <path d="M71.0089 258.765C71.0089 258.765 65.2403 255.723 54.3588 255.723C43.3437 255.723 37.7087 258.765 37.7087 258.765V251.969C37.7087 251.969 42.7608 247.058 54.3588 247.058C66.6369 247.058 71.0089 251.969 71.0089 251.969V258.765Z" fill="white"/>
                  <path d="M125.562 286.377C125.562 286.377 119.878 283.336 109.155 283.336C98.2976 283.336 92.7476 286.377 92.7476 286.377V279.582C92.7476 279.582 97.7268 274.671 109.155 274.671C121.263 274.671 125.562 279.582 125.562 279.582V286.377Z" fill="white"/>
                </g>
                <g class="bk-tier">
                  <path d="M54.5531 553.451H21.3986V347.641C21.3986 347.641 26.2321 342.863 37.9759 342.863C50.4118 342.863 54.5531 347.641 54.5531 347.641V553.451Z" fill="#093F61" stroke="white" stroke-width="0.3968" stroke-miterlimit="10"/>
                  <path d="M140.415 553.718H108.79V388.889C108.79 388.889 113.405 384.334 124.603 384.334C136.468 384.334 140.415 388.889 140.415 388.889V553.718Z" fill="#093F61" stroke="white" stroke-width="0.3968" stroke-miterlimit="10"/>
                  <path d="M157.757 553.881H124.603V484.813C124.603 484.813 129.436 480.629 141.18 480.629C153.616 480.629 157.757 484.813 157.757 484.813V553.881Z" fill="#093F61" stroke="white" stroke-width="0.3968" stroke-miterlimit="10"/>
                  <path d="M33.1545 553.05H0V446.829C0 446.829 4.83351 442.052 16.5772 442.052C29.0132 442.052 33.1545 446.829 33.1545 446.829V553.05Z" fill="#093F61" stroke="white" stroke-width="0.3968" stroke-miterlimit="10"/>
                  <path d="M54.5531 354.273C54.5531 354.273 48.8088 351.232 37.9759 351.232C27.0094 351.232 21.3986 354.273 21.3986 354.273V347.478C21.3986 347.478 26.4386 342.567 37.9759 342.567C50.2054 342.567 54.5531 347.478 54.5531 347.478V354.273Z" fill="white"/>
                  <path d="M140.524 395.076C140.524 395.076 135.047 392.168 124.712 392.168C114.256 392.168 108.9 395.076 108.9 395.076V388.607C108.9 388.607 113.709 383.933 124.712 383.933C136.371 383.933 140.524 388.607 140.524 388.607V395.076Z" fill="white"/>
                  <path d="M157.879 490.615C157.879 490.615 152.134 487.944 141.301 487.944C130.335 487.944 124.724 490.615 124.724 490.615V484.665C124.724 484.665 129.764 480.362 141.301 480.362C153.531 480.362 157.879 484.665 157.879 484.665V490.615Z" fill="white"/>
                  <path d="M33.1545 453.758C33.1545 453.758 27.4101 450.717 16.5772 450.717C5.61076 450.717 0 453.758 0 453.758V446.963C0 446.963 5.03997 442.052 16.5772 442.052C28.8068 442.052 33.1545 446.963 33.1545 446.963V453.758Z" fill="white"/>
                </g>
              </g>
              <defs>
                <clipPath id="clip0_23_14">
                  <rect width="158" height="554" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <img :src="corazonSvg" alt="Heart" class="heart-icon" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import nubeSvg from '@/assets/images/nube.svg'
import corazonSvg from '@/assets/images/corazon.svg'

const sectionRef = ref<HTMLElement | null>(null)
const burjRef = ref<SVGElement | null>(null)

onMounted(() => {
  if (!sectionRef.value) return

  const fadeInElements = sectionRef.value.querySelectorAll('.fade-in')

  gsap.fromTo(
    fadeInElements,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }
  )

  if (burjRef.value) {
    const tiers = Array.from(burjRef.value.querySelectorAll('.bk-tier')).reverse()
    const durations = [0.6, 0.9, 1.1, 0.75, 1.3]
    const delays   = [0,   0.1, 0.25, 0.45, 0.65]

    tiers.forEach((tier, i) => {
      gsap.fromTo(
        tier,
        { scaleY: 0, svgOrigin: '79 554' },
        {
          scaleY: 1, svgOrigin: '79 554',
          duration: durations[i],
          delay: delays[i],
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.value,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })
  }
})
</script>

<style scoped>
.hero-illustration{
  height: 100%;
}
.hero-section {
  background: transparent;
  padding: 0;
}

.hero-split {
  display: flex;
  width: 100%;
  height: 100%;
}

.hero-left {
  flex: 1;
  background: var(--color-primary);
  display: flex;
  align-items: center;
  padding: 4rem;
  position: relative;
}



.corner-circle {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  aspect-ratio: 1;
  background: var(--color-accent);
  border-radius: 50%;
}

.hero-right {
  width: 50vw;
  background: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.hero-content {
  max-width: 500px;
  color: white;
  position: relative;
  z-index: 2;
  font-family: 'Nunito', sans-serif;
}

.hero-title {
  font-family: 'Nunito Sans', sans-serif;
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: white;
}

.hero-subtitle {
  font-family: 'Nunito', sans-serif;
  font-size: clamp(1rem, 1.8vw, 1.5rem);
  line-height: 1.6;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  color: white;
}

.hero-cta {
  display: flex;
  gap: 1rem;
}

.btn-hero {
  padding: 0.875rem 2.5rem;
  border: none;
  border-radius: 5px;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  cursor: pointer;
  background: var(--color-secondary);
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: background 0.3s ease, transform 0.3s ease;
}

.btn-hero:hover {
  background: var(--color-secondary-light);
  transform: translateY(-2px);
}

.sky-background {
  width: 100%;
  height: 100%;
  position: relative;
}

.cloud {
  position: absolute;
  width: 120px;
  height: auto;
  opacity: 0.95;
  filter: drop-shadow(0 4px 10px rgba(255, 255, 255, 0.3));
}

.cloud-1 {
  top: 15%;
  left: -140px;
  animation: drift 18s linear infinite;
}

.cloud-2 {
  top: 28%;
  left: -110px;
  width: 100px;
  animation: drift 26s linear infinite;
  animation-delay: -10s;
}

.cloud-3 {
  top: 8%;
  left: -120px;
  width: 90px;
  opacity: 0.7;
  animation: drift 22s linear infinite;
  animation-delay: -5s;
}

.cloud-4 {
  top: 42%;
  left: -150px;
  width: 130px;
  opacity: 0.6;
  animation: drift 30s linear infinite;
  animation-delay: -18s;
}

.cloud-5 {
  top: 20%;
  left: -100px;
  width: 80px;
  opacity: 0.5;
  animation: drift 20s linear infinite;
  animation-delay: -14s;
}

@keyframes drift {
  from { transform: translateX(0); }
  to   { transform: translateX(calc(100vw + 140px)); }
}

.blue-circle {
  position: absolute;
  bottom: -15%;
  left: -20%;
  width: 70%;
  aspect-ratio: 1;
  background: var(--color-primary);
  border-radius: 50%;
  z-index: 0;
  opacity: 0.85;
}

.sun {
  position: absolute;
  top: 8%;
  right: 10%;
  width: 120px;
  height: 116px;
  background: var(--color-neutral);
  border-radius: 50%;
  box-shadow: 0 0 40px rgba(245, 155, 76, 0.5);
  z-index: 1;
}

.burj-khalifa {
  position: absolute;
  bottom: 0;
  right: 15%;
  height: 80vh;
  width: auto;
  filter: drop-shadow(0 10px 30px rgba(10, 46, 78, 0.4));
  z-index: 2;
}

.heart-icon {
  position: absolute;
  bottom: 3px;
  right: 12%;
  width: auto;
  height: 10vh;
  z-index: 3;
  animation: heartbeat 2s ease-in-out infinite;
}

@keyframes heartbeat {
  0%, 100% {
    transform: translateX(-50%) scale(1);
  }
  50% {
    transform: translateX(-50%) scale(1.1);
  }
}

@media (max-width: 968px) {
  .hero-split {
    flex-direction: column;
  }

  .hero-left {
    padding: 3rem 2rem;
  }

  .hero-left::after {
    display: none;
  }

  .hero-right {
    min-height: 50vh;
  }
}
</style>
