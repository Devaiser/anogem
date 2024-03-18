<template>
  <section class="px-32 py-14 text-white">
    <div class="flex justify-center">
        <TheBadge text="take kare of your needs" />
    </div>
    <h2 class="title mb-10"><span class="orange-text">Development.</span> NFT</h2>

    <div class="flex gap-20">
        <div class="flex flex-col justify-between">
            <div
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
            </div>

            <p class="w-96 text-sm text-white/50">
                Our development team has limited free resources as we are committed to delivering high quality, and the demand for our services is high.
                <br/>
                <br/>
                In cases where we are fully occupied, we will offer the services of our development partners.
            </p>
        </div>
        
        <div class="flex flex-col gap-10">
            <div 
                v-for="(item, idx) in data" 
                :key="idx"
                class="relative h-96 flex items-center gap-10 p-5 border border-white rounded-[50px]"
                >
                <img 
                    :src="`/img/development/${item.imageName}.png`"
                    alt="dev-img"
                    class="w-auto h-full"
                />
                <div>
                    <div class="font-bold text-xl mb-3">{{ item.title }}</div>
                    <div class="font-light text-base">{{ item.subtitle }}</div>
                </div>
               
                <div class="absolute bottom-6 right-10 flex items-center gap-2">
                    <RouterLink
                        v-for="(button, idx) in item.buttons"
                        :key="idx"
                        :to="button.link"
                        class="flex items-center border orange-text orange-border rounded-full uppercase px-5 py-2"
                        >
                        {{ button.name }}
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
    <div class="mt-14 flex justify-end">
        <BaseButtonLink text="start building" />
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
    {
        imageName: 'first',
        title: 'Ecosystem developement for Someone.IO',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        buttons: [
            { name: 'website', link: '#' },
            { name: 'wallet', link: '#' },
            { name: '2023', link: '#' },
        ]
    },
    {
        imageName: 'second',
        title: 'Ecosystem developement for Someone.IO',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        buttons: [
            { name: 'website', link: '#' },
            { name: 'wallet', link: '#' },
            { name: '2023', link: '#' },
        ]
    },
    {
        imageName: 'third',
        title: 'Ecosystem developement for Someone.IO',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        buttons: [
            { name: 'website', link: '#' },
            { name: 'wallet', link: '#' },
            { name: '2023', link: '#' },
        ]
    },
    {
        imageName: 'four',
        title: 'Ecosystem developement for Someone.IO',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        buttons: [
            { name: 'website', link: '#' },
            { name: 'wallet', link: '#' },
            { name: '2023', link: '#' },
        ]
    },
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
</style>