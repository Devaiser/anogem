<template>
<section class="px-32 py-14">
    <div class="flex justify-center">
      <TheBadge text="are you ready yet?" />
    </div>
    <h2 class="title mb-10">Let’s Work Together!</h2>

    <div class="w-full flex flex-col items-center">
        <div class="w-2/3">
            <BaseInput placeholder="Yout name" class="mb-10"/>
            <BaseInput placeholder="E-mail" class="mb-10"/>
            <BaseInput placeholder="Your telegram name" class=""/>
            <BaseButton text="Write me!" class="mt-20" />
            <div class="mt-10 flex w-full justify-center gap-3">
                <RouterLink to="#">
                    <img src="/img/social/telegram.png" alt="social-icons"/>
                </RouterLink>
                <RouterLink to="#">
                    <img src="/img/social/linkedin.png" alt="social-icons"/>
                </RouterLink>
                <RouterLink to="#">
                    <img src="/img/social/medium.png" alt="social-icons"/>
                </RouterLink>
                <RouterLink to="#">
                    <img src="/img/social/x.png" alt="social-icons"/>
                </RouterLink>
                <RouterLink to="#">
                    <img src="/img/social/mail.png" alt="social-icons"/>
                </RouterLink>
            </div>
        </div>
    </div>
</section>
</template>

<script setup lang="ts">
import BaseButton from './BaseButton.vue';
import BaseInput from './BaseInput.vue';
import TheBadge from './TheBadge.vue';

</script>