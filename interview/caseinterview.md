# 前端面试题

将网上总结的面试题依次过一遍，巩固基础

https://github.com/markyun/My-blog/tree/master/Front-end-Developer-Questions

## HTML

### Doctype作用？严格模式与混杂模式如何区分？它们有何意义?

1. doctype用来决定页面以什么样的方式渲染

HTML5之前，HTML是SGML的子集

doctype里有DTD可以决定以什么样的格式来渲染

HTML5中，`!doctype html`即可声明是`H5`页面

2.默认如果没有`doctype`声明就是混杂模式，混杂模式兼容老版本的浏览器显示

制定`doctype`则是严格模式，严格模式中页面严格按照HTML规则渲染

```js
1.<!doctype>声明位于HTML文档的第一行，告知浏览器的解析器用什么文档标准解析这个文档
DOCTYP不存在或格式不正确会导致文档以兼容模式呈现

2.标准模式的排版和JS运作模式都是以改浏览器支持的最高标准运行
兼容模式中，页面以宽松的向后兼容的方式显示，模拟老式浏览器的行为以防止站点无法工作
```

### HTML5 为什么只需要写 <!DOCTYPE HTML>？

因为HTML5已经不再是SGML的子集，浏览器识别到`!DOCTYPE HTML`即可判断是H5页面

```js
HTML5不基于SGML，因此不需要DTD引用，但也需要doctype来规范浏览器的行为

HTML4.01基于SGML，所以需要对DTD进行引用，才能告知浏览器使用的文档类型
```

### 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？

1.行内

`span`，`a`，`i`，`b`，`strong`，`pre`，`img`，`select`

2.块级

`div`，`p`，`ul`，`ol`，`li`，`code`，`h1`，`dt`，`dl`，`dd`

3.空元素

，`br`，`hr`，`img`，`input`，`link`，`meta`

### 页面导入样式时，使用link和@import有什么区别？

1. link是XHML自带的，可以加载css，也可以加载一些其它文件，而且所有浏览器都支持
link加载时不会阻塞页面，而是会异步加载（譬如某浏览器可同时并发下载5个css）

2.@import是css中才有的，只能用来载入css
~~@import加载时会阻塞，也就是说，如果css用@import来加载，页面会先等待这个加载完后才会进行其它操作~~

一般的页面规范中都是禁止使用@import加载的，很影响体验

```js
link属于XHTML标签的，除了加载css外，还能用于定义RSS，定义REL链接属性等作用
@import是css提供的，只能用于加载css

页面被加载的同时，link会被加载，而@import引用的css必须等页面被加载完再加载

@import是css2.1提出的，只有IE5上才能被识别，link是XHTML标签，无兼容问题（现在一般无需考虑IE兼容）
```

### 介绍一下你对浏览器内核的理解？

浏览器内核主要功能有两大块：

- 渲染引擎

- 脚本引擎

一般常规意义上的浏览器内核就值得是渲染引擎，JS脚本引擎大多都已经独立出去了（如Chrome的V8）

页面渲染包括把HTML文档转换成DOM树，并渲染成renderLayer之类的图层渲染到页面上，
同时渲染引擎还会根据css中的样式，对render图层进行一些修饰（如一些css属性）
另外，还有一块WebGl模块可以用GPU来绘制图形，一般可通过tree.js等第三方js库来绘制或者css开启硬件加速后也是默认GPU加速
渲染图层一般包含两类：普通图层以及复合图层，一般一个元素开启硬件加速后会变成复合图层，可以独立于普通文档流中，改动后可以避免整个页面重绘，提升性能
但是尽量比较大了使用复合图层，否则由于资源消耗过度，页面反而会变的更卡


脚本引擎值浏览器读取JS，然后按照语法规则解析，并执行
一般浏览器中会提供一些API允许JS脚本进行一些DOM操作，并且也会内置一些BOM对象（如Navigator等）
脚本引擎也有它的进化史，从最初仅支持最简单的DOM操作逻辑，到后来独立后越来越复杂的ES5，ES6等语法

```js
JS引擎解析和执行JS来实现网页的动效，最开始渲染引擎和JS引擎并没有分开，后来JS引擎越来越独立，内核倾向于只渲染

渲染引擎负责取得网页的内容（HTML,XML，图像等），整理讯息（如css），以及计算网页的显示方式（render），输出至显示器
浏览器内核不同对网页的语法解析会不同，渲染效果也不同
```

### 常见的浏览器内核有哪些？

一般分为几大阵营：

- `Trident`IE（7，8，9，...），号称自己都不兼容自己，好在移动端不需要兼容，其实IE11等性能以及赶上去了，但无奈声名已狼藉

- 范Webkit内核（包括它的升级变种Blink），Chrome，Safari等现今主流浏览器都是基于这个或它的变种
    这种内核对W3C标准支持的很好
    
