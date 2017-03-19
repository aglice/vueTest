/**
 * Created by zsyHome on 2017/2/28.
 */
var treeNode = function () {
    var aa = 2;

    function construct(parent,val) {
        this.parent = parent;
        this.children = [];
        this.val = val;
        this.properties = {count:0}; //遍历计数
    }

    return construct;
}();
