## 什么是闭包
一个拥有许多变量和绑定了这些变量的环境的表达式（通常是一个函数），因而这些变量也是该表达式的一部分。闭包的特点：
1. 作为一个函数变量的一个引用，当函数返回时，其处于激活状态。
2. 一个闭包就是当一个函数返回时，一个没有释放资源的栈区。
#### 简单的说，Javascript允许使用内部函数---即函数定义和函数表达式位于另一个函数的函数体内。而且，这些内部函数可以访问它们所在的外部函数中声明的所有局部变量、参数和声明的其他内部函数。当其中一个这样的内部函数在包含它们的外部函数之外被调用时，就会形成闭包。

闭包1
```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <script>
    window.onload=function (){
      var aBtn=document.getElementsByTagName('input');

      for(var i=0;i<aBtn.length;i++){
        (function (i){
          aBtn[i].onclick=function (){
            alert(i);
          };
        })(i);
      }
    };
    </script>
  </head>
  <body>
    <input type="button" value="aaa">
    <input type="button" value="bbb">
    <input type="button" value="ccc">
  </body>
</html>

```

闭包的本质，（留着，别删），正常执行函数之后就被回收了，消失了
```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <script>
    function show(){
      let a=12;

      document.onclick=function (){
        alert(a);
      };
    }
    show();
    </script>
  </head>
  <body>

  </body>
</html>

```