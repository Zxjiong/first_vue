//入口文件

import Vue from 'vue'
import app from './App.vue'

//按需导入mint-UI 中的组件
import { Header,Swipe, SwipeItem,Button } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)


//导入mui样式
import './lib/mui/css/mui.min.css'
import './lib/mui/fonts/mui.ttf'
import './lib/mui/css/app.css'
import './lib/mui/css/icons-extra.css'


//导入router.js 路由模块
import router from './router.js'

//导入vue-resource库，由于ajax数据交互
//涉及到跨域问题，这一部分功能无法显示  ^+^
import VueResource from 'vue-resource'
Vue.use(VueResource)


//定义格式化时间的插件
import moment from 'moment'
//定义全局的过滤器
Vue.filter('dateFormat',function(dataStr,pattern='YYYY-MM-DD HH:MM:SS'){
  return moment(dataStr).format(pattern)
})


var vm = new Vue({
  el: '#app',
  render: c => c(app),

  router   //挂载路由到实例上
})