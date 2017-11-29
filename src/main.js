import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'

Vue.use(VueRouter)
//跨域请求时创建http原型
 // 创建基本的axios配置
 import axios from 'axios';
 // 挂载到vue的原型
 Vue.prototype.http = axios;
// 导入第三方
import './assets/base.css'
import './assets/font-awesome-4.7.0/css/font-awesome.css'

// 导入子组件
import Index from './components/index.vue'
import Resume from './components/resume.vue'
import Applied from './components/applied.vue'
import Homes from './components/home.vue'
import More from './components/more.vue'
// 导入二级页面
import Bianji from './components/bianji.vue'

// 设置路径
const routes = [
  {path: '/index',component: Index},
  {path: '/resume',component: Resume},
  {path: '/applied',component: Applied},
  {path: '/home',component: Homes},
  {path: '/more',component: More},
  // 二级界面
  {path: '/resume/bianji',component: Bianji}
]

// 创建路由
const router = new VueRouter({
  routes
})
// 一开始加载的页面
router.push('./index')

// 解除点击事件的延迟
FastClick.attach(document.body)

Vue.config.productionTip = false

// 创建根组件
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')

// 设置文字的大小
var html = document.documentElement;
var calcRem = function(){
  var w = html.clientWidth;
  if (w <= 320) {
    html.style.fontSize = '10px';
  } else if (w <= 640) {
    html.style.fontSize = w/32 + 'px';
  } else {
    html.style.fontSize = '20px';
  }
}
//调用文字大小的方法
calcRem();
// 当window的大小改变的时候调用这是文字大小的方法
window.onresize = function(){
  calcRem();
}