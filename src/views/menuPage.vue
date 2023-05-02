<template>
    <div class="mainMenu">
        <headerVue />
    <div class="linkBlock">
         <div class="linkus">
             <router-link to="/">
                 <b>Главная страница</b>
             </router-link>
        </div>
        <div class="linkus">
             <router-link to="/junior">
                 <b>Поздравление младшего</b>
             </router-link>
        </div>
        <div class="linkus">
             <router-link to="/elder">
                 <b>Поздравление старшего</b>
             </router-link>
        </div>
    </div>
    <div class="footer">
        <div class="footer-column">
            <img src="./../assets/m.png" alt="" class="imgStyle">
            <b>
                Контакты старшенького
            </b>
            <span>
                +7 (909) 000-53-99
            </span>
        </div>
        <div class="footer-column">
            <img src="./../assets/v.png" alt="" class="imgStyle">
            <b>
                Контакты младшенького
            </b>
            <span>
                +7 (903) 085-26-34
            </span>
        </div>

    </div>
       
    </div>
</template>


<script>
import headerVue from '@/components/header.vue'
export default {
    name:'menuPage',
    components:{ headerVue},

}
</script>


<style >
.imgStyle{
    width: 50px;
    height: 50px;
    margin-bottom:2vh
}
.mainMenu{
    position: relative;
    height: 100%
}
.footer{
    position: absolute;
    display: flex;
    font-size: 10px;
    width:100%;
    height: 10vh;
    background-color: #FFFFFF;
    bottom: 0;
    flex-direction: row

}
.footer-column{
    align-items: center;
    display: flex;
    width: 50%;
    flex-direction: column;
}

.linkus{
    font-size: 20px;
    transition: 0.5s ease all;
    margin-bottom: 5vh;
    letter-spacing: 2px;
    /* width: 80%; */
    border-bottom: 2px solid #7A5AA4
}
.linkBlock{
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>