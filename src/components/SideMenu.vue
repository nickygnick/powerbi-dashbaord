<template>
  <div
    class="h-screen w-72 overflow-y-auto border-r border-gray-200 bg-gray-50"
  >
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
    <div class="button-container">
    <!-- 切換帳號按鈕 -->
    <button @click="switchAccount" class="switch-button">
      切換帳號
    </button>
  </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useSideMenuItems } from "@/composables/sideMenuItems";
import { useAuthStore } from "@/stores/authStore";

const authStore = useAuthStore();
const { sideMenuItems } = useSideMenuItems();

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
  }

  return authStore.roleList.some((role) => role.roleName.includes(roleName));
};

const emit = defineEmits(["change"]);

const selectItem = (item) => {
  selectedItem.value = item;
  emit("change", item);
};
</script>

<style scoped>
/* 容器樣式，讓按鈕置中 */
.button-container {
  display: flex; /* 使用 Flexbox */
  justify-content: center; /* 水平置中 */
  align-items: center; /* 垂直置中 */
}

/* 按鈕樣式 */
.switch-button {
  background-color: #0084ff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px; /* 上方間距 */
}

.switch-button:hover {
  background-color: #45a049;
}
</style>
