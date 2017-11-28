# 前端面试题

将网上总结的面试题依次过一遍，巩固基础

https://github.com/markyun/My-blog/tree/master/Front-end-Developer-Questions

## HTML

### Doctype作用？严格模式与混杂模式如何区分？它们有何意义?

1. doctype用来决定页面以什么样的方式渲染，位于文档的最前面的位置(<html>标签前)

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

### 请问html5的主要特点是什么(初级)？html5与前面个版本的主要区别？(高级)？

```js
1.H5是Html的新一代标准，而且不再是SGML(Standard Generalized Markup Language-标准通用标记语言)的子集

H5特点如下:
新的DOCTYPE类别，
Html5新元素(如header、nav、footer、adide、article、section等标签，audio、video、 canvas、geolocation等新的元素)，
表单控件(calender、date、time、email、url、search)，
新的API(如localStorage、sessionStorage、indexedDB、websocket)，
增加离线缓存(可以通过manifest配置- <html manifest=”路径”>)，
废弃了部分属性(如img废弃name、html废弃version、form废弃accept…)，
减少插件依赖(flash)，移动兼容更好等。目前几乎所有浏览器都支持H5

2.H5与4.01版本相比，首先，4.01属于SGML的一个子集，而H5已经不再是它的子集了。

另外H5的头部声明与之前版本有区别，比如DOCTYPE声明变为了纯粹的<!DOCTYPE html>，比如字符编码声明方式不一致
另外H5语言规则定义更为完善，H5减少了Flash的依赖，能够不依赖于Flash完成网页的功能，
而且H5对移动端的兼容很到位，通过H5+CSS3，让移动开发成为主流。
另外，html5新增了自己独特的元素(video,canvas,footer标签等)
如果要区分H5和html，可以从DOCTYPE和元素结构来分析判断


html只有4.01和h5
xhtml有1.0和1.1

XHTML 1.0 是 XML 风格的 HTML 4.01。
XHTML 1.1 主要是初步进行了模块化。
HTML5 是下一代 HTML，取代 HTML 4.01。
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

### 描述下cookies,sessionStorage,localStorage的区别

```js
cookie是网站为了标志用户身份而存储在用户本地终端上的数据（会有加密）
cookie在同源的http请求中总是会携带（即使不需要），跨域的ajax请求需要开启`xhr`的`withCredentials`为`true`
很多情况下都是服务端读取cookie中的jsessionid，然后根据服务端的session判断是那一个用户

sessionStorage和localStorage仅本地保留，不会发送给服务端

大小限制：

cookie一般不能超过4k
sessionStorage和localStorage一般是5m左右

时间限制：

localStorage: 持久化，永久保存，除非主动删除
sessionStorage: 当前浏览器窗口关闭后删除
cookie: 设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭
```

### iframe有哪些缺点

```js
iframe会阻塞页面的onload事件
搜索引擎的检索程序无法解读这种页面，不利于seo

iframe和主页面共享连接池，而浏览器对相同域的链接有限制，所以会影响页面的并行加载

如果一定要用iframe，最好是通过js动态给iframe添加src
```

### label的作用是什么？如何用

```js
label标签用来定义表单控制间的关系
当用户选择该标签时，浏览器自动将焦点转到和标签相关的表单控件上

  <label for="Name">Number:</label>
  <input type="text" name="Name" id="Name"/>

  <label>Date:<input type="text" name="B"/></label>
```

### HTML5的form如何关闭自动完成功能

```js
给不想提示的form或某个input设置为autocomplete=off

默认整个表单是默认开启（自动补全字段-根据以前输入）
```

### 如何实现浏览器内多个标签页之间的通信

```js
WebSocket（简单场景不建议使用）

websocket建立链接，多个页面可以交互

localstorage API，它被添加，修改或删除时会触发一个事件

window.addEventListener("storage", function(e){  
  console.log('key:', e.key); // "abc"
  console.log('oldValue:', e.oldValue); // null
  console.log('newValue:', e.newValue); // 123
});

（无痕模式下，localStorage可能会有问题）

通过SharedWorker

// main.html
var worker = new SharedWorker('shared.js');
// note: not worker.onmessage!
worker.port.onmessage = function(e) {
    // e.data
};

// shared.js
onconnect = function(e) {
  var port = e.ports[0];
  port.postMessage('Hello World!');
};
页面必须同域
两个页面可以链接一个shareworker，页面A存储的数据页面B可以取出
```

### webSocket如何兼容低版本浏览器

```js
IE >= 10 才支持websocket

1.用Adobe Flash Socket
2.Active HTMLFile(IE的控件)
3.基于multipart编码发送XHR（流化，服务器会维护一个持续更新和保持打开的开放响应，除非超时或主动关闭）
    需要浏览器支持才行
4.基于长轮询的XHR(keep-alive, 如果没数据，会一直挂起，知道等到数据，有数据会返回，然后结束后再次向服务器请求)
    建立多个长连接可能会造成阻塞，要考虑性能
```

### 页面可见性（visibility）可以有哪些用途？

```js
通过visibilityState的值检测页面当前是否可见，以及打开网页的时间等

在页面被切换到其它后台进程时，自动暂停音乐或视频的播放

document.visibilityState返回当前页面的可见性，有以下值

- hidden

- visible

- prerender，预渲染

- preview，预览（如win7鼠标放底部预览时）


visibilityChange: 当可见性状态改变时触发的事件
```

### 如何在页面实现一个圆形的可点击区域？

```js
1.border-radius 属性矩形区域变成圆形

2.圆形的svg

3.使用map+area，img标签usemap，area区域约定圆形区域

<img src="xxx.png" width="1366" height="768" border="0" usemap="#Map" />  
<map name="Map" id="Map">  
<area shape="circle" coords="100,100,50" href="https://www.baidu.com" target="_blank" />  
</map>

map + area可以让一张图片拥有多个超链接(也可以监听实现自定义事件)

4.纯JS实现，譬如获取鼠标坐标，通过算法判断是否在目标圆形之内（不建议）
```

### 实现不使用border画出1px高的线，在不同浏览器的标准模式和怪异模式下都能保持一致的效果

```js
使用div

<div style="height:1px;overflow:hidden;background:black"></div>

如果兼容性没有这么多要求的话，方式更多

譬如after可以插入伪元素（较常用），然后定义高度为1px，content为''，可以进行绝对定位，再设置背景色
```

### 网页验证码是干嘛的，是为了解决什么安全问题？

```js
主要作用是：区分是计算机程序自动操作还是人为手工操作

可以防止恶意破解密码，刷票，论坛灌水等

在国内，最早应该是为了防止暴力穷举密码，最主要是防止机器人
```

### title与h1的区别，b与strong的区别，i与em的区别？

```js
title的属性没有明确意义，只表示是一个标题，h1则表示层次明确的标题，对页面的抓取也有影响

title是每一个页面必须要的属性

其它主要是： 语义化与自然样式的区别

语义化标签strong,em更利于SEO，一些特殊设备也会处理（如朗读）譬如

strong，标明的重点内容，有语气加强的含义，也同样会加粗，使用阅读设备时，会中毒
b仅展示强调内容（譬如加粗）

i内容为斜体，em表示强调的文本，也同样会斜

自然样式标签
b,i,u,s,pre

语义样式标签
strong,em,ins,del,code

正常来说应该使用最符合的语义化标签（但是请勿滥用）
```

### 前端需要注意那些seo?

```html
<meta content="xxxx" name="keywords">
<meta content="xxx" name="description">
```

```js
1.合理的title,description,keywords
引擎搜索对三项的权重逐渐减小，
title强调重点即可(重点关键词出现不要超过2次，而且要靠前)，不同页面title要不同
description把页面内容高度概括，长度合适，不可过分堆砌关键词，不同页面的description要有所区分
keywords列举出重点关键词

2.语义化html，符合w3c规范，语义化让搜索引擎容易理解网页

3.重要的html内容放在最前方，搜索引擎抓取html顺序是从上到下，
有得搜索引擎长度有限制，因此要确保重要内容被抓取

4.重要内容不要用js输出（爬虫不会执行js获取内容）

5.避免iframe,爬虫不会抓取iframe中的内容

6.非装饰性图片必须加alt(图片无法显示时替代，图片内容的等价描述，读屏器会阅读图片，搜索引擎重点分析)

7.提高网站访问速度，网站速度是搜索引擎排序的一个重要指标
```

## CSS

### 介绍一下标准的CSS的盒子模型？与低版本IE的盒子模型有什么不同的？

1.标准盒模型

`width = content`

2.ie盒模型(board盒模型)

`width = content + padding + border + margin`

### 静态、自适应、流式、响应式布局的各自特点和区别？

```js
静态布局:一般用于传统的web设计，不管浏览器尺寸多少，网页只会有一套布局，不会有自适应现象
(一般会设置成用横线或竖向的滚动条来查阅被遮掩部分)。
而且这种情况一般移动设备会单独再写一套代码，使用不同的域名访问，如wrap.(m.)

自适应布局:自适应布局是为了解决“如何才能在不同大小的设备上呈现同样的网页”，
实现原理主要是依据于允许网页宽度自动调整(比如Viewport标签中的width=device-width,会默认将网页初始化大小占满屏幕)
这种布局一般会使用相对大小(如em,rem,百分比等)，一般会尽力避免使用绝对大小(px)，
这样就达到了随着屏幕大小的不断变化，内容不会溢出，而是自适应的挤压或变长的效果
(也就是说一套自适应布局是可以不用Media Query就能实现的)。

流式布局:这种布局一般认为是“使用float实现浮动”(常常会用float+宽度百分比实现)，
即各个区域位置都是浮动的，不是固定不变的。
这种布局中，使用float的好处是如果宽度太小,放不下多个元素，后面的元素会自动滚动到前面元素的下方，不会在水平方向overflow，
避免水平滚动条的出现(一般流式布局要注意使用clear:both清除浮动)。
不过需要注意，在绝对定位中使用float需要非常小心。

响应式布局:响应式布局是为了解决“让同一个网页自适应不同大小的屏幕，根据屏幕宽度，自动调整网页的布局以及内容大小”，
也就是说“响应式的概念覆盖了自适应”。响应式实现的原理是基于CSS3的Media Query
(这个媒介查询可以根据不同的屏幕分辨率，调整网页设计，改变展示布局，需要注意的是对于响应式来说，Media Query必不可少)。


```

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

### 用纯CSS创建一个三角形的原理是什么？

一般是隐藏其它几个边（颜色设为transparent），需要设置的角的反面设置颜色，譬如

```css
#demo {
    width: 0;
    height: 0;
    border-width: 20px;
    border-style: solid;
    border-color: transparent transparent red transparent;
  }
```

上右下左映射为下左上右

### 一个满屏 品 字布局 如何设计?

```js
一般常用为

