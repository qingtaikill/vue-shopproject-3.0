//导入vue文件
import Vue from "vue";

import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)


// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

//按需导入头部
import { Header , Swipe, SwipeItem, Button} from 'mint-ui';
Vue.component(Header.name,Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

//按需导入mint的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//导入vue-resource
import VueResource from "vue-resource"
//安装VueResource
Vue.use(VueResource)
Vue.http.options.root="http://vue.studyit.io"

//导入App根组件
import app from "./App.vue";

import router from './router.js'

var vm = new Vue({
    el:'#app',
    render: c => c(app),
    router
})


