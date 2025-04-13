<template>
  <div class="flex">
    <SideMenu @change="(item) => (selectedItem = item)" />
    <main class="flex-1 p-6">
      <div v-if="selectedItem">
        <h2 class="mb-4 text-xl font-semibold">
          {{ selectedItem.title }}
        </h2>

        <div>
          <iframe class="h-full w-full" :src="selectedItem.link"></iframe>
        </div>
      </div>
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
import { useSideMenuItems } from "@/composables/sideMenuItems";

const { sideMenuItems } = useSideMenuItems();
const selectedItem = ref(sideMenuItems.value[0]);
</script>

<style lang="scss" scoped></style>
