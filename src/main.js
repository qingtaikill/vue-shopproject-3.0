//导入vue文件
import Vue from "vue";

import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)

//按需导入头部
import { Header , Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name,Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//按需导入mint的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//导入vue-resource
import VueResource from "vue-resource"
//安装VueResource
Vue.use(VueResource)

//导入App根组件
import app from "./App.vue";

import router from './router.js'

var vm = new Vue({
    el:'#app',
    render: c => c(app),
    router
})


