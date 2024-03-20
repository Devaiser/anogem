<template>
<div class="bg-stars w-full">
    <section class="px-32 py-14 max-[610px]:px-12 max-[425px]:py-5 max-[425px]:px-7 max-[375px]:px-5">
        <div class="flex justify-center">
        <TheBadge text="are you ready yet?" />
        </div>
        <h2 class="title mb-10">Let’s Work Together!</h2>

        <div class="w-full flex flex-col items-center">
            <div class="w-2/3 max-[768px]:w-full">
                <BaseInput placeholder="You name" class="max-[640px]:mb-5 mb-10"/>
                <BaseInput placeholder="E-mail" class="max-[640px]:mb-5 mb-10"/>
                <BaseInput placeholder="Your telegram name" class=""/>
                <BaseButton text="Write me!" class="max-[640px]:mt-10 mt-20" />
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
</div>
</template>

<script setup lang="ts">
import BaseButton from './BaseButton.vue';
import BaseInput from './BaseInput.vue';
import TheBadge from './TheBadge.vue';

</script>

<style scoped>
.bg-stars {
    background-image: url('/img/stars-bg.png');
    background-position: top center;
    background-repeat: no-repeat; 
    background-size: cover;
}
</style>