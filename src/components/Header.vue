<template>
  <header class="bg-coffee-800 text-white shadow-lg">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <router-link to="/" class="flex items-center space-x-2">
          <span class="text-3xl">☕</span>
          <span class="text-2xl font-bold">Coffee Story</span>
        </router-link>

        <div class="hidden md:flex space-x-8">
          <router-link
            to="/"
            class="hover:text-coffee-200 transition-colors duration-200"
            :class="{ 'text-coffee-200': route.path === '/' }"
          >
            Home
          </router-link>
          <router-link
            to="/coffees"
            class="hover:text-coffee-200 transition-colors duration-200"
            :class="{ 'text-coffee-200': route.path.startsWith('/coffees') }"
          >
            Coffee Types
          </router-link>
          <router-link
            to="/brewing"
            class="hover:text-coffee-200 transition-colors duration-200"
            :class="{ 'text-coffee-200': route.path.startsWith('/brewing') }"
          >
            Brewing Guide
          </router-link>
          <router-link
            to="/knowledge"
            class="hover:text-coffee-200 transition-colors duration-200"
            :class="{ 'text-coffee-200': route.path.startsWith('/knowledge') }"
          >
            Knowledge Base
          </router-link>
        </div>

        <button
          @click="toggleMenu"
          class="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              :d="
                mobileMenuOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16M4 18h16'
              "
            />
          </svg>
        </button>
      </div>

      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="md:hidden mt-4 space-y-2">
        <router-link
          to="/"
          class="block py-2 hover:text-coffee-200 transition-colors duration-200"
          @click="closeMenu"
        >
          Home
        </router-link>
        <router-link
          to="/coffees"
          class="block py-2 hover:text-coffee-200 transition-colors duration-200"
          @click="closeMenu"
        >
          Coffee Types
        </router-link>
        <router-link
          to="/brewing"
          class="block py-2 hover:text-coffee-200 transition-colors duration-200"
          @click="closeMenu"
        >
          Brewing Guide
        </router-link>
        <router-link
          to="/knowledge"
          class="block py-2 hover:text-coffee-200 transition-colors duration-200"
          @click="closeMenu"
        >
          Knowledge Base
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const mobileMenuOpen = ref(false);

const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMenu = () => {
  mobileMenuOpen.value = false;
};
</script>
