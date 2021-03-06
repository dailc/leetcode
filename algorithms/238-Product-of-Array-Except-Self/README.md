## Product-of-Array-Except-Self

## 说明
给出一个`n`大小的整形数组，`n > 1`，返回一个数组，满足以下条件

- 数组中的元素`output[i]`的值为`原数组中所有元素的乘积(除了num[i]本身)`

注意:

- 不能使用除法

- 在`O(N)`的时间复杂度

- 尽量不使用额外空间(`output`数组不属于额外空间的范畴)


例如，给出`[1,2,3,4]`，返回`[24,12,8,6]`

### 思路

- 第一遍正需遍历，构建乘积数组`A`，对应前面所有数字的乘积

    - 第二遍逆序遍历，构建乘积数组`B`，对应后面所有数字的乘积
    
    - 然后第三次遍历，两个乘积数组相乘即是结果
    
    - 可以进行下优化，不需要额外的数组，直接在数组本身进行