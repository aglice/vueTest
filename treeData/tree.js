/**
 * Created by zsyHome on 2017/2/28.
 */
var tree = function () {
    function construct() {
        var nodePool = [];
        this.rootNode = new treeNode(null);
        this.rootNode.properties.name = "0";
        this.getNodeAt = function (index) {
            return nodePool[index] ;
        };
        this.addNode = function (parentNode,nodeInfo) {
            if(parentNode==null) {
                parentNode = this.rootNode;
            }
            var len;var treenode;var i;
            if((typeof nodeInfo)=="number") {
                len = nodeInfo;
            }
            else {
                len = nodeInfo.length;
            }
            for ( i = 0; i < len; i++) {
                treenode = new treeNode(parentNode,nodeInfo[i]);
                treenode.properties.name = parentNode.properties.name +"_"+ i;
                if (nodePool.indexOf(treenode) == -1) {
                    nodePool.push(treenode);
                    parentNode.children.push(treenode);
                }
            }
        };
        this.resetProperties = function () {
            var len = nodePool.length;
            for (var i = 0; i < len; i++) {
                nodePool[i].properties.count = 0;
                nodePool[i].properties.mark = false;
            }
        };
        this.resetCount = function () {
            var len = nodePool.length;
            for (var i = 0; i < len; i++) {
                nodePool[i].properties.count = 0;
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

        this.traversalDepFirstUp = function (node, includeSelf, method) { //.log( "深度优先 向上 后序遍历" );
            if (includeSelf) {
                method(node);
            }
            var parent,  sons, num = 0, num2 = 0;
            var currentNode = node;
            while (currentNode != null && num < 1000) {
                num++;
                sons = currentNode.children;

            }//while 结束
            this.resetProperties();
        };

        this.traversalDepFirstDown = function (node, includeSelf, method) {//.log( "深度优先 向下 前序遍历" );

            if (includeSelf) {
                method(node);
            }
            var parent,  sons, num = 0, num2 = 0;
            // var traversalArr = [];
            var currentNode = node;
            while (currentNode != null && num < 1000) {
                num++;
                sons = currentNode.children;
                if (sons.length != 0) {
                    parent = currentNode;
                    currentNode = sons[parent.properties.count];
                    if(currentNode.properties.mark==false) {
                        currentNode.properties.mark = true;
                        // traversalArr.push( currentNode );
                        method(currentNode);
                    }

                }
                else {
                    parent = currentNode.parent;

                    //有父级，但是计数结束
                    while (parent != null && parent.properties.count >= parent.children.length-1 && num2 < 1000) {
                        num2++;
                        parent = parent.parent;
                    }
                    if( parent==null ) { //没父级
                        //.log( "traversalArr:",traversalArr );
                        return;
                    }
                    //有父级，且计数未结束
                    parent.properties.count++;
                    if (parent.properties.count < parent.children.length) {
                        currentNode = parent.children[parent.properties.count];
                        if(currentNode.properties.mark==false) {
                            currentNode.properties.mark = true;
                            //traversalArr.push( currentNode );
                            method(currentNode);
                        }
                    }
                }
            } //while 结束
            this.resetProperties();
        };

    }

    return construct;
}();
