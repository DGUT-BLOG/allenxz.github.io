---
layout: post
title: "Vue-router"
date: 2018-12-22
tags: [前端,Vue]
feature: /images/in-post/20181222_feature.png
comments: true
---



>vue-router作为前端路由，基本原理是通过锚点值的改变，替换innerHTML的值，使得页面局部刷新。而不需要重新加载整个页面，优化用户体验

### vue-router基本使用步骤

1.引入vue-router(核心插件)对象 
2.安装插件 
3.创建一个路由对象 
4.配置路由对象 
5.指定路由改变局部位置 
6.将配置好的路由对象关联到vue实例中

### 嵌套路由

用途:原本需要局部刷新的区域中还包含着需要局部刷新的区域是需要用到。  

步骤： 
1.router-view中包含router-view 
2.路由规则中包含子路由

### 前端实现权限控制

需要： 
1.路由meta元数据 
<small>meta是对路由规则是否需要验证权限的配置</small> 
2.路由钩子 
<small>权限控制的函数执行</small> 

```JavaScript
router.beforeEach(function(to,from,next){...})  
--to:到哪个页面去  
--from:从哪个页面来  
--next：直接放行 or 重定向 or 取消用户导航行为
```

具体的代码我写了个小demo，下面可以下载。  
①主要有简陋的登录、注册、音乐三个页面。  
②默认首页在登陆页面，点击头部的链接会局部刷新，在登录页面的url加上/viper会加载嵌套局部刷新的会员登录页面。  
③直接在地址栏输入音乐页面的url会提醒你先登录，然后跳转到登录页面  
<a href="../code/v-router.html" download="vue-router">Demo</a>
