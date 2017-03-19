/**
 * Created by zsyHome on 2017/2/28.
 */
var tree = function () {
    function construct() {
        this.nodePool = [];
        this.rootNode = new treeNode(null);
        this.addNode = function (parentNode,nodeArr) {
            var len = nodeArr.length;
            for (var i = 0; i < len; i++) {
                var treenode = new treeNode(parentNode);
                if (this.nodePool.indexOf(treenode) == -1) {
                    this.nodePool.push(treenode);
                    parentNode.children.push(treenode);
                }
            }

        };
        this.resetCount = function () {
            var len = this.nodePool.length;
            for (var i = 0; i < len; i++) {
                this.nodePool[i].properties.count = 0;
            }
        };
        this.parentTo = function (node, includeSelf, method) { //溯源父级
            var tempNode = node;
            if (includeSelf) {
                method(tempNode);
            }
            tempNode = tempNode.parent;
            while (tempNode != null) {
                method(tempNode);
                tempNode = tempNode.parent;
            }

        };
        this.traversalBreFirst = function (node, includeSelf, method) {//广度优先 向下
            if (includeSelf) {
                method(node);
            }
            var i, son, sons, grandSons = [];
            sons = node.children; //当前遍历的数组
            var len = sons.length;
            while (len != 0) {
                for (i = 0; i < len; i++) {
                    son = sons[i];
                    method(son);
                    grandSons = grandSons.concat(son.children);
                }
                sons = grandSons;
                grandSons = [];
                len = sons.length;
            }
        };

        this.traversalUp = function (node, includeSelf, method) { //深度优先 向上 后序遍历


        };

        this.traversalDepFirstDown = function (node, includeSelf, method) {//深度优先 向下 前序遍历
            if (includeSelf) {
                method(node);
            }
            var parent, sons, num = 0, num2 = 0;
            var currentNode = node;
            while (currentNode != null && num < 1000) {
                num++;
                sons = currentNode.children;
                if (sons.length != 0) {
                    currentNode = sons[currentNode.properties.count];
                }
                else {
                    parent = currentNode.parent;
                    console.log(parent.properties.count);
                    parent.properties.count++;
                    console.log(parent.properties.count);
                    while (parent != null && parent.properties.count >= parent.children.length && num2 < 1000) {
                        num2++;
                        parent = parent.parent;
                        parent.properties.count++;
                    }
                    if (parent.properties.count < parent.children.length) {
                        currentNode = parent.children[parent.properties.count];
                    }
                }
            }

        };
    }

    return construct;
}();
