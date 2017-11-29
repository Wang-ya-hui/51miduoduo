<template>
    <div id="bianji">
        <header>
            <router-link to="/resume">
                <img class="min back" src="../assets/imgs/back.png" alt="">
            </router-link>
            <span>编辑简历</span>
            <img class="min people" src="../assets/imgs/bussiness-man.png" alt="">
        </header>
        <div class="main">
            <group label-width="4.5em" label-margin-right="1em" label-align="left">
                <group-title slot="title"><span>米哥小提示：</span>简历填的全，工作找上门。</group-title>
                <!-- <p class="main-title">基本简历</p> -->
                <x-input class="min-size" title="姓名" v-model="name" placeholder="请输入姓名" is-type="china-name"></x-input>
                <cell class="cell min-size" title="性别">
                    <checker v-model="sex"  default-item-class="demo1-item" selected-item-class="demo1-item-selected">
                        <checker-item value="1">&#10003;</checker-item>&nbsp;男&nbsp;&nbsp;
                        <checker-item value="2">&#10003;</checker-item>&nbsp;女
                    </checker>
                </cell>
                <!-- <cell title="没箭头"></cell>
                <cell title="有箭头" is-link></cell> -->
                <!-- 手机号，弹出一个模态框 -->
                <x-input title="手机号" mask="999 9999 9999" v-model="maskValue" :max="13" is-type="china-mobile"></x-input>
                <!-- <cell class="min-size" title="手机号">
                    <button class="button" @click="onChangeT()" v-model="tepone" >修改</button>
                </cell> -->
                <!-- 出生年月 -->
                <calendar class="min-size" @on-change="onChange" v-model="bothDay" title="出生年月" ></calendar>
               <!-- 户口户籍 -->
               <x-address class="min-size" title="户口/户籍" v-model="hukou" raw-value :list="addressData" hide-district></x-address>
               
               <!-- <x-address class="min-size" title="户口/户籍" v-model="hukou" raw-value :list="addressData" hide-district></x-address> -->
               <!-- 邮箱 -->
               <x-input class="min-size" title="邮箱" v-model="email" name="email" placeholder="请输入邮箱地址" is-type="email"></x-input>
               <!-- 开始工作时间 -->
               <calendar class="min-size" title="工作时间" @on-change="onChange" v-model="workDay"  ></calendar>
               <!-- 身高 -->
               <x-input class="min-size" title="身高" v-model="height" placeholder="cm"></x-input> 
               <!-- 期望地点 -->
               <x-address class="min-size" title="期望地点" v-model="city" raw-value :list="addressData" hide-district></x-address>
               <!-- 期望薪资 -->
               <cell class="min-size xiala" title="期望薪资">
                   <selector class="min-size xiala-sl" v-model="salary" :options="['年薪','月薪','日薪','时薪']"></selector>
                   <selector class="min-size xiala-sl" v-model="salaryNum" :options="['请选择薪资','1500以下','1500-1999','2000-2999','3000-4499','4500-5999','6000-7999','8000-9999','10000-14999','15000-19999','20000-24999','25000-29999','自定义']"></selector>
                </cell>
               <!-- 期望职位 -->
                <x-input class="min-size" title="期望职位" v-model="workPeople" placeholder="请输入期望职位"></x-input>
               <!-- 公司名称 -->
               <x-input class="min-size" title="公司名称" v-model="workName" placeholder="请输入公司名称"></x-input>
               <!-- 入职时间 -->
               <cell class="min-size xiala" title="入职时间">
                    <selector class="min-size xiala-sl" v-model="month" :options="['月','12','11','10','9','8','7','6','5','4','3','2','1']"></selector>
                    <selector class="min-size xiala-sl" v-model="year" :options="['年','2017','2016','2015','2014','2013','2012','2011','2010']"></selector>
                    
                </cell>
               <!-- 离职时间 -->
               <cell class="min-size" title="离职时间" >
                    <selector class="min-size xiala-sl" v-model="overTime" :options="['至今','2017','2016','2015','2014','2013','2012','2011','2010']" ></selector>
               </cell>
               <!-- 职位名称 -->
               <x-input class="min-size" title="职位名称" v-model="jobName" placeholder="请输入职位名称"></x-input>
               <!-- 最高学历 -->
               <cell class="min-size" title="最高学历" >
                    <selector class="min-size xiala-sl" v-model="education" :options="['学历','初中及初中以下','高中','中技','中专','大专','本科','硕士','MBA','博士']" ></selector>
               </cell>
               <!-- 毕业学校 -->
               <x-input class="min-size" title="毕业学校" v-model="school" placeholder="请输入毕业学校"></x-input>
               
               <!-- 毕业时间 -->
               <cell class="min-size" title="毕业时间">
               		<selector calss="min-size xiala-sl" v-model="graduationTime" :options="['年','至今','2020','2019','2018','2017','2016','2015','2014','2013','2012','2011','2010','2009','2008']"></selector>
               		<selector calss="min-size xiala-sl" v-model="graduationMonth" :options="['月','12','11','10','9','8','7','6','5','4','3','2','1']"></selector>
				</cell>
               <!-- 专业 -->
               <x-input class="min-size" title="专业" v-model="major" placeholder="请输入你的专业"></x-input>
               <!-- 没有合适的?请在此填写 -->
               <x-input class="min-size" v-model="beizhu" placeholder="没有合适的?请在此填写"></x-input>
               
            </group>
            <!-- 按钮:保存 -->
               <x-button style="background-color:#F66F17; margin-top:2rem; color:white;">保存</x-button>
        </div>
    </div>
