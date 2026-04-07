<template>
  <button class="btn-3d" v-bind="$attrs" @click="$emit('click', $event)">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  shadowColor?: string
}>()
defineEmits(['click'])
</script>

<style scoped>
.btn-3d {
  position: relative;
  padding: 0.875rem 2.5rem;
  border: none;
  border-radius: 6px;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  background: var(--btn-3d-bg, var(--color-neutral));
  color: var(--btn-3d-color, white);
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow:
    1px -1px 0 0 v-bind(shadowColor ?? 'white'),
    2px -2px 0 0 v-bind(shadowColor ?? 'white'),
    3px -3px 0 0 v-bind(shadowColor ?? 'white'),
    4px -4px 0 0 v-bind(shadowColor ?? 'white'),
    5px -5px 0 0 v-bind(shadowColor ?? 'white'),
    6px -6px 0 0 v-bind(shadowColor ?? 'white');
  transition: box-shadow 0.15s ease, transform 0.15s ease;
}

.btn-3d:hover {
  transform: translate(3px, -3px);
  box-shadow:
    1px -1px 0 0 v-bind(shadowColor ?? 'white'),
    2px -2px 0 0 v-bind(shadowColor ?? 'white'),
    3px -3px 0 0 v-bind(shadowColor ?? 'white');
}
</style>
