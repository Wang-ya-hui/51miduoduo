<template>
	<div class="Tui">
		<div id="tuijiantwo">
			<div class="main">
				<h3>{{stui.name}}</h3>
				<span>{{stui.rating}}千/月</span>
			</div>
			<div class="footer">
				<span>{{stui.recent_order_num}}</span>
				<span>{{stui.distance}}</span>
				<button>申请</button>
			</div>
		</div>
	</div>
	
</template>

<script>
	export default {
		name: 'tui-jian-two',
		props: ['tui'],
		components: {
			
		},
		data () {
			return {
				stui: this.tui
			}
		},
		methods: {
			showplay(){
				
			}
		}
	}
</script>

<style scoped="scoped">
#tuijiantwo{
	background-color: #FFFFFF;
	margin: 0.1rem 0;
	padding:1rem; 
	position: relative;
}
.main{
	height: 3rem;
}
.main span{
	position: absolute;
	top: 1rem;
	right: 0;
}
.footer{
	height: 3rem;
}
.footer button{
	position: absolute;
	/*top:2rem;*/
	bottom:1rem;
	right: 0;
}

</style>