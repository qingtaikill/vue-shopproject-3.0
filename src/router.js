import VueRouter from 'vue-router'

//获取主页选项卡组件
import HomeContainer from './tabbar/components/HomeContainer.vue'
import MemberContainer from './tabbar/components/MemberContainer.vue'
import ShopcarContainer from './tabbar/components/ShopcarContainer.vue'
import SearchContainer from './tabbar/components/SearchContainer.vue'

//获取新闻列表和新闻详情组件
import Newslist from './tabbar/homelist/newsList.vue'
import Newsinfo from './tabbar/homelist/newsInfo.vue'

//获取图片分享组件
import Photoshare from './tabbar/photo/photoShare.vue'
import Photoinfo from './tabbar/photo/photoInfo.vue'

import Goodslist from './tabbar/goods/goodsList.vue'


// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:HomeContainer},
    {path:'/member',component:MemberContainer},
    {path:'/shopcar',component:ShopcarContainer},
    {path:'/search',component:SearchContainer},
    {path:'/home/newsList',component:Newslist},
    {path:'/home/newsInfo/:id',component:Newsinfo},
    {path:'/home/photoShare',component:Photoshare},
    {path:'/home/photoInfo/:id',component:Photoinfo},
    {path:'/home/goodsList',component:Goodslist}
  ],
  linkActiveClass:'mui-active'
})

// 把路由对象暴露出去
export default router