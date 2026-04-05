# Efecto de Scroll Pinning - Secciones 2 y 3

## 🎯 ¿Qué hace?

Las secciones 2 (About) y 3 (Services) ahora están **combinadas en un solo componente con scroll pinning**:

1. Cuando llegas a la sección, **se queda fija (pinned)**
2. Al hacer scroll, el **texto transiciona** de la sección 2 a la 3
3. El **background cambia** de azul oscuro a naranja
4. Todo sincronizado con el scroll usando GSAP

## 📁 Archivo Principal

**`src/components/sections/PinnedSections.vue`**

Este componente reemplaza `AboutSection.vue` y `ServicesSection.vue`

## 🎬 Cómo Funciona

### Timeline GSAP

```typescript
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: containerRef.value,
    start: 'top top',           // Empieza cuando toca el top
    end: '+=200%',              // Dura 2x la altura del viewport
    scrub: 1,                   // Sincronizado con scroll
    pin: pinnedRef.value,       // Elemento que se queda fijo
    anticipatePin: 1            // Suaviza el pinning
  }
})
```

### Secuencia de Animación

1. **Stagger OUT palabras del texto 1** (azul)
   - Cada palabra desaparece con efecto cascada
   - Título: stagger 0.02s por palabra
   - Texto: stagger 0.01s por palabra
   - Movimiento: hacia arriba (y: -30px)

2. **Cambio de background** (simultáneo)
   - Background: azul oscuro → naranja
   - Duration: 0.4s

3. **Stagger IN palabras del texto 2** (naranja)
   - Cada palabra aparece con efecto cascada
   - Título: stagger 0.02s por palabra
   - Lista: stagger 0.015s por palabra
   - Movimiento: desde abajo (y: 40px → 0)

## ⚙️ Configuración

### Altura del Contenedor

```css
.pinned-container {
  height: 300vh; /* Controla cuánto scroll se necesita */
}
```

- `200vh` = Scroll rápido
- `300vh` = Scroll medio (actual)
- `400vh` = Scroll lento

### Duración del Pin

```javascript
end: '+=200%' // 200% = 2x viewport height
```

Ajusta este valor para cambiar cuánto dura el efecto.

### Velocidad de Scrub

```javascript
scrub: 1 // 1 segundo de delay suavizado
```

- `true` = Sin delay (instantáneo)
- `0.5` = Muy suave
- `1` = Suave (actual)
- `2` = Más lento

## ✨ Efecto Stagger de Palabras

El texto ahora se anima **palabra por palabra** con efecto cascada:

### Cómo Funciona

```typescript
// 1. Divide el texto en palabras
const splitTextIntoWords = (element: HTMLElement) => {
  const words = text.split(' ')
  element.innerHTML = words
    .map(word => `<span class="word"><span class="word-inner">${word}</span></span>`)
    .join(' ')
}

// 2. Anima cada palabra con stagger
tl.to(words, {
  opacity: 0,
  y: -30,
  stagger: 0.02,  // 0.02s entre cada palabra
  ease: 'power2.in'
})
```

### Ajustar Velocidad del Stagger

```javascript
// Más rápido
stagger: 0.01

// Velocidad actual
stagger: 0.02

// Más lento
stagger: 0.05
```

### Cambiar Dirección del Movimiento

```javascript
// Actual: palabras suben al salir
y: -30

// Palabras bajan al salir
y: 30

// Palabras van a la izquierda
x: -50

// Sin movimiento vertical, solo fade
y: 0
```

## 🎨 Personalización

### Cambiar Colores de Background

```javascript
tl.to(pinnedRef.value, {
  background: 'tu-color-aqui', // Cambia esto
  duration: 0.5
})
```

### Ajustar Timing de Transiciones

```javascript
// Overlap entre animaciones
tl.fromTo(slide2Ref.value, {...}, {...}, '-=0.3')
//                                         ^^^
//                          0.3s de overlap
```

- `-=0.5` = Más overlap (transición simultánea)
- `-=0.1` = Menos overlap (más separado)
- `0` = Sin overlap (secuencial)

### Cambiar Dirección de Animación

```javascript
// Actual: texto sube
tl.to(slide1Ref.value, { y: -50 })

// Texto baja
tl.to(slide1Ref.value, { y: 50 })

// Desde la izquierda
tl.to(slide1Ref.value, { x: -100 })

// Desde la derecha
tl.to(slide1Ref.value, { x: 100 })
```

## 🐛 Debug

### Activar Markers

Descomentar esta línea en `PinnedSections.vue`:

```javascript
scrollTrigger: {
  // ...
  markers: true // Descomentar para ver markers de debug
}
```

Esto muestra indicadores visuales de dónde empiezan/terminan las animaciones.

## 📱 Responsive

El componente es completamente responsive:

```css
@media (max-width: 768px) {
  .content-slide {
    padding: 3rem 1.5rem; /* Menos padding en móvil */
  }
}
```

## 🔄 Compatibilidad con Lenis

El smooth scroll de Lenis funciona perfectamente con el pinning porque está sincronizado con GSAP:

```typescript
// En useSmoothScroll.ts
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time) => lenis?.raf(time * 1000))
```

## 💡 Tips

1. **Performance**: El `scrub` hace que todo sea GPU-accelerated
2. **Smooth**: `anticipatePin: 1` previene "saltos" al entrar/salir del pin
3. **Mobile**: El efecto funciona igual en móvil y desktop
4. **Testing**: Usa `markers: true` mientras desarrollas

## 🚀 Para Ver el Efecto

```bash
npm run dev
```

Haz scroll hasta la segunda sección y verás:
1. Sección se queda fija ✅
2. Texto transiciona suavemente ✅
3. Background cambia de azul a naranja ✅
4. Todo sincronizado con tu scroll ✅

---

## 📝 Estructura del Componente

```
PinnedSections.vue
├── .pinned-container (300vh)  → Define el área de scroll
│   └── .pinned-content (100vh) → Se queda fijo (pinned)
│       ├── .content-slide (Slide 1) → Texto azul
│       └── .content-slide (Slide 2) → Texto naranja
```

El truco está en que el container es 3x más alto que el viewport, creando espacio para el scroll, mientras que el contenido visible se mantiene fijo en pantalla.
