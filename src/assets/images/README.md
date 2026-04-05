# Assets / Images

Esta carpeta contiene todas las imágenes y assets del proyecto.

## 📁 Archivos Actuales

- `burj-khalifa.svg` - Ilustración del Burj Khalifa (usado en Hero Section)
- `nube.svg` - Ilustración de nube (usado en Hero Section)
- `corazon.svg` - Ícono de corazón (usado en Hero Section)

## 🖼️ Cómo Usar las Imágenes

### En Componentes Vue

```vue
<script setup lang="ts">
import miImagen from '@/assets/images/mi-imagen.jpg'
</script>

<template>
  <img :src="miImagen" alt="Descripción" />
</template>
```

### Directamente en Template

```vue
<template>
  <img src="@/assets/images/mi-imagen.jpg" alt="Descripción" />
</template>
```

## 📝 Notas

- El alias `@` apunta a la carpeta `src/`
- Los SVG se optimizan automáticamente durante el build
- Las imágenes grandes se copian a `/dist/assets/` con hash
- Formatos soportados: `.jpg`, `.png`, `.svg`, `.webp`, `.gif`

## 🎨 Recomendaciones

### Optimización
- Usa SVG para íconos e ilustraciones
- Usa WebP para fotos (mejor compresión)
- Comprime imágenes antes de agregarlas

### Organización
Puedes crear subcarpetas:
```
images/
├── icons/
├── illustrations/
├── photos/
└── backgrounds/
```

### Formatos Recomendados por Tipo
- **Íconos**: SVG (vectorial, escalable)
- **Fotos**: WebP o JPG (buena compresión)
- **Ilustraciones**: SVG o PNG (transparencia)
- **Backgrounds**: WebP o JPG optimizado
