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