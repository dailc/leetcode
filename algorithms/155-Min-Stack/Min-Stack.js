/* 作者: dailc
 * 时间: 2017-06-01
 * 描述: Min-Stack
 * 
 * 来自: https://leetcode.com/problems/min-stack/
 */
(function(exports) {
	/**
	 * initialize your data structure here.
	 */
	var MinStack = function() {
		this.stack = [];
		this.minStack = [];
	};

	/** 
	 * @param {number} x
	 * @return {void}
	 */
	MinStack.prototype.push = function(x) {
		this.stack.push(x);
		if(this.minStack.length && this.minStack[this.minStack.length - 1] < x) {
			this.minStack.push(this.minStack[this.minStack.length - 1]);
		} else {
			this.minStack.push(x);
		}
	};

	/**
	 * @return {void}
	 */
	MinStack.prototype.pop = function() {
		this.stack.pop();
		this.minStack.pop();
	};

	/**
	 * @return {number}
	 */
	MinStack.prototype.top = function() {
		return this.stack[this.stack.length - 1];
	};

	/**
	 * @return {number}
	 */
	MinStack.prototype.getMin = function() {
		return this.minStack[this.minStack.length - 1];
	};
	/**
	 * @description findMin
	 * @param {number[]} nums
	 * @return {number}
	 */
	LeetCode.MinStack = MinStack;

})(window.LeetCode = window.LeetCode || {});