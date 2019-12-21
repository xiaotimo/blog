## 正则语法
1. 正则——工具
2. 匹配字符串
3. 校验——安全性
4. 采集
5. 用
```js
// js分格
let re = new RegExp('\\d+', 'g');
定界符——//
// perl分格
let re=/\d+/g;
```
------------------------
/\.(jpg|png|gif)/i
<br>
1.jpg
a.JPG
a.Jpg

-----------------------


search
i

-----------------------

g-global

模式：贪婪匹配

-----------------------

match
g
量词：

-----------------------

search/match/replace
ig

\d
{n}/+

-----------------------

元字符-[]

1.任何一个
/a[abc]q/   aaq,abq,acq
            abbq    ×

2.范围
/[a-z]/i
/[0-9]/

/[a-z0-9]/

[3-59]  [3-5 9]

3.排除
[^a-z0-9]

-----------------------

转义
\d    [0-9]
\w    [a-z0-9_]
\s    空白
.     任意字符

\D    [^0-9]
\W    [^a-z0-9_]
\S    非空白

-----------------------

量词——数量
{n}       /a{6}/    /\d{11}/
{n,m}     /\d{5,12}/
{n,}      /\w{6,}/
+   {1,}
?   {0,1}

.js/.jsx

/\.jsx?/    .js  .jsx

a 任何字符5-18 z
/a.{5,18}z/

str.match(re)
str.search(re)

-----------------------

修饰符=>条件
^ 行首
$ 行尾

-----------------------

/\.js/      1.js.png    1.html.js.png
/\.js$/i    1.js    1231.txt.js

/^https?:\/\//

-----------------------

12+8/2

/\.jpg|gif|png$/

/(\.jpg)|(gif)|(png$)/

-----------------------

或
0-9999
1位  0~9
2位  10~99
3位  100~999
4位  1000~9999

-----------------------

/\d|[1-9]\d|[1-9]\d\d|[1-9]\d\d\d/

/\d|[1-9]\d{1,3}/


0-99999999999
/\d|[1-9]\d{1,8}/

-----------------------

search/match/replace/split
test

ig

[]

{n}
{n,m}
+
?

^$

|、()

-----------------------

## search
```javascript
let str='weqesdfaerq';
let re=/a/;
alert(str.search(re));
```
弹出了a第一次出现的位置的下标

---------------------------

```javascript
let str='Aweqesdfaerq';
let re=/a/i;

alert(str.search(re));
```
i表示忽略大小写--
<br>
这里弹出0，因为第0个就是a,如果去掉i那么弹出的就是8了
## match
```javascript
let str='f34rrfsdf 45tsdgsrdg 5terg56456fdghdr675 dsf3434535645645645674567';
let re=/\d+/g;

alert(str.match(re));
```
弹出所有的数字组成的结果，如果数字之间有空格则按两个处理
（34,45,5,6,56456,675,3434535645645645674567）
## replace
```javascript
let str='asdfde we fsadfas weAr efAf';

alert(str.replace(/a/gi, '*'));
```
将所有的a用*代替，忽略大小写

## 换行
```javascript
window.onload=function (){
  let oDiv=document.getElementById('div1');
  let str='sdfsf##dfasderferfef##dfdfsgdsgf##dgdfbfdghg';

  oDiv.innerHTML=str.split(/##/g).map(item=>{
	return `<p>${item}</p>`;
  }).join('');
};
```
遇到##就换行
----------------------------
结果<br>
sdfsf
<br>
dfasderferfef
<br>
dfdfsgdsgf
<br>
dgdfbfdghg
-----------------------------
```javascript
window.onload=function (){
  let oDiv=document.getElementById('div1');
  let str='sdfsf##dfasderferfef##dfdfsgdsgf##dgdfbfdghg';

  oDiv.innerHTML=str.replace(/##/g, '<br/>')
};
```

## 去掉所有的空格
```javascript
let str=' dffsdfsd   dfasdfsadf asdf asdf asdf  ';
alert(str.replace(/\s+/g, ''));
};
```

## 校验QQ号码
```javascript
window.onload=function (){
  let oTxt=document.getElementById('txt1');
  let oBtn=document.getElementById('btn1');

  oBtn.onclick=function (){
	let re=/^[1-9]\d{4,11}$/;

	if(re.test(oTxt.value)){
	  alert('通过');
	}else{
	  alert('不对');
	}
  };
};
<input type="text" id="txt1">
<input type="button" value="校验" id="btn1">
```

## 匹配文件名
```javascript
window.onload=function (){
	let oTxt=document.getElementById('txt1');
	let oBtn=document.getElementById('btn1');

	oBtn.onclick=function (){
		let re=/\.(jpg|gif|png)$/i;

		if(re.test(oTxt.value)){
			alert('通过');
		}else{
			alert('不对');
		}
	};
};
```

## 匹配数字
```javascript
window.onload=function (){
	let oTxt=document.getElementById('txt1');
	let oBtn=document.getElementById('btn1');

	oBtn.onclick=function (){
		let re=/^(\d|[1-9]\d{1,3})$/;

		if(re.test(oTxt.value)){
			alert('通过');
		}else{
			alert('不对');
		}
	};
};
```
-------------
```javascript
window.onload=function (){
	let oTxt=document.getElementById('txt1');
	let oBtn=document.getElementById('btn1');

	oBtn.onclick=function (){
		let re=/^(\d|[1-9]\d+)$/;

		if(re.test(oTxt.value)){
			alert('通过');
		}else{
			alert('不对');
		}
	};
};
```
## 手机号码验证
```javascript
var reg = /^1[0-9]{10}$/;
var flag = reg.test('15343488697');
```
## 身份证号码验证
```javascript
^\d{15}$)|(^\d{17}([0-9]|X)$
```
