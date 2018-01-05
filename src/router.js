import VueRouter from 'vue-router'

import HomeContainer from './tabbar/components/HomeContainer.vue'
import MemberContainer from './tabbar/components/MemberContainer.vue'
import ShopcarContainer from './tabbar/components/ShopcarContainer.vue'
import SearchContainer from './tabbar/components/SearchContainer.vue'

import Newslist from './tabbar/homelist/newsList.vue'
import Newsinfo from './tabbar/homelist/newsInfo.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:HomeContainer},
    {path:'/member',component:MemberContainer},
    {path:'/shopcar',component:ShopcarContainer},
    {path:'/search',component:SearchContainer},
    {path:'/home/newsList',component:Newslist},
    {path:'/home/newsInfo/:id',component:Newsinfo}
  ],
  linkActiveClass:'mui-active'
})

// 把路由对象暴露出去
export default router