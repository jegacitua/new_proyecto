/*
	@license Angular Treeview version 0.1.6
	ⓒ 2013 AHN JAE-HA http://github.com/eu81273/angular.treeview
	License: MIT
	[TREE attribute]
	angular-treeview: the treeview directive
	tree-id : each tree's unique id.
	tree-model : the tree model on $scope.
	node-id : each node's id
	node-label : each node's label
	node-children: each node's children
	<div
		data-angular-treeview="true"
		data-tree-id="tree"
		data-tree-model="roleList"
		data-node-id="roleId"
		data-node-label="roleName"
		data-node-children="children" >
	</div>
*/

(function(angular){'use strict';angular.module('angularTreeview',[]).directive('treeModel',['$compile',function($compile){return{restrict:'A',link:function(scope,element,attrs){var treeId=attrs.treeId;var treeModel=attrs.treeModel;var nodeId=attrs.nodeId;var nodeLabel=attrs.nodeLabel;var nodeChildren=attrs.nodeChildren;var searchQuery=attrs.searchQuery;var template='<ul>'+'<li data-ng-repeat="node in '+treeModel+' | filter:'+searchQuery+' ">'+'<i class="collapsed" data-ng-class="{nopointer: !node.'+nodeChildren+'.length}"'+'data-ng-show="!node.expanded && !node.fileicon" data-ng-click="'+treeId+'.selectNodeHead(node)"></i>'+'<i class="expanded" data-ng-show="node.expanded && !node.fileicon" data-ng-click="'+treeId+'.selectNodeHead(node)"></i>'+'<i class="normal" data-ng-show="node.fileicon"></i> '+'<span title="{{node.'+nodeLabel+'}}" data-ng-class="node.selected" data-ng-click="'+treeId+'.selectNodeLabel(node)">{{node.'+nodeLabel+'}}</span>'+'<div data-ng-show="node.expanded" data-tree-id="'+treeId+'" data-tree-model="node.'+nodeChildren+'" data-node-id='+nodeId+' data-node-label='+nodeLabel+' data-node-children='+nodeChildren+' data-search-query='+searchQuery+'></div>'+'</li>'+'</ul>';if(treeId&&treeModel){if(attrs.angularTreeview){scope[treeId]=scope[treeId]||{};scope[treeId].selectNodeHead=scope[treeId].selectNodeHead||function(selectedNode){if(selectedNode[nodeChildren]!==undefined){selectedNode.expanded=!selectedNode.expanded;}};scope[treeId].selectNodeLabel=scope[treeId].selectNodeLabel||function(selectedNode){if(scope[treeId].currentNode&&scope[treeId].currentNode.selected){scope[treeId].currentNode.selected=undefined;}
selectedNode.selected='selected';scope[treeId].currentNode=selectedNode;};}
element.html('').append($compile(template)(scope));}}};}]);})(angular);