# Vue 进阶
## $emit和$on
```html
<body>
	<div id="app">
		<button @click="boost">触发事件</button>
	</div>
	<script src="./js/vue.js" type="text/javascript" charset="utf-8"></script>
	<script type="text/javascript">
		var vm = new Vue({
			el: '#app',
			data(){
				return {
					message: 'hello'
				}
			},
			created() {
				// my_events事件的定义 使用this.$on来定义一个事件 ，指定事件的执行对象(执行函数)是this.handleEvents
				this.$on('my_events', this.handleEvents)
			},
			methods:{
				handleEvents(e){
					console.log(this.message, e)
				},
				boost(){
					// $emit来消费 my_events 这个事件，传递参数my params
					this.$emit('my_events', 'my params')
				}
			}
		})
	</script>
</body>
```
## directive 用法
```html
<html>
	<head>
		<meta charset="utf-8">
		<title>指令-侵入式</title>
	</head>
	<body>
		<div id="app">
			<div v-loading="isLoading">{{data}}</div>
			<!-- data就是要展示的数据 -->
			<!-- v-loading  指令 绑定了 状态 isLoading 当isLoading为true就显示 加载中  当isLoading为false,则不显示-->
			<button @click="updategx">更新</button>
			<!-- 触发，改变 loading 的事件 -->
		</div>
		<script src="./js/vue.js" type="text/javascript" charset="utf-8"></script>
		<script type="text/javascript">
			// Vue.directive(需要传入两个参数，第一个就是指令v-xxx,第二个是一个对象)
			// 对象里面有个方法 update  表示界面上的元素发生更新的时候调用   当界面上的isLoading发生变化的时候调用
			// 点击按钮，修改isLoading，调用update
			Vue.directive('loading', {
				update(el, binding, vnode){
					if(binding.value){
						const div = document.createElement('div')
						div.innerText = '加载中...'
						div.setAttribute('id', 'loading')
						div.style.position = 'absolute'
						div.style.left = 0
						div.style.top = 0
						div.style.width = '100%'
						div.style.height = '100%'
						div.style.display = 'flex'
						div.style.justifyContent = 'center'
						div.style.alignItems = 'center'
						div.style.color = 'white'
						div.style.background = 'rgba(0, 0, 0, .7)'
						document.body.append(div)
					}else{
						document.body.removeChild(document.getElementById('loading'))
					}
				}
			})
			var vm = new Vue({
				el: '#app',
				data(){
					return {
						isLoading: false,
						data: ''
					}
				},
				methods: {
					updategx() {
						this.isLoading = true;
						setTimeout(()=>{
							this.data = '用户数据';
							this.isLoading = false
						}, 1000)
					}
				},
			})
		</script>
	</body>
</html>
```
## Vue.extend  $mount
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Vue.extend</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <style>
      #loading-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.7);
        color: #fff;
      }
    </style>
  </head>
  <body>
    <div id="root">
      <button @click="showLoading">显示Loading</button>
    </div>
    <script>
      function Loading(msg) {
				console.log(msg)
        const LoadingComponent = Vue.extend({
          template: '<div id="loading-wrapper">{{msg}}</div>',
          props: {
            msg: {
              type: String,
              default: msg
            }
          },
          name: 'LoadingComponent'
        })
        const div = document.createElement('div')
        div.setAttribute('id', 'loading-wrapper')
        document.body.append(div)
        new LoadingComponent().$mount('#loading-wrapper')
        return () => {
          document.body.removeChild(document.getElementById('loading-wrapper'))
        }
      }
      Vue.prototype.$loading = Loading
      new Vue({
        el: '#root',
        methods: {
          showLoading() {
            const hide = this.$loading('正在加载，请稍等...');
						//定义hide = xxx  会执行 xxx  xxx最后是返回了一个方法 需要hide去接收
            setTimeout(() => {
              hide();//2s后hide()去调用一下接收的那个方法,移除div
            }, 2000)
          }
        }
      })
    </script>
  </body>
</html>

```

## 过滤器
```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>过滤器</title>
		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
	</head>
	<body>
		<div id="app">
			{{message | lower}}
			<!-- 过滤大写，改为小写 -->
		</div>
		<script type="text/javascript">
			new Vue({
				el: '#app',
				filters: {
				  lower(value) {
					return value.toLowerCase()
				  }
				},
				data() {
				  return {
					message: 'Hello Vue'
				  }
				}
			})
		</script>
	</body>
</html>
```
## class 和 style 绑定的高级用法
```
<html>
  <head>
    <title>class 和 style 绑定的高级用法</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  </head>
  <body>
    <div id="root">
      <div :class="['active', 'normal']">数组绑定多个class</div>
      <div :class="[{active: isActive}, 'normal']">数组包含对象绑定class</div>
      <div :class="[showWarning(), 'normal']">数组包含方法绑定class</div>
      <div :style="[warning, bold]">数组绑定多个style</div>
      <div :style="[warning, mix()]">数组包含方法绑定style</div>
      <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">style多重值</div>
    </div>
    <script>
      new Vue({
        el: '#root',
        data() {
          return {
            isActive: true,
            warning: {
              color: 'orange'
            },
            bold: {
              fontWeight: 'bold'
            }
          }
        },
        methods: {
          showWarning() {
            return 'warning'
          },
          mix() {
            return {
              ...this.bold,
              fontSize: 20
            }
          }
        }
      })
    </script>
  </body>
</html>
```