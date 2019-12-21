# js-es6
## let和const
let定义一个变量；
const定义一个常量；
```javascript{3}
let a=5;
let a=12;
alert(a)
```
报错：**
let定义变量，不能重复声明

-----------------------
<br>

```javascript
const a=12;
a=5;
alert(a);
```
报错：**
const定义常量，不能赋值

## 块级作用域
```javascript
{}
```

```javascript
if(true){
  let a=12;
}
alert(a);
```
这种写法会报错a未定义，因为a是在if{}这个会计作用域里面定义的，所以外面是获取不到的

------------
<br>

```javascript
{
  let a=12;

}
alert(a);
```
同理
## 解构赋值
```javascript
let {a,b,c}={12,5,8};
console.log(a,b,c);
```
打印结果：12,5,8

-----------------------
<br>

```javascript
let {a,b,c}={a: 12, b: 55, c: 99};
console.log(a,b,c);
```
打印结果：12,55,99

-----------------------
<br>

```javascript
let [a,b,c]=[12,5,8];
console.log(a,b,c);
```
打印结果：12,5,8

<br>

```js
let {a, b} = {d: 10, a: 2, b: 11, d: 31};
			console.log(a,b)
      //打印出2,11
```
## 箭头函数
function (参数){}

(参数)=>{}

如果，有且仅有1个参数，()也可以省
如果，有且仅有1条语句-return，{}可以省


修复this **
```javascript
<!-- function(a,b){
	return a+b
} -->

let sum = (a,b)=>a+b;


alert(sum(12, 88));
```
弹出100

-----------------------
<br>

```javascript
/*function show(){
  return {a: 12, b: 5};
}*/

let show=()=>({a: 12, b: 5});

console.log(show());
```
如果return单个，但正好是个对象，则需要拿括号包住


## 剩余参数-三个点
```javascript
function show(a, b, ...arr){
	console.log(a, b, arr);
}
show(12,5,44,7,85,34,33);
```

-----------------------
打印12,5,44,7,85,34,33;但是...arr只能作为最后一个，而不能在一堆参数中间使用 
<br>


数组展开1
```javascript
let arr=[12,5,8,99,27];
function sum(a,b,c,d,e){
  return a+b+c+d+e;
}
alert(sum(...arr));
```
弹出数组的和
<br>

数组展开2
```javascript
let arr1=[1,2,3];
let arr2=[4,5,6];

let arr=[...arr1, ...arr2];
console.log(arr);
```
打印结果：1,2,3,4,5,6

## map
```javascript
let arr=[100, 98, 37, 28, 19, 96, 56, 67];
let res=arr.map(item=>item>=60);
console.log(arr, res);
```
[100, 98, 37, 28, 19, 96, 56, 67]
<br>
[true,true,false,false,false,true,false,true]

## reduce
```javascript
let arr=[12,55,62,234];
arr.reduce((tmp, item, index)=>{
	if(index<arr.length-1){
		return tmp+item;
	}else{
		return (tmp+item)/arr.length
	}
})

```
上面这个是求平均数的例子
## forEach
```javascript
let arr=[12, 5, 8, 99];

arr.forEach((item, index)=>{
  //alert('第'+index+'个：'+item);
  alert(`第${index}个：${item}`);
});
```
弹出
第0个 12
第一个5 等

```
` 反单引号 `
<!-- 模板字符串 -->
`第${变量a}个：${变量b}`
});
```
## filter
```javascript
let arr=[12, 88, 19, 27, 82, 81, 100, 107];
let arr2=arr.filter(item=>item%2==0);

console.log(arr);
console.log(arr2);
```
打印出arr2为arr1中所有的偶数

filter里面可以写多个条件
比如:
```
filter(item=>item.price>=60 && item.loc=cur_loc)
```

## json
### json转字符串
```javascript
let json={a: 12, b: 5, c: 'blue'};

let str=JSON.stringify(json);
console.log(str);
```

### 字符串转json
```javascript
let str='{"a":12,"b":5,"c":"blue"}';
let json=JSON.parse(str);

console.log(json);
```
## Promise
异步操作--互不干扰，各执行各的（多个操作可以一起进行）

