>学习廖雪峰老师 JavaScript 教程的系列笔记

#### 1.装饰器

#### 2.map/reduce  
[MapReduce: Simplified Data Processing on Large Clusters](http://research.google.com/archive/mapreduce.html)  

map()  

```javascript
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];  
arr.map(String); // ['1', '2', '3', '4', '5', '6', '7', '8', '9']
```

reduce()  

`[x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)`

**tips:** 
字符转数字->v*1 
**notices:** 
parseInt(string,radix); // radix->按x进制转换 
Number(value); // 仅接收一个参数

#### 3.filter()  
巧妙去除数组中重复元素  

```javascript
arr.filter(function (element, index, self) {  
    return self.indexOf(element) === index;  
});  
//key->indexOf元素首次出现的位置
```

#### 4.sort()  
sort会改变Array  

#### 5.闭包  
通俗的说：闭包就是携带状态的函数，并且它的状态可以完全对外隐藏起来。  

返回闭包时牢记的一点：返回函数不要引用任何循环变量，或者后续会发生变化的变量。  
如果一定要引用循环变量:再创建一个函数，用该函数的参数绑定循环变量当前的值，无论该循环变量后续如何更改，已绑定到函数参数的值不变  

创建一个匿名函数并立刻执行  

```JavaScript
(function (x){
    return x * x;
})(3); // 9
```

闭包使用例子--普通编程  

```javascript
function make_pow(n) {  
    return function (x) {  
        return Math.pow(x, n);  
    }  
}  
// 利用返回闭包创建两个新函数:  
var pow2 = make_pow(2);  
var pow3 = make_pow(3);  
  
console.log(pow2(5)); // 25  
console.log(pow3(7)); // 343
```

闭包使用例子--Web开发  

```javascript
function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

//然后将这些函数绑定到点击事件上
document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;
```

#### 6.箭头函数  

notices：  
```javascript
x => { foo: x }     //× 
x => ({ foo: x }    //√  
```

2. 箭头函数完全修复了this的指向，this总是指向词法作用域 
由于this在箭头函数中已经按照词法作用域绑定了，所以，用call()或者apply()调用箭头函数时，无法对this进行绑定，即传入的第一个参数被忽略。

#### 7.generator

generator由`function*`定义（注意多出的`*`号），并且，除了`return`语句，还可以用`yield`返回多次。

调用generator对象有两个方法：

1. 不断调用generator的`next（）`方法
2. 直接用`for...of`循环迭代generator对象

generator的好处：将异步回调代码变成"同步"代码

**without generator**

```javascript
ajax('http://url-1', data1, function (err, result) {
    if (err) {
        return handle(err);
    }
    ajax('http://url-2', data2, function (err, result) {
        if (err) {
            return handle(err);
        }
        ajax('http://url-3', data3, function (err, result) {
            if (err) {
                return handle(err);
            }
            return success(result);
        });
    });
});
```

with generator

```javascript
try {
    r1 = yield ajax('http://url-1', data1);
    r2 = yield ajax('http://url-2', data2);
    r3 = yield ajax('http://url-3', data3);
    success(r3);
}
catch (err) {
    handle(err);
}
```