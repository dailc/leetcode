/* 作者: dailc
 * 时间: 2017-05-25
 * 描述: LRU-Cache
 * 
 * 来自: https://leetcode.com/problems/lru-cache
 */
(function(exports) {

	/**
	 * @description LRUCache
	 * @param {number} capacity
	 */
	var LRUCache = function(capacity) {
		this.count = 0;
		this.capacity = capacity;
		
		this.linkList = new LinkList();
		this.cache = {};
	};

	LeetCode.LRUCache = LRUCache;

	/** 
	 * @description get
	 * @param {number} key
	 * @return {number}
	 */
	LRUCache.prototype.get = function(key) {
		var node = this.cache[key];
		if(!node) {
			return -1;
		}
		// 将node放到头部
		this.linkList.moveToTail(node);
		return node.value;
	};

	/** 
	 * @description put
	 * @param {number} key
	 * @param {number} value
	 * @return {void}
	 */
	LRUCache.prototype.put = function(key, value) {
		var node = this.cache[key];
		if(!node) {
			// 新建节点
			var newNode = new Node(key, value);
			this.cache[key] = newNode;
			this.linkList.append(newNode);
			this.count ++;
			if(this.count > this.capacity) {
				// 大于了
				var head = this.linkList.popHead();
				this.cache[head.key] = undefined;
				this.count --;
			}
		} else {
			// 更新value
			node.value = value;
			this.linkList.moveToTail(node);
		}
	};

	/**
	 * @description 链表中的node
	 * @param {Object} data
	 */
	function Node(key, value) {
		//节点的数据
		this.key = key;
		this.value = value;
		//直接前驱节点
		this._prev = null;
		//直接后继节点
		this._next = null;
	}
	/**
	 * @constructor 链表的构造函数
	 * @description 构造的变量由参数绝对，
	 * @param {JSON} options 额外的参数
	 * isLoop 是否是为循环链表,默认为false
	 */
	function LinkList() {
		//链表的头节点
		this.head = null;
		//链表的尾节点
		this.tail = null;
	
	}

	/**
	 * @description 链表的append
	 * @param {Node} node DataStruct中的Node节点
	 */
	LinkList.prototype.append = function(node) {
		if(!this.head) {
			//如果不存在头节点,头和尾巴同时赋值
			this.head = node;
			this.tail = node;
		} else {
			//节点插入尾节点后面,并重新定义尾节点
			this.tail._next = node;
			node._prev = this.tail;
			this.tail = node;
		}
	};

	/**
	 * @description 链表的remove
	 * @param {Node} node DataStruct中的Node节点
	 */
	LinkList.prototype.remove = function(node) {
		if(this.head == node) {
			// 如果移除的是头节点
			this.head = node._next;
		}
		if(this.tail == node) {
			// 如果移除的是尾节点
			this.tail = node._prev;
		}
		if(node._next) {
			node._next._prev = node._prev;
		}
		if(node._prev) {
			node._prev._next = node._next;
		}

		node._next = null;
		node._prev = null;
	};
	/**
	 * @description moveToTail
	 * @param {Node} 将这个node移动到顶点
	 */
	LinkList.prototype.moveToTail = function(node) {
		this.remove(node);
		this.append(node);
	};
	/**
	 * @description popTail
	 * @param {Node} 移除头节点
	 */
	LinkList.prototype.popHead = function(node) {
		var res = this.head;
		this.remove(res);
		return res;
	};

	/**
	 * @description 链表的 traversal(遍历)
	 * @param {Function} callback 回调
	 */
	LinkList.prototype.traversal = function(callback) {
		//从头节点开始往后找
		var iterator = this.head;
		var isEnd = false;
		//终止函数
		var done = function() {
			isEnd = true;
		};

		while(iterator) {
			callback(iterator, done);
			iterator = iterator._next;
			//如果已经结束
			if(isEnd || iterator === this.head) {
				return;
			}

		}
	};

})(window.LeetCode = window.LeetCode || {});