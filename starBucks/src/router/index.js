import Vue from 'vue'
import Router from 'vue-router'
import Index from "../pages/wjpages/Index";
import ShopcarShow from "../pages/wjpages/ShopcarShow"
import shopcarDetile from "../pages/wjpages/shopcarDetile";
import shopcarDetile1 from "../pages/wjpages/shopcarDetile1";
import ShopcarShow1 from "../pages/wjpages/ShopcarShow1";
import ShopcarSearch from "../pages/wzqpages/search"
import ShopcarBag from '../pages/wzqpages/ShoppingBag'
import shopcarPopup from "../pages/wzqpages/popup"
import ShopcarBag1 from "../pages/wzqpages/ShoppingBag1"
import shopcarPopup1 from "../pages/wzqpages/popup1"
import welfare from "../pages/wzqpages/welfare"
import shopcard from '../components/wzqcomponents/shopcard'
import ShoppingBag from '../pages/wzqpages/ShoppingBag'
import ShopcarPack from "../pages/wjpages/shopcarPack"
import ShopcarPack1 from "../pages/wjpages/shopcarPack1"
import xiaoxi from "../components/wzqcomponents/xiaoxi"
import { DropdownMenu, DropdownItem } from 'vant'
// import menbers from '../pages/lybpages/Members.vue'




import Login from '../pages/lybpages/Login.vue'
import menbers from '../pages/lybpages/Members'
import passwd from "../pages/lybpages/passwd"
import yan from "../pages/lybpages/yan"
import set from "../pages/lybpages/Set"
import safe from "../pages/lybpages/Safe"
import enit from "../pages/lybpages/enitpwd.vue"
import enit1 from "../pages/lybpages/userenit.vue"
import { Switch } from 'vant';
import { Toast } from 'vant';
import { Dialog } from 'vant';
import { Progress } from 'vant';
import { Form } from 'vant';

Vue.use(Form);
// 安装vueRouter（把vueRouter插到Vue里）
Vue.use(Router)
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Progress);
Vue.use(Switch);
Vue.use(Dialog);
Vue.use(Toast);

// // 1、路由配置
// let routes = [
//   {path:"/",component:"TodoList"},
//   {path:"/index",component:"TodoList"}
// ]

// // 2、创建vueRouter对象

// let routerObj = new Router({
//   routes
// });

let abc=new Router({
   routes:[
    {
      path:"/",
      name:"/",
      component:Index
    },
    {
      path:"/index",
      name:"index",
      component:Index
    },
    {
      path:"/fk",
      name:"fk",
      component:ShopcarShow,
    },
    {
      path:"/shopcarDetile",
      name:"shopcarDetile",
      component:shopcarDetile
    },
    {
      path:"/shopcarDetile1",
      name:"shopcarDetile1",
      component:shopcarDetile1
    },
    {
      path:"/zxs",
      name:"zxs",
      component:ShopcarShow1,
    },
    {
      path:"/shopcar_search",
      name:"shopcar_search",
      component:ShopcarSearch
    },
    {
      path:"/shopcar_bag",
      name:"shopcar_bag",
      component:ShopcarBag
    },
    {
      path:"/shopcar_bag1",
      name:"shopcar_bag1",
      component:ShopcarBag1
    },
    {
      path:"/shopcar_popup",
      name:"shopcar_popup",
      component:shopcarPopup
    },
    {
      path:"/shopcar_popup1",
      name:"shopcar_popup1",
      component:shopcarPopup1
    },
    {
      path:"/welfare",
      name:"welfare",
      component:welfare
    },
    {
      path: '/shopcard/:name/:imgs',
      name: 'shopcard',
      component: shopcard,
      props:true
    },
    {
      path: '/ShoppingBag',
      name: 'ShoppingBag',
      component: ShoppingBag
    },
    {
      path: '/ShopcarPack',
      name: 'ShopcarPack',
      component: ShopcarPack
    },
    {
      path: '/ShopcarPack1',
      name: 'ShopcarPack1',
      component: ShopcarPack1
    },
    {
      path: '/xiaoxi',
      name: 'xiaoxi',
      component: xiaoxi
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/menbers',
      name: 'menbers',
      component: menbers,
      props: true
    },
    {
      path: '/passwd',
      name: 'passwd',
      component: passwd,

      props: true
    },
    {
      path: '/yan/:id',
      name: 'yan',
      component: yan,
      props: true
    },
    {
      path: '/set',
      name: 'set',
      component: set,
      props: true
    },
    {
      path: '/safe',
      name: 'safe',
      component: safe,
      props: true
    },
    {
      path: '/enit',
      name: 'enit',
      component: enit,
      props: true
    },
    {
      path: '/enit1',
      name: 'enit1',
      component: enit1,
      props: true
    }
  ]
});
// abc.beforeEach((to, from, next) => {

