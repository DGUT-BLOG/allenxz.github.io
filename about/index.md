---
layout: page
title: About Myself
tags: [about,moon]
date: 2018-12-22
comments: false
---

<link href="/assets/css/typed.css" rel="stylesheet">

<!-- typed start-->
<section id="home" class="tab-pane fade in active">
<article class="home-content">
    <header role="home-title">
    <h2>I am
        <div id="typed-strings"><span>Allen Tan</span> <span>Code Rookie</span> <span>Moving</span> </div>
        <span id="typed" style="white-space:pre;"></span></h2>
    </header>
    <p>I am just a ordinary person<br/>
    But I want to do something extraordinary
    <p> 
</article>
<div id="countdown"></div>
</section>  
<!-- typed end -->
<script src="/assets/js/typed.js" type="text/javascript"></script> 
<script>
    $(function(){

        $("#typed").typed({
            // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
            stringsElement: $('#typed-strings'),
            typeSpeed: 100,
            backDelay: 1000,
            loop: true,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
            callback: function(){ foo(); },
            resetCallback: function() { newTyped(); }
        });

        $(".reset").click(function(){
            $("#typed").typed('reset');
        });

    });

    function newTyped(){ /* A new typed object */ }
    function foo(){ console.log("Callback"); }
</script>
