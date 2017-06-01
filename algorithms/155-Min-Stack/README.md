## Min-Stack

## 说明
设计一个栈，支持`push,pop,top,getMin`，注意需要在`O(1)`时间内完成`getMin`，示例:

```
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
```

### 思路

* 1.采用一个辅助栈`min`
	* 每进入一个元素，辅助栈确保栈顶就是当前的最小元素
	* 如果添加的元素小于栈顶，则添加新元素，否则仍然添加栈顶元素