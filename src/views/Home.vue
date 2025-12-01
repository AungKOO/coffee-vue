<template>
  <div>
    <!-- Hero Section -->
    <section
      class="relative h-[500px] bg-cover bg-center"
      style="
        background-image: url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&auto=format&fit=crop');
      "
    >
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div
        class="relative container mx-auto px-4 h-full flex items-center justify-center text-center"
      >
        <div>
          <h1 class="text-5xl md:text-6xl font-bold text-white mb-4">
            Welcome to Coffee Story
          </h1>
          <p class="text-xl md:text-2xl text-white mb-8">
            Discover the Art, Science, and Culture of Coffee
          </p>
          <router-link
            to="/coffees"
            class="inline-block bg-coffee-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-coffee-700 transition-colors duration-200"
          >
            Explore Coffee Types
          </router-link>
        </div>
      </div>
    </section>

    <!-- Introduction -->
    <section class="container mx-auto px-4 py-16">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl font-bold text-coffee-900 mb-6">
          Your Journey Through Coffee
        </h2>
        <p class="text-lg text-gray-700 leading-relaxed">
          Coffee Story is your comprehensive guide to everything coffee. From
          understanding different coffee types to mastering brewing techniques
          and deepening your coffee knowledge, we're here to help you enjoy the
          perfect cup every time.
        </p>
      </div>
    </section>

    <!-- Featured Sections -->
    <section class="bg-coffee-50 py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Coffee Types -->
          <div
            class="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div class="text-6xl mb-4">☕</div>
            <h3 class="text-2xl font-bold text-coffee-900 mb-4">
              Coffee Types
            </h3>
            <p class="text-gray-600 mb-6">
              Explore 12+ different types of coffee from espresso to cold brew,
              each with unique characteristics and flavors.
            </p>
            <router-link
              to="/coffees"
              class="inline-block bg-coffee-600 text-white px-6 py-2 rounded-lg hover:bg-coffee-700 transition-colors duration-200"
            >
              Discover Coffees
            </router-link>
          </div>

          <!-- Brewing Methods -->
          <div
            class="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div class="text-6xl mb-4">🔥</div>
            <h3 class="text-2xl font-bold text-coffee-900 mb-4">
              Brewing Guide
            </h3>
            <p class="text-gray-600 mb-6">
              Master various brewing methods with step-by-step guides, from pour
              over to French press and beyond.
            </p>
            <router-link
              to="/brewing"
              class="inline-block bg-coffee-600 text-white px-6 py-2 rounded-lg hover:bg-coffee-700 transition-colors duration-200"
            >
              Learn Brewing
            </router-link>
          </div>

          <!-- Knowledge Base -->
          <div
            class="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div class="text-6xl mb-4">📚</div>
            <h3 class="text-2xl font-bold text-coffee-900 mb-4">
              Knowledge Base
            </h3>
            <p class="text-gray-600 mb-6">
              Dive deep into coffee culture, history, health benefits, and
              sustainability practices.
            </p>
            <router-link
              to="/knowledge"
              class="inline-block bg-coffee-600 text-white px-6 py-2 rounded-lg hover:bg-coffee-700 transition-colors duration-200"
            >
              Read Articles
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Coffees -->
    <section class="container mx-auto px-4 py-16">
      <h2 class="text-4xl font-bold text-coffee-900 mb-8 text-center">
        Featured Coffees
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CoffeeCard
          v-for="coffee in featuredCoffees"
          :key="coffee.id"
          :coffee="coffee"
        />
      </div>
      <div class="text-center mt-12">
        <router-link
          to="/coffees"
          class="inline-block bg-coffee-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-coffee-700 transition-colors duration-200"
        >
          View All Coffee Types
        </router-link>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="bg-coffee-800 text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold mb-4">
          Ready to Start Your Coffee Journey?
        </h2>
        <p class="text-xl mb-8">
          Explore our comprehensive guides and become a coffee expert today.
        </p>
        <router-link
          to="/brewing"
          class="inline-block bg-white text-coffee-800 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-coffee-100 transition-colors duration-200"
        >
          Get Started
        </router-link>
      </div>
    </section>

    <!-- Job Opportunities Section -->
    <div class="mt-4">
      <!-- <h2 class="text-4xl font-bold text-coffee-900 mb-4 text-center">
        Coffee Industry Careers
      </h2>
      <p class="text-xl text-gray-600 mb-8 text-center max-w-3xl mx-auto">
        Explore exciting job opportunities in the coffee industry
      </p> -->

      <!-- Responsive iframe container -->

      <iframe
        src="https://uat.yomarecruit.com/jobs/embedded?brandColor=f01f31&company=Atlas"
        class="w-full min-h-[900px] lg:min-h-[750px] lg:px-8 sm:px-2 scrollbar-hide"
        title="Job Opportunities"
        loading="lazy"
      />
      <a
        href="https://uat-recruit.yomaconnect.com/"
        target="_blank"
        class="flex cursor-pointer items-baseline justify-center gap-2 font-medium text-gray-700 my-3"
      >
        <p>Built by</p>
        <img
          src="/images/yoma-recruit-horizontal.svg"
          alt="YJP logo"
          class="h-5 w-auto"
        />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import CoffeeCard from "../components/CoffeeCard.vue";
import { coffees } from "../data/coffees";

// Show first 3 coffees as featured
const featuredCoffees = coffees.slice(0, 3);
</script>
