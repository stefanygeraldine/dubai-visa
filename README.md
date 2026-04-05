# Dubai Visa Landing Page

Landing page moderna para servicios de visa de Dubai, construida con Vue 3, TypeScript, GSAP y Lenis.

## 🎨 Sistema de Colores

El proyecto utiliza un sistema de variables CSS con 4 colores principales basados en el diseño:

- **Primary (Coral/Orange-Red)**: `--color-primary: #E8613D`
- **Secondary (Deep Navy Blue)**: `--color-secondary: #0A2E4E`
- **Accent (Sky Blue)**: `--color-accent: #7DCDDE`
- **Neutral (Warm Orange)**: `--color-neutral: #F59B4C`

### Modificar Colores

Para cambiar los colores principales, edita las variables en `src/style.css`:

```css
:root {
  --color-primary: #TU_COLOR;
  --color-secondary: #TU_COLOR;
  --color-accent: #TU_COLOR;
  --color-neutral: #TU_COLOR;
}
```

## 📁 Estructura del Proyecto

```
dubai-visa-landing/
├── src/
│   ├── assets/
│   │   └── images/          # 👈 Agrega tus imágenes aquí
│   ├── components/
│   │   └── sections/
│   │       ├── HeroSection.vue
│   │       ├── AboutSection.vue
│   │       ├── ServicesSection.vue
│   │       └── ContactSection.vue
│   ├── composables/
│   │   └── useSmoothScroll.ts
│   ├── App.vue
│   ├── main.ts
│   └── style.css
├── public/
└── package.json
```

## 🚀 Características

- ✅ Vue 3 + TypeScript + Vite
- ✅ GSAP para animaciones
- ✅ Lenis para smooth scroll
- ✅ 4 secciones con 100vw × 100vh cada una
- ✅ Sistema de variables CSS personalizable
- ✅ Animaciones con ScrollTrigger
- ✅ Diseño responsive
- ✅ Componentes modulares

## 🎬 Animaciones GSAP

Cada sección incluye animaciones GSAP con ScrollTrigger:

- **Hero**: Fade in escalonado
- **About**: Slide desde los lados
- **Services**: Cards con efecto bounce
- **Contact**: Rotación 3D en entrada

## 📦 Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 📸 Agregar Imágenes

1. Coloca tus imágenes en `src/assets/images/`
2. Importa en tus componentes:

```vue
<script setup lang="ts">
import heroImage from '@/assets/images/hero.jpg'
</script>

<template>
  <img :src="heroImage" alt="Hero" />
</template>
```

O usa directamente en el template:

```vue
<img src="@/assets/images/hero.jpg" alt="Hero" />
```

## 🎨 Personalización

### Agregar Nueva Sección

1. Crea un componente en `src/components/sections/NuevaSeccion.vue`
2. Sigue la estructura de las secciones existentes
3. Importa y agrega en `App.vue`

### Modificar Animaciones

Las animaciones están en cada componente usando `onMounted()`:

```typescript
onMounted(() => {
  gsap.fromTo(
    element,
    { /* estado inicial */ },
    {
      /* estado final */
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
      }
    }
  )
})
```

## 🌐 Smooth Scroll

El smooth scroll con Lenis está configurado en `src/composables/useSmoothScroll.ts`.

Para modificar la duración o easing:

```typescript
lenis = new Lenis({
  duration: 1.2,        // Duración del scroll
  easing: (t) => ...,   // Función de easing
  // ... otras opciones
})
```

## 📱 Responsive

Todos los componentes incluyen media queries para diseño responsive:

- Desktop: > 968px
- Tablet/Mobile: ≤ 968px

## 🛠️ Tecnologías

- [Vue 3](https://vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [GSAP](https://greensock.com/gsap/)
- [Lenis](https://github.com/darkroomengineering/lenis)

## 📝 Notas

- Las secciones son 100vw × 100vh para experiencia fullscreen
- El smooth scroll está optimizado para desktop (smoothTouch: false)
- Los placeholders de imágenes están listos para reemplazar con assets reales
- El formulario de contacto es un placeholder (implementar backend según necesidad)
