## LRU-Cache

## 说明
设计和实现一个数据结构[Least Recently Used (LRU) cache](https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU)

支持如下操作:

* `get(key)`-如果对应的key存在，获取key在缓存中的值，否则返回`-1`
* `put(key, value)`-如果当前key不存在，插入一个对应的值，当缓存超过容量上限时，将最久没有使用的缓存清除掉

例如:

```
LRUCache cache = new LRUCache( 2 /* capacity */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
```

注意，get和put操作必须在`O(1)`时间复杂度内。

### 思路

* 1.要在`O(1)`时间内完成，需要hash表
	* 有内存上限，有覆盖功能，需要双向链表