<template>
  <div
    class="h-screen w-72 overflow-y-auto border-r border-gray-200 bg-gray-50"
  >
    <div class="mb-8 px-4 pt-4 text-xl">
      Hi, {{ userInfo.employeeName || "" }}
      <!-- 切換帳號按鈕 -->
      <button class="switch-account" @click="switchAccount">切換帳號</button>
    </div>
 
      

    <ul class="m-0 list-none p-0" v-if="mainCategoryMenuItems.length > 0">
      <li
        class="border-b border-gray-200 transition-colors duration-200"
        v-for="(category, index) in mainCategoryMenuItems"
        :key="index"
        @click="mainCategory = category"
        :class="{ 'bg-gray-100': category === mainCategory }"
      >
        <div
          class="flex cursor-pointer items-center justify-between p-4 font-medium"
        >
          <span>{{ category }}</span>
          <span
            class="text-xs transition-transform duration-300"
            :class="{ 'rotate-90 transform': category === mainCategory }"
            >▶</span
          >
        </div>
        <transition
          enter-active-class="transition-all duration-300 ease-in-out overflow-hidden"
          enter-from-class="max-h-0 opacity-0"
          enter-to-class="max-h-96 opacity-100"
          leave-active-class="transition-all duration-300 ease-in-out overflow-hidden"
          leave-from-class="max-h-96 opacity-100"
          leave-to-class="max-h-0 opacity-0"
        >
          <ul
            class="m-0 list-none bg-white p-0"
            v-if="category === mainCategory"
          >
            <li
              class="cursor-pointer border-t border-gray-100 px-4 py-3 pl-8 transition-colors duration-200 hover:bg-gray-50"
              v-for="(item, itemIndex) in subMenuItems"
              :key="itemIndex"
              @click.stop="selectItem(item)"
              :class="{
                'border-r-4 border-blue-500 bg-blue-50 text-blue-600':
                  item.id === selectedItem.id,
              }"
            >
              {{ item.title }}
            </li>
          </ul>
        </transition>
      </li>
    </ul>

    <div
      class="flex h-full items-center justify-center text-2xl text-gray-500"
      v-else
    >
      沒有權限
    </div>
   
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { useSideMenuItems } from "@/composables/sideMenuItems";
import { useAuthStore } from "@/stores/authStore";

const authStore = useAuthStore();
const { sideMenuItems } = useSideMenuItems();

const { userInfo } = storeToRefs(authStore);

const mainCategory = ref("首頁");
const selectedItem = ref(sideMenuItems.value[0]);

const filteredMenuItems = computed(() => {
  return sideMenuItems.value.filter((item) =>
    item.roleList.some((roleName) => hasRole(roleName)),
  );
});

const mainCategoryMenuItems = computed(() => {
  return filteredMenuItems.value
    .map((item) => item.parent)
    .filter((item, index, array) => array.indexOf(item) === index);
});

const subMenuItems = computed(() => {
  return filteredMenuItems.value.filter(
    (item) => item.parent === mainCategory.value,
  );
});

// 檢查用戶是否有特定角色權限
const hasRole = (roleName) => {
  if (!authStore.roleList || authStore.roleList.length === 0) {
    return false;
  }else if (authStore.roleList.some((role) => role.roleName == null)) {
    return false;
  }

  return authStore.roleList.some((role) => role.roleName.includes(roleName));
};

const emit = defineEmits(["change"]);

const selectItem = (item) => {
  selectedItem.value = item;
  emit("change", item);
};

const switchAccount = () => {
  authStore.logout();
};
</script>

<style scoped>
.switch-account {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.switch-account:hover {
  background-color: #0056b3;
}

</style>
