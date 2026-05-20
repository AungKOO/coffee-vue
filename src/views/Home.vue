<template>
  <div>
    <!-- Hero Section -->
    <section
      class="relative h-[500px] bg-cover bg-center"
      style="
        background-image: url(&quot;https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&auto=format&fit=crop&quot;);
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
    <!-- Job Opportunities (mobile: fixed height, desktop: min viewport height) -->
    <!-- height="600" is a safe fallback before the first resize message arrives -->
    <!-- scrolling removed (deprecated) — overflow:hidden handles it via CSS -->
    <div class="mx-4 py-4 sm:mx-2">
      <iframe
        id="job-listing-iframe"
        ref="jobsIframeRef"
        src="https://uat.yomarecruit.com/jobs/embedded?brandColor=ED1B34&fontFamily=Rubik"
        width="100%"
        :style="{
          transform: 'translateZ(0)',
          WebkitOverflowScrolling: 'touch',
          width: '100%',
          border: 'none',
          display: 'block',
          overflow: 'hidden',
          minHeight: `${minIframeHeight}px`,
          height: `${iframeHeight}px`,
        }"
        title="Job Opportunities"
        loading="lazy"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import CoffeeCard from "../components/CoffeeCard.vue";
import { coffees } from "../data/coffees";

type IframeMessage = {
  type?: string;
  event?: string;
  height?: number | string;
  iframeHeight?: number | string;
  payload?: unknown;
  [key: string]: unknown;
};

const iframeSrc =
  "https://uat.yomarecruit.com/jobs/embedded?brandColor=ED1B34&fontFamily=Rubik";
const iframeOrigin = new URL(iframeSrc).origin;
const jobsIframeRef = ref<HTMLIFrameElement | null>(null);
const minIframeHeight = ref(600);
const iframeHeight = ref(600);
let resizeRequestIntervalId: number | null = null;

const getResponsiveMinHeight = () => {
  if (window.innerWidth < 640) return 520;
  if (window.innerWidth < 1024) return 620;
  return Math.max(700, Math.round(window.innerHeight * 0.8));
};

const getResponsiveMaxHeight = () => {
  // Guard against positive feedback loops from child-side height measurement.
  return Math.max(1400, Math.round(window.innerHeight * 2.2));
};

const extractMessageHeight = (message: IframeMessage) => {
  const directHeight = Number(message.height ?? message.iframeHeight);
  if (Number.isFinite(directHeight)) return directHeight;

  if (message.payload && typeof message.payload === "object") {
    const payload = message.payload as Record<string, unknown>;
    const payloadHeight = Number(payload.height ?? payload.iframeHeight);
    if (Number.isFinite(payloadHeight)) return payloadHeight;
  }

  return NaN;
};

const setIframeHeight = (nextHeight: number) => {
  if (!Number.isFinite(nextHeight)) return;
  const maxHeight = getResponsiveMaxHeight();
  const safeHeight = Math.min(
    maxHeight,
    Math.max(minIframeHeight.value, Math.floor(nextHeight)),
  );
  iframeHeight.value = safeHeight;
};

const parseMessageData = (data: unknown): IframeMessage | null => {
  if (typeof data === "string") {
    try {
      const parsed = JSON.parse(data) as IframeMessage;
      return parsed && typeof parsed === "object" ? parsed : null;
    } catch {
      return null;
    }
  }

  if (data && typeof data === "object") {
    return data as IframeMessage;
  }

  return null;
};

const dispatchIframeEvent = (message: IframeMessage) => {
  window.dispatchEvent(
    new CustomEvent("jobs-iframe-message", {
      detail: message,
    }),
  );
};

const requestIframeResize = (reason: string) => {
  const iframe = jobsIframeRef.value;
  if (!iframe || !iframe.contentWindow) return;

  iframe.contentWindow.postMessage(
    {
      type: "request-iframe-resize",
      reason,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    },
    iframeOrigin,
  );
};

const handleIframeMessage = (event: MessageEvent) => {
  const iframe = jobsIframeRef.value;
  if (!iframe || !iframe.contentWindow) return;

  // Accept messages only from the embedded iframe window and origin.
  if (event.source !== iframe.contentWindow) return;
  if (event.origin !== iframeOrigin) return;

  const message = parseMessageData(event.data);
  if (!message) return;

  dispatchIframeEvent(message);

  const eventType = message.type ?? message.event;

  switch (eventType) {
    case "resize-iframe":
    case "iframe-resize":
    case "set-iframe-height": {
      const nextHeight = extractMessageHeight(message);
      setIframeHeight(nextHeight);
      break;
    }
    case "child-ready":
    case "iframe-ready": {
      iframe.contentWindow.postMessage(
        {
          type: "parent-ready",
          viewport: {
            width: window.innerWidth,
            height: window.innerHeight,
          },
        },
        iframeOrigin,
      );
      requestIframeResize("child-ready");
      break;
    }
    default: {
      // All iframe events are captured and re-dispatched above,
      // while unknown event types are safely ignored by the parent.
      break;
    }
  }
};

const handleViewportResize = () => {
  minIframeHeight.value = getResponsiveMinHeight();
  if (iframeHeight.value < minIframeHeight.value) {
    iframeHeight.value = minIframeHeight.value;
  }

  requestIframeResize("viewport-resize");
};

const handleIframeLoad = () => {
  requestIframeResize("iframe-load");
};

onMounted(() => {
  minIframeHeight.value = getResponsiveMinHeight();
  iframeHeight.value = minIframeHeight.value;

  jobsIframeRef.value?.addEventListener("load", handleIframeLoad);
  window.addEventListener("message", handleIframeMessage);
  window.addEventListener("resize", handleViewportResize);

  // Safety net: ask the child to re-measure periodically so shrink events are not missed.
  resizeRequestIntervalId = window.setInterval(() => {
    requestIframeResize("interval-sync");
  }, 1500);
});

onUnmounted(() => {
  jobsIframeRef.value?.removeEventListener("load", handleIframeLoad);
  window.removeEventListener("message", handleIframeMessage);
  window.removeEventListener("resize", handleViewportResize);

  if (resizeRequestIntervalId !== null) {
    window.clearInterval(resizeRequestIntervalId);
    resizeRequestIntervalId = null;
  }
});

// Show first 3 coffees as featured
const featuredCoffees = coffees.slice(0, 3);
</script>
