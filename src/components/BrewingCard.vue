<template>
  <div
    class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
  >
    <div class="relative h-48 overflow-hidden">
      <img
        :src="method.image"
        :alt="method.name"
        class="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
      />
      <div class="absolute top-4 right-4">
        <span
          class="px-3 py-1 rounded-full text-xs font-bold"
          :class="difficultyClass"
        >
          {{ method.difficulty }}
        </span>
      </div>
    </div>

    <div class="p-6">
      <h3 class="text-2xl font-bold text-coffee-900 mb-2">{{ method.name }}</h3>

      <p class="text-gray-600 mb-4 line-clamp-2">{{ method.description }}</p>

      <div class="flex items-center justify-between mb-4 text-sm">
        <div class="flex items-center text-gray-700">
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
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{{ method.brewTime }}</span>
        </div>
      </div>

      <router-link
        :to="`/brewing/${method.id}`"
        class="inline-block w-full text-center bg-coffee-600 text-white px-4 py-2 rounded-lg hover:bg-coffee-700 transition-colors duration-200"
      >
        View Guide
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { BrewingMethod } from "../data/brewing";

const props = defineProps<{
  method: BrewingMethod;
}>();

const difficultyClass = computed(() => {
  switch (props.method.difficulty) {
    case "Easy":
      return "bg-green-500 text-white";
    case "Medium":
      return "bg-yellow-500 text-white";
    case "Hard":
      return "bg-red-500 text-white";
    default:
      return "bg-gray-500 text-white";
  }
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
