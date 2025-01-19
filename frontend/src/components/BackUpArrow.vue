<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
</script>

<template>
    <button id="to-top-btn" class="custom-back-to-top hidden fixed z-50 bottom-9 right-8 w-6 h-6 rounded-full opacity-70 transition-colors bg-cyan-100 hover:opacity-100 hover:bg-orange-300 hover:text-slate-100" aria-label="Go back to top" @click="windowToTop();">
        <FontAwesomeIcon class="block mx-auto" :icon="faArrowUp" />
    </button>
</template>

<script lang="ts">
const windowToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
</script>