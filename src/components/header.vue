<template>
    <div class="header-container">
        <router-link to="/menu">
            <font-awesome-icon class="menu-icon" icon="fa-solid fa-bars fa-lg" />
        </router-link>
        
        <div class="logo-container">
            <img style="opacity:1" src="./../assets/Vector1.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'VheaderV'
}

</script>

<style>
.header-container {
    width: 100%;
    height: 7.5vh;
    background-color: #ffffff;
    opacity: 1;
    box-shadow: 0 0 15px 5px #3c3b592e;
    position: relative
}
.menu-icon{
    position: absolute;
    top: 30%;
    left: 2vh;
    width: 3vh;
    height: 3vh
}
.logo-container{
    height: 6.5vh;
    opacity: 1;
    width: 6.5vh;
    position: absolute;
    top:1vh;
    right: 45%
}
</style>