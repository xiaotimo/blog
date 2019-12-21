babel编译

创建文件夹a
进入a,执行命令
npm init -y
npm i @babel/core @babel/cli @babel/preset-env -D

创建src目录
a/src/1.js
```jsvascript
let a=12;
let b=5;

let show=(a,b)=>a+b;

alert(show(a,b))
```
a/1.html
```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<script src="src/1.js"></script>
	</head>
	<body>
	</body>
</html>

```
将a/src下面的文件编译为a/dest/
在package.json
"scripts": {
	"build": "babel src -d dest"
},

创建a/.babelrc
```
{
	"presets": ["@babel/preset-env"]
}
```

npm run build

这个时候a/ 会多出dest/1.js
```
"use strict";

var a = 12;
var b = 5;

var show = function show(a, b) {
  return a + b;
};

alert(show(a, b));
```

然后将a/1.html中的js引用路径改为
```<script src="dest/1.js"></script>```