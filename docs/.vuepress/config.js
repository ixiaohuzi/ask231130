const nav = require('./config/nav'); // 头部菜单
const sidebar = require('./config/sidebar'); // 侧边栏菜单

module.exports = {
  title: 'Hello',
  description: 'Just playing around',

  // base: '/docs/',

  dest: 'dist', // 打包路径，最外层，与docs同级

  markdown: {
      lineNumbers: true // 代码块显示行号
  },

  themeConfig: {

      lastUpdated: '上次更新',

      smoothScroll: true, // 点击标题跳转时，开启滚动效果，而不是直接跳转

      nav: nav,

      sidebar: sidebar,

  },

  // extraWatchFiles: [
  //     '.01_vuepress/config/nav.js',
  //     '.01_vuepress/config/sidebar.js',
  // ],

}
