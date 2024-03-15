<template>
    <div class="border w-full h-[60px] flex items-center justify-center border-white rounded-full">
    <RouterLink to="#" class="w-full h-full flex items-center justify-center">
      <span
        class="uppercase text-white text-2xl font-normal"
        >{{ text }}</span
      >
    </RouterLink>
    </div>
  </template>
  <script setup lang="ts">
import { RouterLink } from 'vue-router';

  
  defineProps<{
    text: string
  }>()
  </script>
  <style scoped></style>