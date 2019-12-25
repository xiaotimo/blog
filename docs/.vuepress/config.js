module.exports = {
	base: '/', // 用于部署时的子路径
	title: '小提莫博客中心',
	description: '这里是小提莫的博客首页',
	dest: './dist', // 指定 vuepress build 的输出目录
	head: [
	    ['link', { rel: 'icon', href: '/logo.png' }]
	],
	themeConfig: {
		logo: '/logo.png',
		sidebarDepth: 2,
		nav: [{
				text: '主页',
				link: '/'
			},
			{
				text: 'vue小慕读书后台管理',
				link: '/vue-xiaomu-admin/'
			},
			{
				text: 'JavaScript',
				link: '/javascript/'
			},
			{
				text: 'vue',
				link: '/vue/'
			},
			{
				text: 'uni-app',
				link: '/uni-app/'
			},
			{
				text: 'mysql',
				link: '/mysql/'
			},
			{
				text: 'react',
				link: '/react/'
			},
			{
				text: 'node',
				link: '/node/'
			},
			{
				text: 'jquery的前世今生',
				link: '/jquery/'
			},
			{
				text: '关于我',
				link: '/my/'
			}
		],
		sidebar: {
			'/vue-xiaomu-admin/': [
				{
					title: '指南', // 必要的
					// path: '/vue-xiaomu-admin/ones/',      // 可选的, 应该是一个绝对路径
					collapsable: false, // 可选的, 默认值是 true,
					children: [
						''
					]	
				},
				{
					title: '基础阶段', // 必要的
					// path: '/vue-xiaomu-admin/ones/',      // 可选的, 应该是一个绝对路径
					collapsable: false, // 可选的, 默认值是 true,
					children: [
						{
							title: 'Vue进阶', // 必要的
							path: '/vue-xiaomu-admin/basics/one', // 可选的, 应该是一个绝对路径
							collapsable: false, // 可选的, 默认值是 true,
						},
						{
							title: 'Element-UI 入门', // 必要的
							path: '/vue-xiaomu-admin/basics/elementui' // 可选的, 应该是一个绝对路径
						},
						{
							title: '前端框架搭建', // 必要的
							path: '/vue-xiaomu-admin/frame/qianduan' // 可选的, 应该是一个绝对路径
						},
						{
							title: '后端框架搭建', // 必要的
							path: '/vue-xiaomu-admin/frame/houtai' // 可选的, 应该是一个绝对路径
						}
					]
				},
			],
			'/javascript/': [
				{
					title: '指南', // 必要的
					// path: '/vue-xiaomu-admin/ones/',      // 可选的, 应该是一个绝对路径
					collapsable: false, // 可选的, 默认值是 true,
					children: [
						''
					]	
				},
				{
					title: '基础阶段', // 必要的
					// path: '/vue-xiaomu-admin/ones/',      // 可选的, 应该是一个绝对路径
					collapsable: false, // 可选的, 默认值是 true,
					children: [
						{
							title: 'ES6', // 必要的
							path: '/javascript/basics/es6', // 可选的, 应该是一个绝对路径
							collapsable: false,
						},
						{
							title: 'babel编译', // 必要的
							path: '/javascript/basics/babel', // 可选的, 应该是一个绝对路径
						},
						{
							title: '闭包', // 必要的
							path: '/javascript/basics/bibao', // 可选的, 应该是一个绝对路径
						},
						{
							title: '面向对象', // 必要的
							path: '/javascript/basics/obj', // 可选的, 应该是一个绝对路径
						},
						{
							title: 'ES7,8,9,10', // 必要的
							path: '/javascript/basics/es789', // 可选的, 应该是一个绝对路径
						},
						{
							title: '正则表达式', // 必要的
							path: '/javascript/basics/zhengze', // 可选的, 应该是一个绝对路径
						},
						{
							title: 'fetch用法详解-获取数据', // 必要的
							path: '/javascript/basics/fetch', // 可选的, 应该是一个绝对路径
						},
					]
				},
			],
			'/vue/': [
				{
					title: '指南', // 必要的
					// path: '/vue-xiaomu-admin/ones/',      // 可选的, 应该是一个绝对路径
					collapsable: false, // 可选的, 默认值是 true,
					children: [
						''
					]	
				},
				{
					title: '基础阶段', // 必要的
					// path: '/vue-xiaomu-admin/ones/',      // 可选的, 应该是一个绝对路径
					collapsable: false, // 可选的, 默认值是 true,
					children: [
						{
							title: 'VUE', // 必要的
							path: '/vue/basics/vue', // 可选的, 应该是一个绝对路径
							collapsable: false,
						},
					]
				},
			],
			'/uni-app/': [
				{
					title: '指南', // 必要的
					// path: '/vue-xiaomu-admin/ones/',      // 可选的, 应该是一个绝对路径
					collapsable: false, // 可选的, 默认值是 true,
					children: [
						''
					]	
				},
				{
					title: '基础阶段', // 必要的
					// path: '/vue-xiaomu-admin/ones/',      // 可选的, 应该是一个绝对路径
					collapsable: false, // 可选的, 默认值是 true,
					children: [
						{
							title: 'uni-app', // 必要的
							path: '/uni-app/basics/one', // 可选的, 应该是一个绝对路径
							collapsable: false,
						},
					]
				},
				{
					title: '实战阶段', // 必要的
					// path: '/vue-xiaomu-admin/ones/',      // 可选的, 应该是一个绝对路径
					collapsable: false, // 可选的, 默认值是 true,
					children: [
						{
							title: '社交app', // 必要的
							path: '/uni-app/shejiao/start', // 可选的, 应该是一个绝对路径
						},
						{
							title: '商城app', // 必要的
							path: '/uni-app/shop/start', // 可选的, 应该是一个绝对路径
						},
						{
							title: '仿微信app', // 必要的
							path: '/uni-app/wx/start', // 可选的, 应该是一个绝对路径
						}
					]
				},
			],
			'/node/': [
				{
					title: '指南', // 必要的
					// path: '/vue-xiaomu-admin/ones/',      // 可选的, 应该是一个绝对路径
					collapsable: false, // 可选的, 默认值是 true,
					children: [
						''
					]	
				},
				{
					title: '基础阶段', // 必要的
					// path: '/vue-xiaomu-admin/ones/',      // 可选的, 应该是一个绝对路径
					collapsable: false, // 可选的, 默认值是 true,
					children: [
						{
							title: 'node基础', // 必要的
							path: '/node/basics/one', // 可选的, 应该是一个绝对路径
							collapsable: false,
						},
					]
				},
			],
			'/jquery/': [
				{
					title: '指南', // 必要的
					// path: '/vue-xiaomu-admin/ones/',      // 可选的, 应该是一个绝对路径
					collapsable: false, // 可选的, 默认值是 true,
					children: [
						''
					]	
				}
			],
			'/mysql/': [],
			'/my/': []
		}
	}
}
