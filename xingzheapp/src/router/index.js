import Vue from 'vue'
import Router from 'vue-router'
import Lushu from '../components/lushu'
import Xingzhebang from '../components/xingzhebang'
import Saishi from '../components/saishi'
import Xingzhetoutiao from '../components/xingzhetoutiao'
import Bangzhuzhongxin from '../components/bangzhuzhongxin'
import Lianxiwomen from '../components/lianxiwomen'
import Zhinengshebei from '../components/zhinengshebei'
import Tuijianheji from '../components/tuijianheji'
import Saiduanlushu from '../components/saiduanlushu'
import Wodelushu from '../components/wodelushu'
import Zhizuolushu from '../components/zhizuolushu'
import Zhuangbeitaolun from '../components/zhuangbeitaolun'
import Ershoujiaoyi from '../components/ershoujiaoyi'
import Tubuhuwai from '../components/tubuhuwai'
import Paobuyueye from '../components/paobuyueye'
import Yundongzhibo from '../components/yundongzhibo'
import Zijiamolv from '../components/zijiamolv'
import Youwenbida from '../components/youwenbida'
import Fatie from '../components/fatie'
import Huidaojiuban from '../components/huidaojiuban'
import Shangchuanyundongshuju from '../components/shangchuanyundongshuju'
import Denglu from '../components/denglu'
import Zhuce from '../components/zhuce'
import Wodelushuchild from '../components/wodelushuchild'
import Makelushuchild from '../components/makelushuchild'
import Xiangqingye from '../components/xiangqingye'




Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [

    {
      path: '/lushu',
      component:Lushu,
      children:[
        {
          path:'tuijianheji',
          component: Tuijianheji
        },{
          path:'saiduanlushu',
          component: Saiduanlushu
        },{
          path:'wodelushu',
          component: Wodelushu,
          children:[
             {
              path:'wodelushuchild',
              component:Wodelushuchild
             }
          ]
        },{
          path:'zhizuolushu',
          component: Zhizuolushu,
          children:[
             {
              path:'Makelushuchild',
              component:Makelushuchild
             }
          ]
        },
      ] 
    },{
      path: '/xingzhebang',
      component:Xingzhebang,
      children:[
          {
          path:'zhuangbeitaolun',
          component: Zhuangbeitaolun
        },{
          path:'ershoujiaoyi',
          component: Ershoujiaoyi
        },{
          path:'tubuhuwai',
          component: Tubuhuwai
        },{
          path:'paobuyueye',
          component: Paobuyueye
        },{
          path:'yundongzhibo',
          component: Yundongzhibo
        },{
          path:'zijiamolv',
          component: Zijiamolv
        },{
          path:'youwenbida',
          component: Youwenbida
        },{
          path:'fatie',
          component: Fatie
        }
      ] 
    },{
      path: '/saishi',
      component:Saishi,
      /*children:[
         {
          path:'quanbu',
          component:Quanbu
         },{
          path:'baomingzhong',
          component:Baomingzhong
         },{
          path:'jinxingzhong',
          component:Jinxingzhong
         },{
          path:'yijieshu',
          component:Yijieshu
         },
      ] */
    },{
      path: '/xingzhetoutiao',
      component:Xingzhetoutiao,
      /*children:[
         {
          path:'quanbu',
          component:Quanbu
         },{
          path:'zhishi',
          component:Zhishi
         },{
          path:'chanpin',
          component:Chanpin
         },{
          path:'xinwen',
          component:Xinwen
         },{
          path:'renwu',
          component:Renwu
         },{
          path:'saishi',
          component:Saishi
         },
      ] */
    },{
      path: '/bangzhuzhongxin',
      component:Bangzhuzhongxin,
      /*children:[
         {
          path:'xinban',
          component:'Xinban'
         },{
          path:'lushu2',
          component:'Lushu2'
         },{
          path:'faxian',
          component:'Faxian'
         },{
          path:'xingzhebang2',
          component:'Xingzhebang2'
         },{
          path:'xiazai',
          component:'Xiazai'
         },{
          path:'bangzhu',
          component:'Bangzhu'
         },
      ] */
    },{
      path: '/lianxiwomen',
      component:Lianxiwomen 
    },{
      path: '/zhinengshebei',
      component:Zhinengshebei 
    } ,{
      path: '/huidaojiuban',
      component:Huidaojiuban 
    } ,{
      path: '/shangchuanyundongshuju',
      component:Shangchuanyundongshuju 
    } ,{
      path: '/denglu',
      component:Denglu 
    } ,{
      path: '/zhuce',
      component:Zhuce 
    } ,{
      name:"xiangqingye",
      path: '/xiangqingye/:id',
      component:Xiangqingye
      /*children:{
        path:"",

      } */
    } 
  ]
})
