module.exports = {
	base: '/', // 用于部署时的子路径
	title: '小提莫博客中心',
	description: '这里是小提莫的博客首页',
	dest: './dist', // 指定 vuepress build 的输出目录
	themeConfig: {
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
			// {
			// 	text: 'react',
			// 	link: '/react/'
			// },
			// {
			// 	text: 'nodejs',
			// 	link: '/nodejs/'
			// },
			// {
			// 	text: 'mysql',
			// 	link: '/mysql/'
			// },
			// {
			// 	text: 'un-iapp',
			// 	link: '/uniapp/'
			// },
			// {
			// 	text: '关于我',
			// 	link: '/my/'
			// }
		],
		sidebar: {
			'/vue-xiaomu-admin/': [
				{
					title: '基础阶段', // 必要的
					// path: '/vue-xiaomu-admin/ones/',      // 可选的, 应该是一个绝对路径
					collapsable: false, // 可选的, 默认值是 true,
					children: [{
							title: 'Vue进阶', // 必要的
							path: '/vue-xiaomu-admin/basics/one', // 可选的, 应该是一个绝对路径
							collapsable: false, // 可选的, 默认值是 true,
						},
						['/vue-xiaomu-admin/ones/two', '第二个侧边栏']
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
							title: 'ES6', // 必要的
							path: '/javascript/basics/vue', // 可选的, 应该是一个绝对路径
							collapsable: false,
						},
					]
				},
			]
			// 			],
			// 			'/nodejs/': [
			// 				['http', "http模块"],
			// 				['1', "使用包"],
			// 				['fs', "fs模块"],
			// 				['get', "接收浏览器的get数据"],
			// 				['post', "接收浏览器的post数据"],
			// 				['zh', "同时处理get和post请求"],
			// 				['user', "实现用户注册登录"],
			// 				['assert', "assert-断言"],
			// 				['path', "path-路径"],
			// 				['url', "url-网址"],
			// 				['querystring', "querystring-请求数据"],
			// 				// {
			// 				// 	title: '开发中...',
			// 				// 	collapsable: false,
			// 				// 	children: []
			// 				// },
			// 			],
			// 			'/mysql/': [
			// 				// ['desc', "4大语句"],
			// // 				{
			// // 					title: '开发中...',
			// // 					collapsable: false,
			// // 					children: []
			// // 				},
			// 			],
			// 			'/uniapp/': [
			// 				['1', "组件内时间戳转换"],
			// 				['2', "富文本图片处理"],
			// // 				{
			// // 					title: '开发中...',
			// // 					collapsable: false,
			// // 					children: []
			// // 				},
			// 			],
			// 			'/my/': [],
			// 			'/vue-cli/': [
			// 				{
			// 					title: '创建项目',
			// 					collapsable: true,
			// 					children: [
			// 						['2', "初始化项目"]
			// 					]
			// 				}
			// 			]
			// '/life/': [
			// 	'',
			// 	'one',
			// 	'two'
			// ]
		}
	}
}
