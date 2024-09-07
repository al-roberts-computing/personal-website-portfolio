<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSun, faMoon, faArrowRight, faXmark, faArrowUp } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
    <button id="to-top-btn" class="custom-back-to-top hidden fixed z-50 bottom-9 right-8 w-6 h-6 rounded-full opacity-70 transition-colors bg-cyan-100 hover:opacity-100 hover:bg-orange-300 hover:text-slate-100" aria-label="Go back to top" @click="windowToTop();">
        <FontAwesomeIcon class="block mx-auto dark:hidden" :icon="faArrowUp" />
    </button>
    <div class="hidden fixed top-50 w-auto h-auto lg:block lg:absolute">
        <div id="accessibility-menu" class="float-left flex flex-col items-center w-0 h-12 bg-emerald-600 transition-all duration-150">
            <div class="w-16 h-7 rounded-3xl mt-[0.65rem] bg-yellow-200 border-none dark:bg-blue-500">
                <!-- 
                    Dark mode partially inspired by TailWindCSS
                    Available at: https://tailwindcss.com/docs/dark-mode
                    Accessed: 13/08/2023

                    Dark mode partially inspired by Zoltan Szogyenyi on FreeCodeCamp
                    Available at: https://www.freecodecamp.org/news/how-to-build-a-dark-mode-switcher-with-tailwind-css-and-flowbite/
                    Accessed: 14/08/2023
                -->
                <button id="toggle-dark-mode" class="rounded-full bg-blue-300 w-7 h-7 border-none dark:float-right" aria-label="Toggle dark mode" @click="toggleDarkMode();">
                    <FontAwesomeIcon id="theme-toggle-light-icon" class="block mx-auto dark:hidden" :icon="faSun" />
                    <FontAwesomeIcon id="theme-toggle-moon-icon" class="hidden mx-auto dark:block" :icon="faMoon" />
                </button>
            </div>
        </div>
        <button id="accessibility-menu-btn" class="w-12 h-12 float-right bg-emerald-500 rounded-r-full transition-colors hover:bg-amber-300 hover:text-sky-400" aria-label="Toggle accessibility menu" @click="toggleAccessibilityMenu">
            <div id="open-accessibility-arrow-icon">
                <FontAwesomeIcon :icon="faArrowRight" size="xl" />
            </div>
            <div id="close-accessibility-xmark-icon" class="hidden">
                <FontAwesomeIcon :icon="faXmark" size="xl" />
            </div>
        </button>
    </div>
</template>

<script lang="ts">
// set dark mode based on system preference
if(
  localStorage.getItem('color-theme') === 'dark' ||
  (!('color-theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

const toggleAccessibilityMenu = () => {
    (document.querySelector('#accessibility-menu') as HTMLInputElement)?.classList.toggle('w-24');
    (document.querySelector('#open-accessibility-arrow-icon') as HTMLInputElement)?.classList.toggle('hidden');
    (document.querySelector('#close-accessibility-xmark-icon') as HTMLInputElement)?.classList.toggle('hidden');
}

const windowToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    document.body.classList.add('transition-colours', 'duration-300');
}
</script>