<template>
  <div v-if="article" class="container mx-auto px-4 py-12">
    <!-- Back Button -->
    <router-link
      to="/knowledge"
      class="inline-flex items-center text-coffee-600 hover:text-coffee-700 mb-8"
    >
      <svg
        class="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      Back to Knowledge Base
    </router-link>

    <article class="max-w-4xl mx-auto">
      <!-- Header Image -->
      <div class="rounded-lg overflow-hidden shadow-xl mb-8">
        <img
          :src="article.image"
          :alt="article.title"
          class="w-full h-[400px] object-cover"
        />
      </div>

      <!-- Meta Info -->
      <div class="flex items-center justify-between mb-6">
        <span
          class="px-4 py-2 bg-coffee-100 text-coffee-800 rounded-full text-sm font-bold uppercase"
        >
          {{ article.category }}
        </span>
        <span class="text-gray-500">{{ article.readTime }} read</span>
      </div>

      <!-- Title -->
      <h1 class="text-5xl font-bold text-coffee-900 mb-6">
        {{ article.title }}
      </h1>

      <!-- Excerpt -->
      <p
        class="text-xl text-gray-600 mb-8 italic border-l-4 border-coffee-500 pl-4"
      >
        {{ article.excerpt }}
      </p>

      <!-- Content -->
      <div
        class="prose prose-lg max-w-none prose-headings:text-coffee-900 prose-a:text-coffee-600 prose-strong:text-coffee-800"
        v-html="renderedContent"
      ></div>
    </article>
  </div>

  <div v-else class="container mx-auto px-4 py-12 text-center">
    <h1 class="text-4xl font-bold text-coffee-900 mb-4">Article Not Found</h1>
    <p class="text-gray-600 mb-8">
      The article you're looking for doesn't exist.
    </p>
    <router-link
      to="/knowledge"
      class="inline-block bg-coffee-600 text-white px-6 py-3 rounded-lg hover:bg-coffee-700 transition-colors duration-200"
    >
      Back to Knowledge Base
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { articles } from "../data/knowledge";
import { marked } from "marked";

const route = useRoute();
const article = computed(() => articles.find((a) => a.id === route.params.id));

const renderedContent = computed(() => {
  if (!article.value) return "";
  return marked(article.value.content);
});
</script>

<style scoped>
:deep(.prose) {
  color: #374151;
}

:deep(.prose h1) {
  font-size: 2.5rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

:deep(.prose h2) {
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #e5b088;
  padding-bottom: 0.5rem;
}

:deep(.prose h3) {
  font-size: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

:deep(.prose p) {
  margin-bottom: 1.25rem;
  line-height: 1.75;
}

:deep(.prose ul) {
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

:deep(.prose li) {
  margin-bottom: 0.5rem;
}

:deep(.prose strong) {
  font-weight: 700;
}
</style>
