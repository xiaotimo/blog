## 双向绑定与数据同步原理
### 双向绑定
```js
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <div id="div1">
      <input type="text" v-model="name"><br>
      姓名：{{name}}<br>
      年龄：{{age}}
    </div>
  </body>
  <script>
  let el=document.getElementById('div1');

  let template=el.innerHTML;

  let _data={
    name: 'blue',
    age: 18
  };

  let data=new Proxy(_data, {
    set(obj, name, value){
      //alert(`有人视图设置 ${name}=>${value}`);
      obj[name]=value;

      //数据变了
      //console.log('数据变了');
      render();
    }
  });

  render();

  function render(){
    //渲染
    el.innerHTML=template.replace(/\{\{\w+\}\}/g, str=>{
      str=str.substring(2, str.length-2);

      return _data[str];
    });

    //找所有的v-model
    Array.from(el.getElementsByTagName('input'))
      .filter(ele=>ele.getAttribute('v-model'))
      .forEach(input=>{
        let name=input.getAttribute('v-model');
        input.value=_data[name];

        input.oninput=function (){
          data[name]=this.value;
        };
      });
  }
  </script>
</html>

```
### 数据同步
```js
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <div id="div1">
      姓名：{{name}}<br>
      年龄：{{age}}
    </div>
  </body>
  <script>
  let el=document.getElementById('div1');

  let template=el.innerHTML;

  let _data={
    name: 'blue',
    age: 18
  };

  let data=new Proxy(_data, {
    set(obj, name, value){
      //alert(`有人视图设置 ${name}=>${value}`);
      obj[name]=value;

      //数据变了
      //console.log('数据变了');
      render();
    }
  });

  render();

  function render(){
    el.innerHTML=template.replace(/\{\{\w+\}\}/g, str=>{
      str=str.substring(2, str.length-2);

      return _data[str];
    });
  }
  </script>
</html>

```
## 基础语法
### 插值表达式中写方法
```js
<script src="vue.js" charset="utf-8"></script>
<div id="div1">
  姓名：{{name}}<br>
  年龄：{{age}}<br>
  出生：{{calcBirth()}}
</div>
let vm=new Vue({
el: '#div1',
	data: {
	  name: 'blue',
	  age: 18
	},
	methods: {
	  calcBirth(){
		return new Date().getFullYear()-this.age;
	  }
	}
});
```

### 属性绑定
```js
<strong v-bind:title="age+'岁'">{{name}}</strong>

let vm=new Vue({
	el: '#div1',
	data: {
	  name: 'blue',
	  age: 18
	}
});
```

### 图片
```js
<img :src="url" alt="">
let vm=new Vue({
el: '#div1',
	data: {
	  name: 'blue',
	  age: 18,
	  url: 'https://cn.bing.com/sa/simg/hpc26.png'
	}
});
```

### :class
```js
<strong :class="class_arr">{{name}}</strong>
let vm=new Vue({
    el: '#div1',
    data: {
      name: 'blue',
      age: 18,
      class_str: 'aa bb cc active',
      class_arr: ['aaa', 'bbb', 'ccc', 'active2']
    }
});
```
这里可以是数组，也可以是带空格的字符串
### :style
```js
<strong :style="style_json">{{name}}</strong>
let vm=new Vue({
    el: '#div1',
    data: {
      name: 'blue',
      age: 18,
      style_str: 'width: 200px; background: yellow; display: block;',
      style_json: {width: '200px', background: 'green', display: 'block'}
    }
});
```
这里可以是字符串，也可以是对象
### v-html (绑定html内容，一般用于富文本编辑器的内容展示)

## v-model
### 普通用法
```js
<div id="div1">
	<input type="text" v-model="name">
	<p>
		{{name}}
	</p>
</div>
let vm=new Vue({
	el: '#div1',
	data: {
		name: 'blue'
	}
});
```

### 加法
```js
<div id="div1">
	<input type="text" v-model="n1">+
	<input type="text" v-model="n2">=
	{{parseInt(n1)+parseInt(n2)}}
</div>

let vm=new Vue({
	el: '#div1',
	data: {
		n1: 0, n2: 0
	}
});
```
### 加法的另一种写法（推荐）
```js
<div id="div1">
	<input type="text" v-model="n1">+
	<input type="text" v-model="n2">=
	{{sum()}}
</div>

let vm=new Vue({
	el: '#div1',
	data: {
		n1: 0, n2: 0
	},
	methods: {
		sum(){
			return parseInt(this.n1)+parseInt(this.n2);
		}
	}
});
```
## 事件
### 点一下+5
```js{1}
//v-on:click 简写@click
<div id="div1">
  {{a}}
  <input type="button" value="+1" v-on:click="fn(5)">
  <input type="button" value="+1" @click="fn(5)">
</div>
let vm=new Vue({
    el: '#div1',
    data: {
      a: 12
    },
    methods: {
      fn(n){
        this.a+=n;
      }
    }
});
```

