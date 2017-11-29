<template>
    <div id="resume">
        <header>
            <span>简历</span>
            <img class="min" src="../assets/imgs/bussiness-man.png" alt="">
        </header>
       <div class="main">
            <div class="main-title">
                <p>基本简历</p>
                <router-link to="/resume/bianji"><span>编辑</span></router-link>
            </div>
        </div>
    </div>
    
</template>
<script>
    import { GroupTitle, Group, Cell, XInput, Selector, PopupPicker, Datetime, XNumber, ChinaAddressData, XAddress, XTextarea, XSwitch } from 'vux'

    export default {
        name: 'resume'

    }
</script>
<style scoped>
header{
    position: relative;
    color: white;
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    font-size: 1.6rem;
    background: linear-gradient(to right,#FC9B28, #F46F14); 
}
header img{
    position: absolute;
    top: 1rem;;
    right: 1.4rem;
    font-size: 1.2rem;
    line-height: 4rem;
}
.min{
    display: block;
    width: 1.6em;
    height: 1.6em;
}
/* main */
.main{
    background-color: yellow;
}
.main-title{
    background-color:white;
    position: relative;
    font-size: 1.4rem;
    height: 4rem;
    line-height: 4rem;
    border-bottom: 1px solid #cccccc;
}
.main-title p{
    position: absolute;
    left: 2rem;
}
.main-title a{
    position: absolute;
    right: 2rem;
    color: orange;
}
</style>