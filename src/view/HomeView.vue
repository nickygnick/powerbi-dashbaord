<template>
  <div class="flex">
    <SideMenu @change="(item) => (selectedItem = item)" />
    <main class="flex-1 p-6">
      <h2 class="mb-4 text-xl font-semibold" v-if="selectedItem">
        {{ selectedItem.title }}
      </h2>
      <div
        class="flex h-full items-center justify-center text-2xl text-gray-500"
        v-else
      >
        請選擇左側項目
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SideMenu from "@/components/SideMenu.vue";

const selectedItem = ref(null);
</script>

<style lang="scss" scoped></style>
