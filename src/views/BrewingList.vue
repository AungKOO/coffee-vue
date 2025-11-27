<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-5xl font-bold text-coffee-900 mb-4 text-center">
      Brewing Guide
    </h1>
    <p class="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
      Master the art of coffee brewing with our comprehensive step-by-step
      guides. From beginner-friendly methods to advanced techniques.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <BrewingCard
        v-for="method in brewingMethods"
        :key="method.id"
        :method="method"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import BrewingCard from "../components/BrewingCard.vue";
import { brewingMethods } from "../data/brewing";
</script>
