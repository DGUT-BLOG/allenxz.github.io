---
layout: page
title: About Myself
tags: [about,moon]
date: 2018-12-22
comments: false
---

<!-- <link href="/assets/css/typed.css" rel="stylesheet"> -->

<!-- typed start-->
<!-- <div id="home" class="tab-pane fade in active">
<div class="home-content">
    <div role="home-title">
    <h2>I am
        <div id="typed-strings"><span>Allen Tan</span> <span>Code Rookie</span> <span>Moving</span></div>
        <span id="typing" style="white-space:pre;"></span></h2>
    </div>
    <p>I am just a ordinary person<br/>
    But I want to do something extraordinary
    </p>
</div>
<div id="countdown"></div>
</div>   -->
<!-- typed end -->
<!-- <script src="/assets/js/jquery.min.js" type="text/javascript"></script>
<script src="https://cdn.bootcss.com/typed.js/2.0.9/typed.min.js"></script>
<script>
    $(function(){
        $("#typing").typed({
            stringsElement: $('#typed-strings'),
            typeSpeed: 100,
            backDelay: 1000,
            loop: true,
            contentType: 'html',
            loopCount: false,
        });
    });
</script> -->
<style type="text/css">
    /* 如果光标没出现，而是出现在下一行，那么就是盒子是块级标签，必须得转换成行内标签 */
    h2 {
      display: inline;
    }
    /* 想让的光标闪动的话，复制下面的代码 */
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
    
    <span id="box"></span>
    <script type="text/javascript" src="https://cdn.bootcss.com/typed.js/2.0.5/typed.js"></script>
    <script>
       var boxObj = document.getElementById('box');
       new Typed(boxObj,{
          // 注意：输出的可以是标签，将标签当节点运行。比如下面的h2
          strings: ['<h2>我是打印字typed.js<h2>','我是案例一222','我是最后一个打印出来的'],
          typeSpeed:200 // 速度
       });
    </script>