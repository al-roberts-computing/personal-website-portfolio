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

const DEFAULT_IMAGE = '/medium-logo.png';

const posts = ref<MediumPost[]>([]);

const formattedPosts = computed(() => {
  return posts.value.map(post => {
    // 1. Create a virtual element to parse the HTML string
    const parser = new DOMParser();
    const doc = parser.parseFromString(post.description, 'text/html');

    // 2. Find the image
    // Medium usually puts it in an <img> tag inside the 'medium-feed-image' class
    const imgElement = doc.querySelector('.medium-feed-image img') as HTMLImageElement;
    const featuredImage = imgElement ? imgElement.src : (post.thumbnail || DEFAULT_IMAGE);

    // 3. Find the text snippet
    // We look for 'medium-feed-snippet' or just get all text if that's missing
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
    <h1 class="text-5xl py-8">Blog</h1>
    <div v-if="isLoading" class="loading text-xl p-6 bg-[#ffeedd] text-blue-800 rounded-md text-center h-30">
      <p>Fetching latest articles...</p>
    </div>

    <div v-else-if="error" class="error-message text-xl p-6 bg-red-200 text-red-800 rounded-md text-center h-30">
      <p>Oops! {{ error }}</p>
      <a :href="'https://medium.com/@adhamhidawy'" class="hover:underline text-blue-500">View on Medium directly</a>
    </div>

    <div v-else class="post-grid w-full grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="post in formattedPosts" :key="post.guid" class="post-card border border-gray-300 rounded-lg bg-[#ffeedd] transition-transform duration-500 hover:scale-110 shadow-lg">
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

<!-- <template>
  <section>
    <div v-for="post in posts" :key="post.guid" class="post">
      <img :src="post.thumbnail" :alt="post.title" />
      <h2>{{ post.title }}</h2>
      <p v-html="post.description"></p>
      <a :href="post.link" target="_blank">Read on Medium</a>
    </div>
  </section>
</template> -->
<!-- <template>
  <div>
    <a
      class="m-story"
      href="https://medium.com/@adhamhidawy/stanford-just-killed-prompt-engineering-with-8-words-and-i-cant-believe-it-worked-8349d6524d2b"
    >
      Medium Article
    </a>
  </div>
</template>

<script>
export default {
  mounted() {
    const script = document.createElement('script');
    script.src = 'https://static.medium.com/embed.js';
    script.async = true;
    script.onload = () => {
      if (window.MediumWidget) {
        window.MediumWidget.Init();
      }
    };
    document.body.appendChild(script);
  }
};
</script> -->
