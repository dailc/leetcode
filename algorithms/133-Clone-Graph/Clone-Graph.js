/* 作者: dailc
 * 时间: 2017-05-18
 * 描述: Clone-Graph
 * 
 * 来自: https://leetcode.com/problems/clone-graph
 */
(function(exports) {
	function UndirectedGraphNode(label) {
		this.label = label;
		this.neighbors = []; // Array of UndirectedGraphNode
	}

	exports.UndirectedGraphNode = UndirectedGraphNode;
	/**
	 * @description cloneGraph
	 * @param {UndirectedGraphNode} graph
	 * @return {UndirectedGraphNode}
	 */
	exports.cloneGraph = function(graph) {
		if(!graph) {
			return null;
		}

		var serializedGraph = [];
		var existed = {};

		serialize(serializedGraph, existed, graph);

		existed = {};
		var nodeList = [];

		unSerialize(nodeList, existed, serializedGraph.join(''));

		var newGraph = nodeList[0];

		return newGraph;
	};

	// 序列化
	function serialize(serializedGraph, existed, graph) {
		var label = graph.label;
		if(existed[label]) {
			// 避免重复遍历
			return;
		} else {
			existed[label] = true;
			if(serializedGraph.length) {
				// 如果不是第一个，就添加 #
				serializedGraph.push('#');
			}
			serializedGraph.push(label);
			// 遍历neighbors
			if(graph.neighbors) {
				for(var i = 0; i < graph.neighbors.length; i++) {
					serializedGraph.push(',');
					serializedGraph.push(graph.neighbors[i].label);
				}
				// 先添加完相邻节点后，在遍历下一个节点
				for(var i = 0; i < graph.neighbors.length; i++) {
					serialize(serializedGraph, existed, graph.neighbors[i]);
				}
			}
		}
	}

	// 反序列化
	function unSerialize(nodeList, existed, serializedGraphStr) {
		if(serializedGraphStr.indexOf('#') != -1) {
			// 如果可以继续分割
			// 递归序列化
			var nodeArray = serializedGraphStr.split('#');
			for(var i = 0; i < nodeArray.length; i++) {
				unSerialize(nodeList, existed, nodeArray[i]);
			}
		} else {
			// 单个node的序列化
			// ，号切割
			var nodeArray = serializedGraphStr.split(',');
			// 第一个为本节点
			var label = nodeArray[0];
			var node = getNode(existed, label);
			nodeList.push(node);
			
			// 后续为相邻节点,需要给node增加相邻节点
			for(var i = 1; i < nodeArray.length; i++) {
				var tmpNode = getNode(existed, nodeArray[i]);
				node.neighbors.push(tmpNode);
			}
		}

	}
	
	// 获取节点
	function getNode(existed, label) {
		var node;
		if(!existed[label]) {
			// 不存在，新建一个，-0为隐式转换为数字
			node = new UndirectedGraphNode(label - 0);
			existed[label] = node;
		} else {
			// 那已经生成的
			node = existed[label];
		}
		return node;
	}
	
	/**
	 * @description cloneGraph
	 * @param {UndirectedGraphNode} graph
	 * @return {UndirectedGraphNode}
	 */
	exports.cloneGraph2 = function(graph) {
		var hash = {};
		return dfs(hash,graph);
	};
	
	function dfs(hash,node) {
		if(!node) {
			return node;
		}
		var label = node.label;
		var neighbors = node.neighbors;
		if(!hash[label]) {
			hash[label] = new UndirectedGraphNode(label);
			for( var i = 0; i < neighbors.length; i ++ ) {
				hash[label].neighbors.push(dfs(hash,neighbors[i]));
			}
		}
		return hash[label];
	}

})(window.LeetCode = window.LeetCode || {});