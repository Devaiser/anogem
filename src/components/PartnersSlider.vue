<template>
  <section class="px-32 py-14 max-[1024px]:px-0 max-[1024px]:py-0 max-[425px]:py-5">
    <div class="flex justify-center">
      <TheBadge text="Technical partners" />
    </div>
    <div class="mt-10">
    <carousel :items-to-show="itemsToShow">
      <slide v-for="item in partners" :key="item.alt">
        <div
          class="mr-6 flex max-[640px]:mx-2 h-44 w-[90%] mx-10 items-center justify-center rounded-[50px] border border-white last:mr-0"
        >
        <img :src="item.src" :alt="item.alt" class="w-3/4 h-full" />
      </div>
      </slide>
    </carousel>
    </div>
  </section>
</template>
<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import TheBadge from './TheBadge.vue'
import { onBeforeUnmount, onMounted, ref } from 'vue';

const itemsToShow = ref(4);
const updateItemsToShow = () => {
  if (window.matchMedia('(max-width: 375px)').matches) {
    itemsToShow.value = 1.2; 
  } else if (window.matchMedia('(max-width: 1200px)').matches) {
    itemsToShow.value = 1.5; 
  } else {
    itemsToShow.value = 4; 
  }
};

onMounted(() => {
  updateItemsToShow(); 
  window.addEventListener('resize', updateItemsToShow); 
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateItemsToShow); 
});
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
