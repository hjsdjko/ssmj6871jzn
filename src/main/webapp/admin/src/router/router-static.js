import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import pinkunduixiang from '@/views/modules/pinkunduixiang/list'
    import aixinjuanzeng from '@/views/modules/aixinjuanzeng/list'
    import wupinfenlei from '@/views/modules/wupinfenlei/list'
    import juanzenglingqu from '@/views/modules/juanzenglingqu/list'
    import aixinzixun from '@/views/modules/aixinzixun/list'
    import yonghudangan from '@/views/modules/yonghudangan/list'
    import yonghu from '@/views/modules/yonghu/list'
    import pinkunshenqing from '@/views/modules/pinkunshenqing/list'
    import zixunfenlei from '@/views/modules/zixunfenlei/list'
    import gonggaoxinxi from '@/views/modules/gonggaoxinxi/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
export const routes = [{
    path: '/',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center', affix: true}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/pinkunduixiang',
        name: '贫困对象',
        component: pinkunduixiang
      }
      ,{
	path: '/aixinjuanzeng',
        name: '爱心捐赠',
        component: aixinjuanzeng
      }
      ,{
	path: '/wupinfenlei',
        name: '物品分类',
        component: wupinfenlei
      }
      ,{
	path: '/juanzenglingqu',
        name: '捐赠领取',
        component: juanzenglingqu
      }
      ,{
	path: '/aixinzixun',
        name: '爱心资讯',
        component: aixinzixun
      }
      ,{
	path: '/yonghudangan',
        name: '用户档案',
        component: yonghudangan
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/pinkunshenqing',
        name: '贫困申请',
        component: pinkunshenqing
      }
      ,{
	path: '/zixunfenlei',
        name: '资讯分类',
        component: zixunfenlei
      }
      ,{
	path: '/gonggaoxinxi',
        name: '公告信息',
        component: gonggaoxinxi
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
