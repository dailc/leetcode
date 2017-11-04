# Remove-Nth-Node-From-End-of-List

## 说明

给出一个单链表，删除倒数第n位的节点，并返回头节点

示例

```js
Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
```

注意

- n永远有效

- 请只遍历一遍

### 思路:

通过辅助栈(压栈，出栈，然后删除对应)

先入栈，然后出n个，如果不够，直接返回头部，否则如果刚好最后一个是头部，返回头部

否则就将目标的next置空