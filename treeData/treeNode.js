/**
 * Created by zsyHome on 2017/2/28.
 */
var treeNode = function () {
    function treeNode(parent,val) {
        this.parent = parent;
        this.children = [];
        this.val = val;
        this.properties = {count:0,name:"",mark:false}; //遍历计数
    }
    return treeNode;
}();
