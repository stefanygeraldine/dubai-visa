import Lenis from 'lenis'
import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useSmoothScroll() {
  let lenis: Lenis | null = null

  const initSmoothScroll = () => {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis?.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    // Add Lenis class to HTML element for styling
    document.documentElement.classList.add('lenis')
  }

  const destroySmoothScroll = () => {
    if (lenis) {
      lenis.destroy()
      lenis = null
      document.documentElement.classList.remove('lenis')
    }
  }

  onMounted(() => {
    initSmoothScroll()
  })

  onUnmounted(() => {
    destroySmoothScroll()
  })

  return {
    lenis
  }
}
