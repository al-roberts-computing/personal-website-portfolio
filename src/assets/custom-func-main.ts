import './dark-mode';

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

// detect accessibility button toggle
const toggleDarkMode = document.querySelector("#toggle-dark-mode") as HTMLInputElement | null;
const navToggleDarkMode = document.querySelector("#nav-toggle-dark-mode") as HTMLInputElement | null;

if(navToggleDarkMode instanceof HTMLInputElement) {
    navToggleDarkMode.onclick = () => {
        navToggleDarkMode?.classList.toggle('float-right');
        toggleDarkMode?.classList.toggle('float-right');
        document.documentElement?.classList.toggle('dark');
        document.body?.classList.add('transition-colours', 'duration-300');
        (document.querySelector('#theme-toggle-light-icon') as HTMLInputElement)?.classList.toggle('hidden');
        (document.querySelector('#theme-toggle-moon-icon') as HTMLInputElement)?.classList.toggle('hidden');
        (document.querySelector('#nav-theme-toggle-light-icon') as HTMLInputElement)?.classList.toggle('hidden');
        (document.querySelector('#nav-theme-toggle-moon-icon') as HTMLInputElement)?.classList.toggle('hidden');
    };
}


if(toggleDarkMode instanceof HTMLInputElement) {
    toggleDarkMode.onclick = () => {
        navToggleDarkMode?.classList.toggle('float-right');
        toggleDarkMode?.classList.toggle('float-right');
        document.documentElement?.classList.toggle('dark');
        document.body?.classList.add('transition-colours', 'duration-300');
        (document.querySelector('#theme-toggle-light-icon') as HTMLInputElement)?.classList.toggle('hidden');
        (document.querySelector('#theme-toggle-moon-icon') as HTMLInputElement)?.classList.toggle('hidden');
        (document.querySelector('#nav-theme-toggle-light-icon') as HTMLInputElement)?.classList.toggle('hidden');
        (document.querySelector('#nav-theme-toggle-moon-icon') as HTMLInputElement)?.classList.toggle('hidden');
    };
}

// open or close accessibility menu
const toggleAccessibilityMenu = document.querySelector('#accessibility-menu-btn') as HTMLInputElement;

if(toggleAccessibilityMenu instanceof HTMLInputElement) {
    toggleAccessibilityMenu.onclick = () => {
        (document.querySelector('#accessibility-menu') as HTMLInputElement)?.classList.toggle('w-24');
        (document.querySelector('#open-accessibility-arrow-icon') as HTMLInputElement)?.classList.toggle('hidden');
        (document.querySelector('#close-accessibility-xmark-icon') as HTMLInputElement)?.classList.toggle('hidden');
    };
}

import './event-listeners';