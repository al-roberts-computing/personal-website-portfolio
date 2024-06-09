<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
    <!-- main navigation -->
    <nav id="main-nav" class="back-to-top-trigger flex flex-wrap w-full justify-between select-none mb-0 md:mb-4 bg-[#354076] lg:bg-transparent lg:justify-center">
        <!-- 
            Navbar partially inspired by TailWindCSS
            Available at: https://tailwind-elements.com/docs/standard/navigation/navbar/
            Accessed: 15/06/2023
        -->
        <!-- logo and name -->
        <a class="text-xl text-neutral-500 h-max select-none flex flex-nowrap items-center px-2 py-5 lg:rounded-b-lg lg:px-2 lg:ml-0 dark:text-neutral-100 hover:bg-orange-600" href="/" title="Home">
            <img src="/favicon.png" height="48px" width="48px" alt="logo" />
            <span class="mx-2">Alexander Roberts</span>
        </a>

        <!-- hamburger button for mobile/tablet view -->
        <button id="toggle-menu" class="block border-0 bg-transparent px-2 text-neutral-500 group select-none hover:no-underline dark:text-neutral-200 lg:hidden" type="button" data-te-collapse-init data-te-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation" @click="toggleHamburgerMenuAnimation();">
            <!-- Hamburger icon -->
            <!--
                Hamburger partially inspired by Obaseki Noruwa, on DEV
                Available at: https://dev.to/noruwa/animated-hamburger-menu-with-tailwindcss-1j0b
                Accessed: 05/08/2023
            -->
            <div class="w-8 h-1 mb-2 bg-black rounded-full ease-in-out duration-150 group-hover:bg-slate-50"></div>
            <div class="w-8 h-1 bg-black rounded-full ease-in duration-100 group-hover:bg-slate-50"></div>
            <div class="w-8 h-1 mt-2 bg-black rounded-full ease-in-out duration-150 group-hover:bg-slate-50"></div>
        </button>

        <div class="!visible hidden item-center w-full lg:w-auto lg:!flex lg:flex-grow-0" id="navbarSupportedContent2" data-te-collapse-item>
            <!-- hyperlinks to other pages -->
            <ul class="flex flex-col lg:flex-row text-xl text-neutral-500 lg:ml-1">
                <li class="list-item self-start ml-10 mt-2 lg:self-center lg:ml-2 lg:me-4 lg:my-0 lg:py-0">
                    <a class="hover:text-lime-400 py-5 select-none dark:text-neutral-100" href="" title="About me page" aria-label="Have a look at my story.">
                        about me
                    </a>
                </li>
                <li class="list-item self-start ml-10 my-8 lg:self-center lg:mx-4 lg:ml-0 lg:my-0 lg:py-0">
                    <a class="hover:text-lime-400 py-5 select-none dark:text-neutral-100" href="" title="My projects" aria-label="Have a look at my projects completed and in progress.">
                        projects
                    </a>
                </li>
            </ul>
            <!-- social media icons -->
            <ul class="flex items-center justify-between ml-10 w-40 text-md text-4xl">
                <li class="select-none">
                    <a class="block hover:text-orange-500" href="mailto:contact-me@alexander-roberts.me" title="Email me">
                        <FontAwesomeIcon :icon="faEnvelope" />
                    </a>
                </li>
                <li class="select-none">
                    <a class="block text-[#0072b1] hover:text-orange-500" href="https://www.linkedin.com/in/alexander-roberts-computing" title="Connect with me on LinkedIn!" target="_blank">
                        <FontAwesomeIcon :icon="faLinkedin" />
                    </a>
                </li>
                <li class="select-none">
                    <a class="block hover:text-orange-500" href="https://github.com/al-roberts-computing" title="Have a look at my GitHub projects." target="_blank">
                        <FontAwesomeIcon :icon="faGithub" />
                    </a>
                </li>
            </ul>

            <div class="w-16 h-8 rounded-3xl bg-yellow-200 border-none ml-10 my-6 dark:bg-blue-500 lg:hidden">
                <!-- 
                    Dark mode partially inspired by TailWindCSS
                    Available at: https://tailwindcss.com/docs/dark-mode
                    Accessed: 13/08/2023

                    Dark mode partially inspired by Zoltan Szogyenyi on FreeCodeCamp
                    Available at: https://www.freecodecamp.org/news/how-to-build-a-dark-mode-switcher-with-tailwind-css-and-flowbite/
                    Accessed: 14/08/2023
                -->
                <button id="nav-toggle-dark-mode" class="rounded-full bg-blue-300 w-8 h-8 border-none dark:float-right" aria-label="Toggle dark mode" @click="toggleDarkMode();">
                    <FontAwesomeIcon id="nav-theme-toggle-light-icon" class="block mx-auto dark:hidden" :icon="faSun" />
                    <FontAwesomeIcon id="nav-theme-toggle-moon-icon" class="hidden mx-auto dark:block" :icon="faMoon" />
                </button>
            </div>
        </div>
    </nav>

    <button id="to-top-btn" class="custom-back-to-top hidden fixed bottom-9 right-8 w-6 h-6 rounded-full opacity-50 transition-colors bg-cyan-100 hover:opacity-100 hover:bg-orange-300 hover:text-slate-100" aria-label="Go back to top">
        <i class="fa-solid fa-arrow-up"></i>
    </button>
</template>

<script lang="ts">
// Initialization for ES Users
import {
    Collapse,
    initTE,
} from "tw-elements";

initTE({ Collapse });

// ScrollTrigger - part of GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

gsap.to(".custom-back-to-top", {
    scrollTrigger: {
        trigger: ".back-to-top-trigger",
        start: "190px 10%",
        toggleActions: "restart none none reverse",
    },
    scale: 2,
    display: "block",
    duration: 0.5,
});

const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    document.body.classList.add('transition-colours', 'duration-300');
}

const toggleHamburgerMenuAnimation = () => {
    (document.querySelector('#toggle-menu') as HTMLInputElement)?.classList.toggle('hamburger-toggle');
}

window.addEventListener('resize', function() {
    if ((document.querySelector('#toggle-menu') as HTMLInputElement)?.classList.contains('hamburger-toggle')) {
        (document.querySelector('#toggle-menu') as HTMLInputElement)?.click();
    }
    
    if ((document.querySelector('#close-accessibility-xmark-icon') as HTMLInputElement)?.classList.contains('hidden') === false) {
        (document.querySelector('#accessibility-menu-btn') as HTMLInputElement).click();
    }
});
</script>