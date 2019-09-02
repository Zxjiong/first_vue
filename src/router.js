//路由抽取分离

import Vue from 'vue'
//1.导入vue-router包
import VueRouter from 'vue-router'
//2.手动安装 VueRouter
Vue.use(VueRouter)

//导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import NewsList from './components/news/NewsList.vue'



//3.创建路由对象
var router = new VueRouter({
  routes: [  //创建路由规则
  {path:'/',redirect:'/home'},
  {path:'/home',component:HomeContainer},
  {path:'/member',component:MemberContainer},
  {path:'/shopcar',component:ShopcarContainer},
  {path:'/search',component:SearchContainer},
  {path:'/home/newsList',component:NewsList}
  ],
  linkActiveClass:'mui-active' // 覆盖默认的路由高亮的类
})
export default router