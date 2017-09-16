## Insert-Delete-GetRandom-O(1)

## 说明

设计一个数据结构，支持如下操作（`O(1)`复杂度）

- `insert(val)`：如果没有出现过，插入到集合中

- `remove(val)`：如果元素存在，移除它

- `getRandom`：随机返回集合中的一个元素，每一个元素需要由相同的概率

例如

```js
// Init an empty set.
RandomizedSet randomSet = new RandomizedSet();

// Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomSet.insert(1);

// Returns false as 2 does not exist in the set.
randomSet.remove(2);

// Inserts 2 to the set, returns true. Set now contains [1,2].
randomSet.insert(2);

// getRandom should return either 1 or 2 randomly.
randomSet.getRandom();

// Removes 1 from the set, returns true. Set now contains [2].
randomSet.remove(1);

// 2 was already in the set, so return false.
randomSet.insert(2);

// Since 2 is the only number in the set, getRandom always return 2.
randomSet.getRandom();
```

### 思路

- mp结合数组

- 数组存数据，mp判断重复，mp存index

- 移除的时候有一个技巧，把栈顶的和对应的val交换然后出栈