//   if(to.path=="/fk" ||to.path=="/zxs"){

//     if(localStorage.getItem("userID")!=""||localStorage.getItem("userID")==undefined){
//       next("/login")
//     }else{
//       next(true)
//     }
//   }
//   else{
//      next(true)
//   }
// });
export default abc;
















// export default routerObj;

// export default new Router({
//   routes:[
//     {
//       path:"/",
//       name:"/",
//       component:Index
//     },
//     {
//       path:"/index",
//       name:"index",
//       component:Index
//     },
//     {
//       path:"/fk",
//       name:"fk",
//       component:ShopcarShow,
//     },
//     {
//       path:"/shopcarDetile",
//       name:"shopcarDetile",
//       component:shopcarDetile
//     },
//     {
//       path:"/shopcarDetile1",
//       name:"shopcarDetile1",
//       component:shopcarDetile1
//     },
//     {
//       path:"/zxs",
//       name:"zxs",
//       component:ShopcarShow1,
//     },
//     {
//       path:"/shopcar_search",
//       name:"shopcar_search",
//       component:ShopcarSearch
//     },
//     {
//       path:"/shopcar_bag",
//       name:"shopcar_bag",
//       component:ShopcarBag
//     },
//     {
//       path:"/shopcar_bag1",
//       name:"shopcar_bag1",
//       component:ShopcarBag1
//     },
//     {
//       path:"/shopcar_popup",
//       name:"shopcar_popup",
//       component:shopcarPopup
//     },
//     {
//       path:"/shopcar_popup1",
//       name:"shopcar_popup1",
//       component:shopcarPopup1
//     },
//     {
//       path:"/welfare",
//       name:"welfare",
//       component:welfare
//     },
//     {
//       path: '/shopcard/:name/:imgs',
//       name: 'shopcard',
//       component: shopcard,
//       props:true
//     },
//     {
//       path: '/ShoppingBag',
//       name: 'ShoppingBag',
//       component: ShoppingBag
//     },
//     {
//       path: '/ShopcarPack',
//       name: 'ShopcarPack',
//       component: ShopcarPack
//     },
//     {
//       path: '/ShopcarPack1',
//       name: 'ShopcarPack1',
//       component: ShopcarPack1
//     },
//     {
//       path: '/xiaoxi',
//       name: 'xiaoxi',
//       component: xiaoxi
//     },
//     {
//       path: '/menbers',
//       name: 'menbers',
//       component: menbers
//     },{
//       path: '/Login',
//       name: 'Login',
//       component: Login
//     },
//     {
//       path: '/menbers',
//       name: 'menbers',
//       component: menbers,
//       props: true
//     },
//     {
//       path: '/passwd',
//       name: 'passwd',
//       component: passwd,

//       props: true
//     },
//     {
//       path: '/yan/:id',
//       name: 'yan',
//       component: yan,
//       props: true
//     },
//     {
//       path: '/set',
//       name: 'set',
//       component: set,
//       props: true
//     },
//     {
//       path: '/safe',
//       name: 'safe',
//       component: safe,
//       props: true
//     },
//     {
//       path: '/enit',
//       name: 'enit',
//       component: enit,
//       props: true
//     },
//     {
//       path: '/enit1',
//       name: 'enit1',
//       component: enit1,
//       props: true
//     }
//   ]
// });
