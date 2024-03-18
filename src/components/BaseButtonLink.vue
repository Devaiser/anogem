<template>
  <RouterLink to="#" class="group max-[768px]:h-[50px] flex h-[70px] items-center">
    <span
      class="text-dark mr-2 flex h-full max-[768px]:px-9 max-[768px]:text-base max-[640px]:px-5 items-center justify-center rounded-full bg-white px-16 text-2xl uppercase"
      >{{ text }}</span
    >
    <span
      class="flex h-full max-[768px]:w-[50px] w-[70px] items-center justify-center rounded-full bg-white transition-transform duration-500 group-hover:translate-x-3"
      ><IconChevronRight :width="12" :height="22"
    /></span>
  </RouterLink>
</template>
<script setup lang="ts">
import IconChevronRight from '@/components/icons/IconChevronRight.vue'

defineProps<{
  text: string
}>()
</script>
<style scoped></style>
