<template>
    <section class="px-32 py-14 text-white max-[425px]:py-5">
      <div class="flex justify-center">
          <TheBadge text="Have no funding?" />
      </div>
      <h2 class="title mb-20">Investments for you</h2>
  
    <div class="flex gap-10 mb-20">
        <div class="w-[660px] text-3xl font-bold uppercase">Investment Attraction<br/>Assistance</div>
        <div class="">
            <p class="mb-5 text-base font-light">
                We help our clients attract investments by leveraging our extensive network of venture capital (VC) partners. Our service includes:
            </p>
            <div class="w-full flex items-center">
                <div
                    class="w-1/2 gap-5 spacing group relative mb-5 mr-5 flex items-center justify-between overflow-hidden rounded-[50px] border border-white black-bg-o px-5 py-20"
                >
                    <img
                        src="/img/star-bg.png"
                        alt="star"
                        class="pointer-events-none absolute left-1/2 top-0 !max-w-[700px] -translate-x-1/2 select-none transition-transform duration-500 group-hover:!max-w-[1000px] group-hover:scale-125"
                        />
                    <img :src="`/img/investment/${data[0].img}.png`" :alt="data[0].content" class="pointer-events-none select-none" />
                    <div class="mt-2 text-base font-light text-white">
                        {{ data[0].content }}
                    </div>
                </div>

                <div
                    class="w-1/2 spacing group relative mb-5 mr-5 flex items-center justify-between overflow-hidden rounded-[50px] border border-white black-bg-o px-5 py-20 gap-5"
                >
                    <img
                        src="/img/star-bg.png"
                        alt="star"
                        class="pointer-events-none absolute left-1/2 top-0 !max-w-[700px] -translate-x-1/2 select-none transition-transform duration-500 group-hover:!max-w-[1000px] group-hover:scale-125"
                        />
                    <img :src="`/img/investment/${data[1].img}.png`" :alt="data[1].content" class="pointer-events-none select-none" />
                    <div class="mt-2 text-base font-light text-white">
                        {{ data[1].content }}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex gap-10">
        <div class="w-[660px] text-3xl font-bold uppercase">Selective Direct<br/>Investment</div>
        <div class="">
            <p class="mb-5 text-base font-light">
                In rare instances, we also consider directly investing in highly aligned projects that meet our criteria for innovation and potential. This includes:
            </p>
            <div class="w-full flex items-center">
                <div
                    class="w-1/2 spacing group relative mb-5 mr-5 flex items-center justify-between overflow-hidden rounded-[50px] border border-white black-bg-o px-5 py-20 gap-5"
                >
                    <img
                        src="/img/star-bg.png"
                        alt="star"
                        class="pointer-events-none absolute left-1/2 top-0 !max-w-[700px] -translate-x-1/2 select-none transition-transform duration-500 group-hover:!max-w-[1000px] group-hover:scale-125"
                        />
                    <img :src="`/img/investment/${data[2].img}.png`" :alt="data[2].content" class="pointer-events-none select-none" />
                    <div class="mt-2 text-base font-light text-white">
                        {{ data[2].content }}
                    </div>
                </div>

                <div
                    class="w-1/2 spacing group relative mb-5 mr-5 flex items-center justify-between overflow-hidden rounded-[50px] border border-white black-bg-o px-5 py-20 gap-5"
                >
                    <img
                        src="/img/star-bg.png"
                        alt="star"
                        class="pointer-events-none absolute left-1/2 top-0 !max-w-[700px] -translate-x-1/2 select-none transition-transform duration-500 group-hover:!max-w-[1000px] group-hover:scale-125"
                        />
                    <img :src="`/img/investment/${data[3].img}.png`" :alt="data[3].content" class="pointer-events-none select-none" />
                    <div class="mt-2 text-base font-light text-white">
                        {{ data[3].content }}
                    </div>
                </div>
            </div>
            <p class="mb-5 text-base font-light">
                Our focus is on facilitating the connection between groundbreaking crypto and blockchain projects and the necessary capital for their growth and success.            </p>
        </div>
    </div>
              <!-- <div
                  ref="target1"
                  :style="{
                  transform: cardTransform(elementX1, elementY1, elementHeight1, elementWidth1, isOutside1)
                  }"
                  class="w-96 h-96 square relative row-span-2 flex flex-col items-center justify-center overflow-hidden rounded-[50px] border border-white bg-dark p-5 transition-transform duration-300 ease-out"
              >
                  <img
                      src="/img/star-bg.png"
                      alt="star"
                      class="pointer-events-none absolute left-1/2 top-0 !max-w-[500px] -translate-x-1/2 select-none"
                      />
                  <p class="text-gradient mb-6 text-9xl font-black uppercase">120+</p>
                  <p class="text-xl font-bold text-primary text-center">Successfully Completed Orders in Web3 & Blockchain Development</p>
              </div> -->
  
              <p class="w-96 text-sm text-white/50"></p>
             <div class="mt-14 flex justify-end">
                <BaseButtonLink text="Start FundRaise" />
            </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import TheBadge from './TheBadge.vue';
  import { useMouseInElement } from '@vueuse/core';
  import { RouterLink } from 'vue-router';
  import BaseButtonLink from './BaseButtonLink.vue';
  
  const data = ref([
    { img: 'link', content: 'Connecting clients with suitable VC firms from our vast network, specializing in crypto and blockchain investments.' },
    { img: 'family_history', content: 'Providing a tailored approach to match projects with the most appropriate investors, based on the projects unique needs and goals.' },
    { img: 'approval_delegation', content: 'Rigorous evaluation of projects based on specific criteria such as innovation, team strength, and market potential.' },
    { img: 'paid', content: 'Strategic investment to support growth, offering not just funding but also access to our expertise, resources, and network.' },
  ])
  const target1 = ref(null);
  
  const {
    elementX: elementX1,
    elementY: elementY1,
    isOutside: isOutside1,
    elementHeight: elementHeight1,
    elementWidth: elementWidth1
  } = useMouseInElement(target1)
  
  const cardTransform = (
    elX: number,
    elY: number,
    elHeight: number,
    elWidth: number,
    isOutside: boolean
  ) => {
    const MAX_ROTATION = 12
  
    const rX = (MAX_ROTATION / 2 - (elY / elHeight) * MAX_ROTATION).toFixed(2)
    const rY = ((elX / elWidth) * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2)
  
    return isOutside ? '' : `perspective(${elWidth}px) rotateX(${rX}deg) rotateY(${rY}deg)`
  }
  </script>
  
  <style scoped>
  .orange-text {
      color: #F3511F;
  }
  .orange-border {
      border-color: #F3511F;
  }
  
  .text-gradient {
    background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

    .black-bg-o {
        background: #15131303;
    }
</style>