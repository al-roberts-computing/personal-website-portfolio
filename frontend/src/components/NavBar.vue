<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEnvelope, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

onMounted(async () => {
    const { Collapse, initTWE } = await import("tw-elements");
    const { gsap } = await import("gsap");
    const { ScrollTrigger } = await import("gsap/all");

    initTWE({ Collapse });
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".custom-back-to-top", {
        scrollTrigger: {
            trigger: ".back-to-top-trigger",
            start: "190px 10%",
            toggleActions: "restart none none reverse",
        },
        scale: 2,
        display: "block",
        duration: 0.4,
    });
});
</script>

<template>
    <!-- main navigation -->
    <nav id="main-nav" class="back-to-top-trigger lg:fixed lg:top-0 lg:left-0 lg:right-0 lg:z-50 flex flex-wrap w-full lg:w-1/2 px-5 mx-auto justify-between select-none mb-0 md:mb-4 bg-[#354076] lg:rounded-b-xl lg:justify-center">
        <!-- 
            Navbar partially inspired by TailWindCSS
            Available at: https://tailwind-elements.com/docs/standard/navigation/navbar/
            Accessed: 15/06/2023
        -->
        <!-- logo and name -->
        <RouterLink to="/" class="text-xl text-neutral-500 h-max select-none flex flex-nowrap items-center px-2 py-5 lg:px-2 lg:ml-0 dark:text-neutral-100 hover:bg-orange-600" href="/" title="Home">
            <img src="/favicon.png" height="48px" width="48px" alt="logo" />
            <span class="mx-2">Alexander Roberts</span>
        </RouterLink>

        <!-- hamburger button for mobile/tablet view -->
        <button id="toggle-menu" class="block border-0 bg-transparent px-2 text-neutral-500 group select-none hover:no-underline duration-500 dark:text-neutral-200 lg:hidden" type="button" data-twe-collapse-init data-twe-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation" @click="toggleHamburgerMenuAnimation();">
            <!-- Hamburger icon -->
            <!--
                Hamburger partially inspired by Obaseki Noruwa, on DEV
                Available at: https://dev.to/noruwa/animated-hamburger-menu-with-tailwindcss-1j0b
                Accessed: 05/08/2023
            -->
            <div class="w-8 h-1 mb-2 bg-black rounded-full ease-in-out duration-150"></div>
            <div class="w-8 h-1 bg-black rounded-full ease-in duration-100"></div>
            <div class="w-8 h-1 mt-2 bg-black rounded-full ease-in-out duration-150"></div>
        </button>

        <div class="!visible hidden item-center w-full lg:w-auto lg:!flex lg:flex-grow-0" id="navbarSupportedContent2" data-twe-collapse-item>
            <!-- hyperlinks to other pages -->
            <ul class="flex flex-col lg:flex-row text-xl text-neutral-500 [&>li]:ml-10 lg:[&>li]:ml-0 [&>li]:list-item [&>li]:self-start lg:[&>li]:self.center lg:[&>li]:my-[1.95rem] lg:[&>li]:py-0 lg:[&>li]:px-4">
                <li class="mt-2 lg:border-e-2 lg:border-black">
                    <RouterLink to="/about-me" class="hover:!text-lime-400 click py-5 select-none dark:text-neutral-100" title="Have a look at my story." aria-label="Have a look at my story.">
                        About Me
                    </RouterLink>
                </li>
                <li class="my-8 lg:border-e-2 lg:border-black">
                    <RouterLink to="/projects" class="hover:!text-lime-400 py-5 select-none dark:text-neutral-100" title="Have a look at my projects." aria-label="Have a look at my projects completed and in progress.">
                        Projects
                    </RouterLink>
                </li>
                <li class="mb-8">
                    <RouterLink to="/blogs" class="hover:!text-lime-400 py-5 select-none dark:text-neutral-100" title="Have a look at my blogs." aria-label="Have a look at my blogs.">
                        Blogs
                    </RouterLink>
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
</template>

<script lang="ts">
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