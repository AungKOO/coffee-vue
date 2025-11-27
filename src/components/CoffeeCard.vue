<template>
  <div
    class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
  >
    <div class="relative h-48 overflow-hidden">
      <img
        :src="coffee.image"
        :alt="coffee.name"
        class="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
      />
    </div>

    <div class="p-6">
      <h3 class="text-2xl font-bold text-coffee-900 mb-2">{{ coffee.name }}</h3>

      <p class="text-gray-600 mb-4 line-clamp-2">{{ coffee.description }}</p>

      <div class="space-y-2 mb-4">
        <div class="flex items-center text-sm text-gray-700">
          <span class="font-semibold mr-2">Origin:</span>
          <span>{{ coffee.origin }}</span>
        </div>
        <div class="flex items-center text-sm text-gray-700">
          <span class="font-semibold mr-2">Roast:</span>
          <span>{{ coffee.roastLevel }}</span>
        </div>
      </div>

      <div class="mb-4">
        <span class="font-semibold text-sm text-gray-700 mr-2"
          >Flavor Notes:</span
        >
        <div class="flex flex-wrap gap-2 mt-2">
          <span
            v-for="note in coffee.flavorNotes"
            :key="note"
            class="px-3 py-1 bg-coffee-100 text-coffee-800 rounded-full text-xs font-medium"
          >
            {{ note }}
          </span>
        </div>
      </div>

      <router-link
        :to="`/coffees/${coffee.id}`"
        class="inline-block w-full text-center bg-coffee-600 text-white px-4 py-2 rounded-lg hover:bg-coffee-700 transition-colors duration-200"
      >
        Learn More
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Coffee } from "../data/coffees";

defineProps<{
  coffee: Coffee;
}>();
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
