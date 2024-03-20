<template>
  <section class="px-32 py-14 max-[1440px]:px-0 max-[425px]:py-5">
    <div class="flex justify-center">
      <TheBadge text="All you need" />
    </div>
    <h2 class="title">Consulting</h2>

    <carousel v-if="showCarousel" class="max-[768px]:mt-8 mt-16" :items-to-show="itemsToShow">
      <slide v-for="item in consulting" :key="item.title">
        <div
          class="
            max-[768px]:pt-20 
            max-[768px]:h-[500px] 
            max-[640px]:h-[450px] 
            max-[425px]:px-3 
            h-[600px] mx-3 box-border group relative mb-5 flex flex-col items-center justify-between overflow-hidden rounded-[50px] border border-white bg-black px-5 pb-16 pt-24"
        >
          <img
            src="/img/star-bg.png"
            alt="star"
            class="pointer-events-none absolute left-1/2 top-0 !max-w-[700px] -translate-x-1/2 select-none transition-transform duration-500 group-hover:!max-w-[1000px] group-hover:scale-125"
          />
          <img :src="item.img" :alt="item.title" class="max-[768px]:h-[120px] max-[640px]:h-[90px] pointer-events-none select-none" />
          <div class="max-[640px]:mt-5 mt-24 text-center">
            <h3 class="text-xl font-bold text-white">{{ item.title }}</h3>
            <p class="mt-2 font-extralight text-white">
              {{ item.content }}
            </p>
          </div>
        </div>
      </slide>
    </carousel>

    <div v-else class="mt-16 flex flex-wrap">
      <div
        v-for="item in consulting"
        :key="item.title"
        class="spacing group relative mb-5 mr-5 flex flex-col items-center justify-between overflow-hidden rounded-[50px] border border-white bg-black px-5 pb-16 pt-24 transition-transform duration-500 hover:-translate-y-10"
      >
        <img
          src="/img/star-bg.png"
          alt="star"
          class="pointer-events-none absolute left-1/2 top-0 !max-w-[700px] -translate-x-1/2 select-none transition-transform duration-500 group-hover:!max-w-[1000px] group-hover:scale-125"
        />
        <img :src="item.img" :alt="item.title" class="pointer-events-none select-none" />
        <div class="mt-24 text-center">
          <h3 class="text-xl font-bold text-white">{{ item.title }}</h3>
          <p class="mt-2 font-extralight text-white">
            {{ item.content }}
          </p>
        </div>
      </div>
    </div>
    <div class="max-[425px]:mt-3 max-[768px]:mr-5 mt-9 flex justify-end">
      <BaseButtonLink text="start it" />
    </div>
  </section>
</template>
<script setup lang="ts">
import TheBadge from '@/components/TheBadge.vue'
import BaseButtonLink from '@/components/BaseButtonLink.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import { onBeforeUnmount, onMounted, ref } from 'vue';

const itemsToShow = ref(4);
const showCarousel = ref(false);
const updateItemsToShow = () => {
  if (window.matchMedia('(max-width: 375px)').matches) {
    itemsToShow.value = 1.1; 
    showCarousel.value = true;
  } else if (window.matchMedia('(max-width: 425px)').matches) {
    itemsToShow.value = 1.3; 
    showCarousel.value = true;
  } else if (window.matchMedia('(max-width: 768px)').matches) {
    itemsToShow.value = 1.8; 
    showCarousel.value = true;
  } else if (window.matchMedia('(max-width: 1024px)').matches) {
    itemsToShow.value = 2.5; 
    showCarousel.value = true;
  }
   else if (window.matchMedia('(max-width: 1440px)').matches) {
    itemsToShow.value = 3.1; 
    showCarousel.value = true;
  } else {
    itemsToShow.value = 4; 
    showCarousel.value = false;
  }
};

onMounted(() => {
  updateItemsToShow(); 
  window.addEventListener('resize', updateItemsToShow); 
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateItemsToShow); 
});

const consulting = [
  {
    title: 'Exchange Listing Assistance:',
    content:
      'We guide clients through the complexities of listing their digital assets on exchanges, ensuring smooth and efficient listing processes.',
    img: '/img/exchange.svg'
  },
  {
    title: 'Tokenomic Creation:',
    content:
      "Our expertise in developing tokenomics involves creating a strategic economic design for your token, focusing on utility, supply, and distribution to align with your project's goals.",
    img: '/img/creation.svg'
  },
  {
    title: 'Help with Audit Passing:',
    content:
      'We assist in ensuring your blockchain projects are secure and compliant, helping you navigate and pass necessary security audits to enhance credibility and trust in the crypto community.',
    img: '/img/audit.svg'
  },
  {
    title: 'Help with Marketing:',
    content:
      'We understand that effective marketing is crucial for the success of any crypto project. One of our key services includes providing assistance with marketing and facilitating connections with specialized marketing agencies',
    img: '/img/marketing.svg'
  }
]
</script>
<style scoped>
.spacing {
  width: calc((100% - 3.75rem) / 4);
}
.spacing:nth-child(4n) {
  margin-right: 0;
}
/* @media (max-width: 1600px) {
  .spacing {
    width: calc((100% - 2.5rem) / 3);
  }
  .spacing:nth-child(4n) {
    margin-right: 1.25rem;
  }
  .spacing:nth-child(3n) {
    margin-right: 0;
  }
} */
</style>
