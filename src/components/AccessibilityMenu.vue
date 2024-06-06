<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSun, faMoon, faArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
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
                <button id="toggle-dark-mode" class="rounded-full bg-blue-300 w-7 h-7 border-none" aria-label="Toggle dark mode">
                    <div id="theme-toggle-light-icon">
                        <FontAwesomeIcon :icon="faSun" />
                    </div>
                    <div id="theme-toggle-moon-icon">
                        <FontAwesomeIcon :icon="faMoon" />
                    </div>
                </button>
            </div>
        </div>
        <button id="accessibility-menu-btn" class="w-12 h-12 float-right bg-emerald-500 rounded-r-full transition-colors hover:bg-amber-300 hover:text-sky-400" aria-label="Toggle accessibility menu">
            <div id="open-accessibility-arrow-icon">
                <FontAwesomeIcon :icon="faArrowRight" size="lg" />
            </div>
            <div id="close-accessibility-xmark-icon" class="hidden">
                <FontAwesomeIcon :icon="faXmark" size="lg" />
            </div>
        </button>
    </div>
</template>