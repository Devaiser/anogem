<template>
 <section class="px-32 py-14 max-[610px]:px-12 max-[425px]:py-5 max-[425px]:px-7 max-[375px]:px-5">
    <div class="flex justify-center">
        <TheBadge text="How we work" />
    </div>
    <h2 class="title mb-10">Path of Interaction</h2>

    <div class="w-full">
        <div class="relative max-[640px]:mb-12 mb-20">
            <div class="max-[425px]:text-[14px] max-[425px]:px-4 max-[425px]:py-2 absolute top-1/2 left-0 bg-white py-4 px-6 rounded-full transform -translate-y-1/2">STAGE 1</div>
            <div class="w-full border border-white" />
        </div>

        <div class="max-[425px]:text-[14px] max-[1024px]:w-full max-[640px]:p-3 max-[640px]:pl-6 w-80 mb-4 flex items-center justify-between linear-badge border rounded-full p-5 pl-8">
            <div class="text-white uppercase">consulting</div>
            <div class="max-[425px]:px-4 max-[425px]:py-2 bg-white py-2 px-5 rounded-full uppercase">week 1</div>
        </div>

        <div class="max-[425px]:text-[14px] max-[1024px]:w-full w-[600px] max-[640px]:p-3 max-[640px]:pl-6 max-[640px]:pb-5 mb-4 bg-white rounded-3xl p-5 pl-8">
            <div class="mb-2 flex items-center justify-between">
                <div class="uppercase">planning</div>
                <div class="max-[425px]:px-4 max-[425px]:py-2 bg-black py-2 px-5 rounded-full text-white uppercase">weeks 1-3</div>
            </div>
            <div class="font-light text-base">
                Developing a detailed plan of actions for each support direction.
                Outcome: Prepared plan with agreed deadlines.
            </div>
        </div>

        <div class="max-[425px]:text-[14px] w-full mb-4 flex items-center max-[640px]:p-3 max-[640px]:pl-6 justify-between border rounded-full p-5 pl-8">
            <div class="text-white uppercase">market management</div>
            <div class="max-[425px]:px-4 max-[425px]:py-2 bg-white py-2 px-5 rounded-full uppercase">all time</div>
        </div>

        <div class="max-[425px]:text-[14px] max-[1024px]:w-full w-3/4 mb-4 max-[640px]:p-3 max-[640px]:pl-6 flex items-center justify-between border rounded-full p-5 pl-8">
            <div class="text-white uppercase">Project Development</div>
            <div class="max-[425px]:px-4 max-[425px]:py-2 bg-white py-2 px-5 rounded-full uppercase">weeks 1-8</div>
        </div>

        <div class="max-[425px]:text-[14px] relative max-[640px]:mt-12 max-[640px]:mb-12 mt-20 mb-20">
            <div class="absolute max-[425px]:px-4 max-[425px]:py-2 color-orange top-1/2 left-0 bg-white py-4 px-6 rounded-full transform -translate-y-1/2">STAGE 2</div>
            <div class="w-full border color-border-orange" />
        </div>

        <div class="max-[425px]:text-[14px] color-border-orange max-[1024px]:w-full max-[640px]:p-3 max-[640px]:pl-6 w-1/3 mb-4 flex items-center justify-between border rounded-full p-5 pl-8">
            <div class="text-white uppercase text-orange">Monitoring and Optimization</div>
            <div class="color-orange max-[425px]:px-4 max-[425px]:py-2 text-white py-2 px-5 rounded-full uppercase">Months 1+</div>
        </div>

        <div class="max-[425px]:text-[14px] w-full flex justify-end">
            <div class="color-border-orange max-[1024px]:w-full max-[640px]:p-3 max-[640px]:pl-6 w-3/5 mb-4 flex items-center justify-between border rounded-full p-5 pl-8">
                <div class="text-white uppercase text-orange">Acceleration and Scaling</div>
                <div class="color-orange max-[425px]:px-4 max-[425px]:py-2 text-white py-2 px-5 rounded-full uppercase">Months 3+</div>
            </div>
        </div>

        <div class="max-[425px]:text-[14px] color-border-orange max-[1024px]:w-full max-[640px]:p-3 max-[640px]:pl-6 w-4/5 mb-4 flex items-center justify-between border rounded-full p-5 pl-8">
            <div class="text-white uppercase text-orange">Partnership Creation and Investment Attraction</div>
            <div class="color-orange max-[425px]:px-4 max-[425px]:py-2 text-white py-2 px-5 rounded-full uppercase">Months 1-3</div>
        </div>
    </div>
 </section>
</template>

<script setup lang="ts">
import TheBadge from './TheBadge.vue';

</script>

<style scoped>
.linear-badge {
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 101.87%);
}
.text-orange {
    color: #F3511F;
}
.color-orange {
    background: #F3511F;
}
.color-border-orange {
    border-color: #F3511F;
}
</style>