上面的一个div 100%宽
下面的两个div分别宽 50%
用float或者inline或绝对定位使得不换行
简单的可以用border来区分是否正确
```

### css多列等高如何实现？

利用padding-bottom,margin-bottom正负值相抵

设置父容器设置overflow:hidden
这样父容器的高度就是它里面的列没有设置padding-bottom时的高度
当它里面的任意一列高度增加了，父容器的高度被撑到了里面最高列的高度

其它比这列矮的列会用它们的padding-bottom补偿这部分高度差

譬如

```css
#first {
    overflow: hidden;
    border: 1px solid red;
}#second {
    float: left;
    width: 30 % ;
    padding - bottom: 200px;
    margin - bottom: -200px;
    border: 1px solid blue;
}#third {
    float: left;
    width: 30 % ;
    padding - bottom: 200px;
    margin - bottom: -200px;
    border: 1px solid green;
}
```

### 经常遇到的浏览器的兼容性有哪些？原因以及解决方法是什么？常用hack技巧？

```js
png24位的图片在IE6浏览器上出现背景，解决方案是做成png8

浏览器默认的margin和padding不同。解决方案是加一个全局的
*{margin:0;padding:0;}来统一

IE6双边距bug: 块属性标签float后，又有横行的margin的情况，在ie6显示margin比设置的大
浮动IE产生的双倍距离
box{ float:left; width:10px; margin:0 0 0 10px;}
这种情况之下IE会产生20px的距离，解决方案是在float的标签样式控制中加入 ——
display:inline;将其转化为行内属性。(这个符号只有ie6会识别)

渐进识别，利用`\9`标记将IE浏览器分离出来
然后，再使用'+'将IE8和IE7，IE6分离开

.bb{
    background-color:red;/*所有识别*/
    background-color:#00deff\9; /*IE6、7、8识别*/
    +background-color:#a200ff;/*IE6、7识别*/
    _background-color:#1e0bd1;/*IE6识别*/
}

IE下，可以获取常规属性的方法来获取自定义属性
也可以使用getAttribute()获取自定义属性
Firefox下，只能使用getAttribute()获取自定义属性。
解决：统一使用getAttribute()

IE下，event对象有x,y属性，但是没有pageX,pageY属性
Firefox下，有pageX,pageY，但没有x,y

Chrome中文界面默认会将小于12px的文本强制按照12px显示
可以css中加入
-webkit-text-size-adjust: none; 解决。

超链接访问过后hover属性不见了，被点击访问的超链接样式不再具有hover和active了解决方法是改变CSS属性的排列顺序
L-V-H-A :  a:link {} a:visited {} a:hover {} a:active {}
```

### li与li之间有看不见的空白间隙是什么原因引起的？有什么解决办法？

```js
行框的排列会受到中间空白（回车，空格）的影响，
因为空格也属于字符，这些空白也会被应用样式，占据空间，所以会有间隔
把字符大小设为0，就没有空格了
```

### 为什么要初始化CSS样式

```js
浏览器兼容问题，不同浏览器对有些标签的默认值不同，如果没对CSS初始化，往往会出现浏览器之家的页面显示差异

最简单的初始化（非常不建议）
* {padding: 0; margin: 0;}