- `Gecko`Firefox浏览器的内核，火狐的内核，虽然和Webkit有区别，但是W3C标准也支持的很好，如果使用标准的CSS等属性，几乎无需另外兼容

- 微软的新版浏览器，Edge,号称全面兼容webkit等内核的属性，作为新作，去除了历史兼容的包袱，应该也走在W3C标准支持的路上了

- 其它阵营，如opera等（以前是`Presto`），一般一些历史上层级采用IE内核的浏览器大多接近阵亡了（如世界之窗等），像opera等这种浏览器也开始采用webkit，往标准上靠

基本上，未来的趋势就是往W3C标准靠，然后各大浏览器在这基础上实现自己的特色

另外，有一点，Webkit内核并不是完全标准，里面有很多私有属性，但是它对标准的支持确实不错，
还有就是多个浏览器都采用了webkit，导致只需要兼容一个`-webkit-xxx`就可以兼容大多浏览器，
这使的开发者都普遍拥抱webkit内核的浏览器

番外，webkit是苹果开源的一个内核，Google在它基础上自己弄了一个chromium，然后chrome是基于chromium的，
所以一般很多人会直接把chrome代指webkit内核

### html5有哪些新特性、移除了那些元素？如何处理HTML5新标签的浏览器兼容问题？如何区分 HTML 和 HTML5？

不再是`SGML`的子集。增加了一些图像，位置，存储，多任务等功能的增加

增加

```js
canvas
sessionStorage
localStorage
webworker
websocket
Geolocation
video
audio
标签元素
article
nav
footer
section
header
calendar
date
url
search
```

移除了一些

```js
表现型
basefont
big
center
font
s
strike
tt
u
可用型
frame
frameset
noframes
等
```

```js
如canvas，一般会加一句当前浏览器不支持canvas，用来提示用户
IE8/IE7/IE6支持通过document.createElement方法产生的标签，
可以利用这一特性让这些浏览器支持HTML5新标签，
浏览器支持新标签后，还需要添加标签默认的样式

也可以直接使用成熟的框架、比如html5shim;
<!--[if lt IE 9]>
    <script> src="http://html5shim.googlecode.com/svn/trunk/html5.js"</script>
<![endif]-->
```

```js
doctype声明
结构元素
功能元素
可区分html5
```

### 简述一下你对HTML语义化的理解？

譬如`<stoing>`是语义化的强调，语音设备会重读，而`<b>`仅仅是自然样式上的加粗

通用，如果是列表，优先使用`ul,li`，而不是`div`大法层层嵌套

一般的语义化标签

```js
用正确的标签做正确的事情
html语义化让页面内容结构化，结构更清晰，便于浏览器解析，搜索引擎解析
而且即使丢失css，也能保持基本格式
搜索引擎依赖于html标记来确定上下文和关键字权重，利于seo
同样，阅读源码时也更容易将网站分块，便于阅读维护理解
```

### HTML5的离线储存怎么使用，工作原理能不能解释一下？

在用户没有联网时可以正常访问站点或应用，联网时再更新机器上的缓存

原理：
html5离线缓存是基于.appcache文件的缓存机制（不是存储技术）
通过这个文件的解析清单离线存储资源
这些资源就像cookie一样会被存储下来，处于离线状态时浏览器会展示离线缓存数据

使用

```js
1、页面头部像下面一样加入一个manifest的属性；
2、在cache.manifest文件的编写离线存储的资源；
    CACHE MANIFEST
    #v0.11
    CACHE:
    js/app.js
    css/style.css
    NETWORK:
    resourse/logo.png
    FALLBACK:
    / /offline.html
3、在离线状态时，操作window.applicationCache进行需求实现。
http://yanhaijing.com/html/2014/12/28/html5-manifest/
```

## CSS

### 介绍一下标准的CSS的盒子模型？与低版本IE的盒子模型有什么不同的？

1.标准盒模型

`width = content`

2.ie盒模型(board盒模型)

`width = content + padding + border + margin`

### CSS选择符有哪些？哪些属性可以继承？

1. 选择符

`id`，`class`，`tag`，`.a > .b`，`.a .b`，`.a.b`，`*`，`a:hover`，`a[rel = "external"]`等

2.可继承属性

`color`，`font-size`，`font-family`，`font-style`，`visibility`，`line-height`，`cursor`

3.不可继承

`border`，`padding`，`margin`，`width`，`height`

### CSS优先级算法如何计算？

1. `id > class > tag`

2. 同一个css文件内，最后声明的会覆盖

3. 同一个标签类的class，最右侧的会覆盖其他

4. `行内 > 内嵌(style中) > css文件`

5. `!important`拥有最高优先级

