<template>
    <div class="cont">
        <VheaderV />
        <h1>Любимая наша мама!</h1>
        <div class="carousel-align">
            <Carousel :items-to-show="2.5" :wrap-around="true">
    <Slide v-for="slide in 8" :key="slide">
      <div class="carousel__item item"><img :src="this.pics[slide-1]" alt=""></div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
        </div>
        <div class="txt">
          <span class="innr">
 <b>Спасибо</b> тебе за то, что ты подарила нам жизнь и была (и будешь!) всегда рядом. 
          </span>
           <span class="innr">
              <b>Спасибо</b> за заботу и любовь.
          </span>
           <span class="innr">
              <b>Спасибо</b> за то, что ты это ты. Твои IT-сыновья безмерно любят тебя!
          </span>
        </div>
    <div class="containerJr">
        <div class="logo-bottom">
        <img src="./../assets/Union.png" alt="">
    </div>
    <div class="smolltxt">
        Создано Владиславом и Михаилом В. специально по случаю дня рождения любимой мамули 2023г
    </div>
    </div>   
    
    </div>
</template>


<script>
import VheaderV from '@/components/header.vue';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
    name: 'galleryPage',
    components: { VheaderV, Carousel,
    Slide,
    Pagination,
    Navigation, }, 
    data(){
        return{
            pics:[
                require('./../assets/IMG_0924.png'),
                require('./../assets/IMG_3324.png'),
                require('./../assets/7.png'),
                require('./../assets/8.png'),
                require('./../assets/IMG_1528.png'),
                require('./../assets/IMG_1593.png'),
                require('./../assets/IMG_1603.png'),
                require('./../assets/photo_2023-05-02_21-00-28.png'),
                // require('./../assets/IMG_0924.png'),
                
            ]
        }
    }
}

</script>


<style>
.containerJr{
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.smolltxt{
    font-size: 10px;
    margin-top: 30px;
    /* position: absolute; */
    /* bottom:1vh */
}
.cont{
    position:relative;
    height: 100%
}
.logo-bottom{
    height:10vh;
    /* position: absolute; */
    /* bottom: 2vh; */
    /* left: 30vw; */
    width: 40vw
}
.txt{
    font-size: 16px;
    letter-spacing: 0.2px;
    display: flex;
    flex-direction: column;
    margin-right: 2vh;
    margin-left: 2vh;
    line-height: 30px;
    /* background-color: #ffffff; */
    /* box-shadow: 0 0 15px 5px #3c3b592e; */
    /* border-radius: 12px; */
}
.innr{
    margin-bottom: 1vh;
    margin-top: 1vh;
}
img {
    max-width: 100%;
    height: auto;
}
.carousel-align{
    margin-top: 10vh;
    margin-bottom: 10vh;
}

.item {
    min-width: 12vh;
    min-height: 17vh;
    max-height: 65vh;
    padding: 10px;
    margin: 3px;
    display: flex;
    align-items: start;
    padding: 3px;
    background-color: #ffffff;
    box-shadow: 0 0 15px 5px #3c3b592e;
}
body {
    background-color: #fbfcff;
    margin: 0;
    height:100vh;
    color: #3C3B59
}
</style>