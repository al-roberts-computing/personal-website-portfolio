<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
</script>

Script

<template>
    <footer>
        <div class="w-full flex justify-between items-center bg-green-700 flex-col px-5 md:flex-row md:px-12">
            <div class="py-4">
                <span class="text-xl text-gray-100">Contact Me</span>
                <ul class="[&>li]:py-1 [&>li>a:hover]:text-yellow-100 text-lg">
                    <li>
                        Email: <a href="mailto:contact-me@alexander-roberts.me">contact-me@alexander-roberts.me</a>
                    </li>
                    <li>
                        LinkedIn: <a href="https://www.linkedin.com/in/alexander-roberts-computing" target='__blank'>www.linkedin.com/in/alexander-roberts-computing</a>
                    </li>
                    <li>
                        GitHub: <a href="https://github.com/al-roberts-computing" target='__blank'>www.github.com/al-roberts-computing</a>
                    </li>
                </ul>
            </div>
            <span class="my-6 [&>a:hover]:text-slate-300 px-6">
                <a class="text-xl pe-3 md:ps-2 border-r-[1px]" href="{{url('/terms-and-conditions')}}">Terms of Use</a>
                <a class="text-xl pe-3 ps-2 border-r-[1px]" href="{{url('/about-me')}}">About Me</a>
                <a class="text-xl ps-2" href="{{url('/projects')}}">Projects</a>
            </span>
        </div>
        <div class="w-full flex justify-around flex-row items-center bg-blue-300 h-12">
            <span class="select-none">
                <FontAwesomeIcon :icon="faCopyright" />
                2024 Alexander Roberts.
            </span>

            <a class="rounded-md bg-red-200 py-1 px-2 hover:text-green-200 hover:bg-purple-500" href="https://github.com/al-roberts-computing/personal-website-portfolio/tree/main" target="_blank">website source code</a>

            <!-- 
            Jvunyhabshapvuz! Fvb mvbuk aol zljyla
            -->
        </div>
    </footer>
</template>