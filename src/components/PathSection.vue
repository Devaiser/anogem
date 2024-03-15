<template>
 <section class="px-32 py-14">
    <div class="flex justify-center">
        <TheBadge text="How we work" />
    </div>
    <h2 class="title mb-10">Path of Interaction</h2>

    <div class="w-full">
        <div class="relative mb-20">
            <div class="absolute top-1/2 left-0 bg-white py-4 px-6 rounded-full transform -translate-y-1/2">STAGE 1</div>
            <div class="w-full border border-white" />
        </div>

        <div class="w-80 mb-4 flex items-center justify-between linear-badge border rounded-full p-5 pl-8">
            <div class="text-white uppercase">consulting</div>
            <div class="bg-white py-2 px-5 rounded-full uppercase">week 1</div>
        </div>

        <div class="w-[600px] mb-4 bg-white rounded-3xl p-5 pl-8">
            <div class="mb-2 flex items-center justify-between">
                <div class="uppercase">planning</div>
                <div class="bg-black py-2 px-5 rounded-full text-white uppercase">weeks 1-3</div>
            </div>
            <div class="font-light text-base">
                Developing a detailed plan of actions for each support direction.
                Outcome: Prepared plan with agreed deadlines.
            </div>
        </div>

        <div class="w-full mb-4 flex items-center justify-between border rounded-full p-5 pl-8">
            <div class="text-white uppercase">market management</div>
            <div class="bg-white py-2 px-5 rounded-full uppercase">all time</div>
        </div>

        <div class="w-3/4 mb-4 flex items-center justify-between border rounded-full p-5 pl-8">
            <div class="text-white uppercase">Project Development</div>
            <div class="bg-white py-2 px-5 rounded-full uppercase">weeks 1-8</div>
        </div>

        <div class="relative mt-20 mb-20">
            <div class="absolute color-orange top-1/2 left-0 bg-white py-4 px-6 rounded-full transform -translate-y-1/2">STAGE 2</div>
            <div class="w-full border color-border-orange" />
        </div>

        <div class="color-border-orange w-1/3 mb-4 flex items-center justify-between border rounded-full p-5 pl-8">
            <div class="text-white uppercase text-orange">Monitoring and Optimization</div>
            <div class="color-orange text-white py-2 px-5 rounded-full uppercase">Months 1+</div>
        </div>

        <div class="w-full flex justify-end">
            <div class="color-border-orange w-3/5 mb-4 flex items-center justify-between border rounded-full p-5 pl-8">
                <div class="text-white uppercase text-orange">Acceleration and Scaling</div>
                <div class="color-orange text-white py-2 px-5 rounded-full uppercase">Months 3+</div>
            </div>
        </div>

        <div class="color-border-orange w-4/5 mb-4 flex items-center justify-between border rounded-full p-5 pl-8">
            <div class="text-white uppercase text-orange">Partnership Creation and Investment Attraction</div>
            <div class="color-orange text-white py-2 px-5 rounded-full uppercase">Months 1-3</div>
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