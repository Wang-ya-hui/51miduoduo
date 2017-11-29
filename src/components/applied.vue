<template>
    <div id="applied">
       <header>
            <span>申请记录</span>
            <img class="min" src="../assets/imgs/bussiness-man.png" alt="">
        </header>   
        <div class="main">
        	<p class="main-p">您还未申请职位，大家的平均申请量是28个。投的多，机会多，好工作在等你哦~</p>
        </div>
        <div class="footer">
        	<div class="footer-tou font-size">
        		<span>为你推荐</span>
        	</div>
        	<!-- 加载图片 -->
            <div class="loading">
                <span v-if="status == 'loading'" class="fa fa-spinner fa-pulse fa-3x fa-fw"></span>
                <span v-if="status == 'fail'">加载失败...</span>
            </div>
        	<!--加载成功时，遍历数据，-->
        	<div v-if="status == 'success'">
        		<div v-for="(tj_data,i) in tj_datas">
                    <tui-jian-two :tui='tj_data' :key="tj_data.id"></tui-jian-two>
                </div>
        	</div>
        	<!--加载成功时-->
        	<div v-if="status == 'success'" class="load-more">
                <span class="fa fa-spinner fa-pulse fa-2x fa-fw"></span>
                	正在加载更多
            </div>
        </div>
    </div>
</template>
<script>
	import TuiJianTwo from './TuiJianTwo'
    export default {
        name: 'applied',
        components: {
        	TuiJianTwo
        },
		data () {
			return {
				status:'loading',
				img_src2: [],
                tj_datas: [],
                isLoading: false,
                status:'loading',
                scrolled2: false
			}
		},
		methods: {
			//当页面发生滚动调用的方法
			didScroll(){
                // var bodyH = document.body.clientHeight;//页面的总高度
                var bodyH = document.body.clientHeight;
                // console.log(bodyH);
                var scrollTop = document.scrollingElement.scrollTop;//页面滚动时被卷去的高度
                // console.log(scrollTop);
                var windowH = document.documentElement.clientHeight;//可视页面的高度
                // console.log(windowH);
                if (windowH+scrollTop >= bodyH-10) {
                    console.log('加载更多');
                    if (!this.isLoading) {
                        this.loadMore();
                    }
                }
            },
            //加载更多时调用的方法
            loadMore(){
                this.isLoading = true;
                this.http.get('/elemeapi/shopping/restaurants?latitude=37.87059&longitude=112.550667&offset=10&limit=20&extras[]=activities&terminal=h5&extra_filters=home',{
                params:{offset:this.tj_datas.length/8}
                })
                .then(res=>{
                    if (res.data) {
                        this.tj_datas = this.tj_datas.concat(res.data);
                    }
                    this.isLoading = false;
                },err=>{
                    this.isLoading = false;   
                }) 
            }
		},
		mounted () {
			window.onscroll = this.didScroll;
            window.addEventListener('scroll', this.handleScroll);
			//获取更多的职位，跨域加载
			console.log("获取更多职位");
			this.http.get('/elemeapi/shopping/restaurants?latitude=37.87059&longitude=112.550667&offset=0&limit=20&extras[]=activities&terminal=h5&extra_filters=home').then(res=>{
                if (res.data) {
                    this.status = 'success';
                    this.tj_datas=res.data;
                } else {
                    this.status = 'fail';
                }
                console.log(res.data);
                console.log(this.tj_datas)
            }),err=>{
                this.status = 'fail'
            };
		}
    }
</script>
<style scoped>
.font-size{
	font-size: 1.4rem;
}
/*头部*/
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
    top: 1rem;
    right: 1.4rem;
    font-size: 1.2rem;
    line-height: 4rem;
}
.min{
    display: block;
    width: 1.6em;
    height: 1.6em;
}
.main p{
	width: 20rem;
	height: 10rem;
	margin: 0 auto;
	padding-top: 15rem;
}
/*main*/
.main{
	height: 25rem;
	background-color: #FFFFFF;
	color: #cccccc;
	font-size: 1.4rem;
}
/*footer*/
.footer-tou{
	height: 4rem;
	line-height: 4rem;
	padding-left: 1rem;
	margin-top: 8px;
	background-color: white;
}
.footer-tou span{
	
}
</style>