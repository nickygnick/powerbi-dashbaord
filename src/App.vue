<script setup>
import Loading from "@/components/Loading.vue";
</script>

<template>
  <div>
    <router-view :key="$route.name"></router-view>
    <Loading></Loading>
  </div>
</template>

<style lang="scss" scoped></style>
