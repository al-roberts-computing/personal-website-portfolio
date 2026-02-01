<script setup lang="ts">
import { onMounted, onUnmounted, nextTick } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { faFlask, faMicrochip, faGlobe, faCode } from '@fortawesome/free-solid-svg-icons';

gsap.registerPlugin(ScrollTrigger);

onMounted(async () => {
  await nextTick();

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".begin-float-up",
      start: "top 80%", 
      end: "top 20%",
      scrub: 3,
    }
  });

  tl.fromTo(".main-info-text", 
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, ease: "power1.inOut" }
  )
  .fromTo(".self-pic", 
    { opacity: 0, y: 150 },
    { opacity: 1, y: 0, ease: "power1.inOut" },
    "+=0.5" 
  )
  .fromTo(".msc-degree", 
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, ease: "power1.inOut" },
    "+=0.5"
  )
  .fromTo(".bsc-degree", 
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, ease: "power1.inOut" },
    "+=0.5"
  )
  .fromTo(".google-certificate", 
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, ease: "power1.inOut" },
    "+=0.5"
  );
});

onUnmounted(() => {
  ScrollTrigger.getAll().forEach(t => t.kill());
});
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
        <div class="py-60 lg:pb-0 text-4xl md:text-5xl text-center bg-[url('/web-apps.jpg')] bg-cover">
          <!-- 
          Image by Thomas Ulrich from Pixabay
          Available at: https://pixabay.com/photos/phone-display-apps-applications-292994/
          Accessed: 1 February 2026
          -->
          <FontAwesomeIcon :icon="faGlobe" />
          <span class="font-bold select-none"> Web Developer </span>
          <FontAwesomeIcon :icon="faGlobe" />
        </div>
      </div>
    </section>
    <section class="w-full h-auto p-6 xl:px-0 overflow-hidden xl:h-screen bg-[#ffeedd] dark:bg-[#2E4057] flex flex-col xl:flex-row items-center [&>div]:m-8
      xl:[&>div]:mx-20 xl:[&>div]:my-0 begin-float-up justify-between">
      <div class="bg-[#e69112] w-full lg:w-[50%] px-12 py-14 text-center rounded-xl main-info-text">
        <span class="text-white text-3xl xl:text-4xl leading-relaxed">I'm a versatile and proactive data professional who excels in data workflows and AI development. I specialise in technology, data, and practical engineering, and I’m passionate about making complicated ideas easy to understand.</span>
      </div>
      <div class="self-center w-auto self-pic">
        <img src="/self-portrait.jpg" alt="Self portrait of author." class="lg:w-full min-w-64 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"/>
      </div>
      <div class="flex w-auto flex-col py-14 justify-between [&>div]:rounded-md [&>div]:text-white [&>div]:xl:px-16 [&>div]:px-12 [&>div]:my-8 [&>div]:py-8 [&>div]:dark:bg-[#ffeedd] [&>div]:bg-[#e69112] [&>div]:text-center xl:h-3/4">
        <div class="msc-degree">
          <span class="text-2xl font-bold select-none">Distinction</span>
          <br/>
          <span class="text-lg select-none">MSc Big Data Analytics</span>
        </div>
        <div class="bsc-degree">
          <span class="text-2xl font-bold select-none">1st Class</span>
          <br/>
          <span class="text-lg select-none">BSc (Hons) Computer and Data Science</span>
        </div>
        <div class="google-certificate">
          <span class="text-2xl font-bold select-none">5-month Course</span>
          <br/>
          <span class="text-lg select-none">Google Cloud Data Analytics</span>
        </div>
      </div>
    </section>
    <section class="w-full p-12 text-center">
      <h2 class="text-6xl">Key Specialities</h2>
      <div class="w-[70%] xl:w-[50%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center mt-16 mb-32 [&>div]:my-auto [&>div]:min-w-fit [&>div]:text-xl [&>div]:rounded-lg [&>div]:p-6 [&>div]:text-white [&>div]:bg-[#118ab2] dark:[&>div]:bg-[#145374]">
        <div>Machine Learning Operations</div>
        <div>Dynamic Model Development</div>
        <div>Object-Oriented Programming</div>
        <div>Statistical Modelling</div>
        <div>Database Design and Implementation</div>
        <div>Natural Language Processing</div>
        <div>Neural Networks</div>
        <div>Data Analysis</div>
        <div>System Architecture</div>
      </div>
    </section>
  </main>
</template>