或者采用淘宝的样式初始化
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin:0; padding:0; }
  body, button, input, select, textarea { font:12px/1.5tahoma, arial, \5b8b\4f53; }
  h1, h2, h3, h4, h5, h6{ font-size:100%; }
  address, cite, dfn, em, var { font-style:normal; }
  code, kbd, pre, samp { font-family:couriernew, courier, monospace; }
  small{ font-size:12px; }
  ul, ol { list-style:none; }
  a { text-decoration:none; }
  a:hover { text-decoration:underline; }
  sup { vertical-align:text-top; }
  sub{ vertical-align:text-bottom; }
  legend { color:#000; }
  fieldset, img { border:0; }
  button, input, select, textarea { font-size:100%; }
  table { border-collapse:collapse; border-spacing:0; }
```

### absolute的containing block(容器块)计算方式跟正常流有什么不同？

```js
absolute中的定位都会找到其祖先position不为static的元素，然后判断
1.若此元素为inline元素，则containing block就是
    能包含这个元素生成的第一个和最后一个inline box的padding box(除margin,border外的区域)的最小矩形
2.否则，则由这个祖先元素的padding box构成

如果都找不到，则为 initial containing block

supplement:
1.static/relative: 简单的说就是它的父元素的内容框（去掉padding部分）
2.absolute: 向上找最近的定位不为static
3.fixed:它的containing block一律为跟元素(html/body)，跟元素也是initial containing block
```

### CSS里的visibility属性有一个collapse属性值时干嘛的?在不同浏览器下有什么区别？

```js
对于普通元素visibility:collapse;会将元素完全隐藏，不占据页面布局空间
标准w3c呈现效果为元素隐藏，但是占据空间，Firefox下隐藏并不占空间，IE下不起作用


如果目标元素为table,
可以隐藏对应的行或列（跟display:none一样）
```

### position跟display, margin, collapse, overflow, float这些特性相互叠加会怎么样？

```js
如果元素的display为none，那么元素不被渲染，position,float不起作用

如果元素拥有position:absolute或者position:fixed属性
那么元素将为绝对定位，float不起作用，

如果元素float不是none，元素会脱离文档流根据float属性值来显示，

有浮动，绝对定位，inline-block属性的元素，margin不会和垂直方向上的其它元素margin折叠
```

### 对BFC规范（块级格式化上下文：block formatting context）的理解？

```js
W3C CSS2.1规范中的一个概念，它是一个独立容器，决定了元素如何对其内容进行定位，以及与其它元素的关系和相互作用
一个页面是有很多个Box组成的，元素的类型和display属性决定了这个Box的类型

不同类型的Box会参与不同的Formatting Context（决定如何渲染文档的容器）
因此Box内的元素会以不同的方式渲染
也就是说BFC内部的元素和外部的元素互不影响

触发BFC的条件:
float的值不为none
overflow的值不为visible
display的值为inline-block,table-cell,table-caption
position的值为absolute或fixed

而display:table，有这个属性时会默认生成一个匿名的table-cell，所以也会间接的生成BFC

BFC中相邻的块级元素垂直外边界会折叠
BFC不会与float的元素区域重叠（如果浮动元素后有一个BFC，它不会和前面的浮动元素折叠）
计算高度时，浮动元素也参与
每个元素的margin box的左边， 与包含块border box的左边相接触（对于从左往右的格式化，否则相反）

默认可以是认为处于body的bfc中

http://www.cnblogs.com/lhb25/p/inside-block-formatting-ontext.html
```

### css定义的权重

```js
权重规则：
标签权重1，class 10, id 100,如下
style的权重是1000

/*1*/
div {}

/*10*/
.class1 {}

/*100*/
#id1 {}

/*100+1*/
#id1 div {}

/*10+1*/
.class1 div {}

/*10+10+1*/
.class1 .class2 div {}

如果权重相同，最后定义的样式会起作用

!important代表最高权重(据说是100W)
```

### 请解释下为什么需要浮动？清除浮动的方式

```js
清除浮动主要是为了清除浮动元素产生的影响
浮动的元素，高度会坍塌，高度坍塌使得页面后面的布局不能正常显示

方法：

overflow:hidden触发bfc,bfc会计算浮动元素高度
父级div定义height
父级的div也一起浮动
clear:both属性
.clearfix::before, .clearfix::after {
	content: " ";
	display: table;
}
.clearfix::after {
	clear: both;
}
.clearfix {
	*zoom: 1;
}

sass中
&::after,&::before{
  	    content: " ";
          visibility: hidden;
          display: block;
          height: 0;
          clear: both;
  	}
原理：
display:block 使得元素以块级元素显示，占满剩余空间
height：0 避免生成内容破坏原有布局的高度
visibility:hidden 使生成的内容不可见，并允许可能被生成内容盖住的内容可以进行点击和交互;
通过 content:"."生成内容作为最后一个元素，至于content里面是点还是其他都是可以的，
例如oocss里面就有经典的 content:".",有些版本可能content 里面内容为空,一丝冰凉是不推荐这样做的,
firefox直到7.0 content:”" 仍然会产生额外的空隙；
zoom：1 触发IE hasLayout。
除了clear：both用来闭合浮动的，其他代码无非都是为了隐藏掉content生成的内容，
这也就是其他版本的闭合浮动为什么会有font-size：0，line-height：0。

```

### 什么是外边距合并

```js
在同一个bfc下的两个box
当它们的垂直外边距相遇时，将会合并成一个外边距（取两个发生合并的外边距高度中较大者）
全部都为正值，取最大者
不全是正值，都取绝对值，然后正值减去绝对值
没有正值，都取绝对值，0减去绝对值

一个空元素，有外边距，但是没有边框或填充，这时候，它的上边距和下边距会合并

当一个元素在另一个元素中时(假设没有内边距或边框把外边距隔开)，它们的外边距会发生合并

不同bfc之间的外边距不会合并

http://www.w3school.com.cn/css/css_margin_collapsing.asp
```

### zoom:1的清除浮动原理

```js
清除浮动，触发hasLayout
zoom属性是ie专有的，可以设置或检索对象的缩放比例，解决ie下比较奇怪的bug
譬如外边距折叠，清除浮动，触发hasLayoutd等

原理
设置了zoom后，所设置的元素就会就会扩大或者缩小，高度宽度就会重新计算了，
这里一旦改变zoom值时其实也会发生重新渲染，运用这个原理，也就解决了ie下子元素浮动时候父元素不随着自动扩大的问题。

Zoom属是IE浏览器的专有属性，火狐和老版本的webkit核心的浏览器都不支持这个属性。
然而，zoom现在已经被逐步标准化，出现在 CSS 3.0 规范草案中。(基本chrome支持了)

目前非ie由于不支持这个属性，它们又是通过什么属性来实现元素的缩放呢？
可以通过css3里面的动画属性scale进行缩放。
```

### 移动端布局用过媒体查询么

```js
媒体查询相关代码在满足相应条件后才会生效

@media (min-width:700px) and (orientation: landscape) {
    .sidebar {
        display: none;
    }
}

如上类似，媒体查询可以在不同的条件下设置不同样式，也特别适合于移动端响应式布局
```

### 使用css预处理器吗？喜欢哪个？

```js
SASS, LESS, Stylus等，原理都是最终会编译打包成正式css运行

主要的方便之处是：

- 支持变量，便于复用，特别是多套皮肤时

- 支持嵌套，复杂的父子级关系时更为清晰
```

### css优化，提升性能的方法

```js
过滤掉无关规则（这样系统不会浪费时间去匹配它们）

减少层级（层级过多会影响效率）

提取项目共有样式，增加复用性（可维护）

使用预处理器或构建工具（如gulp对css进行语法检查，自动补全前缀，打包压缩，自动优雅降级等）
```

### 在网页中应该使用奇数还是偶数字体？为什么？

```js
偶数字体

1.（重要）偶数字号相对更容易和web设计的其他部分构成比例关系（譬如16 * 0.5 = 8）

2.一些字体点阵（点阵字体也叫位图字体）只提供偶数字体（如早期windows自带中易宋体-新宋体等），而奇数13时用的是小一号的点阵（每个字的占据空间大了1px，但点阵没变）
据说早起的windows字体点阵中，有2，14，15，16，唯独少13

3.后续偶数更多的是一种习惯

另外，12显示英文很好，但是中文太小，14对中英文都太大，13比较合适（譬如知乎是13）
```

### margin和padding分别适用什么场景使用？

```js
margin隔开元素与元素直接的间距（用于布局分开元素，使得元素直接互不相关）
padding隔开元素与内容的间距（让内容与包裹之间有一段空）
```

### 抽离样式模块怎么写，说出思路。

```js
这种说法应该指的是：css的初始化，消除不同浏览器下标签的样式差异

一般采用的是一段经典的cssreset写法

包括  body,h1,h2...等标签的margin和padding置0
一些标签的通用字体设置
table的边框同设等
```

### 元素竖向的百分比设定是相对于容器的高度吗？

```js
元素的竖向百分比设定是基于容器的宽度而不是高度

可以自行测试一旦修改容器宽度，发现竖向百分比对于的值也增加了
http://www.webhek.com/post/vertical-percentages-are-relative-to-container-width-not-height.html
```

### 全屏滚动的原理是什么？用到了css的哪些属性？

```js
多个页面，每一个页面分别占据页面的100%高度，每次切换页面时全屏滚动

它的原理和图片轮播一样，都是基于css的transform属性
每一个页面初始化时的y值不同(间隔一个屏幕高度)
然后页面切换时，切换到不同的y值

一般会使用transform,transition等属性，分别用来设置坐标，设置过渡时间等
有时候还可以用其它过渡效果，如透明度，颜色渐变等
```

### 什么是响应式设计？响应式设计的原理是什么？如何兼容低版本的IE

```html
响应式布局是Ethan Marcotte在2010年5月份提出的一个概念

页面根据不同的设备环境进行相应调整，譬如兼容手机和pad(一个页面多个终端，而不是每一个终端一个特定版本)

核心原理是使用css media query，通过媒体查询去检测不同设备的尺寸
@media 设备名 only （选取条件） not （选取条件） and（设备选取条件），设备二{rules}
可以在link中加上media媒体查询属性决定是否加载
也可直接在样式中用@media

页面头部必须加上声明viewport
name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no”

兼容ie可以使用js来判断并兼容（ie不支持媒体查询）
ie肯定只是pc端展示，因此更多的是pc端兼容问题，而不是不同设备的响应式

优点:
1.  面对不同的分辨率设备灵活性强
2.  能够快捷解决多设备显示适应问题
缺点:
1.  需要兼容各种设备，工作量大，效率低下
2.  代码累赘，会出现隐藏无用元素，加载时间长
3.  一定程度上改变了网站的原有布局结构，会出现用户混淆的情况
4.  这是一种折中性质的解决方案，有时候会因为多方面因素，而达不到最佳效果

```

### viewport的理解？

```js
layout viewport（布局视口）
移动设备浏览器一般都会默认设置一个viewport标签
它的作用是定义一个虚拟的layout viewport，用于解决早起的页面在手机显示问题

譬如默认情况下iOS,android中将这个视口分辨率设置为980px
所以，pc端网页基本能在手机上展示，只不过元素看起来很小（默认可以通过手指缩放）

当然也可以自己设定一个宽-一般会取device-width

visual viewport（视觉视口）和物理像素
visual viewport（视觉视口）为物理屏幕的可视区域
屏幕显示器的物理像素，同样尺寸的屏幕，像素密度大的设备，硬件像素会更多
例如iPhone的物理像素：
    iPhone5 ：640 * 1136
    iPhone6：750 * 1334
    iPhone6 Plus：1242 * 2208

ideal viewport（理想视口）和 dip （设备逻辑像素）
ideal viewport（理想视口）通常是我们说的屏幕分辨率。
dip （设备逻辑像素）跟设备的硬件像素无关的。一个 dip 在任意像素密度的设备屏幕上都占据相同的空间。

比如MacBook Pro的 Retina （视网膜）屏显示器硬件像素是：2880 * 1800。
当你设置屏幕分辨率为 1920 * 1200 的时候，ideal viewport（理想视口）的宽度值是1920像素，
那么 dip 的宽度值就是1920。设备像素比是1.5（2880/1920）。
设备的逻辑像素宽度和物理像素宽度（像素分辨率）的关系满足如下公式：
    逻辑像素宽度*倍率 = 物理像素宽度

而移动端手机屏幕通常不可以设置分辨率，一般都是设备厂家默认设置的固定值
，换句话说 dip 的值就是 ideal viewport（理想视口）（也就是分辨率）的值
譬如，iPhone的屏幕分辨率：
    iPhone5 ：分辨率 320 * 568，物理像素 640 * 1136，@2x
    iPhone6：分辨率 375 * 667，物理像素 750 * 1334，@2x
    iPhone6 Plus ：分辨率 414 *  736，物理像素1242 * 2208，@3x，（
    注意，实际显示图像等比降低至1080×1920，具体原因查看：http://www.css88.com/archives/5972）
    
更多设备的 ideal viewport（理想视口）可以查看http://viewportsizes.com/

css像素
CSS像素（px）用于页面布局的单位。样式的像素尺寸（例如 width: 100px）是以CSS像素为单位指定的。
CSS像素与 dip 的比例即为网页的缩放比例，如果网页没有缩放，那么一个CSS像素就对应一个 dip（设备逻辑像素）    
（譬如为device-width时，css像素与逻辑像素一样）

使用viewport元标签控制布局
```

```html
<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1; user-scalable=no;">
```

```js
width属性被用来控制layout viewport（布局视口）的宽度，layout viewport（布局视口）宽度默认值是设备厂家指定的。
iOS, Android基本都将这个视口分辨率设置为 980px。
我们可以 width=320 这样设为确切的像素数，也可以设为device-width这一特殊值
一般为了自适应布局，普遍的做法是将width设置为device-width

width=device-width 也就是将layout viewport（布局视口）的宽度设置 ideal viewport（理想视口）的宽度。
网页缩放比例为100%时，一个CSS像素就对应一个 dip（设备逻辑像素）
，而layout viewport（布局视口）的宽度，ideal viewport（理想视口）的宽度（通常说的分辨率），
dip 的宽度值是相等的。

height与width类似，但实际上却不常用。

initial-scale用于指定页面的初始缩放比例：
initial-scale=1 表示将layout viewport（布局视口）的宽度设置为 ideal viewport（理想视口）的宽度，
initial-scale=1.5 表示将layout viewport（布局视口）的宽度设置为 ideal viewport（理想视口）的宽度的1.5倍。

maximum-scale用于指定用户能够放大的最大比例，例如

minimum-scale是用来指定页面缩小比例的。通常情况下，不会定义该属性的值，页面太小将难以阅读。

user-scalable来控制用户是否可以通过手势对页面进行缩放。该属性的默认值为yes，可被缩放，你也可以将该值设置为no，表示不允许用户缩放网页。

http://www.css88.com/archives/5975
```

### 视差滚动效果，如何给每页做不同动画？（回到顶部，向下滑动要再次出现，和只出现一次分别怎么做？）

```js
视差滚动：多层背景以不同速度移动，形成立体的运动效果，带来出色的视觉体验

一般会有背景层，内容层，贴图（悬浮）层，滚动时，不同速度移动

一般原理是：各个页面是fixed布局，然后监听滚动（譬如滚轮），
在滚动的不同距离以此移动对于图层的top值
```

### ::before和:after中双冒号和单冒号有什么区别？解释下这两个伪元素的作用？

```js
双冒号是css3规范中引入的
正常来说，单冒号用于伪类，双冒号用于伪元素
不过浏览器会支持单冒号表示伪元素的写法

伪元素譬如：(代表会新增东西)
::first-line（特殊样式加到文本首行）
::before
::after
伪类譬如：(代表特定状态)
:active
:link
```

### 如何修改chrome记住密码后自动填充表单的黄色背景？

```js
input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {
    background-color: rgb(250, 255, 189); /* #FAFFBD; */
    background-image: none;
    color: rgb(0, 0, 0);
}
  
主要是 -webkit-autofill 样式
```

### 对line-height是如何理解的？

```js
指定了一行字的高度，定义是同一个元素中（比如同一个p）两个文本行基线之间的距离
如果div没有高度，但是里面有文字，那么它会被文字的line-height默认撑开

line-height只影响行内元素，并不能直接应用与块级元素
具有可继承性，块级元素的子元素会继承该特性，并在行内元素上生效


譬如，简单的把height设置和行高一样的话，可以实现单行文本居中
```

### 设置元素浮动后，该元素的display值是什么?

```js
浮动后的display值自动变为了display:block
```

### 怎么让chrome支持小于12px的文字？

```js
使用小于12px的字体，非chrome可以不考虑兼容，chrome中加上
-webkit-text-size-adjust: none
有一个后果，就是如果放大了网页，字体不会随着一起放大（所以不建议全局使用，而是特定需要兼容的使用）

其他障眼法
如用图片替代文字
```

### 让页面里的字体变清晰，用css怎么做？

```js
-webkit-font-smoothing: antialiased
加上抗锯齿渲染（非标准）

另外有人总结过只在macOS 的webkit中有效
https://segmentfault.com/q/1010000000467910
```

### font-style属性可以让它赋值为"oblique"，什么意思？

```js
倾斜的字体样式

和italic的区别：
italic是斜体
oblique是倾斜的文字排版（模仿的斜体，但不是斜体）
```

### display:inline-block什么时候会显示间隙？

```js
换行或空格会占据一定的位置，从而产生间隙

解决方法：
去除空格
使用margin负值
使用font-size：0（本质也是去除了空格的占位）
letter-spacing,word-spacing
譬如letter-spaceing:-4px
```

### position:fixed在手机上无效怎么处理？

```js
fixed是基于整个页面固定，而某些场景下滑动的是整个viewport,
网页并没有滑动，所以fixed看起来跟没有固定一样(实际上它并没有动，只是不是相对手机屏幕的固定而已)

一般是没有加viewport声明的缘故，加上即可
meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"

另外，iOS下自带的回弹也可能造成问题
或者iOS下fixed被输入框弹出(原理是body被滚动，改成absolute，或者监听focus时临时改)

还有人的做法是使得fixed布局的父元素(body)不出现滚动，将滚动内容移到其他div内部
这样弹出后，页面本身不会滚动，不会有这个问题

还有一种是页面上同时添加了滑动事件，如：overflow：auto/scroll等，就会出现这样的BUG：
当滑动页面时，input框（fixed）就会掉下来，fixed属性失效。
解决是使用iscroll等插件（不使用overflow：auto/scroll，iScroll内部是自己用的translate动画-低版本也是js模拟动态修改top）
```

### 如果需要手写动画，你认为最小间隔是多久，为什么？

```js
很多显示器的频率仍然是： 60HZ，所以理论上是
1/60*1000ms = 16.7ms
```

### overflow:scroll不能平滑滚动的问题

```js
特别是iOS下

1.需要-webkit-overflow-scrolling： touch开启硬件加速
(底层用了一个原生控件来显示的)

2.或者类似于iScroll一样，自己内部用translate动画模拟
```

### 有一个高度自适应的div，里面有两个div，一个高度100px,希望另一个填满剩下的高度

```js
1.box-sizing方案
外层box-sizing:border-box;同时设置padding:100px 0 0
内层100像素高的元素向上移动100像素，或者使用absolute布局防止占据空间
另一个元素直接height:100%

2.absolute布局
外层position:relative
百分百自适应元素直接position: absolute; top: 100px; bottom: 0; left: 0s

3.或者纯js解法
```

### png、jpg、gif这些图片格式解释一下，分别什么时候用。有没有了解过webp？

```js
GIF：
Graphics Interchange format（图形交换格式）
是一种索引颜色格式，在颜色数很少时，产生的文件极小
优点：
1.支持背景透明
2.支持动画
3.支持图形渐进
4.支持无损压缩
5.水平扫描
最大的缺点是最多只有256中颜色

jpeg：
Joint Photograhic Experts Group（联合图像专家组）
优点：
1.支持上百万中颜色
2.使用更有效的有损压缩，文件体积更小
3.更适合与照片
缺点是会损失一些细节（如艺术线条），而且有损压缩不可逆，另外就是不支持图形渐进和背景透明

png:
(Portable Network Graphic Format，PNG)流式网络图形格式
目的是企图替代GIF和tiff格式
优点：
1.存储灰度图像时，深度可多达16位
2.存储彩色图像时，深度多达48位
3.还可存储16位的透明通道
4.从LZ77派生的无损数据压缩算法。
缺点是体积相对jpg较大，对于普通图片来说，保留了过多的无用细节

一般色彩较少的纯色背景小图标等可用gif
有透明度要求的色彩丰富的可用png
其他用jpg(特别适合与普通的图片-要求不高的)

webp:（同时支持有损和无损）
google开发的一种旨在加快图片加载速度的图片格式

当有损压缩，相比较与jpg，编码同样质量的webp文件需占用更多的计算资源（体积更小，比jpg小40%）

它具有更优的图像数据压缩算法，能带来更小的图片体积，而且拥有肉眼识别无差异的图像质量；
同时具备了无损和有损的压缩模式、Alpha 透明以及动画的特性，
在 JPEG 和 PNG 上的转化效果都相当优秀、稳定和统一。

chrome中基本都支持webp

ios中还需第三方插件转换
```

### 什么是cookie隔离？（或者说：请求资源时不要让它带cookie，怎么做）

```js
如果静态文件都放在主域名下，那么静态文件请求的时候都带有的cookie的数据提交给server
浪费流量，不如隔离开

如何隔离：
因为cookie有跨域限制，因此跨域请求时默认不会带上cookie(当然可以手动强行打开的)
这样降低请求头部大小，减少请求时间

同时由于不会将cookie提交给server，也会减少server的解析环节，提高http解析速度
```

### style标签写在body后和body前有什么区别?

```js
HTML标准一直是规定style不应该出现在body中

但网页也有容错：
如果style出现在body中(或者body后更是)，效果仍然和style中一样，
但是可能会引起fouc(Flash of Unstyled Content-无内容闪烁)，重绘或重新布局
```

### 什么是FOUC？如何避免？

```js
Flash Of Unstyled Cotent
大概就是样式加载前浏览器用默认样式渲染文档，
样式加载后重新渲染文档，造成页面闪烁

解决方案是：
样式放在head中，这样在加载文档前样式已经有了
```

### 什么是CSS预处理器／后处理器？

```js
-预处理器，如less,sass,stylus
用来预编译，一般里面会有支持变量、继承等，增加了复用性
而且还会有函数，循环，mixn，层级，很方便进行组件化开发，提高工作效率

-后处理器，如postcss
譬如用来补全不同浏览器下的兼容后缀，如-webkit等
这样可以基于css规范来编写，无法写的时候关注兼容问题，更有效率,也不易出错，而且源码会更少
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

3.工厂等产生

```js
var obj = xxx();
```

### Javascript作用链域?

```js
全局函数无法查看局部函数的内部细节
局部函数可以查看上层的函数细节，直至全局细节

当需要从局部函数查找某一属性或方法时，
如果当前作用域没有找到，就会上溯到上层作用域查找
直至全局函数- 作用域链
```

http://www.cnblogs.com/lhb25/archive/2011/09/06/javascript-scope-chain.html

### 谈谈This对象的理解。

```js
this总指向函数的直接调用者(而非间接调用者)
譬如 
var ajax = Util.ajax();
ajax();
此时this指向window，而不是util


如果有new关键字，this指向new出来的那个对象

在事件中，this指向触发这个事件的对象
特殊（ie中的attachevent的this总是指向全局对象window）
```

### eval是做什么的？

```js
作用是把对应的字符串解析成js代码并运行

尽量避免使用eval，不安全而且耗性能

一次解析成js语句，一次执行

在以前，常有人用
var obj =eval('('+ str +')');

来将json字符串解析成json，但是h5中可以用JSON.stringify
```

### 什么是window对象? 什么是document对象?

```js
window对象指浏览器打开的窗口
document是当前窗口中Document对象的一个只读引用（属于window对象的一个属性）
```

### null，undefined 的区别？

```js
null表示一个“为空”的值
undefined表示一个变量声明了但是没有初始化（缺省值）

typeof null 为 object
typeof undefined 为 undefined

原型链的尽头是null

null == undefined // true
null === undefined // false

null转数字时为0
undefined转数字时为NAN

JS最初只有一个null表示无，根据c语言传统，可以自动转为0
但是js设计者觉得这样还不够

- null在java中被当初一个对象，但是js中分为原始型和合成类型，作者觉得无的值最好不是对象

- 最初js中没有错误处理机制，发生数据类型不匹配时，往往会自动转换类型或失败，但是如果null自动转成0时，不容易找出这个错误

因此又设计了一个undefined
```

### ["1", "2", "3"].map(parseInt) 答案是多少？

```js
parseInt(val, radix)

radix的参数范围是[2,36]

map传了三个参数(element, index, array)

所以分别是`10机制的1-传0相当于默认值`，`进制非法，radix超出范围`，`2进制的3，不合法的解析`

结果: [1, NAN, NAN]
```

### 事件是？IE与火狐的事件机制有什么区别？ 如何阻止冒泡？

```js
譬如在网页点击一个按钮时会产生一个事件，做xxx操作时也可能会产生xxx事件(有的操作对应多个事件)，这种事件可以被js监听到

一般有两种事件模型：捕获型和冒泡型

ie中支持冒泡型，火狐中两种都支持（默认为事件捕获）

阻止冒泡：event.stopPropagation();(符合W3C标准)
(旧版IE用event.cancelBubble = true)-IE8及以下，但其实chrome和firefox中也支持（只是考虑到非标准，后续迟早要移除）
```

### 什么是闭包(closure)，为什么要用它？

```js
闭包是指有权访问另一个函数作用域中的变量的函数

创建闭包的最常用方式：在一个函数内创建另一个函数，通过另一个函数访问这个函数的局部变量
利用闭包可以突破作用域链，将函数内部的变量和方法传递到外部
不过也经常会容易造成内存泄漏问题（无法自动回收）

特性：
1.函数内再嵌套函数
2.内部函数引用外层的参数和变量
3.参数和变量不会被垃圾回收机制回收

譬如

function sayHello() {
    // 函数内部变量
    var word = 'hello,world!';
    var index = 0;
    
    return function() {
        console.log(word + (index++));  
    };
}

var say = sayHello();

say(); // hello,world!0
say(); // hello,world!1
```

### javascript中的`"user strict";`是什么意思？使用它区别是什么？

```js
use strict是ECMAscript 5中的严格允许模式，这种模式下js在严格条件下运行

严格模式中消除了一些语法的不合法不合理处，减少了一些怪异行为
譬如不能用with,不能给未声明的全局变量赋值，不能callee，不允许直接操作argument等

严格模式消除了一些不合理不安全之处，使得代码相对更合理，而且还可以提供编译器效率，增加运行速度

最重要的是，为未来的js标准化做铺垫，未来可以认为是全部基于严格模式的（譬如es6）
```

### 如何判断一个对象是否属于某个类？

```js
譬如

a instanceof Date

const getClassName = (object) => Object.prototype.toString.call(object).match(/^\[object\s(.*)\]$/)[1];

getClassName('sss') === 'String'; // true
```

### new操作符具体干了什么呢？

```js
1.创建一个空对象，并且this变量引用该对象，同时继承该对象的原型
2.属性和方法被加入到this引用的对象中
2.新创建的对象由this引用，并且最后隐式返回this

var obj = {};
obj.__proto__ = Base.prototype;
Base.call(obj);
```

### JS中有一个函数，执行时对象查找时，永远不会去查找原型，这个函数是？

```js
hasOwnProperty

js中hasOwnProperty函数是返回一个布尔值，
指出一个对象是否具有指定名称的属性
此方法无法检查该对象的原型链中是否具有该属性
该属性必须是该对象本身的成员，不能是原型链上的

使用：
Object.hasOwnProperty.call(object, proName);
object必须是对象，proName必须，是属性名称的字符串形式

有则返回true,否则false
```

### JSON的了解？

```js
JSON(JavaScript Object Notation)是一种轻量级的数据交换方式

它是基于JavaScript的一个子集。
数据格式简单，易于读写，占用带宽小

例如
{"name": "zhangsan", "age": "18"}

JSON字符串转JSON对象
eval('(' + str + ')')
str.parseJSON
JSON.parse(str)

JSON转字符串
obj.toJSONString()
JSON.stringify(obj)
```

### JS延迟加载的方式有哪些?

```js
1.创建脚本时（或动态创建时），设置async属性（H5中的异步支持）

2.动态创建DOM(用的最多)，手动创建dom添加到页面中

3.或者XHR Injection，XHR Eval，Script In Iframe,Script defer属性,document.write(script tag)等

XHR Injection(XHR 注入)：通过XMLHttpRequest来获取javascript，然后创建一个script元素插入到DOM结构中

XHR Eval：与XHR Injection对responseText的执行方式不同，直接把responseText放在eval()函数里面执行

Script In Irame：在父窗口插入一个iframe元素，然后再iframe中执行加载JS的操作

defer属性：IE4.0就出现。defer属声明脚本中将不会有document.write和dom修改。浏览器会并行下载其他有defer属性的script。而不会阻塞页面后续处理。
注：所有的defer脚本必须保证按顺序执行的。

async属性：HTML5新属性。脚本将在下载后尽快执行，作用同defer，但是不能保证脚本按顺序执行。他们将在onload事件之前完成

对于支持HTML5的浏览器，实现JS的异步加载只需要在script元素中加上async属性，
为了兼容老版本的IE还需加上defer属性；
对于不支持HTML5的浏览器(IE可以用defer实现)，
可以采用以上几种方法实现。
原理基本上都是向DOM中写入script或者通过eval函数执行JS代码，
你可以把它放在匿名函数中执行，也可以在onload中执行，
也可以通过XHR注入实现，也可以创建一个iframe元素，然后在iframe中执行插入JS代码。
```

### Ajax是什么，如何创建一个Ajax?

```js
全称： Asynchronous JavaScript And XML
异步传输 + js + xml
也就是向服务器发送请求时，不必等待结果，而是可以同时做其他事情
等到有结果了它会自己根据设定进行后续操作
于此同时，页面不会整体刷新，提高了用户体验

创建：
1.创建一个XMLHttpRequest对象，也就是创建一个异步调用对象
2.创建一个新的Http请求，并指定该HTTP请求的方法，url以及验证信息
3.设置响应HTTP请求状态变化的函数
4.发送HTTP请求
5.获取异步调用返回的数据
6.使用js和dom实现局部刷新
```

### Ajax如何解决浏览器缓存问题？

```js
ajax请求中，只有get请求会有缓存

解决方案

1.ajax请求前加上:ajaxObj.setRequestHeader('If-Modified-Since', '0');
2.ajax请求前加上:ajaxObj.setRequestHeader('Cache-Control', 'no-cache');
3.在URL后面加上一个随机数: "random=" + Math.random();
4.同理在url后面加上时间戳: "nowtime=" + (new Date()).getTime();
5.jq中，可以: $.ajaxSetup({cache: false});
```

### 同步和异步的区别？

```js
同步->顺序执行

譬如 a -> b -> c

异步，回调执行

譬如

一轮循环  a -> c

循环结束后 b触发回调
```

### 连等号赋值顺序

```js
var a = {n: 1}
var b = a;
a.x = a = {n: 2}
console.log(a); // {n: 2}
console.log(a.x); // undefined
console.log(b); // {n: 1, x: {n: 2}}
console.log(b.x) // {n: 2}

因为连等号这个语句中会先确定所有遍历的指针，然后才会去对于赋值

其中
a.x = a = {n: 2} 
指针确定如下
a.x的指针已经确定了，指向了原始a的（因为原始a没有x，因此创建了一个指向null的指针）
a指向也是原始a

赋值如下
a重新指向到了新的地址 {n: 2}（栈中的指针指向了堆中新的对象）
原始a.x的指向到了 {n: 2}

因此最后
a指向到了新的{n: 2}
a.x为undefined

b指向原始a
b.x = {n: 2}
```

### 页面编码和被请求的资源编码如果不一致如何处理？

```js
譬如，如果html页面是gbk的，js是utf8的，引入js时需要加上charset='utf-8'
反之亦然
```

### 如何解决跨域问题？

```js
这个范围很大，包括js跨域，ifram跨域，ajax跨域等

如ajax跨域一般是用jsonp(old)或者(cors)方案-需要后台进行配合配置

或者用websocket等请求来进行数据交互

另外window.postMessage也可跨域跨窗口传递消息
```

### 立即执行函数，不暴露私有成员

```js
var module1 = (function() {
    var count = 1;
    
    function change() {
        count++;
    }
    
    return {
        change: change,
    };
)();
```

### AMD(Modules/Asynchronous-Definition)、CMD(Common-Module-Definition)规范的区别?

```js
AMD:
异步模块定义，所有模块异步加载，模块加载不影响后续运行，所以依赖模块的语句必须写在回调函数中
提前执行
依赖前置
主要应用于require.js
一个当多个用
cmd：
同步加载
延迟执行
依赖就近
as lazy as possible
主要应用于sea.js
推荐每一个模块职责单一
```

### documen.write和 innerHTML的区别

```js
document.write只能重绘整个页面
innerHtml可以重绘页面的一部分
```

### requireJS的核心原理是什么？（如何动态加载的，如何避免多次加载，如何缓存？）

```js
核心是js的加载模块，通过正则匹配模块以及模块间的依赖关系，保证文件的先后加载顺序
根据文件路径对加载过的文件进行缓存

http://www.cnblogs.com/yexiaochai/p/3961291.html
```

### JS模块加载器的轮子怎么造，也就是如何实现一个模块加载器？

```js
http://www.jianshu.com/p/0505b1718dab
https://www.zhihu.com/question/21157540
http://annn.me/how-to-realize-cmd-loader/
```

### 谈谈对ECMAScript6的理解？

```js
ECMA：
 1996年11月，JavaScript的创造者Netscape公司，决定将JavaScript提交给国际标准化组织ECMA，
 希望这种语言能够成为国际标准。
 次年，ECMA发布262号标准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准
 ，并将这种语言称为ECMAScript。这个版本就是ECMAScript 1.0版。

又名ECMAScript2015，于2015年6月份发布
是继ECMAScript5（2009年发布）后的新一代标准

增加了很多特性，例如Maps,Sets,Promise,Generators等
let,const等声明
箭头函数等用法
Class等语法糖
而且等同于默认使用了严格模式

像TypeScript也实现了ECMAScript6标准，它是JavaScript的超集
```

### ECMAScript6 怎么写class么，为什么会出现class这种东西?

```js
class XXX {
    constructor() {
    }
    
    foo1() {
    }
    
    static foo2() {
    }
}

它本质只是一个语法糖（并不是全新的东西），可以让有面向对象思想的人更快速上手

本质仍然是原型链直接的继承
```

### DOM操作，怎么添加、移除、移动、复制、创建和查找节点？

```js
1.创建
createDocumentFragment() // 创建一个dom片段
createElement() // 创建一个具体元素
createTextNode() // 创建一个文本节点

2.添加，移除，替换，插入
appendChild()
removeChild()
replaceChild()
insertBefore()

3.查找
getElementsByTagName()
getElementsByClassName()
getElementsByName()
getElementById()
document.querySelector()
```

### .call()和.apply()的区别？

```js
这两个方法都可以替换context

区别是
.call(context, param1, param2, ...)
.apply(context, [param1, param2, ...])
```

### 数组和对象有哪些原生方法，列举一下?

```js
数组：
push
pop
shift
unshift
splice
slice
reverse
sort
concat
join
toString
indexOf
lastIndexOf
forEach
map
filter
every
some
reduce
reduceRight
length

Object:
hasOwnProperty
isPrototypeOf
provertyIsEnumerable
toString // {}.toString()返回[object Object]
// 主要区别，一个数组中
// toString访问的是每一个对象的toString方法
// toLocalString(本地环境字符串,会根据机器环境返回字符串)访问的是对象每一个元素的toLocalString
// 两个方法都可以被重写
toLocalString // {}.toLocalString()返回[object Object]
valueOf // 返回的是原始值(对象本身的值)，例如{}.valueOf();返回的是{}对象
call
apply
```

### js怎么实现一个类。怎么示例化这个类？

```js
最经典的。

function ABC() {...}

ABC.prototype.xxx = function() {...}

new ABC();

或者

function createObj() {
    var obj = new Object();
    
    obj.xxx = function() {...}
    
    return obj;
}

createObj();

很多种...
```

### JavaScript中的作用域与变量声明提升?

```js
ES6之前没有块级作用域，var等声明会提前

例如
console.log(a); // undefined
console.log(b); // ReferenceError
var a = 1;
let b = 2;
等同于：
var a;
console.log(a); // undefined
console.log(b); // ReferenceError
a = 1;
let b = 2; 

另外
function xxx() {}
函数声明也会提升

如果函数声明和变量声明一致，
变量若没有赋值函数声明会覆盖变量声明
变量若已经赋值，函数无法覆盖变量
var myName;
function myName () {...};
console.log(typeof myName); // function

var myName = 'hello';
function myName () {...};
console.log(typeof myName); // String
```

### 如何编写高性能的Javascript？

```js
不要用for-in，用for循环
对对象进行缓存，特别是dom
不要在函数内过度嵌套
避免循环引用，防止内存泄露(无法回收)
避免过多使用全局变量
注意作用域
字符串链接时可以用数组优化
对象失效后及时去除引用，以便于垃圾回收器回收
慎用闭包
页面绘制时尽量减少回流或重绘
```

### 那些操作会造成内存泄漏？

```js
垃圾收回机制会找出不使用的变量（周期性，间隔性），并释放内存

但是如果这个变量引用被持有，则无法释放

一般

全局变量没有用好会造成内存无法回收
闭包也很容易造成内存泄露
一些未清理的dom元素引用也易造成
或者被遗忘的定时器或回调
dom子字元素持有引用不置空也容易造成

内存泄漏指任何对象在您不再拥有或需要它之后仍然存在。
垃圾回收器定期扫描对象，并计算引用了每个对象的其他对象的数量。如果一个对象的引用数量为 0（没有其他对象引用过该对象），或对该对象的惟一引用是循环的，那么该对象的内存即可回收。

 setTimeout 的第一个参数使用字符串而非函数的话，会引发内存泄漏。
 闭包、控制台日志、循环（在两个对象彼此引用且彼此保留时，就会产生一个循环）
```

### JQuery的源码看过吗？能不能简单概况一下它的实现原理？

```js
核心是对`DOM`操作进行的封装，以避免单独实现不同浏览器的兼容代码

譬如里面的代理就用的很巧妙。
通过代理对象，给不同的对象监听事件。进行管理

同时它的可拓展性也是它的突出优点
```

### 如何判断当前脚本运行在浏览器还是node环境？

```js
this === window ? 'browser' : 'node';
 通过判断Global对象是否为window，如果不为window，当前脚本没有运行在浏览器中
```

### 移动端最小触控区域是多大？

```js
目前基本是达成了共识

苹果推荐的：44pt*44pt

「具体看 WWDC 14」
https://developer.apple.com/ios/human-interface-guidelines/visual-design/layout/

Android的最小点击区域尺寸是48x48dp，
这就意味着在xhdpi的设备上，按钮尺寸至少是96x96px。而在xxhdpi设备上，则是144x144px。
```

### 把 Script 标签 放在页面的最底部的body封闭之前 和封闭之后有什么区别？浏览器会如何解析它们？

```js
标准规定应该是放在body封闭之前

但实际上浏览器也是能正常解析的
但是这时候的解析规则是：
“body标签闭合之后”后再出现script或任何元素的开始标签，
都是parse error，浏览器会忽略之前的</body>，即视作仍旧在body内。所以实际效果和写在“body标签闭合之前”之前是没有区别的。
```

### Node.js的适用场景？

```js
总结：（老版本的）
适合IO密集型，而非计算密集型
高并发，微数据的情景（在长链接推送这块比较适合）

特别是高并发中，JS的异步天生适合与并发，随着并发数上升，相比其它server端，node.js的性能衰减的较慢

当然，性能方面，虽然有v8加持，会好于一些python语言，但由于V8有最大1G堆的限制，相比java/c++等语言，在高负载下不够给力
Node中通过JavaScript使用内存时就会发现只能使用部分内存（64位系统下约为1.4 GB，32位系统下约为0.7 GB），
其深层原因是 V8 垃圾回收机制的限制所致（如果可使用内存太大，V8在进行垃圾回收时需耗费更多的资源和时间，严重影响JS的执行效率）。
http://kb.cnblogs.com/page/573533/
```

### (如果会用node)知道route, middleware, cluster, nodemon, pm2, server-side rendering么?

```js
route
路由，譬如express中，通过不同的路由调用不同的接口功能

middleware
中间件
譬如express中就提供各种中间件
譬如给接口做跨域处理，只需要过一个cors中间件即可

cluster
Node.js从v0.6.0开始，新增cluster模块
让node.js开发服务时利用多核机器
充分利用多核的思路是：使用多个进程处理业务。cluster模块封装了创建子进程、进程间通信、服务负载均衡。
有两类进程，master进程和worker进程，master进程是主控进程，它负责启动worker进程，worker是子进程、干活的进程。

nodemon
代码自动重启
开发时，动态部署时都方便

无须手动重启，发现文件变化后会自动重启
或者意外错误崩溃后也会自动重启

pm2
是可以用于生产环境的Nodejs的进程管理工具，并且它内置一个负载均衡（使用 Node cluster 集群模块）。
它不仅可以保证服务不会中断一直在线，并且提供0秒reload功能，还有其他一系列进程管理、监控功能
让node.js集群更容易
以前用的是forever之类

server-side rendering
服务端渲染，解决SPA应用的SEO问题
能够直接把一个 SPA 应用输出成 HTML 字符串吧
而且首屏渲染速度更快（重点），无需等待js文件下载执行的过程
简单说就是nodejs这一层就将html页面组装好了，然后交给浏览器渲染。
```

### 移动端的点击事件的有延迟，时间是多久，为什么会有？ 怎么解决这个延时？

```js
click 有 300ms 延迟,为了实现safari的双击事件的设计，浏览器要知道你是不是要双击操作。

一般采用touch方式模拟点击可以去除延迟
或者直接采用fastclick等第三方库
```

### 知道各种JS框架(Angular, Backbone, Ember, React, Meteor, Knockout...)么? 能讲出他们各自的优点和缺点么?

```js
Backbone与Angular（有时算到mvvm），Ember
是mvc框架
Angular大而全
Backbone只提供核心的mvc模式

Backbone的Model把服务器端的数据模型映射到浏览器端，绑定数据验证机制，并与相应的REST操作绑定，
这样每个数据模型都变成了独立体，方便REST操作，却限制REST的灵活性。比如我要将10个todo批量标记成已完成，它会发出10个REST请求。
Backbone的Model没有与UI视图数据绑定，而是需要在View中自行操作DOM来更新或读取UI数据，这点很奇怪。

AngularJS与此相反，Model直接与UI视图绑定，Model与UI视图的关系，
通过directive封装，AngularJS内置的通用directive，就能实现大部分操作了，
也就是说，基本不必关心Model与UI视图的关系，直接操作Model就行了，UI视图自动更新。

Ember上手难度和Angular有得一拼，是有两位大佬开发的，不是大公司推行，社区可能不足


https://www.zhihu.com/question/21170137

Meteor是基于node.js的一个web开发框架，包揽了传统 web 开发的后端数据处理和前端的视图展现。主要特点是实时性。

而 angular 和 vue 、React是纯粹的前端框架，mvvm 架构，只需获得数据之后，做各种处理。

Knockout在.net界有点名气
几乎是纯粹的dom绑定，没有一个默认的组织程序的架构。

react最大的特点就是万物皆js，组件化，以及轻量
社区好，当下最热门的前端框架

React是目标是UI组件，通常可以和其它框架组合使用，目前并不适合单独做一个完整的框架
```

### 解释一下 Backbone 的 MVC 实现方式？

```js
Backbone为复杂WEB应用程序提供模型(models)、集合(collections)、视图(views)的结构。
其中models用于绑定键值数据和自定义事件；
collections附有可枚举函数的丰富API；
views可以声明事件处理函数，并通过RESRful JSON接口连接到应用程序。

Backbone将数据呈现为模型, 你可以创建模型、对模型进行验证和销毁，甚至将它保存到服务器。
当UI的变化引起模型属性改变时，模型会触发"change"事件；
所有显示模型数据的视图会接收到该事件的通知，继而视图重新渲染。
你无需查找DOM来搜索指定id的元素去手动更新HTML。 — 当模型改变了，视图便会自动变化。

里面的集合器Collection是对单独的数据模型进行统一控制
```

### 什么是“前端路由”?什么时候适合使用“前端路由”? “前端路由”有哪些优点和缺点?

```js
譬如单页面应用
a.com
但是它做了几个url
a.com/a
a.com/b
...

输入／a，其实就是触发了路由，然后跳转到相应功能

比如vue做出来的就是前端路由

相比后端路由
用户体验好，不需要每次都从服务器全部获取，快速展现给用户

https://segmentfault.com/q/1010000005336260
```

### 知道什么是webkit么? 知道怎么用浏览器的各种工具来调试和debug代码么?

```js
Chrome（现在是blink）,safari浏览器的内核

准确的说，chrome是基于chromium引擎，而使用webkit内核

weblit是当初苹果开源的
google在次基础上开发了chrmium（现在内核变为了blink）

chrome中的devtools的调试工具
```

### 如何测试前端代码？知道BDD,TDD，Unit Test么？ 知道怎么测试你的前端工程么(mocha, sinon, jasmin, qUnit..)?

```js
一般是指程序开发完后开发人员的自动测试，而不是后期测试人员的测试

TDD: 测试驱动开发
简单的理解，开发功能前，先根据需求，写一个测试案例，然后开发功能，直到能正常通过
并不是只有单纯的测试，而是把需求分析，设计，质量控制量化的过程
TDD指的是在单元测试级别，也即函数级别进行测试驱动开发。

BDD:行为驱动开发
一种敏捷开发模式
主要是从用户的需求出发，强调系统的行为
它包括验收测试和客户测试驱动等的极限编程的实践，作为对测试驱动开发的回应。
使用BDD可以解决需求和开发脱节的问题

BDD，不是跟TDD一个层级的，B是说代码的行为，或许比单元测试高那么一点点吧，
主要是跟ATDD（接收测试驱动开发）、SBE（实例化需求）等实践一并提及的，
因为他们都是对应到传统测试理论里面，高于单元和模块测试，
从功能测试、集成到系统、性能等这些高级别测试的范围。
```

### 前端templating(Mustache, underscore, handlebars)是干嘛的, 怎么用?

```js
模版映射引擎

简单的说，将html模版（譬如{{name}}）
和对象({name: 'ss'})

映射，然后{{name}}就可以映射成'ss'了

底层基本都会用正则进行分析匹配

兼容mustache语法
可以循环映射
有if-else等语句
空白处理等等

处理流程：
1.获取模版-可以是jq获取
2.Handlebars.compile(tpl);编译模版
3.模版匹配json:var html = template(data);
4.添加到dom中

http://www.cnblogs.com/hustskyking/p/principle-of-javascript-template.html
```

### 检测浏览器版本版本有哪些方式？

```js
一般通过useragent检测
譬如：navigator.userAgent
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36
    (KHTML, like Gecko) Chrome/41.0.2272.101 Safari/537.36"
    
如webview容器一般会加上自己特色的头部
```

### 用js实现千位分隔符?

```js
function commafy(num) {
    return num && num
          .toString()
          .replace(/(\d)(?=(\d{3})+\.)/g, function($0, $1) {
              return $1 + ",";
          });
}

console.log(commafy(1234567.90)); //1,234,567.90
```

### What is a Polyfill?

```js
polyfill
是指在旧浏览器上复制标准API的JavaScript补充
可以动态地加载 JavaScript 代码或库，在不支持这些标准API的浏览器模拟它们

因为 polyfill 模拟标准 API，所以能够以一种面向所有浏览器未来的方式针对这些 API 进行开发，
一旦对这些 API 的支持变成绝对大多数，则可以方便地去掉 polyfill，无需做任何额外工作。

例如，geolocation（地理位置）polyfill 可以在 navigator 对象上添加全局的 geolocation 对象，
还能添加 getCurrentPosition 函数以及“坐标”回调对象，
所有这些都是 W3C 地理位置 API 定义的对象和函数。
```

### 做的项目中，有没有用过或自己实现一些 polyfill 方案（兼容性处理方案）？

```js
譬如：
html5shiv(h5语义化标签)
Geolocation
Placeholder

但是JQ之类的并不属于这个范畴
polyfill是指标准API的适配，而jq是自己定义一套api

譬如对requestAnimationFrame的兼容适配就属于一种polyfill
```

### 给一个dom同时绑定两个点击事件，一个用捕获，一个用冒泡。会执行几次事件，会先执行冒泡还是捕获？

```js
addEventListener(name, func, isBubble)
第三个参数是是否冒泡

冒泡意味着从下到上
捕获则相反，从上到下

无论是冒泡事件还是捕获事件，元素都会先执行捕获阶段
从上往下，如有捕获事件，则执行；
一直向下到目标元素后，从目标元素开始向上执行冒泡元素，
即第三个参数为true表示捕获阶段调用事件处理程序，如果是false则是冒泡阶段调用事件处理程序。
(在向上执行过程中，已经执行过的捕获事件不再执行，只执行冒泡事件。)

所以同时监听捕获和冒泡时的顺序：
父级捕获->子级捕获->子级冒泡->父级冒泡

e.stopPropagation();可阻止冒泡或捕获的传播
```

### 使用JS实现获取文件扩展名？

```js
可以用正则提取(捕获组)
str.match(/[.]([^.]+)$/)[1];
没有可以设置为空
```

### return?

```js
return {
     name: "hello"
};
return
{
     name: "hello"
};

前者是一个Object，后者是undefined.
这是return的设计缺陷-程序被自动补全为了（自动修复机制）
return;
{
     name: "hello"
};
```

### JS变量声明，形参，函数声明的顺序与优先级?

```js
填充变量的顺序：

函数形参 -> 函数声明 -> 变量声明
当变量声明遇到VO中已有同名时，不会影响已经存在的属性

函数形参：
由名称和对应值组成的一个变量对象的属性被创建
没有传对应参数的话，那么由名称和undefined组成的变量对象的属性会被创建

函数声明：
由名称和对应值（函数对象(function-object)）组成一个变量对象的属性会被创建
如果变量中已经有这个相同名称的属性，则完全替换

变量声明：
由名称和对应值（undefined）组成的一个变量对象的属性被创建
如果变量名称与已经声明的形式参数或函数相同，则变量声明不会干扰已经存在的
```

### var和let作用域？

```js
for (let i = 0; i < 5; i++) {
 setTimeout(function() {
  console.log(i);
 }, 1000);
}
console.log(i); // 报错 01234

这里的的let是在for循环中声明，
所以当前的i只在本轮循环有效，每一次的循环就是一个新的变量
引擎内部会记住上一次循环的值，初始化本轮循环i时，在上一轮的基础上计算
for循环中，循环语句是一个父作用域，循环体内是一个单独的子作用域
内部原理：
for ( LexicalDeclaration Expressionopt ; Expressionopt ) Statement 规则的时候
每次迭代会新建运行环境记录值为拷贝最后迭代内容
（每次循环体都是个独立的新scope）
所以当次循环体里的定义的func往外爬变量就是当次循环体内的值了

let i;          
for (i = 0; i < 5; i++) {
 setTimeout(function() {
  console.log(i);
 }, 1000);
}
console.log(i); // 5 55555

for (var i = 0; i < 5; i++) {
 setTimeout(function() {
  console.log(i);
 }, 1000);
}
console.log(i); // 5 55555

https://www.zhihu.com/question/55653122
```

### Object.is与原来的比较操作符 ===， ==的区别？

```js
ES6才新增
两等号判等，会在比较时进行类型转换；
三等号判等(判断严格)，比较时不进行隐式类型转换,（类型不同则会返回false）；

Object.is 在三等号判等的基础上特别处理了 NaN 、-0 和 +0 ，保证 -0 和 +0 不再相同，
但 Object.is(NaN, NaN) 会返回 true.

Object.is 应被认为有其特殊的用途，而不能用它认为它比其它的相等对比更宽松或严格。
```

### react-router 路由系统的实现原理？

```js
https://segmentfault.com/a/1190000004527878

react引入第三方库：
https://www.v2ex.com/t/237501
```

### 页面重构的一般流程

```js
网站重构：
在不改变外部行为的前提下，简化结构，增加可读性，（但是前端行为是和重构前一致的）

对传统网站的重构一般是：
table改为div+css
是网站前端兼容现代浏览器（主要是css规范往w3c靠拢）
针对移动端的优化
针对seo优化（这点对产品级别的网站很有必要）

网站重构需要考虑：
减少代码的耦合性
增加可拓展性
按照规范编写代码
设计更可拓展的API
增加用户体验（如性能优化）
使用新框架，新语言（如vue,react）

譬如可以将静态资源打包压缩合并
优化程序的数据读写等性能
采用cdn加速
http服务器的缓存
dom操作优化
```

### 公钥与私钥

```js
一般情况下私钥用于对数据进行签名，公钥用于对签名进行验证
HTTP网站一般在浏览器端用公钥加密敏感数据，然后在服务器端用私钥解密（譬如常见的RSA加密）
```

### 前端性能优化的方法？

```js
    （1） 减少http请求次数：CSS Sprites, JS、CSS源码压缩、图片大小控制合适；网页Gzip，CDN托管，data缓存 ，图片服务器。

    （2） 前端模板 JS+数据，减少由于HTML标签导致的带宽浪费，前端用变量保存AJAX请求结果，每次操作本地变量，不用请求，减少请求次数

    （3） 用innerHTML代替DOM操作，减少DOM操作次数，优化javascript性能。

    （4） 当需要设置的样式很多时设置className而不是直接操作style。

    （5） 少用全局变量、缓存DOM节点查找的结果。减少IO读取操作。

    （6） 避免使用CSS Expression（css表达式)又称Dynamic properties(动态属性)。

    （7） 图片预加载，将样式表放在顶部，将脚本放在底部  加上时间戳。

    （8） 避免在页面的主体布局中使用table，table要等其中的内容完全下载之后才会显示出来，显示比div+css布局慢。
    对普通的网站有一个统一的思路，就是尽量向前端优化、减少数据库操作、减少磁盘IO。
    向前端优化指的是，在不影响功能和体验的情况下，能在浏览器执行的不要在服务端执行，
    能在缓存服务器上直接返回的不要到应用服务器，程序能直接取得的结果不要到外部取得，
    本机内能取得的数据不要到远程取，内存能取到的不要到磁盘取，缓存中有的不要去数据库查询。
    减少数据库操作指减少更新次数、缓存结果减少查询次数、将数据库执行的操作尽可能的让你的程序完成
    （例如join查询），减少磁盘IO指尽量不使用文件系统作为缓存、减少读写文件次数等。
    程序优化永远要优化慢的部分，换语言是无法“优化”的。
```

### http状态码有那些？分别代表是什么意思？

```js
    简单版
    [
        100  Continue   继续，一般在发送post请求时，已发送了http header之后服务端将返回此信息，表示确认，之后发送具体参数信息
        200  OK         正常返回信息
        201  Created    请求成功并且服务器创建了新的资源
        202  Accepted   服务器已接受请求，但尚未处理
        301  Moved Permanently  请求的网页已永久移动到新位置。
        302 Found       临时性重定向。
        303 See Other   临时性重定向，且总是使用 GET 请求新的 URI。
        304  Not Modified 自从上次请求后，请求的网页未修改过。

        400 Bad Request  服务器无法理解请求的格式，客户端不应当尝试再次使用相同的内容发起请求。
        401 Unauthorized 请求未授权。
        403 Forbidden   禁止访问。
        404 Not Found   找不到如何与 URI 相匹配的资源。

        500 Internal Server Error  最常见的服务器端错误。
        503 Service Unavailable 服务器端暂时无法处理请求（可能是过载或维护）。
    ]

    完整版
    1**(信息类)：表示接收到请求并且继续处理
    100——客户必须继续发出请求
    101——客户要求服务器根据请求转换HTTP协议版本

    2**(响应成功)：表示动作被成功接收、理解和接受
    200——表明该请求被成功地完成，所请求的资源发送回客户端
    201——提示知道新文件的URL
    202——接受和处理、但处理未完成
    203——返回信息不确定或不完整
    204——请求收到，但返回信息为空
    205——服务器完成了请求，用户代理必须复位当前已经浏览过的文件
    206——服务器已经完成了部分用户的GET请求

    3**(重定向类)：为了完成指定的动作，必须接受进一步处理
    300——请求的资源可在多处得到
    301——本网页被永久性转移到另一个URL
    302——请求的网页被转移到一个新的地址，但客户访问仍继续通过原始URL地址，重定向，新的URL会在response中的Location中返回，浏览器将会使用新的URL发出新的Request。
    303——建议客户访问其他URL或访问方式
    304——自从上次请求后，请求的网页未修改过，服务器返回此响应时，不会返回网页内容，代表上次的文档已经被缓存了，还可以继续使用
    305——请求的资源必须从服务器指定的地址得到
    306——前一版本HTTP中使用的代码，现行版本中不再使用
    307——申明请求的资源临时性删除

    4**(客户端错误类)：请求包含错误语法或不能正确执行
    400——客户端请求有语法错误，不能被服务器所理解
    401——请求未经授权，这个状态代码必须和WWW-Authenticate报头域一起使用
    HTTP 401.1 - 未授权：登录失败
    　　HTTP 401.2 - 未授权：服务器配置问题导致登录失败
    　　HTTP 401.3 - ACL 禁止访问资源
    　　HTTP 401.4 - 未授权：授权被筛选器拒绝
    HTTP 401.5 - 未授权：ISAPI 或 CGI 授权失败
    402——保留有效ChargeTo头响应
    403——禁止访问，服务器收到请求，但是拒绝提供服务
    HTTP 403.1 禁止访问：禁止可执行访问
    　　HTTP 403.2 - 禁止访问：禁止读访问
    　　HTTP 403.3 - 禁止访问：禁止写访问
    　　HTTP 403.4 - 禁止访问：要求 SSL
    　　HTTP 403.5 - 禁止访问：要求 SSL 128
    　　HTTP 403.6 - 禁止访问：IP 地址被拒绝
    　　HTTP 403.7 - 禁止访问：要求客户证书
    　　HTTP 403.8 - 禁止访问：禁止站点访问
    　　HTTP 403.9 - 禁止访问：连接的用户过多
    　　HTTP 403.10 - 禁止访问：配置无效
    　　HTTP 403.11 - 禁止访问：密码更改
    　　HTTP 403.12 - 禁止访问：映射器拒绝访问
    　　HTTP 403.13 - 禁止访问：客户证书已被吊销
    　　HTTP 403.15 - 禁止访问：客户访问许可过多
    　　HTTP 403.16 - 禁止访问：客户证书不可信或者无效
    HTTP 403.17 - 禁止访问：客户证书已经到期或者尚未生效
    404——一个404错误表明可连接服务器，但服务器无法取得所请求的网页，请求资源不存在。eg：输入了错误的URL
    405——用户在Request-Line字段定义的方法不允许
    406——根据用户发送的Accept拖，请求资源不可访问
    407——类似401，用户必须首先在代理服务器上得到授权
    408——客户端没有在用户指定的饿时间内完成请求
    409——对当前资源状态，请求不能完成
    410——服务器上不再有此资源且无进一步的参考地址
    411——服务器拒绝用户定义的Content-Length属性请求
    412——一个或多个请求头字段在当前请求中错误
    413——请求的资源大于服务器允许的大小
    414——请求的资源URL长于服务器允许的长度
    415——请求资源不支持请求项目格式
    416——请求中包含Range请求头字段，在当前请求资源范围内没有range指示值，请求也不包含If-Range请求头字段
    417——服务器不满足请求Expect头字段指定的期望值，如果是代理服务器，可能是下一级服务器不能满足请求长。

    5**(服务端错误类)：服务器不能正确执行一个正确的请求
    HTTP 500 - 服务器遇到错误，无法完成请求
    　　HTTP 500.100 - 内部服务器错误 - ASP 错误
    　　HTTP 500-11 服务器关闭
    　　HTTP 500-12 应用程序重新启动
    　　HTTP 500-13 - 服务器太忙
    　　HTTP 500-14 - 应用程序无效
    　　HTTP 500-15 - 不允许请求 global.asa
    　　Error 501 - 未实现
    HTTP 502 - 网关错误
    HTTP 503：由于超载或停机维护，服务器目前无法使用，一段时间后可能恢复正常
```

### html method？

```js
一台服务器要与HTTP1.0兼容，只要为资源实现Get和head方法即可

8中方法
HTTP1.0定义了三种请求方法： GET, POST 和 HEAD方法。
HTTP1.1新增了五种请求方法：OPTIONS, PUT, DELETE, TRACE 和 CONNECT 方法。

1.GET是最常用的方法，通常用于请求服务器某个资源

2.HEAD与get类似，但服务器在响应中只返回头部，不返回实体的主体部分

3.put让服务器用请求的主体部分来创建一个由所请求的url命名的新文档，
或者如果那个url已存在的话，用这个主体替代

4.POST起初是用于向服务器输入数据，以前通常用于支持html表单请求，
前后端开发趋势后，通常用于标准的restful请求

5.trace会在目的服务器发起一个迂回诊断，最后一站的服务器会弹回一个trace响应，
并在响应主体中携带它收到的原始请求报文，
trace方法主要用于诊断，验证请求是否如愿的穿过了请求／响应链

6.options方法用于web服务器告知其支持的各种功能。
可以查询服务器支持哪些方法或对某些特殊资源支持哪些方法
跨域ajax复杂请求时候会进行一次options预检，以确认服务端是否支持改次跨域ajax请求
(headers, origin, method)

7.delete请求服务器删除请求url指定的资源

8.CONNECT http/1.0协议中预留给能够将链接改为管道方式的代理服务器

又有一说是15种？（应该不是标准）
加上PATCH，MOVE，COPY，LINK，UNLINK，WRAPPED，Extension-mothed
http://tools.jb51.net/table/http_request_method

但总结下来，标准的方法应该是只有8种的
```

### resuful请求？

```js
REST -- REpresentational State Transfer
表现层状态转移
描述的是在网络中一种client和server交互方式
rest本身不实用，实用的是如何设计 RESTful API(REST风格的网络接口)

简述作用：
URL定位资源，用http动词(GET,POST,DELETE)描述操作

譬如
定义为
GET 用来获取资源
POST 用来新建资源
PUT 用来更新资源
DELETE 用来删除资源

POST http:xxx/friend 添加好友
DELETE http:xxx/friend 删除好友
会禁止使用get请求来删除资源

服务端和客户端之间通过特定形式传递资源
譬如json,xml等

然后http code用来传递server的状态信息
譬如200成功，500内部错误等

总的来说，从以前的jsp,asp,php等架构脱离出来。
变成了前后端分离，前端展示内容，通过API和后台交互
```

### http request报文结构？

```js
rfc2616（HTTP协议）中进行了定义：

1.首行Request-line包括：请求方法，请求url，协议版本，CRLF

2.首行之后是若干行请求头：包括general-header，request-header，或entity-header，每一行以一个CRLF结束

3.请求头和实体消息之间有一个CRLF分隔

4.根据实际请求可能需要包含一个消息实体

示例如下：

GET /Protocols/rfc2616/rfc2616-sec5.html HTTP/1.1
Host: www.w3.org
Connection: keep-alive
Cache-Control: max-age=0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36
Referer: https://www.google.com.hk/
Accept-Encoding: gzip,deflate,sdch
Accept-Language: zh-CN,zh;q=0.8,en;q=0.6
Cookie: authorstyle=yes
If-None-Match: "2cc8-3e3073913b100"
If-Modified-Since: Wed, 01 Sep 2004 13:24:52 GMT

name=qiu&age=25


CRLF->Windows-style
LF->Unix Style
CR->Mac Style
```

### http response报文结构？

```js
rfc2616中进行了定义：

1.首行是状态行，包括： http版本，状态码，状态描述，后面跟一个CRLF

2.首行之后是若干行响应头，包括：通用头部，响应头部，实体头部

3.响应头部和响应实体之间用一个CRLF分隔

4.最后一个可能是消息实体

示例

HTTP/1.1 200 OK
Date: Tue, 08 Jul 2014 05:28:43 GMT
Server: Apache/2
Last-Modified: Wed, 01 Sep 2004 13:24:52 GMT
ETag: "40d7-3e3073913b100"
Accept-Ranges: bytes
Content-Length: 16599
Cache-Control: max-age=21600
Expires: Tue, 08 Jul 2014 11:28:43 GMT
P3P: policyref="http://www.w3.org/2001/05/P3P/p3p.xml"
Content-Type: text/html; charset=iso-8859-1

{"name": "qiu", "age": 25}
```

### 一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么？（流程说的越详细越好）***(需要重点过一遍)

```js
  注：这题胜在区分度高，知识点覆盖广，再不懂的人，也能答出几句，
    而高手可以根据自己擅长的领域自由发挥，从URL规范、HTTP协议、DNS、CDN、数据库查询、
    到浏览器流式解析、CSS规则构建、layout、paint、onload/domready、JS执行、JS API绑定等等；

    详细版：
    1、浏览器会开启一个线程来处理这个请求，对 URL 分析判断如果是 http 协议就按照 Web 方式来处理;
    2、调用浏览器内核中的对应方法，比如 WebView 中的 loadUrl 方法;
      3、通过DNS解析获取网址的IP地址，设置 UA 等信息发出第二个GET请求;
    4、进行HTTP协议会话，客户端发送报头(请求报头);
      5、进入到web服务器上的 Web Server，如 Apache、Tomcat、Node.JS 等服务器;
      6、进入部署好的后端应用，如 PHP、Java、JavaScript、Python 等，找到对应的请求处理;
    7、处理结束回馈报头，此处如果浏览器访问过，缓存上有对应资源，会与服务器最后修改时间对比，一致则返回304;
      8、浏览器开始下载html文档(响应报头，状态码200)，同时使用缓存;
      9、文档树建立，根据标记请求所需指定MIME类型的文件（比如css、js）,同时设置了cookie;
      10、页面开始渲染DOM，JS根据DOM API操作DOM,执行事件绑定等，页面显示完成。

    简洁版：
    浏览器根据请求的URL交给DNS域名解析，找到真实IP，向服务器发起请求；
    服务器交给后台处理完成后返回数据，浏览器接收文件（HTML、JS、CSS、图象等）；
    浏览器对加载到的资源（HTML、JS、CSS等）进行语法解析，建立相应的内部数据结构（如HTML的DOM）；
    载入解析到的资源文件，渲染页面，完成。
```

http://www.cnblogs.com/iovec/p/7904416.html

从输入网址，到网页展示，一般包括两大类步骤

__网络通信__

1.DNS解析成IP地址

2.发送http请求

3.tcp报文传输

4.ip寻址

5.封装成帧

6.物理传输

__网页渲染__

1.页面渲染主流程

2.dom树和render树的关系

3.布局render树（layout）

4.绘制（paint）

五层因特网协议栈（osi标准七层模型，但是实际实现通常是五层）

```js
1.应用层(dns,http) DNS解析成IP并发送http请求

2.传输层(tcp,udp) 建立tcp连接（三次握手）

3.网络层(IP,ARP) IP寻址

4.数据链路层(PPP) 封装成帧

5.物理层(利用物理介质传输比特流) 物理传输

然后传输的时候通过双绞线，电磁波等各种介质

OSI七层框架:
物理层、数据链路层、网络层、传输层、会话层、表示层、应用层

表示层：主要用于处理两个通信系统中交换信息的表示方式，为上层用户解决用户信息的语法问题
包括数据格式交换，数据加密与解密，数据压缩与终端类型转换等

会话层：在两个节点间建立端连接，为端系统的应用程序之间提供对话控制机制。
会话层管理登陆和注销过程，它具体管理两个用户和进程之间的对话，
如果某时某刻只允许一个用户执行一项特定操作，会话层协议就会管理这些操作，如阻止两个用户同时更新数据库中的同一数据
```

DNS解析成IP地址

```js
dns属于应用层协议，客户端会先检查本地是否有缓存（浏览器缓存，本机缓存，host），如果有就返回
否则请求上级dns服务器，直到找到根结点（这一过程可能会很耗时）
所以有一些公司会用 `dns-prefetch`来使得浏览器在空闲时间提前将这些域名转换为ip地址，请求资源时避免这一时间
注意，虽然使用 DNS Prefetch 能够加快页面的解析速度，但是也不能滥用，因为有开发者指出 禁用DNS预读取能节省每月100亿的DNS查询 。
如果需要禁止隐式的 DNS Prefetch，可以使用以下的标签：
meta http-equiv="x-dns-prefetch-control" content="off"
```

发送http请求

```js
http也是应用层协议，是基于请求／响应模式的，无状态的应用层协议，用于从万维网服务器传输超文本到本地浏览器
客户端发送的http报文包括:method,url,host，头部域（包括cookie），实体域等信息
```

### 平时如何管理你的项目？（***一些规范整理）

```js
先期团队必须确定好全局样式（globe.css），编码模式(utf-8) 等；

  编写习惯必须一致（例如都是采用继承式的写法，单样式都写成一行）；

  标注样式编写人，各模块都及时标注（标注关键样式调用的地方）；

  页面进行标注（例如 页面 模块 开始和结束）；

  CSS跟HTML 分文件夹并行存放，命名都得统一（例如style.css）；

  JS 分文件夹存放 命名以该JS功能为准的英文翻译。

  图片采用整合的 images.png png8 格式文件使用 尽量整合在一起使用方便将来的管理

```

### 最常见的两种攻击（XSS 和 CSRF）了解？

```js
xss：
跨站脚本
说到底实际上是一个HTML注入问题
由于前端没有过滤输入，导致攻击者可以执行一些危险脚本
譬如输入文本实际为脚本执行代码，盗取cookie等敏感信息

主要的防御是：对输入进行限制


CSRF:
跨域伪造请求（XSS是csrf的诸多途径之一）
即冒充用户在站内操作
一般方法是通过 XSS 或链接欺骗等途径，让用户在本机(即拥有身份 cookie 的浏览器端)发起用户所不知道的请求。

要完成一次CSRF攻击，受害者必须依次完成两个步骤：
1.登录受信任网站A，并在本地生成Cookie。
2.在不登出A的情况下，访问危险网站B。

你也许会说：“如果我不满足以上两个条件中的一个，我就不会受到CSRF的攻击”。是的，确实如此，但你不能保证以下情况不会发生：
1.你不能保证你登录了一个网站后，不再打开一个tab页面并访问另外的网站。
2.你不能保证你关闭浏览器了后，你本地的Cookie立刻过期，你上次的会话已经结束。
(事实上，关闭浏览器不能结束一个会话，但大多数人都会错误的认为关闭浏览器就等于退出登录/结束会话了……)
3.所谓的攻击网站，可能是一个存在其他漏洞的可信任的经常被人访问的网站。

http://netsecurity.51cto.com/art/201407/446775.htm
```