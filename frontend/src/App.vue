<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import PageFooter from './components/PageFooter.vue'
import AccessibilityMenu from './components/AccessibilityMenu.vue'
import BackUpArrow from './components/BackUpArrow.vue';
</script>

<template>
  <NavBar />
  <AccessibilityMenu />
  <BackUpArrow />

  <RouterView />

  <PageFooter />
</template>