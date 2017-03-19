/**
 * Created by zsyHome on 2017/3/6.
 */
var treeControl = new tree();
treeControl.addNode( null, 6);
treeControl.addNode( treeControl.getNodeAt(0), [{key:"0_0"},{key:"0_1"},{key:"0_2"}]);
treeControl.addNode( treeControl.getNodeAt(1), [{key:"1_0"}]);
treeControl.addNode( treeControl.getNodeAt(2), [{key:"2_0"},{key:"2_1"},{key:"2_2"}]);
treeControl.addNode( treeControl.getNodeAt(3), [{key:"3_0"},{key:"3_1"}]);

treeControl.traversalDepFirstUp(treeControl.rootNode,false,testHandler);
function testHandler(node) {
    // console.log( node.properties.name  );
    // if(node.val!=undefined) console.log( node.val.key );
}