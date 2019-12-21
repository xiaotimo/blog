语言发展->机器语言->汇编->低级语言（面向过程）->高级语言（面向对象）->模块->API
<br>
面向对象：<br>
```1.封装性```<br>
```2.继承性```

### es5的面向对象写法
```javascript
function Person(name,age){
	this.name=name;
	this.age=age;
}

Person.prototype.show = function(){
	alert(this.name)
}

var p=new Person('blue', 18);
p.show()
```
### es6的面向对象写法
```javascript
class Person{
	constructor(name, age) {
			this.name=name;
		this.age=age;
	}
	
	show(){
		alert(this.name)
	}
}
let p=new Person('blue', 18);
p.show()
```

### es6继承
```javascript
class Person{
	constructor(name, age) {
			this.name=name;
		this.age=age;
	}
	
	show(){
		alert(this.name)
	}
}
//-----------------------
class Worker extends Person{
	constructor(name, age, job) {
		super(name,age);
		this.job=job;
	}
	
	showjob(){
		alert(this.job)
	}
}

let w=new Worker('blue', 18, '打杂的');
w.show();//blue
w.showjob();//打杂的
```