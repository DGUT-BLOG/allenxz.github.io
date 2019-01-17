---
layout: page
title: About Myself
tags: [about,moon]
date: 2018-12-22
comments: false
---

<link href="/assets/css/typed.css" rel="stylesheet">

<!-- typed start-->
<div id="home" class="tab-pane fade in active">
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
</div>  
<!-- typed end -->
<script src="/assets/js/jquery.min.js" type="text/javascript"></script>
<script src="/assets/js/typed.js" type="text/javascript"></script> 
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
</script>
