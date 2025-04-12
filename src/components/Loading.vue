<template>
  <div
    class="fixed inset-0 z-40 flex items-center justify-center backdrop-blur-md"
    v-if="loading"
  >
    <div class="absolute inset-0 bg-black/20"></div>
    <svg viewBox="25 25 50 50">
      <circle cx="50" cy="50" r="20"></circle>
    </svg>
  </div>
</template>

<script setup>
import { useLoading } from "@/composables/loading";

const { loading } = useLoading();
</script>

<style lang="scss" scoped>
svg {
  transform-origin: center;
  animation: rotate 2s linear infinite;
  width: 3.75em;
}

circle {
  fill: none;
  stroke: #141414;
  stroke-width: 3;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dashoffset: -125px;
  }
}
</style>
