<script setup>
defineProps({
  problems: { type: Array, required: true },
  activeSlug: { type: String, default: null },
  problemCount: { type: Number, required: true },
  activeFilter: { type: String, default: "all" },
});

const emit = defineEmits(["select", "update:activeFilter"]);
const filters = ["all", "Easy", "Medium", "Hard"];

function select(slug) {
  emit("select", slug);
}

function setFilter(filter) {
  emit("update:activeFilter", filter);
}

function onKeydown(e, slug) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    select(slug);
  }
}
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <h1>Grind <span>75</span></h1>
      <p>{{ problemCount }} problem{{ problemCount !== 1 ? "s" : "" }}</p>
    </div>
    <div class="filters">
      <button
        v-for="f in filters"
        :key="f"
        class="filter-btn"
        :class="{ active: activeFilter === f }"
        :data-filter="f"
        @click="setFilter(f)"
      >
        {{ f === "all" ? "All" : f }}
      </button>
    </div>
    <div class="problem-list">
      <div
        v-for="p in problems"
        :key="p.slug"
        class="problem-item"
        :class="{ active: p.slug === activeSlug }"
        tabindex="0"
        role="button"
        :data-slug="p.slug"
        @click="select(p.slug)"
        @keydown="onKeydown($event, p.slug)"
      >
        <span class="diff-dot" :class="p.difficulty"></span>
        <span class="problem-num">{{ p.number || "#" }}</span>
        <div class="problem-info">
          <div class="problem-title">{{ p.title }}</div>
          <div class="problem-meta">{{ p.topics.join(" · ") }}</div>
        </div>
      </div>
    </div>
  </aside>
</template>
