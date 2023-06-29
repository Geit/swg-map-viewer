import { useRecoilValue, useRecoilState } from 'recoil';
import React from 'react';
import { TreeView, TreeItem } from '@mui/lab';

import { sidebarTreeSelector, SidebarTree, sidebarSelectedNodeAtom } from '../atoms/waypoints';

const ExpandIcon = () => <img alt="" style={{ height: '0.8rem' }} src="/icons/ui_tree_expand.png" />;
const CollapseIcon = () => <img alt="" style={{ height: '0.8rem' }} src="/icons/ui_tree_collapse.png" />;

const WaypointTreeChild: React.FC<{ tree: SidebarTree; parentNodeId?: string }> = ({ tree, parentNodeId }) => {
  return (
    <>
      {tree.map((treeItem, idx) => {
        const nodeId = parentNodeId ? `${parentNodeId}.items.${idx}` : `${idx}`;
        if (treeItem.__type === 'branchNode') {
          return (
            <TreeItem key={nodeId} nodeId={nodeId} label={treeItem.title}>
              <WaypointTreeChild tree={treeItem.items} parentNodeId={nodeId} />
            </TreeItem>
          );
        }

        return <TreeItem key={nodeId} nodeId={nodeId} label={treeItem.title} />;
      })}
    </>
  );
};

const WaypointTree: React.FC = () => {
  const tree = useRecoilValue(sidebarTreeSelector);
  const [, setSelectedTreeItem] = useRecoilState(sidebarSelectedNodeAtom);

  return (
    <TreeView
      defaultExpandIcon={<ExpandIcon />}
      defaultCollapseIcon={<CollapseIcon />}
      onNodeSelect={(_: unknown, value: string) => setSelectedTreeItem(value)}
      style={{ userSelect: 'none' }}
    >
      <WaypointTreeChild tree={tree} />
    </TreeView>
  );
};

export default WaypointTree;
