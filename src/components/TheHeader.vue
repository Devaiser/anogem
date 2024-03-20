<template>
  <header class="fixed left-0 top-0 z-50 flex justify-between h-28 w-full px-32 pt-6 max-[610px]:px-12 max-[375px]:px-5">
    <div class="w-1/3 flex-shrink">
      <RouterLink to="/" class="w-fit">
        <img src="/img/logo.png" alt="logo" />
      </RouterLink>
    </div>
    <div class="flex w-1/3 justify-center max-[1024px]:hidden">
      <nav class="justify-center">
        <ul class="flex h-10 w-full items-center rounded-full border border-white p-1">
          <li v-for="item in menu" :key="item.name" class="h-full">
            <RouterLink
              :to="item.path"
              class="flex h-full w-full items-center justify-center whitespace-nowrap rounded-full px-6 text-sm uppercase text-white transition-colors duration-700"
              active-class="!text-dark bg-white"
              >{{ item.name }}</RouterLink
            >
          </li>
        </ul>
      </nav>
    </div>
    <div class="flex w-1/3 flex-shrink justify-end">
      <a
        href="#"
        target="_blank"
        class="flex h-10 items-center justify-center rounded-full border border-white px-6"
      >
        <span class="mr-2 text-sm uppercase text-white">order</span>
        <IconChevronRightVue color="white" />
      </a>
      <div
        class="max-[1024px]:flex hidden ml-2 min-w-10 h-10 items-center justify-center rounded-full border border-white"
      >
        <img src="/img/menu.svg" alt="menu"/>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import IconChevronRightVue from '@/components/icons/IconChevronRight.vue'

const menu = [
  {
    name: 'home',
    path: '/'
  },
  {
    name: 'development',
    path: '/development'
  },
  {
    name: 'investments',
    path: '/investments'
  },
  {
    name: 'our roadmap',
    path: '/roadmap'
  }
]
</script>
<style scoped></style>
