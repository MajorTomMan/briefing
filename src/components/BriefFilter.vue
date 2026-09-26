<script setup lang="ts">
import { computed, ref } from "vue";

type Item = {
  href: string;
  title: string;
  dek: string;
  date: string;
  section: "alert" | "daily" | "knowledge";
  lang: "zh" | "en";
  kind?: "feature" | "principle";
};

const props = defineProps<{ items: Item[] }>();
const active = ref<"all" | Item["section"]>("all");
const labels = [
  ["all", "全部"],
  ["alert", "重大事件"],
  ["daily", "每日简报"],
  ["knowledge", "知识漫游"],
] as const;
const visible = computed(() =>
  active.value === "all" ? props.items : props.items.filter((item) => item.section === active.value),
);
const sectionName = (section: Item["section"]) =>
  section === "alert" ? "重大事件" : section === "daily" ? "每日简报" : "知识漫游";
</script>

<template>
  <div>
    <div class="filter-bar" aria-label="内容筛选">
      <button
        v-for="[value, label] in labels"
        :key="value"
        class="filter-button"
        :class="{ active: active === value }"
        type="button"
        @click="active = value"
      >
        {{ label }}
      </button>
    </div>

    <div class="card-grid">
      <article v-for="item in visible" :key="item.href" class="story-card">
        <a :href="item.href">
          <div class="story-meta">
            <span>{{ sectionName(item.section) }}</span>
            <span>{{ item.date }}</span>
            <span>{{ item.lang === "zh" ? "中文" : "English" }}</span>
            <span v-if="item.section === 'knowledge' && item.kind === 'principle'" class="principle-tag">原理</span>
          </div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.dek }}</p>
        </a>
      </article>
    </div>
  </div>
</template>
