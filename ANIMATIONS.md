# Guía de Animaciones GSAP

Esta landing page está lista para animaciones avanzadas con GSAP. Aquí tienes ejemplos y patrones para agregar más.

## 🎬 Animaciones Incluidas

### 1. Hero Section
**Efecto**: Fade in escalonado
```typescript
gsap.fromTo(
  fadeInElements,
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
  }
)
```

### 2. About Section
**Efecto**: Slide desde los lados
```typescript
gsap.fromTo(
  element,
  { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: 'power3.out'
  }
)
```

### 3. Services Section
**Efecto**: Cards con bounce
```typescript
gsap.fromTo(
  card,
  { opacity: 0, y: 100, scale: 0.8 },
  {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.8,
    delay: index * 0.1,
    ease: 'back.out(1.7)'
  }
)
```

### 4. Contact Section
**Efecto**: Rotación 3D
```typescript
gsap.fromTo(
  element,
  { opacity: 0, x: -100, rotationY: -15 },
  {
    opacity: 1,
    x: 0,
    rotationY: 0,
    duration: 1.2,
    ease: 'power3.out'
  }
)
```

---

## 💡 Más Ideas de Animaciones

### Parallax Effect
```typescript
gsap.to('.parallax-element', {
  y: -100,
  scrollTrigger: {
    trigger: '.section',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true
  }
})
```

### Reveal Text Character by Character
```typescript
import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(SplitText)

const split = new SplitText('.title', { type: 'chars' })
gsap.from(split.chars, {
  opacity: 0,
  y: 50,
  stagger: 0.05,
  ease: 'back.out(1.7)'
})
```

### Magnetic Button Effect
```typescript
const button = document.querySelector('.btn')
button?.addEventListener('mousemove', (e) => {
  const rect = button.getBoundingClientRect()
  const x = e.clientX - rect.left - rect.width / 2
  const y = e.clientY - rect.top - rect.height / 2

  gsap.to(button, {
    x: x * 0.3,
    y: y * 0.3,
    duration: 0.3
  })
})

button?.addEventListener('mouseleave', () => {
  gsap.to(button, { x: 0, y: 0, duration: 0.3 })
})
```

### Smooth Image Reveal
```typescript
gsap.from('.image-wrapper', {
  clipPath: 'inset(0 100% 0 0)',
  duration: 1.5,
  ease: 'power4.out',
  scrollTrigger: {
    trigger: '.image-wrapper',
    start: 'top 80%'
  }
})
```

### Number Counter Animation
```typescript
const counter = { value: 0 }
gsap.to(counter, {
  value: 100,
  duration: 2,
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.counter',
    start: 'top 80%'
  },
  onUpdate: () => {
    document.querySelector('.counter').textContent = Math.round(counter.value)
  }
})
```

### Stagger Grid Animation
```typescript
gsap.from('.grid-item', {
  opacity: 0,
  scale: 0,
  stagger: {
    amount: 1,
    grid: [3, 4], // rows x cols
    from: 'center'
  },
  scrollTrigger: {
    trigger: '.grid',
    start: 'top 80%'
  }
})
```

### Morphing Shapes (con SVG)
```typescript
gsap.to('.shape', {
  attr: {
    d: 'M 0,0 Q 50,50 100,0' // Nueva forma SVG
  },
  duration: 2,
  ease: 'power2.inOut',
  repeat: -1,
  yoyo: true
})
```

### Scroll Progress Indicator
```typescript
gsap.to('.progress-bar', {
  scaleX: 1,
  transformOrigin: 'left',
  ease: 'none',
  scrollTrigger: {
    trigger: 'body',
    start: 'top top',
    end: 'bottom bottom',
    scrub: true
  }
})
```

---

## 🔧 Patrones Útiles

### Animación al Entrar en Viewport
```typescript
onMounted(() => {
  if (!sectionRef.value) return

  gsap.from(sectionRef.value.querySelectorAll('.animate'), {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  })
})
```

### Animación en Loop
```typescript
gsap.to('.floating-element', {
  y: -20,
  duration: 2,
  ease: 'power1.inOut',
  repeat: -1,
  yoyo: true
})
```

### Timeline para Secuencias Complejas
```typescript
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.section',
    start: 'top center',
    end: 'bottom center',
    scrub: 1
  }
})

tl.from('.element1', { opacity: 0, x: -100 })
  .from('.element2', { opacity: 0, scale: 0 }, '-=0.5')
  .from('.element3', { opacity: 0, y: 100 })
```

---

## 🎯 ScrollTrigger Opciones

### Configuración Común
```typescript
scrollTrigger: {
  trigger: element,           // Elemento que activa
  start: 'top 80%',          // Cuando empieza (trigger viewport)
  end: 'bottom 20%',         // Cuando termina
  scrub: true,               // Sincroniza con scroll
  pin: true,                 // Fija el elemento
  markers: true,             // Debug markers (solo desarrollo)
  toggleActions: 'play none none reverse'
  // onEnter, onLeave, onEnterBack, onLeaveBack
}
```

### Valores de `toggleActions`
- `play`: Reproduce la animación
- `pause`: Pausa la animación
- `resume`: Continúa la animación
- `reverse`: Invierte la animación
- `restart`: Reinicia la animación
- `reset`: Resetea la animación
- `complete`: Completa la animación
- `none`: No hace nada

---

## 🚀 Performance Tips

1. **Usa `will-change`** para propiedades animadas:
```css
.animated-element {
  will-change: transform, opacity;
}
```

2. **Anima solo propiedades GPU-accelerated**:
   - ✅ `transform`, `opacity`
   - ❌ `width`, `height`, `top`, `left`

3. **Usa `scrub` para scroll-linked animations** (mejor performance)

4. **Limpia animaciones en `onUnmounted`**:
```typescript
onUnmounted(() => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
```

---

## 📚 Recursos

- [GSAP Docs](https://greensock.com/docs/)
- [ScrollTrigger Docs](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [GSAP Ease Visualizer](https://greensock.com/ease-visualizer/)
- [CodePen GSAP Examples](https://codepen.io/GreenSock/)

---

## 🎨 Ejemplo Completo: Nueva Sección Animada

```vue
<template>
  <section class="animated-section" ref="sectionRef">
    <div class="container">
      <h2 class="fade-up">Título Animado</h2>
      <p class="fade-up">Descripción con delay</p>
      <div class="cards">
        <div class="card" v-for="i in 4" :key="i">
          Card {{ i }}
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

onMounted(() => {
  if (!sectionRef.value) return

  // Fade up text
  gsap.from(sectionRef.value.querySelectorAll('.fade-up'), {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 80%'
    }
  })

  // Cards stagger from bottom
  gsap.from(sectionRef.value.querySelectorAll('.card'), {
    opacity: 0,
    y: 100,
    scale: 0.8,
    duration: 0.8,
    stagger: 0.1,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: '.cards',
      start: 'top 85%'
    }
  })
})
</script>
```