回调套回调
```javascript
$.ajax({
  url: 'data/1.json',
  dataType: 'json',
  success(data1){
	$.ajax({
	  url: 'data/2.json',
	  dataType: 'json',
	  success(data2){
		$.ajax({
		  url: 'data/3.json',
		  dataType: 'json',
		  success(data3){
			console.log(data1, data2, data3);
		  }
		});
	  }
	});
  }
});
```

这个时候Promise出现了
```javascript
let p=new Promise(function (resolve, reject){
  $.ajax({
	url: 'data/1.json',
	dataType: 'json',
	success(data){
	  resolve(data);
	},
	error(res){
	  reject(res);
	}
  });
});

p.then(function (data){
  alert('成功');
  console.log(data);
}, function (res){
  alert('失败');
  console.log(res);
});
```

终极写法：--异步的操作，同步的写法
```javascript
Promise.all([
  $.ajax({url: 'data/1.json', dataType: 'json'}),
  $.ajax({url: 'data/2.json', dataType: 'json'}),
  $.ajax({url: 'data/3.json', dataType: 'json'}),
]).then((arr)=>{
  let [data1, data2, data3]=arr;

  console.log(data1, data2, data3);
}, (res)=>{
  alert('错了');
});
```

也可以
```javascript
Promise.all([
  $.ajax({url: 'data/1.json', dataType: 'json'}),
  $.ajax({url: 'data/2.json', dataType: 'json'}),
  $.ajax({url: 'data/3.json', dataType: 'json'}),
]).then(([data1, data2, data3])=>{
  console.log(data1, data2, data3);
}, (res)=>{
  alert('错了');
});
```

## async和await
```javascript
async function show(){
	let data1=await $.ajax({url: 'data/1.json', dataType: 'json'});
	let data2=await $.ajax({url: 'data/2.json', dataType: 'json'});
	let data3=await $.ajax({url: 'data/3.json', dataType: 'json'});

	console.log(data1, data2, data3);
}
show();
```


```javascript
async function show(){
	let data1=await $.ajax({url: 'data/1.json', dataType: 'json'});
	if(data1.a<10){
		let data2=await $.ajax({url: 'data/2.json', dataType: 'json'});
		alert('a');
	}else{
		let data3=await $.ajax({url: 'data/3.json', dataType: 'json'});
		alert('b');
	}
}

show();
```
## 模块化+webpack
### 模块化
### webpack

1. 创建目录a,进入a ,npm init -y
2. a/mod1.js
```js
export let a=12;
```
3. a/index.js
```js
//引入模块
import * as mod1 from './mod1';
alert(mod1.a);
```

4. a/index.html
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title></title>
		<script type="text/javascript" src="build/bundle.js" ></script>
	</head>
	<body>
		
	</body>
</html>

```
运行 报错，浏览器目前不支持es6模块化，这个时候需要webpack
5. a/创建webpack.config.js
```js
const path=require('path');

module.exports={
	entry: 'index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	}
};

```

6. 然后再a/执行 webpack
7. 运行1.html,弹出12

### 总结
<br>

> 1. entry --入口地址
> 2. output --输出
	必须是个对象
	path-绝对路径
	filename--文件名
> 3. mode--模式
> 4. 所有的当前路径前面加./
## import和export详解
### export  导出

```js
export let a=xx;
export const a=xx;
export {
	xxx,xxx,xxx
}
let a=12,b=5,c=99
export {a,b,c}

import * as mod1 from './mod1';
console.log(mod1) 
输出对象{a:12,b:5,c:99}

export function xx(){}

export class xxx{}

export default xx;
```
### import 导入

```js
import * as mod from "./xxx"

import {a,b,c} from "./xxx"

import xxx from './mod';
console.log(xxx)
(只能引入export default xxx)
	

//模块的代码引入进来，不引入内部成员
import "./1.css"

//异步引入
import("./mod1"); 
是个promise   .then(x=>{}, err=>{})
```
