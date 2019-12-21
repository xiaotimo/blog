### fetch
get请求
```js
<script type="text/javascript">
	window.onload = function(){
		fetch('https://api.xiaotimo.top/api/article/article')
			.then(res=>res.json())
			.then(data=>console.log(JSON.stringify(data)))
			.catch(err=>{
				console.log(JSON.stringify(err))
			})
	}
</script>
```
fetch 异步请求
```js
<div id="btn">点击请求数据</div>
<script type="text/javascript">
	window.onload = function(){
		let oBtn=document.getElementById('btn');
		oBtn.onclick = async function(){
			let res = await fetch('https://api.xiaotimo.top/api/article/article');
			let str = await res.json();
			console.log(str)
		}
	}
</script>
```
请求blob
```js
window.onload=function (){
  let oVideo=document.getElementById('video');
  let oBtn=document.getElementById('btn1');
  oBtn.onclick=async function (){
	//1.请求
	let res=await fetch('https://api.xiaotimo.top/data/1.mp4');
	//2.解析
	let data=await res.blob();
	let url=URL.createObjectURL(data);

	oVideo.src=url;
  };
};
<input type="button" value="读取" id="btn1">
<video id="video" /></video>
```