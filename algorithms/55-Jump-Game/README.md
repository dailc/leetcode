# Jump-Game

## 说明

给定一个数组，数组中的每一个位置的值，代表从这个地方能跳跃的最大距离，要求，返回是否能达到最后一个位置，例如:

```js
[2,3,1,1,4]
```
返回 true

```js
[3,2,1,0,4]
```
返回false

## 思路

- 1.仍然使用贪心算法，如果走完后，没有达到最后一个位置，则返回false