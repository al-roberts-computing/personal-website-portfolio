<script setup lang="ts">
import TemporaryMsg from '@/components/TemporaryMsg.vue';
import { onMounted } from 'vue';

onMounted(async () => {
  const { gsap } = await import("gsap")

  const tl = gsap.timeline()

  tl.from('.headline-text', {
    x: -10,
    opacity: 0,
    stagger: 0.05,
    duration: 1,
    delay: 1
  })
})
</script>

<template>
  <main class="dark:text-neutral-100 mb-3">
    <h1 class="headline-text text-center text-2xl">Something</h1>
    <br>
    <Vue3Spline :scene="{
      url: 'https://prod.spline.design/dVb0LWhgV-oeUPcm/scene.splinecode',
    }" />
  </main>
</template>