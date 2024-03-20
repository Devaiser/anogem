<template>
  <div
    class="
      border-primary mr-5 flex h-10 w-fit items-center justify-center rounded-full border px-6
      max-[640px]:px-4
      max-[640px]:h-8
      "
  >
    <span 
    class=" 
      text-primary block text-sm uppercase
      max-[768px]:text-[13px]
      max-[640px]:text-[11px]
      max-[610px]:text-[10px]
    ">{{ text }}</span>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>
<style scoped></style>
