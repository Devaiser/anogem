<template>
    <section class="py-14">
        <div class="flex justify-center">
            <TheBadge text="and 100+ more" />
        </div>
        <h2 class="title mb-10">Supported markets</h2>
        <div class="w-full flex text-white">
            <div class="square-left">
               <div class="font-bold text-5xl absolute top-10 right-20">CEX</div> 
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
                </div>
            </div>
            <div class="square-right">
               <div class="font-bold text-5xl absolute top-10 left-20">DEX</div> 
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
  transform: rotate(0deg) translate(25em) rotate(-10deg);
}

/* BINANCE */
.circle-container .circle:nth-of-type(2) {
  transform: rotate(72deg) translate(-28em) rotate(-90deg);
}

/* X */
.circle-container .circle:nth-of-type(3) {
  transform: rotate(144deg) translate(-27em) rotate(210deg);
}

/* .circle-container .circle:nth-of-type(4) {
  transform: rotate(216deg) translate(-10em) rotate(-216deg);
} */

/* A HALF */
.circle-container .circle:nth-of-type(4) {
  transform: rotate(288deg) translate(27em) rotate(60deg);
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

/* HORSE 1 */
.circle-container_two .circle_two:nth-of-type(1) {
  transform: rotate(0deg) translate(-28em) rotate(10deg);
}

/* SUSHI */
.circle-container_two .circle_two:nth-of-type(2) {
  transform: rotate(-72deg) translate(27em) rotate(80deg);
}

/* HORSE */
.circle-container_two .circle_two:nth-of-type(3) {
  transform: rotate(-144deg) translate(28em) rotate(155deg);
}

/* RABBIT */
.circle-container_two .circle_two:nth-of-type(4) {
  transform: rotate(-288deg) translate(-28em) rotate(-60deg);
}

</style>