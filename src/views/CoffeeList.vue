<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-5xl font-bold text-coffee-900 mb-4 text-center">
      Coffee Types
    </h1>
    <p class="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
      Explore our collection of coffee drinks from around the world. Each type
      has its own unique characteristics, brewing methods, and flavor profiles.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <CoffeeCard v-for="coffee in coffees" :key="coffee.id" :coffee="coffee" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CoffeeCard from "../components/CoffeeCard.vue";
import { coffees } from "../data/coffees";
</script>
