<template>
    <div id="index">
        <div class="index-city">
            <x-address :title="title" @on-hide="logHide" v-model="value_0_1" :list="addressData" >
                <template slot="title" slot-scope="props">
                    <img class="min" src="../assets/imgs/wxb.png" alt="">
                </template>
            </x-address>
        </div>
        <div class="index-yonghu">
            <span><img class="min" src="../assets/imgs/bussiness-man.png" alt=""></span>
        </div>
        <div class="index-logo">
            <img src="../assets/imgs/logoindexhome.png" alt="logo">
        </div>
        <!-- 搜索框 -->
        <div class="enter">
            <form name="jcform" action="http://m.51mdd.com/search/joblist.php">
                <input name="keyword" type="search" class="at bb keyword_search" placeholder="请输入关键字,如销售"/>
                <span class="icon-camera-retro">
                    搜索
                </span>
            </form>
        </div>
        <!--  -->
        <div class="about">
            <a href="">
                <img class="min" src="../assets/imgs/人事申请.png" alt="">
                <span>附近职位</span>
            </a>
            <a href="">
                <img class="min" src="../assets/imgs/男.png" alt="">
                <span>热门兼职</span>
            </a>
            <a href="">
                <img class="min" src="../assets/imgs/付款申请.png" alt="">
                <span>企业急招</span>
            </a>
            <a href="">
                <img class="min" src="../assets/imgs/IT权限.png" alt="">
                <span>职业分类</span>
            </a>
        </div>
        <!-- 中间的广告 -->
        <a href="" id="ad">
            <img src="../assets/imgs/miduoduo_shouye.jpg" alt="广告">
        </a>
        <!-- 猜你想要和热门职位 -->
        <div class="main">
            <!-- 猜你想要 -->
            <div class="main-title">
                <img class="min" src="../assets/imgs/彩旗.png" alt="">
                <span>猜你想要</span>
            </div>
            <div class="main-content">
                <div class="main-content-div" v-for="(wantAbout,index) in wantAbouts" :style='"backgroundColor:"+wantAbout.color+";"'>
                    <img class="min2" :src='"../assets/imgs/"+wantAbout.img+".png"' alt="">
                    <span>{{wantAbout.name}}</span>
                </div>
            </div>
            <!-- 热门职位 -->
            <div class="main-title">
                <img class="min" src="../assets/imgs/火圈.png" alt="">
                <span>热门职位</span>
            </div>
            <div class="main-content2">
                <div class="main-content-div2" v-for="(hotWork,index) in hotWorks">
                    <span>{{hotWork.name}}</span>
                </div>
            </div>
        </div>
        <!-- 版权 -->
        <div class="bottom">
            <p>
                <span>无忧工作网版权所有&copy;1999-2017 </span><br>
                <span>51mdd.com(沪ICP备1201550号-19)</span>
            </p>
            
        </div>
    </div>
</template>

<script>
    import { Group, XAddress, ChinaAddressV4Data, XButton, Cell, Value2nameFilter as value2name } from 'vux'
    
    export default {
     name: 'index',
      components: {
        Group,
        XAddress,
        XButton,
        Cell
      },
      data () {
        return {
          title: '默认为空',
          value_0_1: [],
          addressData: ChinaAddressV4Data,
          showAddress: false,
          wantAbouts: [
              {name: '高薪资',color:'#FFFCF0',img:'棒棒糖'},
              {name: '上岗快',color:'#F1FBFD',img:'饼干'},
              {name: '结前快',color:'#FEF5EE',img:'圣诞帽'},
              {name: '做五休二',color:'#F3FBF5',img:'圣诞树 '},
              {name: '包吃包住',color:'#FEF0EE',img:'袜子'},
              {name: '五险一金',color:'#EEF8FE',img:'雪人'}
          ],
          hotWorks: [
              {name: '仓管'},
              {name: '店长'},
              {name: '店员'},
              {name: '服务员'},
              {name: '司机'},
              {name: '物流'},
              {name: '导购员'},
              {name: '收递员'},
              {name: '物业'},
              {name: '销售'},
              {name: '收银员'},
              {name: '保安'},
              {name: '普工'},
              {name: '导游'},
              {name: '技工'},
              {name: '领班'}
          ]
        }
      },
      methods: {
        logHide (str) {
          console.log('on-hide', str)
        },
        logShow (str) {
          console.log('on-show')
        }
      }
    }
