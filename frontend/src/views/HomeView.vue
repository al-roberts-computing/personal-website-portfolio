<script setup lang="ts">
import { onMounted } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFlask, faLightbulb, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

onMounted(async () => {
  const { gsap } = await import("gsap");
})
</script>

<template>
  <main class="dark:text-neutral-100 duration-500 mb-3">
    <section class="w-full h-full dark:bg-[#2E4057] overflow-x-hidden">
      <div class="opening-content-div">
        <div class="absolute left-1/2 h-full bg-[#00C6B9] w-2 z-30"></div>
        <div class="absolute top-1/2 w-full bg-[#00C6B9] h-2 z-30"></div>
        <div class="absolute top-0 left-0 bottom-0 right-0 w-[26rem] h-48 m-auto rounded-full text-center bg-[#00C6B9] p-10 text-6xl z-40">
          <span class="text-[#f8fafc]">ALEXANDER ROBERTS</span>
        </div>
      </div>
      <div class="w-screen h-screen z-10 flex justify-between flex-wrap flex-col lg:flex-row [&>div]:min-w-[50%] [&>div]:w-[50%] [&>div]:h-[50%] text-[#f8fafc]">
        <div class="p-48 text-6xl bg-[url('/frequency-wave.jpg')] text-center bg-cover">
          <!-- 
          Image by Peace,love,happiness from Pixabay
          Available at: https://pixabay.com/illustrations/frequency-wave-geometry-pattern-7776034/
          Creator: https://pixabay.com/users/placidplace-25572496/
          Accessed: 6 January 2025
          -->
          <FontAwesomeIcon :icon="faFlask" />
          <span class="font-bold"> Data Scientist </span>
          <FontAwesomeIcon :icon="faFlask" />
        </div>
        <div class="p-48 text-6xl text-center bg-[url('/idea-bulb.jpg')] bg-cover">
          <!-- 
          Image by Pete Linforth from Pixabay
          Available at: https://pixabay.com/illustrations/idea-light-bulb-innovation-4867554/
          Creator: https://pixabay.com/users/thedigitalartist-202249/
          Accessed: 6 January 2025
          -->
          <FontAwesomeIcon :icon="faLightbulb" />
          <span class="font-bold"> Innovator </span>
          <FontAwesomeIcon :icon="faLightbulb" />
        </div>
        <div class="p-48 text-6xl text-center bg-[url('/puzzle.jpg')] bg-cover">
          <!-- 
          Image by PIRO from Pixabay
          Available at: https://pixabay.com/illustrations/puzzle-connection-team-isolated-3d-7507357/
          Creator: https://pixabay.com/users/piro4d-2707530/
          Accessed: 6 January 2025
          -->
          <FontAwesomeIcon :icon="faPeopleGroup" />
          <span class="font-bold"> Team Player </span>
          <FontAwesomeIcon :icon="faPeopleGroup" />
        </div>
        <div>
          <img src="/selfie.jpg" alt="Selfie of author." class="w-[23rem] h-[28rem] m-auto my-4 rounded-full">
        </div>
      </div>
    </section>
  </main>
</template>