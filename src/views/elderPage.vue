<template>
    <div>
        <headerVue />
        <div>
            <img src="./../assets/mm.png" alt="">
        </div>
        <div class="txtblk">
            <i class="maintxt">

                "Мамуля, ты у меня самая лучшая на свете. Мне очень повезло, что моя мама такая мудрая и заботливая. Я тебя очень люблю и хочу пожелать тебе всего лучшего на свете, но в первую очередь здоровья и спокойствия. Береги себя, пожалуйста, ведь ты у меня одна:)"
            </i>
            <b class="quote"> <i>

                -Middle Viktorov Developer, Mikhail Viktorov
            </i> 
            </b>
        </div>
       
    </div>
</template>


<script>
import headerVue from '@/components/header.vue'
export default {
    name:'elderPage',
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