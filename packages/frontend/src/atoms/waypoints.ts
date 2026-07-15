import { atom } from 'jotai';
import { get as loGet } from 'lodash';

import { waypoints as defaultWaypoints, Waypoint } from '../data/waypoints';
import { WaypointType } from '../enums';

const waypointsAtom = atom<Waypoint[]>(defaultWaypoints);

const showAllMapsInSidebarAtom = atom<boolean>(false);

export const currentPlanetAtom = atom<string | null>(null);

export const currentServerIdAtom = atom<string>('legends');

// Globally preferred tileset id. Each planet resolves this against its own tileSets list
// (see resolveTileSet), falling back to its default tileset when it has no match — so planets
// without an HD layer render their base tileset whatever this holds.
export type TileSetId = string;

export const currentTileSetAtom = atom<TileSetId>('hd');

const waypointsForServerAtom = atom(get => {
  const waypoints = get(waypointsAtom);
  const serverId = get(currentServerIdAtom);

  return waypoints.filter(waypoint => waypoint.serverIds?.includes(serverId) || waypoint.serverIds === null);
});

const waypointsForSidebarDisplayAtom = atom(get => {
  const showAllMapsInSidebar = get(showAllMapsInSidebarAtom);
  const currentPlanet = get(currentPlanetAtom);
  const waypoints = get(waypointsForServerAtom);

  return waypoints.filter(waypoint => showAllMapsInSidebar || waypoint.planet === currentPlanet);
});

export const waypointsForMapDisplayAtom = atom(get => {
  const currentPlanet = get(currentPlanetAtom);
  const waypoints = get(waypointsAtom);
  const sidebarSelectedWaypointIdSet = get(sidebarSelectedWaypointIdSetAtom);

  return waypoints.filter(waypoint => {
    if (waypoint.planet !== currentPlanet) {
      return false;
    }

    if (!sidebarSelectedWaypointIdSet && waypoint.type === WaypointType.City) {
      return true;
    }

    if (sidebarSelectedWaypointIdSet && sidebarSelectedWaypointIdSet.has(waypoint.id)) {
      return true;
    }

    return false;
  });
});

export type SidebarTree = (SidebarBranchNode | SidebarLeafNode)[];
interface SidebarLeafNode {
  __type: 'leafNode';
  title: string;
  waypointId: number;
}
interface SidebarBranchNode {
  __type: 'branchNode';
  title: string;
  items: SidebarTree;
}

const sidebarRootCategories = [
  {
    type: WaypointType.City,
    title: 'Cities',
  },
  {
    type: WaypointType.CollectionItem,
    title: 'Collections',
  },
  {
    type: WaypointType.PointOfInterestWaypoint,
    title: 'Points Of Interest',
  },
];

function isBranchNode(treeNode: SidebarTree[number]): treeNode is SidebarBranchNode {
  return (treeNode as SidebarBranchNode).__type === 'branchNode';
}

const treeSort = (a: SidebarTree[number], b: SidebarTree[number]) => {
  if (a.__type === b.__type) {
    return a.title.localeCompare(b.title);
  }
  return a.__type.localeCompare(b.__type);
};

const constructTreeFromWaypoints = (waypoints: Waypoint[]): SidebarTree => {
  const sidebarResult: SidebarBranchNode[] = Object.values(sidebarRootCategories).map(rootCategory => ({
    __type: 'branchNode',
    title: rootCategory.title,
    items: waypoints
      .filter(({ type }) => type === rootCategory.type)
      .reduce((acc, waypoint) => {
        if (waypoint.parentCategories) {
          let wpInsertionPoint = acc;

          waypoint.parentCategories.forEach(categoryTitle => {
            const categoryNode = wpInsertionPoint.find(
              (item): item is SidebarBranchNode => isBranchNode(item) && item.title === categoryTitle
            );

            if (categoryNode) {
              wpInsertionPoint = categoryNode.items;
            } else {
              const newBranchNode = {
                __type: 'branchNode' as const,
                title: categoryTitle,
                items: [] as SidebarTree,
              };
              wpInsertionPoint.push(newBranchNode);
              wpInsertionPoint.sort(treeSort);
              wpInsertionPoint = newBranchNode.items;
            }
          });
          wpInsertionPoint.push({
            __type: 'leafNode',
            title: waypoint.name,
            waypointId: waypoint.id,
          });
          wpInsertionPoint.sort(treeSort);
        } else {
          acc.push({
            __type: 'leafNode',
            title: waypoint.name,
            waypointId: waypoint.id,
          });
          acc.sort(treeSort);
        }

        return acc;
      }, [] as SidebarTree),
  }));

  return sidebarResult;
};

export const sidebarTreeAtom = atom(get => {
  const waypoints = get(waypointsForSidebarDisplayAtom);

  return constructTreeFromWaypoints(waypoints);
});

export const sidebarSelectedNodeAtom = atom<null | string>(null);

export const sidebarSelectedWaypointIdSetAtom = atom((get): Set<number> | null => {
  const sidebarSelectedNode = get(sidebarSelectedNodeAtom);

  if (!sidebarSelectedNode) return null;

  const sidebarTree = get(sidebarTreeAtom);

  const sidebarTreePart: SidebarTree[number] | null = loGet(sidebarTree, sidebarSelectedNode);

  if (!sidebarTreePart) {
    return null;
  }

  if (!isBranchNode(sidebarTreePart)) {
    return new Set<number>([sidebarTreePart.waypointId]);
  }

  const getChildWaypointsIds = (treeItems: SidebarTree): number[] => {
    return treeItems.flatMap(item => {
      if (isBranchNode(item)) {
        return getChildWaypointsIds(item.items);
      }

      return item.waypointId;
    });
  };

  return new Set(getChildWaypointsIds(sidebarTreePart.items));
});
