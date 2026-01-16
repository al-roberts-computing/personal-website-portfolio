<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from 'vue-router';
</script>

<template>
    <footer>
        <div class="w-full flex justify-between items-center bg-[#0077B6] flex-col px-5 lg:flex-row md:px-12">
            <div class="py-4">
                <span class="text-xl text-gray-100">Contact Me</span>
                <ul class="[&>li]:py-1 [&>li>a:hover]:text-red-400 text-lg [&>li>a:visited]:text-pink-600 [&>li>a]:underline [&>li>a]:text-blue-100">
                    <li>
                        Email: <a href="mailto:a.roberts539@outlook.com">a.roberts539@outlook.com</a>
                    </li>
                    <li>
                        LinkedIn: <a href="https://www.linkedin.com/in/alexander-roberts-computing" target='__blank'>www.linkedin.com/in/alexander-roberts-computing</a>
                    </li>
                    <li>
                        GitHub: <a href="https://github.com/al-roberts-computing" target='__blank'>www.github.com/al-roberts-computing</a>
                    </li>
                </ul>
            </div>
            <span class="my-6 [&>a:hover]:text-slate-300 [&>a]:text-xl [&>a]:px-4 md:w-2/3 flex flex-row divide-x-2 lg:justify-end justify-center">
                <RouterLink to="/terms-of-use" title="Want to know more?" aria-label="Have a look at my story." class="!pl-0">
                    Terms of Use
                </RouterLink>
                <a href="/Alexander-Roberts-Public-CV.pdf" target="_blank" title="Download my CV" aria-label="My CV">
                    CV
                </a>
                <RouterLink to="/sitemap" title="Sitemap" aria-label="Check out this sitemap for an overview of this website.">
                    Sitemap
                </RouterLink>
            </span>
        </div>
        <div class="w-full flex justify-around flex-row items-center bg-blue-300 h-12">
            <span class="select-none">
                <FontAwesomeIcon :icon="faCopyright" />
                2026 Alexander Roberts.
            </span>

            <a class="rounded-md bg-red-200 py-1 px-2 hover:text-green-200 hover:bg-purple-500" href="https://github.com/al-roberts-computing/personal-website-portfolio/tree/main" target="_blank">website source code</a>

            <!-- 
            Jvunyhabshapvuz! Fvb mvbuk aol zljyla
            -->
        </div>
    </footer>
</template>