<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';

interface MediumPost {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: Record<string, any>;
  categories: string[];
}

const searchQuery = ref('');

const DEFAULT_IMAGE = '/medium-logo.png';

const posts = ref<MediumPost[]>([]);

const formattedPosts = computed(() => {
  return posts.value.map(post => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(post.description, 'text/html');

    const imgElement = doc.querySelector('.medium-feed-image img') as HTMLImageElement;
    const featuredImage = imgElement ? imgElement.src : (post.thumbnail || DEFAULT_IMAGE);

    const snippetElement = doc.querySelector('.medium-feed-snippet');
    let excerpt = '';

    const cleanCategories = (post.categories || []).map(cat => 
      cat.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
    );
    
    if (snippetElement) {
      excerpt = snippetElement.textContent || '';
    } else {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = post.description;
      const imgInDiv = tempDiv.querySelector('.medium-feed-image');
      if (imgInDiv) imgInDiv.remove();
      excerpt = tempDiv.textContent?.slice(0, 150) + '...' || '';
    }

    return {
      ...post,
      featuredImage,
      excerpt: excerpt.trim(),
      displayCategories: cleanCategories.slice(0, 3)
    };
  });
});

const filteredPosts = computed(() => {
  const query = searchQuery.value.toLowerCase().trim();
  
  if (!query) return formattedPosts.value;

  return formattedPosts.value.filter(post => {
    const inTitle = post.title.toLowerCase().includes(query);
    const inDescription = post.excerpt.toLowerCase().includes(query);
    const inTags = post.categories.some(cat => 
      cat.toLowerCase().includes(query)
    );

    return inTitle || inDescription || inTags;
  });
});

const isLoading = ref(true);
const error = ref<string | null>(null);

const url =
  'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@adhamhidawy';

onMounted(async () => {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch posts');
    
    const data = await res.json();
    posts.value = data.items;
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'An unknown error occurred';
    console.error(err);
  } finally {
    isLoading.value = false;
  }
});

</script>

<template>
  <section class="feed-container w-full my-8 px-20 md:px-28 lg:px-44">
    <h1 class="text-5xl text-black py-8 float-start dark:text-white">Blog</h1>
    <div class="max-w-4xl mb-10 float-end mt-8">
      <div class="relative group">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg class="w-5 h-5 text-slate-400 group-focus-within:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <input 
          v-model="searchQuery"
          type="text" 
          placeholder="Search articles" 
          class="block w-full p-4 pl-10 text-sm text-slate-900 border border-slate-200 rounded-2xl bg-white 
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
        />

        <button 
          v-if="searchQuery" 
          @click="searchQuery = ''"
          class="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400 hover:text-slate-600"
        >
          <span class="text-xs font-bold uppercase">Clear</span>
        </button>
      </div>

      <p class="mt-3 text-sm text-slate-500 dark:text-gray-100 italic">
        Showing {{ filteredPosts.length }} of {{ formattedPosts.length }} articles
      </p>
    </div>

    <section class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div v-for="post in filteredPosts" :key="post.guid">
      </div>
    </section>

    <div v-if="filteredPosts.length === 0 && formattedPosts.length > 0" class="text-center py-60">
      <p class="text-xl text-slate-400">No articles found matching "{{ searchQuery }}"</p>
    </div>

    <div v-if="isLoading" class="loading text-xl p-6 bg-slate-400 text-blue-800 mt-20 w-60 rounded-md text-center h-30 self-center mx-auto">
      <p>Fetching latest articles...</p>
    </div>

    <div v-else-if="error" class="error-message text-xl p-6 bg-red-200 text-red-800 rounded-md text-center h-30">
      <p>Oops! {{ error }}</p>
      <a :href="'https://medium.com/@adhamhidawy'" class="hover:underline text-blue-500" target="_blank">View on Medium directly</a>
    </div>

    <div v-else class="post-grid w-full grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="post in filteredPosts" :key="post.guid" class="post-card border border-gray-300 rounded-lg bg-[#ffeedd] transition-transform duration-500 hover:scale-110 shadow-lg">
        <div class="thumbnail mb-4">
          <img :src="post.featuredImage" :alt="post.title" class="w-full h-64 object-cover rounded-md" @error="(e) => (e.target as HTMLImageElement).src = DEFAULT_IMAGE"/>
        </div>
        <div class="content mx-6">
          <div class="relative inline-block group float-end">
            <span class="cursor-help border-b border-dotted border-blue-500 text-blue-500 hover:text-blue-700">
              Tags
            </span>

            <div class="invisible absolute bottom-full left-1/2 mb-2 -translate-x-1/2 scale-95 opacity-0 
                        transition-all duration-200 hover:visible group-hover:visible 
                        group-focus:visible group-active:visible 
                        /* Logic to show on hover */
                        group-hover:opacity-100 group-hover:scale-100 
                        flex gap-2 bg-white p-2 shadow-xl border rounded-lg z-10">
              <span v-for="cat in post.displayCategories" :key="cat" class="whitespace-nowrap text-xs">
                #{{ cat }}
              </span>
            </div>
          </div>
          <h2 class="text-2xl font-bold pt-8 pb-4">{{ post.title }}</h2>
          <p v-html="post.excerpt" class="excerpt mb-6"></p>
          <a :href="post.link" target="_blank" class="read-more underline float-start text-blue-400 hover:text-red-400 visited:text-pink-600">Read More →</a>
          <span class="float-end pb-8 block text-md text-gray-500">
            {{ new Date(post.pubDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
