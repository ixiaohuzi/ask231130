[[toc]]

# 使用 express 做一个简单的前端服务器

::: tip 提示
想要运行该服务器，必须按照nodejs
:::

## 那就开始叭

``` bash
mkdir express_server //建立项目文件夹

cd express_server //进入项目

npm init //初始化项目【后续可直接回车】

npm i express //安装express

mkdir static //建立文件夹，用于存放静态文件，比如：html、css、js

建一个文件，server.js，并引入以下代码

node server //启动服务器

```

``` javascript
const express = require('express')

const app = express()

app.use(express.static(__dirname+'/static'))

app.get('/test',(req,res)=>{
    res.send({
        name:'tom',
        age:18
    })
})

app.listen(5005,(error)=>{
    if(!error){
        console.log('服务器启动成功了。')
        console.log('http://localhost:5005/test')
        console.log('http://localhost:5005')
    }
})
```

::: tip 自定义名字1 这是一个提示
:::

::: warning 自定义名字2 这是一个警告
:::

::: danger 自定义名字3 这是一个危险警告
:::

::: details 自定义名字4 这是一个详情块，在 IE / Edge 中不生效

```js
console.log('你好，VuePress！')
```

:::