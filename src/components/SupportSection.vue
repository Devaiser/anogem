<template>
    <section class="py-14 max-[425px]:py-5">
        <div class="flex justify-center">
            <TheBadge text="and 100+ more" />
        </div>
        <h2 class="title mb-10">Supported markets</h2>
        <div class="w-full flex max-[1200px]:flex-col text-white">
            <div class="square-left">
               <div 
                class="
                  font-bold text-5xl absolute top-10 
                  max-[1200px]:left-[46%] 
                  max-[768px]:left-[44%] 
                  max-[640px]:left-[43%] 
                  max-[425px]:left-[46%] 
                  max-[425px]:text-3xl
                  right-20
                ">CEX</div> 
                <div class="circle-container">
                    <div class="circle">
                        <img src="/img/supports/1.png" alt="circle-img"/>
                        <!-- <span class="bg-white p-3 rounded-full text-black">text</span> -->
                    </div>
                    <div class="circle">
                        <img src="/img/supports/2.png" alt="circle-img"/>
                        <!-- <span class="bg-white p-3 rounded-full text-black">text</span> -->
                    </div>
                    <div class="circle">
                        <img src="/img/supports/3.png" alt="circle-img"/>
                        <!-- <span class="bg-white p-3 rounded-full text-black">text</span> -->
                    </div>
                    <div class="circle">
                        <img src="/img/supports/4.png" alt="circle-img"/>
                        <!-- <span class="bg-white p-3 rounded-full text-black">text</span> -->
                    </div>
                    <div class="circle">
                        <img src="/img/supports/10.png" alt="circle-img"/>
                        <!-- <span class="bg-white p-3 rounded-full text-black">text</span> -->
                    </div>
                </div>
            </div>
            <div class="square-right">
               <div 
                class="
                  font-bold text-5xl absolute top-10 
                  max-[1200px]:left-[46%] 
                  max-[768px]:left-[44%] 
                  max-[640px]:left-[43%] 
                  max-[425px]:left-[46%] 
                  max-[425px]:text-3xl
                  left-20
                  ">DEX</div> 
                <div class="circle-container_two">
                    <div class="circle_two">
                        <img src="/img/supports/5.png" alt="circle-img"/>
                        <!-- <span class="bg-white p-3 rounded-full text-black">text</span> -->
                    </div>
                    <div class="circle_two">
                        <img src="/img/supports/6.png" alt="circle-img"/>
                        <!-- <span class="bg-white p-3 rounded-full text-black">text</span> -->
                    </div>
                    <div class="circle_two">
                        <img src="/img/supports/7.png" alt="circle-img"/>
                        <!-- <span class="bg-white p-3 rounded-full text-black">text</span> -->
                    </div>
                    <div class="circle_two">
                        <img src="/img/supports/8.png" alt="circle-img"/>
                        <!-- <span class="bg-white p-3 rounded-full text-black">text</span> -->
                    </div>
                    <div class="circle_two">
                        <img src="/img/supports/9.png" alt="circle-img"/>
                        <!-- <span class="bg-white p-3 rounded-full text-black">text</span> -->
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
.square-left {
 width: 50%;
 height: 700px;
 position: relative; 
 overflow: hidden; 
 border-top: 1px solid #F3511F;
 border-bottom: 1px solid #F3511F;
}
.square-right {
 width: 50%;
 height: 700px; 
 position: relative; 
 overflow: hidden; 
 border-top: 1px solid #F3511F;
 border-left: 1px solid #F3511F;
 border-bottom: 1px solid #F3511F;
}
.rainbow {
 position: absolute;
 bottom: -50%;
 left: -50%;
}
@keyframes orbit {
  0% { transform: rotate(0deg) translate(150px) rotate(0deg); }
  100% { transform: rotate(360deg) translate(150px) rotate(-360deg); }
}

.circle-container {
  position: relative;
  width: 900px;
  height: 900px;
  left: -40%;
  bottom: -10%;
  border: 60px solid rgba(255, 255, 255, 0.17);
  border-radius: 50%;
  margin: 1.75em auto 0;
  transform: rotate(10deg);
}

.circle-container .circle {
  padding: 10px;
  width: 9em;
  height: 9em;
  position: absolute;
  left: 50%;
  top: 50%;
  object-fit: cover;
  margin-left: -3em;
  margin-top: -3em;
  border-radius: 50%;
  background-color: #414141;
}

.circle:hover {
  background-color: #fff;
  transition: .3s all;
}

/* GREEN */
.circle-container .circle:nth-of-type(1) {
  transform: rotate(307deg) translate(27em) rotate(-180deg);
}

/* BINANCE */
.circle-container .circle:nth-of-type(2) {
  transform: rotate(97deg) translate(-27em) rotate(-90deg);
}

/* X */
.circle-container .circle:nth-of-type(3) {
  transform: rotate(157deg) translate(-26em) rotate(210deg);
}

/* A HALF */
.circle-container .circle:nth-of-type(4) {
  transform: rotate(8deg) translate(24em) rotate(60deg);
}

