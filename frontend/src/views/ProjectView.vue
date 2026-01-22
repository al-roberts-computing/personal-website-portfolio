<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  language: string;
  topics: string[];
  updated_at: string;
}

const repos = ref<GitHubRepo[]>([]);
const isLoading = ref(true);
const error = ref<string | null>(null);


onMounted(async () => {
  try {
    const response = await fetch('https://api.github.com/users/al-roberts-computing/repos?sort=updated');
    const data = await response.json();
    
    // Optional: Filter out forks or specific repos you don't want to show
    repos.value = data.filter((repo: any) => !repo.fork && repo.description);
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'An unknown error occurred';
    console.error('Error fetching GitHub repos:', err);
  } finally {
    isLoading.value = false;
  }
});
</script>


<template>
  <section class="feed-container w-full my-8 px-20 md:px-28 lg:px-44 lg:mt-20">
    <h1 class="text-5xl py-8 text-black dark:text-white">Projects</h1>
    <p class="text-slate-600 mb-6 dark:text-slate-100">A selection of my recent projects hosted on GitHub. Click "Code" to view the source code or "Demo" to see it in action.</p>
    
    <div v-if="isLoading" class="loading text-xl p-6 bg-slate-400 text-blue-800 w-60 rounded-md text-center h-30 self-center mx-auto">
      <p>Fetching repos...</p>
    </div>

    <div v-else-if="error" class="error-message text-xl p-6 bg-red-200 text-red-800 rounded-md text-center w-72 h-30 self-center mx-auto">
      <p>Oops! {{ error }}</p>
      <a :href="'https://www.github.com/al-roberts-computing'" class="hover:underline text-blue-500" target="_blank">View on Github directly</a>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="repo in repos" :key="repo.id" 
          class="group p-6 bg-white border border-slate-200 rounded-2xl hover:border-blue-500 transition-all">
        
        <div class="flex justify-between items-start mb-4">
          <h3 class="font-bold text-lg group-hover:text-blue-600 truncate">{{ repo.name }}</h3>
          <span class="text-xs font-medium px-2 py-1 bg-slate-100 rounded-full">{{ repo.language }}</span>
        </div>

        <p class="text-slate-600 text-sm line-clamp-2 mb-4">
          {{ repo.description }}
        </p>

        <div class="flex items-center gap-4 mt-auto">
          <a :href="repo.html_url" target="_blank" class="text-sm font-bold text-slate-900 hover:underline">Code</a>
          <a v-if="repo.homepage" :href="repo.homepage" target="_blank" class="text-sm font-bold text-blue-600 hover:underline">Demo</a>
          
          <div class="ml-auto flex items-center text-slate-400 text-xs">
            <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            {{ repo.stargazers_count }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>