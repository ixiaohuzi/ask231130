[[toc]]

# 本项目使用到的框架 vuepress

::: tip 提示
想要运行该服务器，必须按照nodejs
:::

## 初始化

``` bash
mkdir vuepress_demo //建立项目文件夹

cd vuepress_demo //进入项目

npm init //初始化项目【后续可直接回车】

npm install -D vuepress //安装vuepress

mkdir docs //建立文档文件夹

echo '#Hello VuePress' > docs/README.md //创建页面首页，并写入 #Hello VuePress

```

## 目录结构如下

```
vuepress_demo
├─── docs
│   ├── README.md
│   └── .vuepress
│       └── config.js
|   |—— notes //放.md格式的文件
└── package.json
```

## config.js 文件内容如下

``` javascript
module.exports = {
  title: 'vuepress_demo',
  description: '',
}
```

## 在 package.json 文件里加两个启动命令

``` javascript
"scripts": {
  "dev": "vuepress dev docs",
  "build": "vuepress build docs"
}
```

## 启动项目

``` bash
npm run dev
```
