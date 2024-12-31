<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(async () => {
  const { gsap } = await import("gsap");
})
</script>

<template>
  <main class="dark:text-neutral-100 duration-500 mb-3">
    <!-- 
      Video by Olena on Pixabay
      Available at: https://pixabay.com/videos/particles-light-green-wallpaper-202587/
      Accessed: 11 Sept 2024
      Creator profile: https://pixabay.com/users/olenchic-16658974/
    -->
    <video class="fixed top-0 left-0 w-full h-full object-cover -z-40 opacity-0 dark:opacity-100 duration-500 ease-in-out transition-opacity" autoplay loop muted disablePictureInPicture>
      <source src="/dark-background.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <!-- 
      Video by Tomislav Jakuper on Pixabay
      Available at: https://pixabay.com/videos/background-blue-lines-abstract-6266/
      Accessed: 11 Sept 2024
      Creator profile: https://pixabay.com/users/tommyvideo-3092371/
    -->
    <video class="fixed top-0 left-0 w-full h-full object-cover -z-40 opacity-100 dark:opacity-0 duration-500 ease-in-out transition-opacity" autoplay loop muted disablePictureInPicture>
      <source src="/light-background.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <section class="landing-sec w-screen h-screen lg:px-32 lg:py-56">
      <h1 class="select-none text-4xl font-bold font-sans">Hi 👋 My name is Alex</h1>
      <span class="inline-block mt-12 text-xl">I'm an AI enthusiast and data scientist who also dabbles in website development.</span>
    </section>
    <!-- <h1 class="headline-text text-center text-2xl">Something</h1>
    <br> -->
    <!-- <Vue3Spline :scene="{
      url: 'https://prod.spline.design/dVb0LWhgV-oeUPcm/scene.splinecode',
    }" /> -->
  </main>
</template>