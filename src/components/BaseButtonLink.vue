<template>
  <RouterLink to="#" class="group flex h-[70px] items-center">
    <span
      class="text-dark mr-2 flex h-full items-center justify-center rounded-full bg-white px-16 text-2xl uppercase"
      >{{ text }}</span
    >
    <span
      class="flex h-full w-[70px] items-center justify-center rounded-full bg-white transition-transform duration-500 group-hover:translate-x-3"
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
