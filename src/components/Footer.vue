<template>
  <footer class="bg-coffee-900 text-white mt-16">
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4 flex items-center space-x-2">
            <span class="text-2xl">☕</span>
            <span>Coffee Story</span>
          </h3>
          <p class="text-coffee-200">
            Your ultimate guide to coffee knowledge, brewing techniques, and the
            art of perfect coffee.
          </p>
        </div>

        <div>
          <h3 class="text-xl font-bold mb-4">Quick Links</h3>
          <ul class="space-y-2 text-coffee-200">
            <li>
              <router-link
                to="/coffees"
                class="hover:text-white transition-colors"
              >
                Coffee Types
              </router-link>
            </li>
            <li>
              <router-link
                to="/brewing"
                class="hover:text-white transition-colors"
              >
                Brewing Methods
              </router-link>
            </li>
            <li>
              <router-link
                to="/knowledge"
                class="hover:text-white transition-colors"
              >
                Knowledge Base
              </router-link>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-xl font-bold mb-4">About</h3>
          <p class="text-coffee-200">
            Coffee Story is dedicated to sharing the rich culture, history, and
            techniques of coffee brewing. Join us on a journey through the world
            of coffee!
          </p>
        </div>
      </div>

      <div
        class="border-t border-coffee-700 mt-8 pt-8 text-center text-coffee-300"
      >
        <p>&copy; 2025 Coffee Story. All rights reserved.</p>
        <p class="mt-2 text-sm">
          Images from
          <a
            href="https://unsplash.com"
            target="_blank"
            rel="noopener"
            class="hover:text-white"
            >Unsplash</a
          >
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