/* BLACK */
.circle-container .circle:nth-of-type(5) {
  transform: rotate(245deg) translate(27em) rotate(60deg);
}

.circle-container_two {
    position: relative;
    width: 900px;
    height: 900px;
    left: 40%;
    top: 10%;
    border: 60px solid rgba(255, 255, 255, 0.17);
    border-radius: 50%;
    margin: 1.75em auto 0;
    transform: rotate(-10deg);
}

.circle-container_two .circle_two {
    padding: 10px;
  width: 9em;
  height: 9em;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -3em;
  margin-top: -3em;
  border-radius: 50%;
  background-color: #414141;
  transition: .3s all;
}

.circle_two:hover {
    background-color: #fff;
  transition: .3s all;
}

/* ------------------------------------------------------------------ */

/* HORSE 1 */
.circle-container_two .circle_two:nth-of-type(1) {
  transform: rotate(-8deg) translate(-27em) rotate(10deg);
}

/* SUSHI */
.circle-container_two .circle_two:nth-of-type(2) {
  transform: rotate(-73deg) translate(27em) rotate(80deg);
}

/* HORSE */
.circle-container_two .circle_two:nth-of-type(3) {
  transform: rotate(-160deg) translate(28em) rotate(155deg);
}

/* RABBIT */
.circle-container_two .circle_two:nth-of-type(4) {
  transform: rotate(-312deg) translate(-28em) rotate(-60deg);
}

.circle-container_two .circle_two:nth-of-type(5) {
  transform: rotate(-283deg) translate(-28em) rotate(-60deg);
}

@media(max-width: 1440px) {
.circle-container {
  width: 650px;
  height: 650px;
  bottom: -30%;
  border: 40px solid rgba(255, 255, 255, 0.17);
}

.circle-container_two {
  width: 650px;
  height: 650px;
  top: 30%;
  border: 40px solid rgba(255, 255, 255, 0.17);
}

.circle-container .circle {
  width: 7em;
  height: 7em;
}

.circle-container_two .circle_two {
  width: 7em;
  height: 7em;
}

/* GREEN */
.circle-container .circle:nth-of-type(1) {
  transform: rotate(307deg) translate(19em) rotate(-180deg);
}

/* BINANCE */
.circle-container .circle:nth-of-type(2) {
  transform: rotate(97deg) translate(-19em) rotate(-90deg);
}

/* X */
.circle-container .circle:nth-of-type(3) {
  transform: rotate(157deg) translate(-19em) rotate(210deg);
}

/* A HALF */
.circle-container .circle:nth-of-type(4) {
  transform: rotate(8deg) translate(18em) rotate(60deg);
}

/* BLACK */
.circle-container .circle:nth-of-type(5) {
  transform: rotate(245deg) translate(19em) rotate(60deg);
}



/* HORSE 1 */
.circle-container_two .circle_two:nth-of-type(1) {
  transform: rotate(-8deg) translate(-19em) rotate(10deg);
}

/* SUSHI */
.circle-container_two .circle_two:nth-of-type(2) {
  transform: rotate(-73deg) translate(19em) rotate(80deg);
}

/* HORSE */
.circle-container_two .circle_two:nth-of-type(3) {
  transform: rotate(-160deg) translate(20em) rotate(155deg);
}

/* RABBIT */
.circle-container_two .circle_two:nth-of-type(4) {
  transform: rotate(-312deg) translate(-20em) rotate(-60deg);
}

.circle-container_two .circle_two:nth-of-type(5) {
  transform: rotate(-283deg) translate(-20em) rotate(-60deg);
}
}


@media(max-width: 1200px) {
.square-left {
 width: 100%;
 height: 500px;
}
.square-right {
 width: 100%;
 height: 500px; 
 border-left: none;
}

.circle-container {
  left: initial;
  bottom: -50%;
  margin: 0 auto;
  transform: rotate(-35deg);
}

.circle-container_two {
  left: initial;
  top: 53%;
  margin: 0 auto;
  transform: rotate(43deg);
}

/* GREEN */
.circle-container .circle:nth-of-type(1) {
  transform: rotate(305deg) translate(19em) rotate(-180deg);
}

/* BINANCE */
.circle-container .circle:nth-of-type(2) {
  transform: rotate(90deg) translate(-19em) rotate(-90deg);
}

/* X */
.circle-container .circle:nth-of-type(3) {
  transform: rotate(157deg) translate(-19em) rotate(210deg);
}

/* A HALF */
.circle-container .circle:nth-of-type(4) {
  transform: rotate(8deg) translate(18em) rotate(60deg);
}

/* BLACK */
.circle-container .circle:nth-of-type(5) {
  transform: rotate(240deg) translate(19em) rotate(60deg);
}


/* HORSE 1 */
.circle-container_two .circle_two:nth-of-type(1) {
  transform: rotate(-10deg) translate(-19em) rotate(10deg);
}

/* SUSHI */
.circle-container_two .circle_two:nth-of-type(2) {
  transform: rotate(-73deg) translate(19em) rotate(80deg);
}

/* HORSE */
.circle-container_two .circle_two:nth-of-type(3) {
  transform: rotate(-161deg) translate(20em) rotate(155deg);
}

/* RABBIT */
.circle-container_two .circle_two:nth-of-type(4) {
  transform: rotate(-312deg) translate(-20em) rotate(-60deg);
}

.circle-container_two .circle_two:nth-of-type(5) {
  transform: rotate(-283deg) translate(-20em) rotate(-60deg);
}
}

