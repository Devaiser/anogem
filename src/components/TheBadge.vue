<template>
  <div
    class="border-primary mr-5 flex h-10 w-fit items-center justify-center rounded-full border px-6"
  >
    <span class="text-primary block text-sm uppercase">{{ text }}</span>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>
<style scoped></style>
