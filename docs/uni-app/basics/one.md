## 时间戳
父组件传递过来时间戳times 子组件使用{{timesa}}
```javascript
export default {
	name: 'xxx',
	props: {
		times: {
			type: String,
			default: ''
		}
	},
	computed: {
		timesa(){
			return this.dateTimeFormatter(parseInt(this.times))
			//这里是13位，如果获取到的数据是10位，则需要*1000
			//return this.dateTimeFormatter(parseInt(this.times)*1000)
		}
	},
	methods: {
		onClick() {
			this.$emit('click')
		},
		dateTimeFormatter (t) {
		  t = new Date(t).getTime()
		  t = new Date(t)
		  var year = t.getFullYear()
		  var month = (t.getMonth() + 1)
		  month = this.checkAddZone(month)
		 
		  var date = t.getDate()
		  date = this.checkAddZone(date)
		 
		  var hour = t.getHours()
		  hour = this.checkAddZone(hour)
		 
		  var min = t.getMinutes()
		  min = this.checkAddZone(min)
		 
		  var se = t.getSeconds()
		  se = this.checkAddZone(se)
		 
		  return year + '-' + month + '-' + date + ' ' + hour + ':' + min + ':' + se
		},
		checkAddZone (num) {
		  return num<10 ? '0' + num.toString() : num
		}
	}
}
```

### 带域名的图片
```js
var htm = res.data.content.replace(/<img/g, "<img class='imgWidth'");
//将获取到的富文本用正则处理，添加class=imgWidth.
//处理过后赋值给htm,然后页面用
<rich-text :nodes="strings"></rich-text>
//绑定strings；
_self.strings = htm;
```
添加样式
```css
.imgWidth{
	width: 100% !important;
}
```

### 不带域名的图片
```js
//_self.$imgurl代表域名
var htm = res.data.documentVO.docContent.replace(/<img src=\"/g, "<img class='imgmax' src=" + '"' + _self.$imgurl);
//将获取到的富文本用正则处理，添加class=imgWidth.
//处理过后赋值给htm,然后页面用
<rich-text :nodes="content"></rich-text>
//绑定content；
_self.content = htm;
```
添加样式
```css
.imgWidth{
	width: 100% !important;
}
```