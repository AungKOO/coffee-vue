<template>
  <div
    class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
  >
    <div class="relative h-48 overflow-hidden">
      <img
        :src="article.image"
        :alt="article.title"
        class="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
      />
    </div>

    <div class="p-6">
      <div class="flex items-center justify-between mb-3">
        <span
          class="px-3 py-1 bg-coffee-100 text-coffee-800 rounded-full text-xs font-bold uppercase"
        >
          {{ article.category }}
        </span>
        <span class="text-sm text-gray-500">{{ article.readTime }} read</span>
      </div>

      <h3 class="text-xl font-bold text-coffee-900 mb-3">
        {{ article.title }}
      </h3>

      <p class="text-gray-600 mb-4 line-clamp-3">{{ article.excerpt }}</p>

      <router-link
        :to="`/knowledge/${article.id}`"
        class="inline-block w-full text-center bg-coffee-600 text-white px-4 py-2 rounded-lg hover:bg-coffee-700 transition-colors duration-200"
      >
        Read Article
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Article } from "../data/knowledge";

defineProps<{
  article: Article;
}>();
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
