<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-5xl font-bold text-coffee-900 mb-4 text-center">
      Knowledge Base
    </h1>
    <p class="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
      Dive deep into coffee culture, history, health benefits, and brewing
      techniques. Expand your coffee knowledge with our comprehensive articles.
    </p>

    <!-- Filter by Category -->
    <div class="flex flex-wrap gap-3 justify-center mb-12">
      <button
        @click="selectedCategory = 'All'"
        class="px-6 py-2 rounded-full font-semibold transition-colors duration-200"
        :class="
          selectedCategory === 'All'
            ? 'bg-coffee-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        "
      >
        All
      </button>
      <button
        v-for="category in categories"
        :key="category"
        @click="selectedCategory = category"
        class="px-6 py-2 rounded-full font-semibold transition-colors duration-200"
        :class="
          selectedCategory === category
            ? 'bg-coffee-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        "
      >
        {{ category }}
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ArticleCard
        v-for="article in filteredArticles"
        :key="article.id"
        :article="article"
      />
    </div>

    <div v-if="filteredArticles.length === 0" class="text-center py-12">
      <p class="text-xl text-gray-600">No articles found in this category.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import ArticleCard from "../components/ArticleCard.vue";
import { articles } from "../data/knowledge";

const selectedCategory = ref("All");

const categories = computed(() => {
  const cats = new Set(articles.map((a) => a.category));
  return Array.from(cats).sort();
});

const filteredArticles = computed(() => {
  if (selectedCategory.value === "All") {
    return articles;
  }
  return articles.filter((a) => a.category === selectedCategory.value);
});
</script>
