<template>
  <section class="px-32 py-14">
    <div class="flex justify-center">
      <TheBadge text="Technical partners" />
    </div>
    <div class="mt-10 flex">
      <div
        v-for="item in partners"
        :key="item.alt"
        class="mr-6 flex h-44 w-1/4 items-center justify-center rounded-[50px] border border-white last:mr-0"
      >
        <img :src="item.src" :alt="item.alt" class="w-3/4" />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import TheBadge from './TheBadge.vue'

const partners = [
  {
    src: '/img/binance.svg',
    alt: 'binance'
  },
  {
    src: '/img/ethereum.svg',
    alt: 'ethereum'
  },
  {
    src: '/img/arbitrum.svg',
    alt: 'arbitrum'
  },
  {
    src: '/img/optimism.svg',
    alt: 'optimism'
  }
]
</script>
<style scoped></style>
