<template>
  <div class="flex h-screen flex-col items-center justify-center">
    <img
      class="mb-[66px] h-[130px] w-[130px]"
      src="@/assets/img/logo1.png"
      alt="logo"
    />
    <div class="min-w-[328px]" v-if="!loginFailed">
      <div class="mb-3">
        <label class="mb-2 block text-sm font-bold text-gray-700"
          >帳號<span class="text-red-waring">*</span></label
        >
        <BaseInput
          class="mb-2"
          v-model="form.account"
          type="secondary"
          @keyup.enter="login"
        ></BaseInput>
      </div>
      <div>
        <label class="mb-2 block text-sm font-bold text-gray-700"
          >密碼<span class="text-red-waring">*</span></label
        >
        <BaseInput
          class="mb-2"
          v-model="form.password"
          type="secondary"
          @keyup.enter="login"
        ></BaseInput>
      </div>
      <div class="mt-11">
        <button
          class="button-blue w-full"
          :disabled="buttonDisabled"
          @click="login"
        >
          送出
        </button>
      </div>
    </div>
    <div v-else>
      <div class="mb-3 text-center text-lg">登入失敗</div>
      <div class="text-sm text-gray-700">登入出現問題，請洽管理員</div>
      <div class="mt-20">
        <button class="button-blue w-full" @click="handleReset">返回</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import BaseInput from "@/components/BaseInput.vue";
import { useAuthStore } from "../stores/authStore";

const router = useRouter();
const authStore = useAuthStore();

const form = ref({
  account: "",
  password: "",
});
const submitted = ref(false);
const loginFailed = ref(false);

const buttonDisabled = computed(() => {
  return form.value.account === "" || form.value.password === "";
});

const login = () => {
  if (buttonDisabled.value) {
    return;
  }
  submitted.value = true;

  authStore
    .login(form.value.account, form.value.password)
    .then(() => {
      router.push({ name: "home" });
    })
    .catch((error) => {
      console.error(error);
      loginFailed.value = true;
    });
};

const handleReset = () => {
  submitted.value = false;
  form.value.account = "";
  form.value.password = "";
  loginFailed.value = false;
};
</script>

<style scoped></style>
