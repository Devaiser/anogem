<template>
    <section class="px-32 py-14 max-[610px]:px-12 max-[425px]:py-5 max-[425px]:px-7 max-[375px]:px-5">
        <div class="flex max-[610px]:flex-col max-[610px]:gap-2 max-[610px]:items-center justify-center">
            <TheBadge text="Platform access + personal manager" />
            <TheBadge text="We work 24/7" />
        </div>
        <h2 class="title">Market Making</h2>

        <div class="w-full flex justify-center max-[768px]:mt-5 mt-3">
            <div 
                class="
                    max-[768px]:w-64 
                    max-[640px]:w-52
                    w-96 flex justify-center border border-white rounded-full
                    ">
                <div
                    :active="activeTab === 'platform'" @click="setActiveTab('platform')"
                    class="
                        cursor-pointer select-none w-1/2 p-6 flex items-center justify-center text-4xl border rounded-full text-white transition-colors duration-300
                        max-[1024px]:p-3
                        max-[1024px]:text-xl
                        max-[640px]:p-2
                        "
                    :class="activeTab === 'platform' ? 'border-white opacity-none' : 'border-transparent opacity-50'"
                >
                    CEX
                </div>
                <div 
                    :active="activeTab === 'work'" @click="setActiveTab('work')"
                    class="
                        cursor-pointer select-none w-1/2 p-6 flex items-center justify-center text-4xl border rounded-full text-white transition-colors duration-300
                        max-[1024px]:p-3
                        max-[1024px]:text-xl
                        max-[640px]:p-2
                        "
                    :class="activeTab === 'work' ? 'border-white opacity-none' : 'border-transparent opacity-50'"
                >
                    DEX
                </div>
            </div>
        </div>
        <div v-if="activeTab === 'platform'" class="max-[768px]:pt-7 pt-12">
            <table class="table-block table-auto w-full">
                <tbody>
                <tr class="flex max-[1024px]:flex-col">
                    <td class="
                        px-28 py-16 border rounded-tl-3xl 
                        w-1/2 flex items-center justify-center
                        max-[1024px]:rounded-tr-3xl 
                        max-[1024px]:w-full
                        max-[768px]:px-10
                        max-[768px]:py-12
                    "
                    >
                        <div class="
                            flex flex-col 2xl:flex-row items-center gap-10
                            max-[1024px]:flex-col-reverse 
                            ">
                            <div class="text-white">
                                <div class="font-bold text-xl mb-2 max-[1024px]:text-center text-right">Volume performance</div>
                                <div 
                                    class="
                                        font-light text-base 
                                        max-[1024px]:text-center 
                                        max-[640px]:text-[14px] 
                                        text-right
                                        ">
                                    Our service ensures volume and liquidity maintenance on any DEX. Our wallets support trading volumes through automatic wallet regeneration and organic volume creation, taking into account gas prices and much more, to enhance your trading strategy
                                </div>
                            </div>
                            <img 
                                src="/img/market/volume.png" 
                                class="max-[640px]:h-[100px]" 
                                alt="img-market" />
                        </div>
                    </td>
                    <td class="
                        px-28 py-16 border rounded-tr-3xl max-[1024px]:w-full w-1/2 flex items-center justify-center
                        max-[1024px]:rounded-none
                        max-[768px]:px-10
                        max-[768px]:py-12
                        ">
                        <div class="
                            flex flex-col-reverse 2xl:flex-row items-center gap-10
                            max-[1024px]:flex-col 
                            ">
                            <img src="/img/market/frontrun.png" class="max-[640px]:h-[100px]" alt="img-market" />
                            <div class="text-white">
                                <div class="font-bold text-xl mb-2 max-[1024px]:text-center ">FrontRun Protection</div>
                                <div class="font-light max-[1024px]:text-center max-[640px]:text-[14px] text-base">
                                    Not a big fan of MEV activity, neither are we. Our solutions help to prevent "sandwich attacks" and ensure safe and smooth trading experience for Your community                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr class="flex max-[1024px]:flex-col">
                    <td class="
                        px-28 py-16 border max-[1024px]:w-full w-1/2 flex items-center justify-center
                        max-[768px]:px-10
                        max-[768px]:py-12
                        ">
                        <div class="
                            flex flex-col 2xl:flex-row items-center gap-10
                            max-[1024px]:flex-col-reverse
                            ">
                            <div class="text-white">
                                <div class="font-bold text-xl mb-2 max-[1024px]:text-center text-right">AntiSnipe Solutions</div>
                                <div class="font-light text-base max-[1024px]:text-center max-[640px]:text-[14px] text-right">
                                    Our service features proprietary developments that offer protection against any form of token sniping during liquidity injections, safeguarding your assets from sniper attacks                                </div>
                            </div>
                            <img src="/img/market/antisnipe.png" class="max-[640px]:h-[100px]" alt="img-market" />
                        </div>
                    </td>
                    <td class="
                        px-28 py-16 border 
                        max-[1024px]:w-full w-1/2 flex items-center justify-center
                        max-[768px]:px-10
                        max-[768px]:py-12
                        ">
                        <div class="
                            flex flex-col-reverse 2xl:flex-row items-center gap-10
                            max-[1024px]:flex-col 
                            ">
                            <img src="/img/market/price.png" class="max-[640px]:h-[100px]" alt="img-market" />
                            <div class="text-white">
                                <div class="font-bold text-xl max-[1024px]:text-center mb-2">Price impact & Volatile</div>
                                <div class="font-light max-[1024px]:text-center max-[640px]:text-[14px] text-base">
                                    Our service mitigates the impact of volatility and price fluctuations. If investors want to take profits or if new investors wish to make large purchases, it can dramatically affect the price. Let us handle it - we manage transactions to minimize market impact, ensuring smoother price movements.                            </div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr class="flex max-[1024px]:flex-col">
                    <td class="
                        px-28 py-16 border rounded-bl-3xl max-[1024px]:w-full w-1/2 flex items-center justify-center
                        max-[1024px]:rounded-none
                        max-[768px]:px-10
                        max-[768px]:py-12
                        ">
                        <div class="
                            flex flex-col 2xl:flex-row items-center gap-10
                            max-[1024px]:flex-col-reverse 
                            ">
                            <div class="text-white">
                                <div class="font-bold text-xl mb-2 max-[1024px]:text-center text-right">Price support</div>
                                <div class="font-light text-base max-[1024px]:text-center max-[640px]:text-[14px] text-right">
                                    We utilize special algos to maintain required price levels and ranges, mitigating the risk of unexpected price drops. Trust us to keep Your asset prices under control within desired boundaries.                                
                                </div>
                                </div>
                                <img src="/img/market/support.png" class="max-[640px]:h-[100px]" alt="img-market" />
                        </div>
                    </td>
                    <td class="
                        px-28 py-16 border rounded-br-3xl max-[1024px]:w-full w-1/2 flex items-center justify-center
                        max-[1024px]:rounded-bl-3xl
                        max-[768px]:px-10
                        max-[768px]:py-12
                        ">
                        <div class="
                            flex flex-col-reverse 2xl:flex-row items-center gap-10
                            max-[1024px]:flex-col 
                            ">
                            <img src="/img/market/additional.png" class="max-[640px]:h-[100px]" alt="img-market" />
                            <div class="text-white">
                                <div class="font-bold text-xl max-[1024px]:text-center mb-2">Additional</div>
                                <div class="font-light max-[1024px]:text-center max-[640px]:text-[14px] text-base">
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