### CSS3新增伪类有那些？

```js
:after
:before
:enabled
:disabled
:checked

p:first-of-type
p:last-of-type
p:nth-child(2)
```

### 如何居中div？如何居中一个浮动元素？如何让绝对定位的div居中？

1.居中div

```js
// 水平居中
width: xxpx
margin: 0 auto;
```

2.居中浮动元素

- 浮动元素外面套一层div，然后普通div居中

- 父元素和子元素同时浮动，父元素的`left:50%`，子元素的`left:-50%`

3.居中absolute

- left为`50%`，然后`margin-left: -width/2`

```js
 div {
    position: absolute;
    width: 300px;
    height: 300px;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: pink; /* 方便看效果 */
 }
```

### display有哪些值？说明他们的作用。

- `none`，隐藏元素，并且不保留位置（`visibile`的话会保留）

- `block`，块级元素，默认情况下会占据整行，可以设置宽高等元素

- `inline`，内联元素，无法设置宽高

- `inline-block`，内联的块级，可以设置宽高

- `table`，表格

- `table-cell`，表格元素

- `table-caption`，表格头部

- `box`，`flex`的前身，伸缩性布局

- `flex`，弹性布局，不计入普通文档流

- `list-item` 列表

### position的值relative和absolute定位原点是？

```js
absolute
生成绝对定位元素，相对于值不为static的第一个父元素进行定位

fixed
绝对定位，相对于浏览器窗口进行定位

relative
生成相对定位，相对于其正常位置进行定位

static
默认值，没有定位,元素出现在正常流中(文档流)，忽略top,bottom,left,right,z-index等声明

inherit
从父元素集成position值
```

### CSS3有哪些新特性？

```js
新增各种css选择器
： not(.input)   所有class不是input的节点

圆角
border-radius:6px

多列布局
multi-column layout

阴影与反射
shadow/reflect

文字特效
text-shadow

文字渲染
text-decoration

线性渐变
gradient

旋转，平移等变化
rotate transform
```


### 请解释一下CSS3的Flexbox（弹性盒布局模型）,以及适用场景？

```js
一个用于页面布局的全新css3功能
flexbox可以把列表放在同一个方向（从上到下或左到右），并让列表延伸到占用可用的空间

采用flex布局的元素位flex容器,它的所有子元素都是容器成员（flex item）

常规布局是基于块和内联流方向，而flex布局是基于flex-flow流，可以很方便的用来对不同屏幕大小进行适应
布局上比以前更灵活

```

## JS

### 介绍JavaScript的基本数据类型。

1. `number`-数字

2. `string`-字符串

3. `undefined`-未定义，默认都是这个值

4. `boolean`

5. `null`，空对象，原型链的尽头，`typeof`的结果为`object`

6. `object`，复杂对象

7. `symbol`，`es6`新增，表独一无二

### 说说写JavaScript的基本规范？

1. 良好的代码规范，无规矩不成方圆，譬如airbnb的规范

2. 如果是es5，采用严格模式，避免错误

3. 尽量优雅

```js
===而不是==
不使用全局变量
使用[]而不是new Array
for循环使用大括号
if使用大括号
不在一行声明多个变量
等
```

### JavaScript原型，原型链 ? 有什么特点？

每一个对象都有原型链`__proto__`对象（由浏览器决定）可以顺着原型链往上找

函数对象有一个`prototype`，`(new Func()).xxx`即可调用`prototype.xxx`

即函数对象`new`时，`prototype`上的对象会复制一份到`func.__proto__`中

原型和原型链常被用于模拟其它面向对象语言的继承语法

```js
instance.constructor.prototype = instance.__proto__

我们找一个属性时，会先看对象中是否有，如果没有，沿着原型链判断是否有，一直到检索Object的内置对象
```

### JavaScript有几种类型的值？（堆：原始数据类型和 栈：引用数据类型），你能画一下他们的内存图吗？

- `number`，`string`，`boolean`，`undefined`，`null`，`object`，`symbol`

简单类型在栈中，复杂类型栈中有一个堆中的引用（栈中只保留指针，堆中才是实际数据）

分为两大类型： 原始数据类型（栈），引用数据类型（堆）

### Javascript如何实现继承？

通过原型与原型链

```js

function Parent() {
    this.name = 'papa';
}

parent.prototype.say = function() {
    console.log(this.name);
};

function Child() {
    this.name = 'son';
}

var parent = new Parent();

parent.say(); // papa

Child.prototype = new Parent();

var child = new Child();

child.say();
```

### Javascript创建对象的几种方式？

1. 隐式创建

```js
var obj = {};
```

2. new

```js
var obj = new Object();

// 或者一个构造函数

new XXX();
```

### Javascript作用链域?


### 谈谈This对象的理解。

### eval是做什么的？