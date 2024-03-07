<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 6 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 1L5 5.5L1 10" :stroke="color" stroke-width="1.5" />
  </svg>
</template>
<script setup lang="ts">
interface Props {
  color?: string
  width?: number
  height?: number
}

withDefaults(defineProps<Props>(), {
  color: 'black',
  width: 6,
  height: 11
})
</script>
