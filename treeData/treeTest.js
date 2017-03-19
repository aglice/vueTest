/**
 * Created by zsyHome on 2017/3/6.
 */
var treeControl = new tree();
treeControl.addNode( this.rootNode, [{name:1},{name:2},{name:3},{name:4},{name:5},{name:6}]);
treeControl.addNode( treeControl.nodePool[0], [{name:7},{name:8},{name:9}]);
treeControl.addNode( treeControl.nodePool[1], [{name:10}]);
treeControl.addNode( treeControl.nodePool[2], [{name:11},{name:12},{name:13}]);
treeControl.addNode( treeControl.nodePool[3], [{name:14},{name:15}]);

treeControl.traversalDepFirstDown(this.rootNode,false);
