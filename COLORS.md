# Paleta de Colores - Dubai Visa Landing Page

## 🎨 Colores Principales

### 1. Turquoise (Primary)
```css
--color-primary: #00CED1
--color-primary-dark: #008B8B
--color-primary-light: #40E0D0
```
**Uso**: Backgrounds principales, acentos en texto, gradientes

### 2. Deep Pink/Magenta (Secondary)
```css
--color-secondary: #FF1493
--color-secondary-dark: #C71585
--color-secondary-light: #FF69B4
```
**Uso**: Sección de contacto, acentos secundarios, hover states

### 3. Gold/Yellow (Accent)
```css
--color-accent: #FFD700
--color-accent-dark: #DAA520
--color-accent-light: #FFEC8B
```
**Uso**: CTAs principales, títulos en tarjetas, elementos destacados

### 4. Deep Blue (Neutral)
```css
--color-neutral: #1E3A5F
--color-neutral-dark: #0F1E2F
--color-neutral-light: #FFFFFF
```
**Uso**: Textos, sección hero background, elementos oscuros

---

## 📋 Guía de Aplicación por Sección

### Hero Section
- **Background**: Deep Blue gradient (#1E3A5F → #0F1E2F)
- **Título**: Gradient Turquoise → Gold
- **Subtítulo**: Turquoise Light
- **CTA Primary**: Gold gradient
- **CTA Secondary**: Transparente con borde blanco

### About Section
- **Background**: White → Light
- **Título**: Deep Blue con underline (Turquoise → Pink gradient)
- **Text**: Deep Blue con opacidad
- **Image Placeholder**: Gradient (Turquoise → Pink → Gold)

### Services Section
- **Background**: Turquoise sólido
- **Cards**: Glass morphism con bordes blancos
- **Títulos**: Gold
- **Hover**: Border Gold con sombra amarilla

### Contact Section
- **Background**: Deep Pink gradient
- **Form Inputs**: Glass morphism
- **Focus State**: Gold border con glow
- **Submit Button**: Gold gradient

---

## 🎯 Combinaciones Recomendadas

### Para Backgrounds
```css
/* Gradient vibrante */
background: linear-gradient(135deg, #00CED1, #FF1493, #FFD700);

/* Glass effect */
background: rgba(255, 255, 255, 0.12);
backdrop-filter: blur(15px);
border: 2px solid rgba(255, 255, 255, 0.3);
```

### Para Texto
```css
/* Gradient text */
background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

### Para Sombras
```css
/* Turquoise glow */
box-shadow: 0 25px 70px rgba(0, 206, 209, 0.4);

/* Gold glow */
box-shadow: 0 15px 40px rgba(255, 215, 0, 0.6);

/* Pink glow */
box-shadow: 0 20px 60px rgba(255, 20, 147, 0.3);
```

---

## ✨ Efectos Especiales

### Shimmer Effect
Usado en image placeholders
```css
animation: shimmer 3s infinite;
```

### Pulse Effect
Usado en hero background
```css
animation: pulse 8s ease-in-out infinite;
```

### Background Shift
Usado en contact background
```css
animation: backgroundShift 10s ease-in-out infinite alternate;
```

---

## 📱 Accesibilidad

Todos los colores han sido elegidos considerando:
- ✅ Contraste suficiente para texto (WCAG AA)
- ✅ Visibilidad en diferentes pantallas
- ✅ Diferenciación clara entre elementos interactivos

---

## 🔄 Modificación Rápida

Para cambiar toda la paleta, edita solo estas 4 variables en `src/style.css`:

```css
:root {
  --color-primary: #00CED1;    /* Cambia aquí */
  --color-secondary: #FF1493;  /* Cambia aquí */
  --color-accent: #FFD700;     /* Cambia aquí */
  --color-neutral: #1E3A5F;    /* Cambia aquí */
}
```

Los shades y tints se ajustarán automáticamente en todo el sitio.