@media(max-width: 768px) {
.square-left {
 height: 400px;
}
.square-right {
 height: 400px; 
}
}

@media(max-width: 640px) {
.square-left {
 height: 350px;
}
.square-right {
 height: 350px; 
}
.circle-container {
  width: 450px;
  height: 450px;
  bottom: -55%;
  border: 20px solid rgba(255, 255, 255, 0.17);
}

.circle-container_two {
  width: 450px;
  height: 450px;
  top: 55%;
  border: 20px solid rgba(255, 255, 255, 0.17);
}

.circle-container .circle {
  padding: 8px;
  width: 5em;
  height: 5em;
}

.circle-container_two .circle_two {
  padding: 8px;
  width: 5em;
  height: 5em;
}

/* GREEN */
.circle-container .circle:nth-of-type(1) {
  transform: rotate(307deg) translate(13em) rotate(-180deg);
}

/* BINANCE */
.circle-container .circle:nth-of-type(2) {
  transform: rotate(97deg) translate(-13em) rotate(-90deg);
}

/* X */
.circle-container .circle:nth-of-type(3) {
  transform: rotate(157deg) translate(-14em) rotate(210deg);
}

/* A HALF */
.circle-container .circle:nth-of-type(4) {
  transform: rotate(8deg) translate(14em) rotate(60deg);
}

/* BLACK */
.circle-container .circle:nth-of-type(5) {
  transform: rotate(245deg) translate(13em) rotate(60deg);
}



/* HORSE 1 */
.circle-container_two .circle_two:nth-of-type(1) {
  transform: rotate(-15deg) translate(-13em) rotate(10deg);
}

/* SUSHI */
.circle-container_two .circle_two:nth-of-type(2) {
  transform: rotate(-68deg) translate(13em) rotate(80deg);
}

/* HORSE */
.circle-container_two .circle_two:nth-of-type(3) {
  transform: rotate(-163deg) translate(13em) rotate(155deg);
}

/* RABBIT */
.circle-container_two .circle_two:nth-of-type(4) {
  transform: rotate(-312deg) translate(-13em) rotate(-60deg);
}

.circle-container_two .circle_two:nth-of-type(5) {
  transform: rotate(-280deg) translate(-13em) rotate(-60deg);
}
}


@media(max-width: 425px) {
.square-left {
 height: 260px;
}
.square-right {
 height: 260px; 
}
.circle-container {
  width: 320px;
  height: 320px;
  bottom: -55%;
  border: 15px solid rgba(255, 255, 255, 0.17);
}

.circle-container_two {
  width: 320px;
  height: 320px;
  top: 55%;
  border: 15px solid rgba(255, 255, 255, 0.17);
}

.circle-container .circle {
  padding: 6px;
  width: 4em;
  height: 4em;
}

.circle-container_two .circle_two {
  padding: 6px;
  width: 4em;
  height: 4em;
}

/* GREEN */
.circle-container .circle:nth-of-type(1) {
  transform: rotate(318deg) translate(10em) rotate(-180deg);
}

/* BINANCE */
.circle-container .circle:nth-of-type(2) {
  transform: rotate(99deg) translate(-9em) rotate(-90deg);
}

/* X */
.circle-container .circle:nth-of-type(3) {
  transform: rotate(170deg) translate(-11em) rotate(210deg);
}

/* A HALF */
.circle-container .circle:nth-of-type(4) {
  transform: rotate(19deg) translate(11em) rotate(60deg);
}

/* BLACK */
.circle-container .circle:nth-of-type(5) {
  transform: rotate(235deg) translate(8em) rotate(60deg);
}



/* HORSE 1 */
.circle-container_two .circle_two:nth-of-type(1) {
  transform: rotate(-30deg) translate(-9em) rotate(10deg);
}

/* SUSHI */
.circle-container_two .circle_two:nth-of-type(2) {
  transform: rotate(-55deg) translate(9em) rotate(80deg);
}

/* HORSE */
.circle-container_two .circle_two:nth-of-type(3) {
  transform: rotate(-169deg) translate(8.5em) rotate(155deg);
}

/* RABBIT */
.circle-container_two .circle_two:nth-of-type(4) {
  transform: rotate(-307deg) translate(-8.5em) rotate(-60deg);
}

.circle-container_two .circle_two:nth-of-type(5) {
  transform: rotate(-270deg) translate(-8.5em) rotate(-60deg);
}
}
</style>