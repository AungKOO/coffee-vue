<template>
  <div v-if="method" class="container mx-auto px-4 py-12">
    <!-- Back Button -->
    <router-link
      to="/brewing"
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
      Back to Brewing Guide
    </router-link>

    <div class="max-w-4xl mx-auto">
      <!-- Header Image -->
      <div class="rounded-lg overflow-hidden shadow-xl mb-8">
        <img
          :src="method.image"
          :alt="method.name"
          class="w-full h-[400px] object-cover"
        />
      </div>

      <!-- Title and Meta -->
      <div class="mb-8">
        <h1 class="text-5xl font-bold text-coffee-900 mb-4">
          {{ method.name }}
        </h1>

        <div class="flex flex-wrap gap-4 text-lg mb-6">
          <span
            class="px-4 py-2 rounded-full text-white font-bold"
            :class="difficultyClass"
          >
            {{ method.difficulty }}
          </span>
          <span
            class="px-4 py-2 bg-coffee-100 text-coffee-800 rounded-full font-semibold"
          >
            ⏱️ {{ method.brewTime }}
          </span>
        </div>

        <p class="text-xl text-gray-700 leading-relaxed">
          {{ method.description }}
        </p>
      </div>

      <!-- Brewing Steps -->
      <div class="mb-8">
        <h2 class="text-3xl font-bold text-coffee-900 mb-6">Brewing Steps</h2>
        <ol class="space-y-4">
          <li
            v-for="(step, index) in method.steps"
            :key="index"
            class="flex items-start"
          >
            <span
              class="flex-shrink-0 w-10 h-10 bg-coffee-600 text-white rounded-full flex items-center justify-center font-bold mr-4"
            >
              {{ index + 1 }}
            </span>
            <p class="text-gray-700 text-lg pt-1.5">{{ step }}</p>
          </li>
        </ol>
      </div>

      <!-- Equipment Needed -->
      <div class="mb-8 bg-coffee-50 rounded-lg p-6">
        <h2 class="text-3xl font-bold text-coffee-900 mb-4">
          Equipment Needed
        </h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <li
            v-for="item in method.equipment"
            :key="item"
            class="flex items-center text-gray-700"
          >
            <svg
              class="w-5 h-5 text-coffee-600 mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            {{ item }}
          </li>
        </ul>
      </div>

      <!-- Pro Tips -->
      <div class="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6">
        <h2 class="text-3xl font-bold text-coffee-900 mb-4">Pro Tips</h2>
        <ul class="space-y-3">
          <li
            v-for="(tip, index) in method.tips"
            :key="index"
            class="flex items-start"
          >
            <svg
              class="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <p class="text-gray-700 text-lg">{{ tip }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div v-else class="container mx-auto px-4 py-12 text-center">
    <h1 class="text-4xl font-bold text-coffee-900 mb-4">
      Brewing Method Not Found
    </h1>
    <p class="text-gray-600 mb-8">
      The brewing method you're looking for doesn't exist.
    </p>
    <router-link
      to="/brewing"
      class="inline-block bg-coffee-600 text-white px-6 py-3 rounded-lg hover:bg-coffee-700 transition-colors duration-200"
    >
      Back to Brewing Guide
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { brewingMethods } from "../data/brewing";

const route = useRoute();
const method = computed(() =>
  brewingMethods.find((m) => m.id === route.params.id)
);

const difficultyClass = computed(() => {
  if (!method.value) return "";

  switch (method.value.difficulty) {
    case "Easy":
      return "bg-green-500";
    case "Medium":
      return "bg-yellow-500";
    case "Hard":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
});
</script>
