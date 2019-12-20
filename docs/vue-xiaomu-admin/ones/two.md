## 大病请求的根路径在调用说明里面 $serverUrldabing
::: tip 提示
const $serverUrldabing = 'http://211.142.52.211:9999/ghdbyl'; 
:::
## 获取需要提交补偿的表单信息
```js
//页面请求接口
let res= await dabingApi.getForm(ID)
//api文件
async getForm(value) {
  return await request.get('/pages/ybcompensatePutAction/IsMemberOrInsuredUser.action?SFZH=' + value, 'dabing');
},
```
## 提交补偿申请
```js
//页面请求接口
let result=await dabingApi.submit(this.dataInfo);
//参数
this.dataInfo={
  //页面展示字段
  'zgxm': '', //姓名
  'sex': '', //性别
  'wage': '', //年龄
  'zgsfzh': '', //身份证号
  'dwmc': '', //所在单位
  'ishy': '', //是否是会员  可改
  'lxdh': '', //电话        可改
  'yhkh': '', //银行卡号     可改
  'ckr': '', //持卡人        可改
  'ckrgx': '', //持卡人关系   可改
  //隐藏字段
  "CKC077": "", //本次大病基金支付金额
  "cysj": "", //出院时间
  "AKC190": "", //结算号
  "ylfze": "", //医疗费总额
  "CKC073": "", //其中基金直接支付的医疗费用
  "zysj": "", //住院时间
  "zfbfje": '', //
  "AKB020": "", //医院编号
  "rzyy": "", //入院医院
  "AKA150": "", //住院次数
  "bzxz": '', //病种
  "bczl": '一次性住院(医保)' //补偿种类 
}, 
//api文件
async submit(value) {
  return await request.post('/pages/ybcompensatePutAction/addCompensatePutApply.action', {
    header: {
      'content-type': 'application/x-www-form-urlencoded', //post请求需要修改请求头
    },
    type:'dabing'
  }, value);
},
```
## 获取补偿记录
```js
//页面请求接口
let res= await dabingApi.getRecord(ID)
//api文件
async getRecord(value) {
  return await request.get('/compensatePutWXAction/compensatePutWXList.action?zgsfzh=' + value, 'dabing');
},
```
## 补偿详情
```js
//页面请求接口
let res = await dabingApi.getDetail(par.id)
//api文件
async getDetail(value) {
  return await request.get('/compensatePutWXAction/compensatePutWXDetailById.action?id=' + value, 'dabing');
},
```