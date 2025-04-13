<template>
  <div class="flex">
    <SideMenu @change="(item) => (selectedItem = item)" />
    <main class="flex-1 p-6">
      <div v-if="selectedItem">
        <h2 class="mb-4 text-xl font-semibold">
          {{ selectedItem.title }}
        </h2>

        <div v-if="link">
          <iframe class="h-full w-full" :src="link"></iframe>
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
import { computed, ref } from "vue";
import SideMenu from "@/components/SideMenu.vue";
import { useSideMenuItems } from "@/composables/sideMenuItems";
import { useAuthStore } from "@/stores/authStore";

const authStore = useAuthStore();
const { sideMenuItems } = useSideMenuItems();

const selectedItem = ref(sideMenuItems.value[0]);

const link = computed(() => {
  return selectedItem.value.link.replace(
    "{{code}}",
    authStore.userInfo.ownerCode,
  );
});
</script>

<style lang="scss" scoped></style>