</template>

<script>
    import { GroupTitle, Group, Cell, XInput, Selector, PopupPicker, Datetime, XNumber, ChinaAddressData, XAddress, XTextarea, XSwitch,Checker,
         CheckerItem, Divider, Popup, TransferDom,Calendar,XButton,
         ChinaAddressV4Data
         } from 'vux'
     
    export default {
        name: 'bianji',
        components: {
            Group,
            GroupTitle,
            Cell,
            XInput,
            Selector,
            PopupPicker,
            XAddress,
            Datetime,
            XNumber,
            XTextarea,
            XSwitch,
            Checker, CheckerItem, Divider, Popup, TransferDom,
            Calendar,ChinaAddressV4Data,XButton
        },
        data () {
            return {
                name:'',
                sex: '',
                tepone: '123',
                bothDay: 'TODAY',
                hukou: '',
                addressData: ChinaAddressV4Data,
                value: [],
                workDay: '',
                maskValue: '',
                hukou: '',
                email: '',
                height:'',
                city: '',
                salary: '年薪',
                salaryNum: '请选择薪资',
                workPeople: '',
                workName: '',
                year: '年',
                month: '月',
                overTime:'至今',
                jobName: '',
                school:'',
                education:'学历',
                graduationTime:'年',
                graduationMonth:'月',
                major:'',
                beizhu:''
            }
        },
        methods: {
            onChange (val) {
                console.log('on change', val)
            },
            onChangeT (val) {
                console.log('手机号', val)
            },
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
#bianji{
    margin-bottom: 30rem;
}
header{
    position: relative;
    color: white;
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    font-size: 1.6rem;
    background: linear-gradient(to right,#FC9B28, #F46F14); 
}
.people{
    position: absolute;
    top: 1rem;
    right: 1.4rem;
    font-size: 1.2rem;
    line-height: 4rem;
}
.back{
    display: block;
    position: absolute;
    top: 1rem;
    left: 1.4rem;
}
.min{
    display: block;
    width: 1.6em;
    height: 1.6em;
}
.main-title{
    position: absolute;
    left: 2rem;
}
.main{
    /* margin-top: -2rem; */
    font-size: 14px;
}
.cell{
    height: 4rem;
    
}
.min-size{
    font-size: 1.4rem;
}
.demo1-item {
  width: 2rem;
  height: 2rem;
  border: 1px solid #ccc;
  display: inline-block;
  border-radius: 50%;
  line-height: 2rem;
  text-align: center;
  color: white;

}
.demo1-item-selected {
  background-color: orangered;
}
.button{
    background-color: white;
    border: 1px solid orange;
    border-radius: 2px;
    width: 4rem;
    height: 2rem;
    color: orange;
}
/* 下拉选项 */
.xiala-sl{
    float:right;
}
</style>