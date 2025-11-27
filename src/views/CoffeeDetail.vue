<template>
  <div v-if="coffee" class="container mx-auto px-4 py-12">
    <!-- Back Button -->
    <router-link
      to="/coffees"
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
      Back to Coffee Types
    </router-link>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <!-- Image -->
      <div class="rounded-lg overflow-hidden shadow-xl">
        <img
          :src="coffee.image"
          :alt="coffee.name"
          class="w-full h-[500px] object-cover"
        />
      </div>

      <!-- Details -->
      <div>
        <h1 class="text-5xl font-bold text-coffee-900 mb-4">
          {{ coffee.name }}
        </h1>

        <p class="text-xl text-gray-700 mb-8 leading-relaxed">
          {{ coffee.description }}
        </p>

        <div class="space-y-6">
          <!-- Origin -->
          <div>
            <h3 class="text-lg font-bold text-coffee-800 mb-2">Origin</h3>
            <p class="text-gray-700">{{ coffee.origin }}</p>
          </div>

          <!-- Roast Level -->
          <div>
            <h3 class="text-lg font-bold text-coffee-800 mb-2">Roast Level</h3>
            <p class="text-gray-700">{{ coffee.roastLevel }}</p>
          </div>

          <!-- Flavor Notes -->
          <div>
            <h3 class="text-lg font-bold text-coffee-800 mb-2">Flavor Notes</h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="note in coffee.flavorNotes"
                :key="note"
                class="px-4 py-2 bg-coffee-100 text-coffee-800 rounded-full text-sm font-medium"
              >
                {{ note }}
              </span>
            </div>
          </div>

          <!-- Brewing Methods -->
          <div>
            <h3 class="text-lg font-bold text-coffee-800 mb-2">
              Brewing Methods
            </h3>
            <ul class="list-disc list-inside space-y-1">
              <li
                v-for="method in coffee.brewingMethods"
                :key="method"
                class="text-gray-700"
              >
                {{ method }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="container mx-auto px-4 py-12 text-center">
    <h1 class="text-4xl font-bold text-coffee-900 mb-4">Coffee Not Found</h1>
    <p class="text-gray-600 mb-8">
      The coffee you're looking for doesn't exist.
    </p>
    <router-link
      to="/coffees"
      class="inline-block bg-coffee-600 text-white px-6 py-3 rounded-lg hover:bg-coffee-700 transition-colors duration-200"
    >
      Back to Coffee Types
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { coffees } from "../data/coffees";

const route = useRoute();
const coffee = computed(() => coffees.find((c) => c.id === route.params.id));
</script>