</script>
<style scoped>
#index{
    position: relative;
}
.index-city{
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    overflow: hidden;
}
.index-city img{
    position: absolute;
    top: 1rem;
    left: 0;
}

.index-yonghu{
    width: 100px;
    height: 40px;
}
.index-yonghu{
    position: absolute;
    right: 0;
    top: 0;
}
.index-yonghu img{
    position: absolute;
    top: 15px;
    right: 15px;
}
.min{
    display: block;
    width: 1.6rem;;
    height: 1.6rem;
}
.min2{
    display: block;
    width: 2.5rem;;
    height: 2.5rem;
}
/* logo */
.index-logo{
    /* background-color:yellow; */
    height: 8rem;
    display: flex;
    justify-content: center;
}
.index-logo img{
    height: 3rem;
    /* position: absolute; */
    /* bottom: 0; */
    /* 上下居中，还是得盒模型呀 */
    box-sizing: border-box;
    margin: auto 0;
}
/* 搜索框 */
.enter{
    box-sizing: border-box;
    margin: 0 auto;
    height: 4rem;   
    width: 30rem;
    border-radius: 0.5rem;
    color: white;
    border: 1px solid orangered;
    position: relative;
}
.enter input{ 
    border-radius: 0.5rem 0 0 0.5rem;
    height: 3.8rem;
    width: 21rem;
    border: none;
}
.enter span{
    background-color: orangered;
    display: inline-block;
    margin: 0;
    padding: 0;
    width: 9rem;
    height: 3.8rem; 
    border-radius: 0 0.5rem 0.5rem 0;
    position: absolute;
    top: 0;
    right: 0;
    text-align: center;
    line-height: 3.8rem;
    font-size: 1.4rem;
}
/*  */
.about{
    height: 5rem;
    width: 30rem;
    box-sizing: border-box;
    margin: 1rem auto;
    display: flex;
    justify-content: space-around;
}
.about a{
    float: left;
}
.about a img{
    margin: 0 auto;
}
/* 广告 */
#ad img{
    width: 100%;
    height: 8rem;
}
/* main */
.main{
    /* margin-bottom: 10rem; */
    background-color: yellow;
    box-sizing: border-box;
    background-color: white;
}
/* main-title */
.main-title{
    margin: 1rem;
    color: black;
    font-size: 1.6rem;
    position: relative;
    height: 4rem;
    line-height: 4rem;
    clear: both;
}
.main-title img{
    position: absolute;
    top: 1rem;
}
.main-title span{
    position: absolute;
    left: 2rem;
}
/* main的内容 */
.main-content{
    margin: 1rem;
    height: 10rem;
}
.main-content2{
    margin: 1rem;
    height: 15rem;
}
.main-content-div{
    width: 9rem;
    height: 4rem;
    float: left;
    margin: 0.5rem;
    line-height: 4rem;
    position: relative;
    text-align: center;
} 
.main-content-div img{
    position: absolute;
    display: inline-block;
    left: 0.5rem;
    top: 1rem;
}
.main-content-div span{
    position: absolute;
    top: 0;
    left: 3rem;
    font-size: 1.4rem;
}
.main-content-div2{
    background-color: red;
    width: 7rem;
    height: 2.5rem;
    float: left;
    margin: 0.5rem 0.2rem;
    text-align: center;
    line-height: 2.5rem;
    background-color: #FBFAFA;
}
/* 版权 */
.bottom{
    text-align: center;
    margin-bottom: 5rem;
    color: #999999;
}
</style>