<template>
<section class="px-32 py-14">
    <div class="flex justify-center">
        <TheBadge text="view our history and plans" />
    </div>
    <h2 class="title mb-10">Roadmap</h2>

    <div class="h-[750px]">
        <img src="/img/roadmap.png" class="mb-20" alt="roadmap"/>
        <div class="line">
        <div class="dot">
            <div class="dot-text">
                <div class="font-bold text-3xl mb-4">2015</div>
                <div class="w-72 font-light text-base">
                    Discovering the Cryptocurrency World In 2015, our journey began with curiosity and exploration into the world of cryptocurrencies. This was a time when cryptocurrency was still emerging as a new financial force, and we delved into understanding its potential and possibilities.
                </div>
            </div>
        </div>
        <div class="dot">
            <div class="dot-text">
                <div class="font-bold text-3xl mb-4">2018</div>
                <div class="w-72 font-light text-base">
                    Gaining Experience By 2018, members of our team were already working in leading market-making companies, major centralized exchanges (CEXs), and cutting-edge crypto projects. This experience allowed us to gain a deeper understanding of the industry and acquire valuable skills and knowledge that became the foundation for our future growth.                </div>
            </div>
        </div>
        <div class="dot">
            <div class="dot-text">
                <div class="font-bold text-3xl mb-4">2023</div>
                <div class="w-72 font-light text-base">
                    Uniting Forces In 2023, united by a common goal, we came together to create an ecosystem that could benefit all participants in the crypto market. Our mission was clear: to form a transparent, efficient, and secure environment for trading and investing in cryptocurrencies.            </div>
        </div>
        </div>
        <div class="dot">
            <div class="dot-text">
                    <div class="font-bold text-3xl mb-4">2030</div>
                    <div class="w-72 font-light text-base">
                        A Sustainable Future By 2030, we stand firmly on our feet. We have not only survived in the changing world of cryptocurrencies but thrived, building a comprehensive ecosystem of services and solutions. Operating in a new legal framework, adapting to state regulations, we continue our innovative path, ensuring progress and stability in the rapidly evolving digital financial landscape.            </div>
        </div>
        </div>
    </div>
    </div>

    <div class="w-full my-32 flex justify-center">
        <div class="flex items-center gap-20 text-white">
            <img src="/img/logo-roadmap.png" alt="logo-roadmap"/>
            <div class="w-[330px]">
                <div class="font-light text-xl mb-3">We are ecosystem.</div>
                <div class="font-light text-xl">“Without continual growth and progress, such words as improvement, achievement, and success have no meaning.”</div>
                <div class="flex justify-end">
                    <div class="font-bold text-xl">— Benjamin Franklin</div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script setup lang="ts">
import TheBadge from './TheBadge.vue';

</script>

<style scoped>
.line {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 4px;
    background-color: #fff;
    border-radius: 100px;
    position: relative;
    margin-bottom: 20px; /* Добавляем отступ для текста под линией */
}

.line::after {
    content: '';
    position: absolute;
    left: 50%; /* Позиционируем начало линии от третьей точки */
    width: 50%; /* Устанавливаем ширину линии от третьей точки */
    height: 4px;
    border-radius: 100px;
    background-color: #F3511F;
}

.dot {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    position: absolute;
    bottom: -10px;
}

.dot:nth-child(1) {
    left: 5%;
    background-color: #fff;
}

.dot:nth-child(2) {
    left: 27%;
    background-color: #fff;
}

.dot:nth-child(3) {
    left: 50%;
    background-color: #F3511F;
}

.dot:nth-child(4) {
    left: 75%;
    background-color: #F3511F;
}

.dot-text {
    position: absolute;
    top: 50px; /* Позиционируем текст под точкой */
    left: 0;
    color: #fff;
    /* transform: translateX(-50%);  */
}
</style>