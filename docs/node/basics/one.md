## http模块
```js
const http=require('http');

let server=http.createServer(()=>{   //请求
  console.log('请求来了');
});
//监听
server.listen(8080);

```
**node http.js**<br>
访问localhost:8080,打印出请求来了
### 接受参数
```js
const http=require('http');
let server=http.createServer(function(req, res){
    //req--request, res--response
    res.write('abc');
    res.end();
});
server.listen(8080);
//访问localhost:8080,返回页面上面 abc
```
### 小案例
1. 新建文件夹a
2. a/www
3. a/www/1.html
4. a/www/1.png
a/www/1.html
```js
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8">  
  </head>
  <body>
    <img src="1.png">
  </body>
</html>
```
a/server.js
```js
const http=require('http');
const fs=requre('fs');


let server=http.createServer(function(req, res){
    fs.readFile(`www${req.url}`, (err, buffer)=>{
        if(err){
            res.writeHeader(404);
            res.write('Not Found');
            res.end();
        }else{
            res.write(buffer);  
            res.end();
        }
    });
});
server.listen(8080);
//执行 node server.js
//访问localhost:8080/1.html
//出现一张图，一段aaa,和a/www/1.html一样
```

## 使用包
nodejs中引包<br>
1. 安装  npm i multer
2. 引入
3. 用
```
const multer =require('multer');

```

## fs模块
```js
const fs =require('fs');

//fs.writeFile(path, data, callback);
//fs.readFile(path, callback);

//写
fs.writeFile('./a.txt', 'asdasdsa', (err)=>{
    if(err){
      console.log('失败',err)
    }else{
      console.log("成功")
    }
})


//读
fs.readFile('./a.txt', (err, data)=>{
    if(err){
      console.log('失败',err)
    }else{
      console.log('成功',data)
    }
})
```

## 接收浏览器的get数据
### GET
```js
const http=require('http');
const querystring=require('querystring');

let server=http.createServer(function(req, res){
    let [url, query] = req.url.split('?');

    let get = querystring.parse(query);
    console.log(url, get);

});
server.listen(8080);
```
当然，还有更方便的做法
```js
const http=require('http');
const url=require('url');

let server=http.createServer(function(req, res){
    let {pathname, query} = url.parse(req.url, true);

    console.log(pathname, query);

});
server.listen(8080);
```

## 接收浏览器的post数据
### POST 数据可能是分多次发送
```js
const http=require('http');
const querystring=require('querystring');

let server=http.createServer(function(req, res){
    let arr=[];
    req.on('data', buffer=>{
        arr.push(buffer);
    });
    res.on('end', ()=>{
        let buffer = Buffer.concat(arr);
        let post =querystring.parse(buffer.toString());
    });
    console.log(post);
});
server.listen(8080);
```

## 同时处理get和post请求
```js
const http=require('http');
const url=require('url');
const querystring=require('querystring');
const fs=require('fs');

http.createServer((req, res)=>{
    let path='', get={}, post={};
    if(req.method=='GET'){
        let {pathname, query} = url.parse(req.url, true)
        path=pathname;
        get=query;
        complete();    
    }else{
        path=req.url;
        let arr=[];
        req.on('data', buffer=>{
            arr.push(buffer)
        });
        req.on('end', ()=>{
            let buffer = Buffer.concat(arr);

            post=querystring.parse(buffer.toStrin());
            complete();
        })

    }

    function complete(){
        console.log(path, get, post)
    }

}).listen(8080)

```

## 实现用户注册登录
### 用户的注册和登录
### 注册- /reg?username=xxx&password=xxx
<br>
=>{error: 1, msg: "为什么"}
<br>

### 登录- /login?username=xxx&password=xxx
<br>
=>{error: 1, msg: "为什么"}

```js
const http=require('http');
const url=require('url');
const querystring=require('querystring');
const fs=require('fs');

let users={}


http.createServer((req, res)=>{
    let path='', get={}, post={};
    if(req.method=='GET'){
        let {pathname, query} = url.parse(req.url, true)
        path=pathname;
        get=query;
        complete();    
    }else{
        path=req.url;
        let arr=[];
        req.on('data', buffer=>{
            arr.push(buffer)
        });
        req.on('end', ()=>{
            let buffer = Buffer.concat(arr);

            post=querystring.parse(buffer.toStrin());
            complete();
        })

    }

    function complete(){
        if(path=='/reg'){
            let {username, password}=get;
            if(users[username]){
                res.write(JSON.stringify({error: 1, msg: '此用户已存在'}))；
                res.end();
            }else{
                users[username]=password;
                res.write(JSON.stringify({error: 0, msg: ''}));
                res.end();
            }
        }else if(path=='/login'){
            let {username, password}=get;
            if(!users[username]){
                res.write(JSON.stringify({error: 1, msg: '找不到此用户'}));
                res.end();
            }else if(users[username].password!=password){
                res.write(JSON.stringify({error: 1, msg: '密码不正确'}));
                res.end();
            }else{
                res.write(JSON.stringify({error: 0, msg: ''}));
                res.end();
            }
        }else{
            fs.readFile(`www${path}`, (err, buffer)=>{
                if(err){
                    res.writeHeader(404);
                    res.write('Not Found');
                    res.end();
                }else{
                    res.write(buffer);
                    res.end();
                }
            })
        }
    }

}).listen(8080)
```

/www/1.html
```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <script src="jquery.js" charset="utf-8"></script>
    <script>
    $(function (){
      $('#btn1').click(()=>{
        $.ajax({
          url: '/reg',
          data: {
            username: $('#user').val(),
            password: $('#pass').val()
          },
          dataType: 'json'
        }).then(json=>{
          if(json.error){
            alert(json.msg);
          }else{
            alert('注册成功');
          }
        }, err=>{
          alert('注册失败，请刷新重试');
        });
      });

      $('#btn2').click(()=>{
        $.ajax({
          url: '/login',
          data: {
            username: $('#user').val(),
            password: $('#pass').val()
          },
          dataType: 'json'
        }).then(json=>{
          if(json.error){
            alert(json.msg);
          }else{
            alert('登录成功');
          }
        }, err=>{
          alert('登录失败，请刷新重试');
        });
      });
    });
    </script>
  </head>
  <body>
    用户：<input type="text" id="user" /><br>
    密码：<input type="password" id="pass" /><br>
    <input type="button" value="注册" id="btn1">
    <input type="button" value="登录" id="btn2">
  </body>
</html>

```


访问：localhost:8080/1.html

## assert-断言
### assert断言
```js
const assert=require('assert');

assert(5<3, 'aaa');

//assert.deepEqual(变量, 预期值, msg);
//assert.deepStrictEqual(变量, 预期值, msg);

```
执行

## path-路径
```js{4,6,8,11,13}
const path=require('path');
let str='/root/a/b/1.txt';
//console.log(path.dirname(str));
// -  /root/a/b
//console.log(path.extname(str));
//   .txt
//console.log(path.basename(str));
//  1.txt

//console.log(path.resolve('/root/a/b', '../c', 'build', '..', 'strict'));
// \root\a\c\strict
//console.log(path.resolve(__dirname, 'build'));
// 当前目录下的build  绝对路径
```

## url-网址
```js
const url=require('url');

let str='http://www.bing.com:8080/a/b/1.html?a=1&a=2&a=3';

console.log(url.parse(str, true));

```

## querystring-请求数据
```js
const querystring=require('querystring');

//console.log(querystring.parse("a=12&b=5&c=99"));
console.log(querystring.stringify({a: 12, b: 99, c: 'blue'}));

```
