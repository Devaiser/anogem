<template>
  <section ref="section" class="relative flex w-full flex-col px-32">
    <div
      v-for="(item, idx) in items"
      :key="idx"
      class="relative z-10 mt-5 first:mt-0"
      :style="`height: ${itemHeight}px`"
    >
      <div class="cube h-full">
        <div
          class="flippity border-primary flex items-center justify-center border-b"
          :style="`height: ${itemHeight}px`"
        >
          <TheBadge :text="`0${idx + 1}/0${items.length}`" />
          <h2 class="text-clamp font-extralight uppercase leading-none text-white">
            {{ item.title }}
          </h2>
        </div>
        <div
          class="flop border-primary flex items-center justify-center border-b"
          :style="`height: ${itemHeight}px`"
        >
          <TheBadge :text="item.word" />
          <div class="max-w-[500px] font-light text-white">
            {{ item.text }}
          </div>
        </div>
      </div>
    </div>
    <div
      class="pointer-events-none fixed left-1/2 top-1/2 -z-10 w-1/3 -translate-x-1/2 -translate-y-1/2 select-none"
    >
      <img src="/img/logo-bg.png" alt="background logo" class="h-full w-full" />
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import { useWindowSize } from '@vueuse/core'
import TheBadge from '@/components/TheBadge.vue'

const section = ref<HTMLElement | null>(null)
const { height } = useWindowSize()

const itemHeight = computed(() => {
  return (height.value - 144) / 5
})

const items = [
  {
    title: 'Leading of crypto projects',
    text: 'Elevate your project with custom tokenomics, expert consulting, and strategic partnerships for exchange listings and launchpad ventures. Redefine market leadership.',
    word: 'leading'
  },
  {
    title: 'Growth of Your Token',
    text: "Growth of Your Token: Enhance liquidity and trading volume with top-tier algorithms and dedicated 24/7 market making. Boost your token's market impact. Start now.",
    word: 'growth'
  },
  {
    title: 'Fund raising',
    text: "Bridge the gap to venture capital and unlock investment opportunities for your project's success. Capitalize on our expertise. Initiate your fundraising now.",
    word: 'fund'
  },
  {
    title: 'Audit',
    text: 'Achieve best-in-class security with comprehensive audits from renowned firms. Build trust with impeccable integrity. Book your security audit today.',
    word: 'audit'
  },
  {
    title: 'Analytics and Reporting',
    text: 'Access real-time dashboards for complete financial oversight and receive essential market intelligence weekly. Inform your decisions with data. Get your market insights today.',
    word: 'analytics'
  }
]
</script>
<style scoped>
.text-clamp {
  font-size: clamp(2.75rem, 0.3448rem + 3.8793vw, 5rem);
}
.cube {
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  transition: transform 1s;
}
.flippity {
  -webkit-transform: translateZ(100px);
  transform: translateZ(100px);
  transition: opacity 1s;
}
.flop {
  -webkit-transform: rotateX(-90deg) translateZ(-100px);
  transform: rotateX(-90deg) translateZ(-100px);
  opacity: 0;
  transition: opacity 1s;
}
.cube:hover {
  -webkit-transform: rotateX(90deg);
  transform: rotateX(90deg);
  /* Text bleed at 90º */
}
.cube:hover .flippity {
  opacity: 0;
}
.cube:hover .flop {
  opacity: 1;
}
</style>
