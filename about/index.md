---
layout: page
title: About Myself
tags: [about,moon]
date: 2018-12-22
comments: false
---

<style type="text/css">
    h2 {
        display: inline;
    }
.typed-cursor{
    opacity: 1;
    animation: typedjsBlink 0.7s infinite;
    -webkit-animation: typedjsBlink 0.7s infinite;
    animation: typedjsBlink 0.7s infinite;
}
@keyframes typedjsBlink{
    50% { opacity: 0.0; }
}
@-webkit-keyframes typedjsBlink{
    0% { opacity: 1; }
    50% { opacity: 0.0; }
    100% { opacity: 1; }
}
.typed-fade-out{
    opacity: 0;
    transition: opacity .25s;
    -webkit-animation: 0;
    animation: 0;
}
</style>
    
<div id="box"></div>
<script type="text/javascript" src="https://cdn.bootcss.com/typed.js/2.0.5/typed.js"></script>
<script>
    var boxObj = document.getElementById('box');
    new Typed(boxObj,{
        strings: ['<h2>我是打印字typed.js<h2>','我是案例一222','我是最后一个打印出来的'],
        typeSpeed:200 // 速度
    });
</script>
