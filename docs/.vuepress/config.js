module.exports = {
	title: '小提莫博客中心',
	description: '这里是小提莫的博客首页',
	themeConfig: {
		sidebarDepth: 2,
		nav: [{
				text: 'Home',
				link: '/'
			},
			{
				text: 'vue小慕读书后台管理',
				link: '/vue-xiaomu-admin/ones/one'
			},
			{
				text: 'bar',
				link: '/bar/'
			},
		],
		sidebar: {
			'/vue-xiaomu-admin/': [{
				title: '一级大标题', // 必要的
				// path: '/vue-xiaomu-admin/ones/',      // 可选的, 应该是一个绝对路径
				collapsable: false, // 可选的, 默认值是 true,
				children: [{
						title: '第一个侧边栏', // 必要的
						path: '/vue-xiaomu-admin/ones/one', // 可选的, 应该是一个绝对路径
						collapsable: false, // 可选的, 默认值是 true,
					},
					['/vue-xiaomu-admin/ones/two', '第二个侧边栏']
				]
			}],
			// '/life/': [
			// 	'',
			// 	'one',
			// 	'two'
			// ]
		}
	}
}
