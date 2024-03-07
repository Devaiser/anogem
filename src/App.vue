<template>
  <div>
    <TheHeader />
    <main class="mt-36">
      <GalaxyBg />
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" :key="$route.path" />
        </Transition>
      </RouterView>
      <TheFooter />
    </main>
  </div>
</template>
<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import GalaxyBg from '@/components/GalaxyBg.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
