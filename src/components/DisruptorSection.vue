<template>
  <section class="px-32 py-14 max-[610px]:px-12 max-[425px]:py-5 max-[425px]:px-7">
    <div class="flex justify-center">
      <TheBadge text="We're simply the best" />
    </div>
    <h2 class="title"><span class="text-primary">We are.</span> Young disruptor</h2>
    <div class="max-[425px]:mt-5 mt-11 grid select-none max-[1024px]:flex grid-cols-4 max-[1024px]:flex-col grid-rows-2 gap-5">
      <div
        ref="target1"
        :style="{
          transform: cardTransform(elementX1, elementY1, elementHeight1, elementWidth1, isOutside1)
        }"
        class="square relative row-span-2 flex flex-col items-center justify-center overflow-hidden max-[640px]:rounded-[40px] max-[640px]:p-4 rounded-[50px] border border-white bg-dark p-5 transition-transform duration-300 ease-out"
      >
        <img
          src="/img/star-bg.png"
          alt="star"
          class="pointer-events-none absolute left-1/2 top-0 !max-w-[500px] -translate-x-1/2 select-none"
        />
        <p class="max-[768px]:text-7xl max-[425px]:text-5xl max-[768px]:font-medium text-gradient mb-6 text-9xl font-black uppercase">70+</p>
        <p class="max-[640px]:text-base text-xl font-bold text-primary">Clients</p>
      </div>
      <div class="max-[1024px]:flex row-span-2 grid gap-5">
        <div
          ref="target2"
          :style="{
            transform: cardTransform(
              elementX2,
              elementY2,
              elementHeight2,
              elementWidth2,
              isOutside2
            )
          }"
          class="max-[1024px]:w-1/2 max-[640px]:rounded-[40px] max-[640px]:p-4 relative flex flex-col items-center justify-center overflow-hidden rounded-[50px] border border-white bg-dark p-5 transition-transform duration-300 ease-out"
        >
          <img
            src="/img/star-bg.png"
            alt="star"
            class="pointer-events-none absolute left-1/2 top-0 !max-w-[500px] -translate-x-1/2 select-none"
          />
          <p class="max-[768px]:text-7xl max-[425px]:text-5xl max-[768px]:font-medium text-gradient mb-4 text-8xl font-black uppercase">100+</p>
          <p class="max-[640px]:text-base text-xl font-bold text-primary">CEX&DEX</p>
        </div>
        <div
          ref="target3"
          :style="{
            transform: cardTransform(
              elementX3,
              elementY3,
              elementHeight3,
              elementWidth3,
              isOutside3
            )
          }"
          class="max-[1024px]:w-1/2 max-[640px]:rounded-[40px] max-[640px]:p-4 relative flex flex-col items-center justify-center overflow-hidden rounded-[50px] border border-white bg-dark p-5 transition-transform duration-300 ease-out"
        >
          <img
            src="/img/star-bg.png"
            alt="star"
            class="pointer-events-none absolute left-1/2 top-0 !max-w-[500px] -translate-x-1/2 select-none"
          />
          <p class="max-[768px]:text-7xl max-[425px]:text-5xl max-[768px]:font-medium text-gradient mb-4 text-8xl font-black uppercase">30+</p>
          <p class="max-[640px]:text-base max-[768px]:text-center text-xl font-bold text-primary">Launchpad partners</p>
        </div>
      </div>
      <div
        ref="target4"
        :style="{
          transform: cardTransform(elementX4, elementY4, elementHeight4, elementWidth4, isOutside4)
        }"
        class="max-[1024px]:h-[230px] max-[768px]:h-[170px] max-[640px]:rounded-[40px] max-[640px]:p-4 relative col-span-2 row-span-2 flex flex-col items-center justify-center rounded-[50px] border border-white bg-dark transition-transform duration-300 ease-out"
      >
        <img
          src="/img/star-bg.png"
          alt="star"
          class="pointer-events-none max-[425px]:w-full absolute left-1/2 top-0 !max-w-[500px] -translate-x-1/2 select-none"
        />
        <p class="max-[768px]:text-7xl max-[425px]:text-5xl max-[768px]:font-medium text-gradient mb-6 text-9xl font-black uppercase">$70B +</p>
        <p class="max-[640px]:text-base text-xl font-bold text-primary">Trade volume since 2023</p>
      </div>
    </div>
    <div
      class="
        max-[1024px]:h-[260px] 
        max-[1024px]:flex-col 
        max-[768px]:h-[200px]
        max-[640px]:rounded-[40px] max-[640px]:p-4
        max-[425px]:h-[180px]
        relative mt-4 flex w-full items-center justify-center rounded-[50px] border border-white bg-dark transition-transform duration-1000 ease-out will-change-transform hover:scale-90
        "
    >
      <img
        src="/img/star-bg.png"
        alt="star"
        class="pointer-events-none max-[425px]:w-full absolute left-1/2 top-0 !max-w-[500px] -translate-x-1/2 select-none"
      />
      <p
        style="font-size: clamp(5rem, 1.9583rem + 6.3368vw, 9.5625rem)"
        class="max-[1024px]:hidden select-none pb-7 text-[153px] font-thin tracking-[2vw] text-white"
      >
        $200,000,000
      </p>
      <p class="max-[1024px]:block max-[768px]:text-7xl max-[425px]:text-5xl max-[768px]:font-medium hidden text-gradient mb-6 text-9xl font-black uppercase">$200M+</p>

      <div
        class="absolute max-[1024px]:hidden left-1/2 top-1/2 flex h-10 -translate-x-1/2 -translate-y-1/2 select-none items-center justify-center rounded-full bg-primary px-6 text-sm uppercase text-white"
      >
        TOTAL ASSETS UNDER MANAGEMENT
      </div>
      <div
        class="max-[1024px]:flex hidden flex h-10 select-none items-center justify-center rounded-full bg-primary px-6 text-sm uppercase text-white"
      >
        TOTAL ASSETS UNDER MANAGEMENT
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import TheBadge from '@/components/TheBadge.vue'
import { useMouseInElement } from '@vueuse/core'
import { ref } from 'vue'

const target1 = ref(null)

const {
  elementX: elementX1,
  elementY: elementY1,
  isOutside: isOutside1,
  elementHeight: elementHeight1,
  elementWidth: elementWidth1
} = useMouseInElement(target1)

const target2 = ref(null)

const {
  elementX: elementX2,
  elementY: elementY2,
  isOutside: isOutside2,
  elementHeight: elementHeight2,
  elementWidth: elementWidth2
} = useMouseInElement(target2)

const target3 = ref(null)

const {
  elementX: elementX3,
  elementY: elementY3,
  isOutside: isOutside3,
  elementHeight: elementHeight3,
  elementWidth: elementWidth3
} = useMouseInElement(target3)

const target4 = ref(null)

const {
  elementX: elementX4,
  elementY: elementY4,
  isOutside: isOutside4,
  elementHeight: elementHeight4,
  elementWidth: elementWidth4
} = useMouseInElement(target4)

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
.text-gradient {
  background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
