<template>
  <section class="px-32 py-14">
    <div class="flex justify-center">
      <TheBadge text="All you need" />
    </div>
    <h2 class="title">Consulting</h2>
    <div class="mt-16 flex flex-wrap">
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
    <div class="mt-9 flex justify-end">
      <BaseButtonLink text="start it" />
    </div>
  </section>
</template>
<script setup lang="ts">
import TheBadge from '@/components/TheBadge.vue'
import BaseButtonLink from '@/components/BaseButtonLink.vue'

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
