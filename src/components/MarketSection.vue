<template>
    <section class="px-32 py-14">
        <div class="flex justify-center">
            <TheBadge text="Platform access + personal manager" />
            <TheBadge text="We work 24/7" />
        </div>
        <h2 class="title">Market Making</h2>

        <div class="w-full flex justify-center mt-3">
            <div class="w-96 flex justify-center border border-white rounded-full">
                <div
                    :active="activeTab === 'platform'" @click="setActiveTab('platform')"
                    class="cursor-pointer select-none w-1/2 p-6 flex items-center justify-center text-4xl border rounded-full text-white transition-colors duration-300"
                    :class="activeTab === 'platform' ? 'border-white opacity-none' : 'border-transparent opacity-50'"
                >
                    CEX
                </div>
                <div 
                    :active="activeTab === 'work'" @click="setActiveTab('work')"
                    class="cursor-pointer select-none w-1/2 p-6 flex items-center justify-center text-4xl border rounded-full text-white transition-colors duration-300"
                    :class="activeTab === 'work' ? 'border-white opacity-none' : 'border-transparent opacity-50'"
                >
                    DEX
                </div>
            </div>
        </div>
        <div v-if="activeTab === 'platform'" class="pt-12">
            <table class="table-block table-auto w-full">
                <tbody>
                <tr class="flex">
                    <td class="px-28 py-16 border rounded-tl-3xl w-1/2 flex items-center justify-center">
                        <div class="flex flex-col 2xl:flex-row items-center gap-10">
                            <div class="text-white">
                                <div class="font-bold text-xl mb-2 text-right">Volume performance</div>
                                <div class="font-light text-base text-right">
                                    Our service ensures volume and liquidity maintenance on any DEX. Our wallets support trading volumes through automatic wallet regeneration and organic volume creation, taking into account gas prices and much more, to enhance your trading strategy
                                </div>
                            </div>
                            <img src="/img/market/volume.png" alt="img-market" />
                        </div>
                    </td>
                    <td class="px-28 py-16 border rounded-tr-3xl w-1/2 flex items-center justify-center">
                        <div class="flex flex-col-reverse 2xl:flex-row items-center gap-10">
                            <img src="/img/market/frontrun.png" alt="img-market" />
                            <div class="text-white">
                                <div class="font-bold text-xl mb-2">FrontRun Protection</div>
                                <div class="font-light text-base">
                                    Not a big fan of MEV activity, neither are we. Our solutions help to prevent "sandwich attacks" and ensure safe and smooth trading experience for Your community                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr class="flex">
                    <td class="px-28 py-16 border w-1/2 flex items-center justify-center">
                        <div class="flex flex-col 2xl:flex-row items-center gap-10">
                            <div class="text-white">
                                <div class="font-bold text-xl mb-2 text-right">AntiSnipe Solutions</div>
                                <div class="font-light text-base text-right">
                                    Our service features proprietary developments that offer protection against any form of token sniping during liquidity injections, safeguarding your assets from sniper attacks                                </div>
                            </div>
                            <img src="/img/market/antisnipe.png" alt="img-market" />
                        </div>
                    </td>
                    <td class="px-28 py-16 border w-1/2 flex items-center justify-center">
                        <div class="flex flex-col-reverse 2xl:flex-row items-center gap-10">
                            <img src="/img/market/price.png" alt="img-market" />
                            <div class="text-white">
                                <div class="font-bold text-xl mb-2">Price impact & Volatile</div>
                                <div class="font-light text-base">
                                    Our service mitigates the impact of volatility and price fluctuations. If investors want to take profits or if new investors wish to make large purchases, it can dramatically affect the price. Let us handle it - we manage transactions to minimize market impact, ensuring smoother price movements.                            </div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr class="flex">
                    <td class="px-28 py-16 border rounded-bl-3xl w-1/2 flex items-center justify-center">
                        <div class="flex flex-col 2xl:flex-row items-center gap-10">
                            <div class="text-white">
                                <div class="font-bold text-xl mb-2 text-right">Price support</div>
                                <div class="font-light text-base text-right">
                                    We utilize special algos to maintain required price levels and ranges, mitigating the risk of unexpected price drops. Trust us to keep Your asset prices under control within desired boundaries.                                
                                </div>
                                </div>
                                <img src="/img/market/support.png" alt="img-market" />
                        </div>
                    </td>
                    <td class="px-28 py-16 border rounded-br-3xl w-1/2 flex items-center justify-center">
                        <div class="flex flex-col-reverse 2xl:flex-row items-center gap-10">
                            <img src="/img/market/additional.png" alt="img-market" />
                            <div class="text-white">
                                <div class="font-bold text-xl mb-2">Additional</div>
                                <div class="font-light text-base">
                                    Learn about sniping, frontrun, AMM, LP, arbitrage, and other crypto and trading  on a call with us. We're here to provide you with comprehensive insights and understanding                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table> 
        </div>
        <div v-if="activeTab === 'work'">
            NOTHING?
        </div>

        <div class="mt-14 flex justify-end">
        <BaseButtonLink text="start mm" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TheBadge from './TheBadge.vue';
import BaseButtonLink from './BaseButtonLink.vue';

const activeTab = ref('platform');

const setActiveTab = (tab: string) => {
    activeTab.value = tab;
};
</script>

<style scoped>
tbody {
    border-radius: 4px;
    box-shadow: 0 0 1px #000;
}
</style>