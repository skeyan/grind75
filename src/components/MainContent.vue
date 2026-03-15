<script setup>
import { ref, watch, nextTick } from "vue";
import { marked } from "marked";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/github-dark.min.css";

hljs.registerLanguage("javascript", javascript);

const props = defineProps({
  problem: { type: Object, default: null },
  cache: { type: Object, required: true },
  base: { type: String, default: "/" },
});

const emit = defineEmits(["open-sidebar", "cache-set"]);

const activeTab = ref("notes");
const notesHtml = ref("");
const solutionHtml = ref("");
const titleRef = ref(null);

marked.setOptions({
  breaks: true,
  gfm: true,
  highlight: (code, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(code, { language: lang }).value;
    }
    return hljs.highlightAuto(code).value;
  },
});

function renderMath(html) {
  return html
    .replace(/\\\((.+?)\\\)/g, '<code class="math-inline">$1</code>')
    .replace(/\\\[(.+?)\\\]/gs, '<pre><code class="math-inline">$1</code></pre>');
}

async function loadProblem(slug) {
  if (!slug) return;
  if (props.cache[slug]) {
    const { notes, solution } = props.cache[slug];
    notesHtml.value = renderMath(marked.parse(notes));
    solutionHtml.value = `<pre><code class="language-javascript">${
      hljs.highlight(solution, { language: "javascript" }).value
    }</code></pre>`;
    return;
  }
  const [notesRes, solutionRes] = await Promise.all([
    fetch(`${props.base}problems/${slug}/notes.md`).then((r) =>
      r.ok ? r.text() : ""
    ),
    fetch(`${props.base}problems/${slug}/solution.js`).then((r) =>
      r.ok ? r.text() : ""
    ),
  ]);
  emit("cache-set", { slug, data: { notes: notesRes, solution: solutionRes } });
  notesHtml.value = renderMath(marked.parse(notesRes));
  solutionHtml.value = `<pre><code class="language-javascript">${
    hljs.highlight(solutionRes, { language: "javascript" }).value
  }</code></pre>`;
}

watch(
  () => props.problem,
  async (problem) => {
    if (!problem) {
      notesHtml.value = "";
      solutionHtml.value = "";
      return;
    }
    await loadProblem(problem.slug);
    activeTab.value = "notes";
    await nextTick();
    if (titleRef.value) titleRef.value.focus();
  },
  { immediate: true }
);
</script>

<template>
  <main class="main">
    <div class="main-header">
      <div class="main-header-inner">
        <button
          type="button"
          class="menu-toggle"
          aria-label="Open menu"
          @click="$emit('open-sidebar')"
        >
          &#9776;
        </button>
        <div class="main-title-area">
          <h2 ref="titleRef" tabindex="-1">
            {{ problem ? problem.title : "Select a problem" }}
          </h2>
          <div v-if="problem" class="main-badges">
            <span class="badge" :class="problem.difficulty">{{
              problem.difficulty
            }}</span>
            <span
              v-for="t in problem.topics"
              :key="t"
              class="badge-topic"
            >{{ t }}</span>
          </div>
        </div>
      </div>
      <a
        v-if="problem?.leetcode"
        class="lc-link"
        :href="problem.leetcode"
        target="_blank"
        rel="noopener"
      >
        LeetCode &nearr;
      </a>
    </div>
    <div v-if="problem" class="tabs">
      <button
        type="button"
        class="tab"
        :class="{ active: activeTab === 'notes' }"
        data-tab="notes"
        @click="activeTab = 'notes'"
      >
        Notes
      </button>
      <button
        type="button"
        class="tab"
        :class="{ active: activeTab === 'solution' }"
        data-tab="solution"
        @click="activeTab = 'solution'"
      >
        Solution
      </button>
    </div>
    <div class="content">
      <div v-if="!problem" class="empty-state">
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <path
            d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
          />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
        <p>Choose a problem from the sidebar to begin</p>
      </div>
      <template v-else>
        <div
          class="content-pane"
          :class="{ active: activeTab === 'notes' }"
          id="pane-notes"
        >
          <div class="markdown-body" v-html="notesHtml"></div>
        </div>
        <div
          class="content-pane"
          :class="{ active: activeTab === 'solution' }"
          id="pane-solution"
        >
          <div class="solution-code" v-html="solutionHtml"></div>
        </div>
      </template>
    </div>
  </main>
</template>