### 加法
```js
<div id="div1">
	<input type="text" v-model="n1">+
	<input type="text" v-model="n2">=
	{{parseInt(n1)+parseInt(n2)}}
</div>

let vm=new Vue({
	el: '#div1',
	data: {
		n1: 0, n2: 0
	}
});
```
### 加法的另一种写法（推荐）
```js
<div id="div1">
	<input type="text" v-model="n1">+
	<input type="text" v-model="n2">=
	{{sum()}}
</div>

let vm=new Vue({
	el: '#div1',
	data: {
		n1: 0, n2: 0
	},
	methods: {
		sum(){
			return parseInt(this.n1)+parseInt(this.n2);
		}
	}
});
```
## v-if和v-show
### v-if和v-show
```js
1.v-if表示条件不成立的话不会渲染，代码中删除
2.v-show则是条件成立的情况下加了个display: none;
```
## v-for循环
### v-for普通循环
```js
<div id="div1">
  <ul>
	<li v-for="user in users">
	  用户名：{{user.name}} 密码：{{user.password}}
	</li>
  </ul>
</div>
let vm=new Vue({
el: '#div1',
	data: {
	  users: [
		{name: 'blue', password: '123456'},
		{name: 'zhangsan', password: '654321'},
		{name: 'lisi', password: '111111'},
	  ]
	}
});
```
### v-for循环带下标
```js
<div id="div1">
  <ul>
	<li v-for="user,index in users">
	  {{index}}.用户名：{{user.name}} 密码：{{user.password}}
	</li>
  </ul>
</div>
let vm=new Vue({
el: '#div1',
	data: {
	  users: [
		{name: 'blue', password: '123456'},
		{name: 'zhangsan', password: '654321'},
		{name: 'lisi', password: '111111'},
	  ]
	}
});
```
### v-for怪异的写法-值，键 in obj
```js
<div id="div1">
  <ul>
	<li v-for="val,name in style">
	  {{name}}: {{val}}
	</li>
  </ul>
</div>
let vm=new Vue({
el: '#div1',
	data: {
	  style: {
		width: '200px',
		height: '300px'
	  }
	}
});
```
### v-for字符串循环
```js
data: {
  str: 'sdfsfgfdgh'
}
<li v-for="s in str">
  {{s}}
</li>
```
### v-for循环数字
```js
<li v-for="i in 50">
  {{i}}
</li>
```
### v-for循环请注意，标准写法要加:key
```js
let vm=new Vue({
el: '#div1',
	data: {
	  users: [
		{id: 1, name: 'blue', password: '123456'},
		{id: 3, name: 'zhangsan', password: '654321'},
		{id: 7, name: 'lisi', password: '111111'},
	  ]
	}
});
<div id="div1">
  <ul>
	<li v-for="user in users" :key="user.id">
	  用户名：{{user.name}} 密码：{{user.password}}
	</li>
  </ul>
</div>
```
## v-once和v-pre
### v-pre跳过渲染，直接输出。v-once只渲染一次
```js
<div id="app">
		<!--v-pre将跳过编译过程-->
		<div><span v-pre>{{msg}}</span>的值是：<span v-cloak>{{msg}}</span></div>
		
		
		<!--v-once的数据只渲染一次-->
		<input type="text" v-model="msg"/>
		<p>{{msg}}</p>
		<p v-once>{{msg}}</p>
</div>
<script src="js/vue.js"></script>
<script>
		var vm = new Vue({
				el:"#app",
				data:{
						msg:"hello"
				}
		})
</script>
```
## v-clock优化渲染体验
### v-clock 处理没有渲染出来的瞬间出现的{{xxx}}
```js
css:*[v-cloak] {display:none}
<div id="div1" v-cloak>
	{{a}}, {{b}}
</div>
let vm=new Vue({
    el: '#div1',
    data: {
      a: 12, b: 5
    }
});
```