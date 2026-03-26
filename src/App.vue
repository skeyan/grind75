<script setup>
import { ref, computed, watch, onMounted } from "vue";
import Sidebar from "./components/Sidebar.vue";
import MainContent from "./components/MainContent.vue";

// Ensure trailing slash for fetch paths (e.g. /grind75/ on GitHub Pages)
const BASE = (import.meta.env.BASE_URL || "/").replace(/\/*$/, "/");
const problems = ref([]);
const activeSlug = ref(null);
const activeFilter = ref("all");
const cache = ref({});
const sidebarOpen = ref(false);

const filteredProblems = computed(() => {
  if (activeFilter.value === "all") return problems.value;
  return problems.value.filter((p) => p.difficulty === activeFilter.value);
});

const activeProblem = computed(() =>
  problems.value.find((p) => p.slug === activeSlug.value)
);

function selectProblem(slug) {
  activeSlug.value = slug;
  window.location.hash = slug;
  sidebarOpen.value = false;
}

function openSidebar() {
  sidebarOpen.value = true;
}

function closeSidebar() {
  sidebarOpen.value = false;
}

function setCache(payload) {
  cache.value[payload.slug] = payload.data;
}

function syncFromHash() {
  const hash = window.location.hash.slice(1);
  if (hash && problems.value.find((p) => p.slug === hash)) {
    activeSlug.value = hash;
  }
}

onMounted(async () => {
  const res = await fetch(`${BASE}problems.json`);
  problems.value = await res.json();
  syncFromHash();
  window.addEventListener("hashchange", syncFromHash);
});

watch(
  () => activeSlug.value,
  (slug) => {
    const hash = window.location.hash.slice(1);
    if (slug && hash !== slug) window.location.hash = slug;
  }
);
</script>

<template>
  <div class="overlay" :class="{ show: sidebarOpen }" @click="closeSidebar"></div>
  <div class="app">
    <Sidebar
      :problems="filteredProblems"
      :active-slug="activeSlug"
      :problem-count="problems.length"
      :active-filter="activeFilter"
      :base="BASE"
      :class="{ open: sidebarOpen }"
      @update:active-filter="activeFilter = $event"
      @select="selectProblem"
    />
    <MainContent
      :problem="activeProblem"
      :cache="cache"
      :base="BASE"
      @open-sidebar="openSidebar"
      @cache-set="setCache"
    />
  </div>
</template>
