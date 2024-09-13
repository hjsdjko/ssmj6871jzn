import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import pinkunshenqingList from '../pages/pinkunshenqing/list'
import pinkunshenqingDetail from '../pages/pinkunshenqing/detail'
import pinkunshenqingAdd from '../pages/pinkunshenqing/add'
import pinkunduixiangList from '../pages/pinkunduixiang/list'
import pinkunduixiangDetail from '../pages/pinkunduixiang/detail'
import pinkunduixiangAdd from '../pages/pinkunduixiang/add'
import yonghudanganList from '../pages/yonghudangan/list'
import yonghudanganDetail from '../pages/yonghudangan/detail'
import yonghudanganAdd from '../pages/yonghudangan/add'
import aixinjuanzengList from '../pages/aixinjuanzeng/list'
import aixinjuanzengDetail from '../pages/aixinjuanzeng/detail'
import aixinjuanzengAdd from '../pages/aixinjuanzeng/add'
import wupinfenleiList from '../pages/wupinfenlei/list'
import wupinfenleiDetail from '../pages/wupinfenlei/detail'
import wupinfenleiAdd from '../pages/wupinfenlei/add'
import juanzenglingquList from '../pages/juanzenglingqu/list'
import juanzenglingquDetail from '../pages/juanzenglingqu/detail'
import juanzenglingquAdd from '../pages/juanzenglingqu/add'
import zixunfenleiList from '../pages/zixunfenlei/list'
import zixunfenleiDetail from '../pages/zixunfenlei/detail'
import zixunfenleiAdd from '../pages/zixunfenlei/add'
import aixinzixunList from '../pages/aixinzixun/list'
import aixinzixunDetail from '../pages/aixinzixun/detail'
import aixinzixunAdd from '../pages/aixinzixun/add'
import gonggaoxinxiList from '../pages/gonggaoxinxi/list'
import gonggaoxinxiDetail from '../pages/gonggaoxinxi/detail'
import gonggaoxinxiAdd from '../pages/gonggaoxinxi/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'pinkunshenqing',
					component: pinkunshenqingList
				},
				{
					path: 'pinkunshenqingDetail',
					component: pinkunshenqingDetail
				},
				{
					path: 'pinkunshenqingAdd',
					component: pinkunshenqingAdd
				},
				{
					path: 'pinkunduixiang',
					component: pinkunduixiangList
				},
				{
					path: 'pinkunduixiangDetail',
					component: pinkunduixiangDetail
				},
				{
					path: 'pinkunduixiangAdd',
					component: pinkunduixiangAdd
				},
				{
					path: 'yonghudangan',
					component: yonghudanganList
				},
				{
					path: 'yonghudanganDetail',
					component: yonghudanganDetail
				},
				{
					path: 'yonghudanganAdd',
					component: yonghudanganAdd
				},
				{
					path: 'aixinjuanzeng',
					component: aixinjuanzengList
				},
				{
					path: 'aixinjuanzengDetail',
					component: aixinjuanzengDetail
				},
				{
					path: 'aixinjuanzengAdd',
					component: aixinjuanzengAdd
				},
				{
					path: 'wupinfenlei',
					component: wupinfenleiList
				},
				{
					path: 'wupinfenleiDetail',
					component: wupinfenleiDetail
				},
				{
					path: 'wupinfenleiAdd',
					component: wupinfenleiAdd
				},
				{
					path: 'juanzenglingqu',
					component: juanzenglingquList
				},
				{
					path: 'juanzenglingquDetail',
					component: juanzenglingquDetail
				},
				{
					path: 'juanzenglingquAdd',
					component: juanzenglingquAdd
				},
				{
					path: 'zixunfenlei',
					component: zixunfenleiList
				},
				{
					path: 'zixunfenleiDetail',
					component: zixunfenleiDetail
				},
				{
					path: 'zixunfenleiAdd',
					component: zixunfenleiAdd
				},
				{
					path: 'aixinzixun',
					component: aixinzixunList
				},
				{
					path: 'aixinzixunDetail',
					component: aixinzixunDetail
				},
				{
					path: 'aixinzixunAdd',
					component: aixinzixunAdd
				},
				{
					path: 'gonggaoxinxi',
					component: gonggaoxinxiList
				},
				{
					path: 'gonggaoxinxiDetail',
					component: gonggaoxinxiDetail
				},
				{
					path: 'gonggaoxinxiAdd',
					component: gonggaoxinxiAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
