<template>
  <section class="px-32 py-14 max-[610px]:px-12 max-[425px]:px-7 max-[425px]:py-5 max-[375px]:px-5">
    <div class="flex justify-center">
      <TheBadge text="We're simply the best" />
    </div>
    <h2 class="title">Why work with us</h2>
    <div class="mt-11 max-[640px]:mt-7">
      <div
        v-for="(question, idx) in questions"
        :key="idx"
        class="cursor-pointer border-b border-primary max-[640px]:py-4 py-6 first:!pt-0"
      >
        <div class="flex items-center justify-between" @click="handleAction(idx)">
          <div class="flex items-center">
            <TheBadge :text="question.letter" class="mr-10" />
            <h3 
              class="
                max-[1024px]:text-xl text-4xl uppercase text-white
                max-[640px]:text-base
                ">{{ question.title }}</h3>
          </div>
          <component class="icon-plus" :is="question.isExpanded ? IconMinus : IconPlus" />
        </div>

        <Collapse as="div" class="v-collapse" :when="question.isExpanded">
          <div class="
            max-[768px]:pr-[30px] 
            max-[768px]:pl-[80px]
            max-[640px]:pl-[45px]
            max-[640px]:pt-3
            pl-[103px] pr-40 pt-6
            ">
            <p
              v-for="answer in question.answer"
              :key="answer"
              class="max-[1024px]:text-base max-[640px]:text-[14px] text-xl font-light text-white"
            >
              {{ answer }}
            </p>
          </div>
        </Collapse>
      </div>
    </div>
    <div class="mt-14 flex justify-end">
      <BaseButtonLink text="start work" />
    </div>
  </section>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import { Collapse } from 'vue-collapsed'
import TheBadge from '@/components/TheBadge.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import IconMinus from '@/components/icons/IconMinus.vue'
import BaseButtonLink from '@/components/BaseButtonLink.vue'

const faqData = [
  {
    title: 'You choose the method of payment for our services',
    answer: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde officiis corrupti necessitatibus rerum vero ratione accusamus expedita animi, mollitia maxime!'
    ],
    letter: 'a'
  },
  {
    title: "We primarily work using the project's liquidity",
    answer: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde officiis corrupti necessitatibus rerum vero ratione accusamus expedita animi, mollitia maxime!'
    ],
    letter: 'n'
  },
  {
    title: 'Working with us is safe',
    answer: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde officiis corrupti necessitatibus rerum vero ratione accusamus expedita animi, mollitia maxime!'
    ],
    letter: 'o'
  },
  {
    title: '24/7/365 coverage',
    answer: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde officiis corrupti necessitatibus rerum vero ratione accusamus expedita animi, mollitia maxime!'
    ],
    letter: 'g'
  },
  {
    title: 'Liquidity management in order books',
    answer: [
      'We offers a service that utilizes advanced algorithms to optimize liquidity management in orderbooks. These algorithms are designed to ensure that, amidst market volatility, sales are executed at maximum prices and purchases at minimum prices.',
      'The main advantage of our LM service is its ability to efficiently analyze market data and predict optimal entry and exit points for trades.'
    ],
    letter: 'e'
  },
  {
    title: 'Effective Capital Management',
    answer: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde officiis corrupti necessitatibus rerum vero ratione accusamus expedita animi, mollitia maxime!'
    ],
    letter: 'm'
  }
]

const questions = reactive(
  faqData.map(({ title, answer, letter }) => ({
    title,
    answer,
    letter,
    isExpanded: false
  }))
)

const handleAction = (selectedIndex: number) => {
  questions.forEach((_, index) => {
    questions[index].isExpanded = index === selectedIndex ? !questions[index].isExpanded : false
  })
}
</script>
<style scoped>
.v-collapse {
  transition:
    height 0.5s cubic-bezier(0.33, 1, 0.68, 1),
    opacity 1.7s ease-in-out;
}

@media(max-width: 640px) {
.icon-plus {
  max-width: 30px;
}
}
</style>
