# 嘿嘿 大大标题
sakbdkasbdkasbdkbaskdbksad
asd
safdas
f
sadf
sdfg
sd
fgf
```js
uni.request({
	url: 'http://ftu.yangqgh.org.cn/publiccms/api/directive/contentList?categoryId=134&pageIndex=1&count=5',
	method: 'GET',
	data: {
		
	},
	success: res => {
		
	}
})
```
```js
uni.request({
	url: 'http://ftu.yangqgh.org.cn/publiccms/api/directive/contentList?categoryId=134&pageIndex=1&count=5',
	method: 'GET',
	data: {
		
	},
	success: res => {
		
	}
})
```
## 轮播图
```js
uni.request({
	url: 'http://ftu.yangqgh.org.cn/publiccms/api/directive/contentList?categoryId=134&pageIndex=1&count=5',
	method: 'GET',
	data: {
		
	},
	success: res => {
		
	}
})
```

## 滚动公告
```js
uni.request({
	url: 'http://ftu.yangqgh.org.cn/publiccms/api/directive/contentList?categoryId=133&pageIndex=1&count=5',
	method: 'GET',
	data: {
		
	},
	success: res => {
		
	}
})
```

##  文章详情页
```js
//${id}表示从列表传递过来的文章id
uni.request({
	url: this.$serverUrl + '/content/'+`${id}`, 
	method: 'GET',
	data: {},
	success: (res) => {
		
	}
});
```

## 文章列表
::: tip 提醒
调用方式基本是一致的，这里写个案例。然后参数我都写出来
:::
栏目名称|ID|栏目名称|ID
--|:---|:--|--
职工风采|138|劳动创新|139
素质提升|140|职工运动会|141
幸福女工|175|家资讯-工会新闻|175
家资讯-公交建通|161|家资讯-文教卫生|162
家资讯-财贸职工|191|家资讯-煤炭电力|192
家资讯-精神文明建设|158|家资讯-党建园地|159
家资讯-工会新闻（取3条数据）|134|财务-财务预决算|163
专题中心-宣传教育|138|专题中心-职工文化|139
专题中心-女工动态|201|专题中心-劳模管理|140
专题中心-五小竞赛|141|专题中心-创新工作室|202
资料中心-党章党规|144|资料中心-法律法规|145
资料中心-政策文件|146|资料中心-下载专区|193
```js
uni.request({
	url: this.$serverUrl + '/api/directive/contentList',
	method: 'GET',
	data: {
		categoryId: '栏目id-比如上面职工风采的138',
		pageIndex: pageIndex, //分页，第几页
		count:count  //条数，每一页显示多少条
	},
	success: res => {
		let datas = res.data.page.list.map(item=>{
			if(item.cover == null){
				item.cover = '/static/loading/logo.png'
			}else{
				item.cover = this.$serverUrl + "/webfile/" + item.cover
			}
			
			//返回来的图片地址需要自己拼接
			return {
				id: item.id,
				title: item.title,
				cover: item.cover,
				desc: item.description,
				times: item.createDate,
				author: item.author
			}
		})
		if(type=='first'){
			this.listData=[]
		}
		this.listData =[...this.listData,...datas];
		console.log(this.listData.length,res.data.page.totalCount)
		if(this.listData.length<res.data.page.totalCount){
			this.status = 'more';
		}else{
			this.status = 'noMore';
		}
		
	}
});
```

## 微官网（所有文章列表集合）
::: tip 提醒
本接口分2步执行。1:获取所有栏目id。2:根据栏目中某个栏目的id去获取文章列表
:::
>获取所有栏目
```js
uni.request({
	url: apiurl + "/demo/categoryList.json",
	method: 'GET',
	success: res => {
		//console.log(res)
		let arr = res.data.data.map((item, index)=>{
			return {
				name: item.name,
				newsid: item.id
			}
		});
		let arrs = arr.filter(item =>item.name !== "四季送") // 过滤掉四季送这个栏目
		this.tabBars = arrs;
		this.tabBars.forEach((tabBar) => {
			this.newsList.push({
				data: [],
				refreshing: false,
				refreshFlag: false,
				refreshText: "",
				requestParams: {
					columnId: tabBar.newsid,
					minId: 1,
					pageSize: 10,
				},
				isLoading: false,
				loadingText: '加载中...',
				ismore: true
			});
		});
		uni.hideLoading()
		this.getList(0);  //去请求数组第一个下标代表的栏目，展示数据
	},
	fail: () => {},
	complete: () => {}
});
```

>请求具体的列表
```js
uni.request({
	url: apiurl + '/api/directive/contentList',
	data: {
		categoryId: activeTab.requestParams.columnId,
		pageIndex: activeTab.requestParams.minId,
		count: 10
	},
	success: (result) => {
		//console.log(result)
		if (result.statusCode !== 200) {
			return;
		}
		//console.log(result.data.page.list.length)
		if(activeTab.requestParams.minId < result.data.page.nextPage && result.data.page.list && result.data.page.list.length != 0){
			const data = result.data.page.list.map((news) => {
				return {
					id: news.id,
					newsid: news.id,
					article_type: 1,
					datetime: news.createDate,
					title: news.title,
					image_url: apiurl + "/webfile/" + news.cover,
					source: news.author,
					post_id: news.id
				};
			});
			
			if (action === 1) {
				activeTab.data = data;
				this.refreshing = false;
			} else {
				activeTab.data = activeTab.data.concat(data);
			}
			activeTab.loadingText = '上拉加载更多'
			activeTab.ismore = true;
			this.finished()
		}else if(activeTab.requestParams.minId === result.data.page.nextPage){
			//console.log(activeTab.ismore);
			//console.log(result.data.page.nextPage);
			//console.log(result.data.page.totalPage)
			const data = result.data.page.list.map((news) => {
				if(news.cover == null){
					news.cover = '/static/loading/logo.png'
				}else{
					news.cover = apiurl + "/webfile/" + news.cover
				}
				return {
					id: news.id,
					newsid: news.id,
					article_type: 1,
					datetime: news.createDate,
					title: news.title,
					image_url: news.cover,
					source: news.author,
					post_id: news.id
				};
			});
			
			if (action === 1) {
				activeTab.data = data;
				this.refreshing = false;
			} else {
				if(activeTab.ismore){
					activeTab.data = activeTab.data.concat(data);
				}
			}
			activeTab.ismore = false;
			activeTab.loadingText = '没有更多数据了!'
			
			this.finished()
		}else{
			activeTab.loadingText = '没有更多数据了！';
			activeTab.ismore = false;
		}
		
	},
	fail: (err) => {
		uni.showModal({
			content: err.errMsg,
			showCancel: false
		})
	},
	complete: (e) => {
		activeTab.isLoading = false;
	}
});
```