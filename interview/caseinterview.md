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