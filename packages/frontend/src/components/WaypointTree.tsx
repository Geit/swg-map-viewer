import { useAtomValue, useSetAtom } from 'jotai';
import React from 'react';
import { SimpleTreeView, TreeItem } from '@mui/x-tree-view';

import { sidebarTreeAtom, SidebarTree, sidebarSelectedNodeAtom } from '../atoms/waypoints';

const ExpandIcon = () => <img alt="" style={{ height: '0.8rem' }} src="/icons/ui_tree_expand.png" />;
const CollapseIcon = () => <img alt="" style={{ height: '0.8rem' }} src="/icons/ui_tree_collapse.png" />;

const WaypointTreeChild: React.FC<{ tree: SidebarTree; parentItemId?: string }> = ({ tree, parentItemId }) => {
  return (
    <>
      {tree.map((treeItem, idx) => {
        const itemId = parentItemId ? `${parentItemId}.items.${idx}` : `${idx}`;
        if (treeItem.__type === 'branchNode') {
          return (
            <TreeItem key={itemId} itemId={itemId} label={treeItem.title}>
              <WaypointTreeChild tree={treeItem.items} parentItemId={itemId} />
            </TreeItem>
          );
        }

        return <TreeItem key={itemId} itemId={itemId} label={treeItem.title} />;
      })}
    </>
  );
};

const WaypointTree: React.FC = () => {
  const tree = useAtomValue(sidebarTreeAtom);
  const setSelectedTreeItem = useSetAtom(sidebarSelectedNodeAtom);

  return (
    <SimpleTreeView
      slots={{ expandIcon: ExpandIcon, collapseIcon: CollapseIcon }}
      onSelectedItemsChange={(_, itemId) => setSelectedTreeItem(itemId)}
      style={{ userSelect: 'none', width: '100%' }}
    >
      <WaypointTreeChild tree={tree} />
    </SimpleTreeView>
  );
};

export default WaypointTree;
