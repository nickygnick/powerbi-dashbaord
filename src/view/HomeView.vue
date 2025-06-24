<template>
  <div class="flex">
    <SideMenu @change="(item) => (selectedItem = item)" />
    <main class="flex-1 p-6">
      <div v-if="selectedItem" class="h-screen">
        <h2 class="mb-4 text-xl font-semibold">
          {{ selectedItem.title }}
        </h2>

        <div v-if="link" class="h-full">
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

  //如果部門為VCTL就不代參數
  if (authStore.userInfo.ownerCode === "VOLVO") {
    //判斷orgType等於15061008
    if (authStore.userInfo.orgType === "15061008") {
          return selectedItem.value.link.replace(
            //需要調整dealer_id_gen的參數
            "{{code}}","dealer_id_gen '"+authStore.userInfo.ownerCode+"'",);
            //且需要把左邊選單總管理報表都隱藏
        }
    //判斷orgType不等於15061008
    return selectedItem.value.link.replace(
      "{{code}}","",);
  }
  return selectedItem.value.link.replace(
    "{{code}}","dealer_id eq '"+authStore.userInfo.ownerCode+"'",);
});
</script>

<style lang="scss" scoped></style>
