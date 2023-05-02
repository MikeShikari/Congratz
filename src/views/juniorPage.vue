<template>
    <div>
        <headerVue />
        <div>
            <img src="./../assets/vl.png" alt="">
        </div>
        <div class="txtblk">
            <i class="maintxt">

                "Дорогая, Мама, с Днём Рождения! Спасибо что всегда указывала путь и вела меня к успеху. Желаю и дальше оставаться такой же красивой и чудесной! Чтобы деньги и любовь всегда сопутствовали тебе, и чтоб ты никогда не знала печали!"
            </i>
            <b class="quote"> <i>

                -Junior Viktorov Developer, Wladislaw Viktorov
            </i> 
            </b>
        </div>
       
    </div>
</template>


<script>
import headerVue from '@/components/header.vue'
export default {
    name:'juniorPage',
    components:{ headerVue},

}
</script>


<style scoped>
.maintxt {
    font-size: 16px;
    letter-spacing: 1px;
}
.quote{
    margin-top: 1vh
}
.txtblk{
    margin-left: 2vh;
    margin-right:2vh;
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
}
.imgCont{
    width: 100%;
    height: auto
}
img{width:100%}

.linkus{
    font-size: 20px;
    transition: 0.5s ease all;
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