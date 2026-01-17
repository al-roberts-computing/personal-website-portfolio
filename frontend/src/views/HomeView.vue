<script setup lang="ts">
import { onMounted } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFlask, faMicrochip, faPeopleGroup, faCode } from '@fortawesome/free-solid-svg-icons';

onMounted(async () => {
  const { gsap } = await import("gsap");
})
</script>

<template>
  <main class="dark:text-neutral-100 duration-500">
    <section class="w-full h-full dark:bg-[#2E4057] overflow-x-hidden">
      <div class="opening-content-div hidden lg:block">
        <div class="absolute left-1/2 h-full bg-[#ffeedd] dark:bg-[#3e5c76] w-2 z-30"></div>
        <div class="absolute top-1/2 w-full bg-[#ffeedd] dark:bg-[#3e5c76] h-2 z-30"></div>
        <div class="absolute top-0 left-0 bottom-0 right-0 w-[26rem] h-48 m-auto rounded-full text-center bg-[#ffeedd] dark:bg-[#3e5c76] py-[3.75rem] px-8 text-4xl z-40">
          <span class="text-[#0e1720] dark:text-[#ffffff] font-bold">Hi 👋 I'm <span class="text-[#118ab2] dark:text-[#f5e8bb]">Alexander Roberts</span></span>
        </div>
      </div>
      <div class="w-screen h-full lg:h-screen z-10 flex justify-between flex-wrap flex-col lg:flex-row [&>div]:min-w-[50%] lg:[&>div]:w-[50%] [&>div]:w-full [&>div]:md:h-[50%] [&>div]:h-[15%] text-[#f8fafc]">
        <div class="py-60 lg:pb-0 text-4xl md:text-5xl bg-[url('/frequency-wave.jpg')] text-center bg-cover">
          <!-- 
          Image by Peace,love,happiness from Pixabay
          Available at: https://pixabay.com/illustrations/frequency-wave-geometry-pattern-7776034/
          Creator: https://pixabay.com/users/placidplace-25572496/
          Accessed: 6 January 2025
          -->
          <FontAwesomeIcon :icon="faFlask" />
          <span class="font-bold select-none"> Data Scientist </span>
          <FontAwesomeIcon :icon="faFlask" />
        </div>
        <div class="py-60 lg:pb-0 text-4xl md:text-5xl text-center bg-[url('/artificial-intelligence.jpg')] bg-cover">
          <!-- 
          Image by Pete Linforth from Pixabay
          Available at: https://pixabay.com/illustrations/brain-artificial-intelligence-8530786/
          Creator: https://pixabay.com/users/brianpenny-29844978
          Accessed: 10 January 2026
          -->
          <FontAwesomeIcon :icon="faMicrochip" />
          <span class="font-bold select-none"> AI Professional </span>
          <FontAwesomeIcon :icon="faMicrochip" />
        </div>
        <div class="py-60 lg:pb-0 text-4xl md:text-5xl text-center bg-[url('/code-background.jpg')] bg-cover">
          <!-- 
          Image by PIRO from Pixabay
          Available at: https://pixabay.com/illustrations/matrix-code-computer-pc-data-356024/
          Accessed: 10 January 2026
          -->
          <FontAwesomeIcon :icon="faCode" />
          <span class="font-bold select-none"> Software Engineer </span>
          <FontAwesomeIcon :icon="faCode" />
        </div>
        <div class="py-60 lg:pb-0 text-4xl md:text-5xl text-center bg-[url('/puzzle.jpg')] bg-cover">
          <!-- <img src="/selfie.jpg" alt="Selfie of author." class="w-[23rem] h-[28rem] m-auto my-4 rounded-full"> -->
          <FontAwesomeIcon :icon="faPeopleGroup" />
          <span class="font-bold select-none"> Team Player </span>
          <FontAwesomeIcon :icon="faPeopleGroup" />
        </div>
      </div>
    </section>
    <section class="w-full h-auto px-6 py-6 lg:px-0 lg:h-screen border-t-[16px] border-solid border-amber-500 bg-[#ffeedd] dark:bg-[#2E4057] flex flex-col lg:flex-row justify-between items-center [&>div]:m-8
      lg:[&>div]:mx-20 lg:[&>div]:my-0 &>div]:w-full">
      <div class="bg-[#e69112] w-full lg:w-[50%] px-12 py-10 text-center rounded-xl">
        <span class="text-white text-3xl lg:text-5xl leading-relaxed">I'm a data professional focused on data analysis and AI development.</span>
      </div>
      <div class="text-center hidden lg:block lg:w-[50%] overflow-hidden">
        <img src="/self-portrait.jpg" alt="Self portrait of author." class="w-auto max-w-md h-1/2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500">
      </div>
      
    </section>
  </main>
</template>