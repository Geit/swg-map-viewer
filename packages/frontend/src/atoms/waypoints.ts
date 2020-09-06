import { atom, selector } from 'recoil';
import { get as loGet } from 'lodash';

import { waypoints as defaultWaypoints, Waypoint } from '../data/waypoints';
import { WaypointType } from '../enums';

const waypointsAtom = atom<Waypoint[]>({
  key: 'waypoints',
  default: defaultWaypoints,
});

const showAllMapsInSidebarAtom = atom<boolean>({
  key: 'showAllMapsInSidebar',
  default: false,
});

export const currentPlanetAtom = atom<string | null>({
  key: 'currentPlanet',
  default: null,
});

export const currentServerIdAtom = atom<string>({
  key: 'serverId',
  default: 'legends',
});

const waypointsForServerAtom = selector({
  key: 'waypointsForServer',
  get: ({ get }) => {
    const waypoints = get(waypointsAtom);
    const serverId = get(currentServerIdAtom);

    return waypoints.filter(waypoint => waypoint.serverIds?.includes(serverId) || waypoint.serverIds === null);
  },
});

const waypointsForSidebarDisplaySelector = selector({
  key: 'waypointsForSidebarDisplay',
  get: ({ get }) => {
    const showAllMapsInSidebar = get(showAllMapsInSidebarAtom);
    const currentPlanet = get(currentPlanetAtom);
    const waypoints = get(waypointsForServerAtom);

    return waypoints.filter(waypoint => showAllMapsInSidebar || waypoint.planet === currentPlanet);
  },
});

export const waypointsForMapDisplaySelector = selector({
  key: 'waypointsForMapDisplaySelector',
  get: ({ get }) => {
    const currentPlanet = get(currentPlanetAtom);
    const waypoints = get(waypointsAtom);
    const sidebarSelectedWaypointIdSet = get(sidebarSelectedWaypointIdSetSelector);

    return waypoints.filter(waypoint => {
      if (waypoint.planet !== currentPlanet) {
        return false;
      }

      if (!sidebarSelectedWaypointIdSet && waypoint.type === WaypointType.City) {
        return true;
      }

      if (sidebarSelectedWaypointIdSet && sidebarSelectedWaypointIdSet.has(waypoint.id!)) {
        return true;
      }

      return false;
    });
  },
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

interface SidebarConstructionRule {
  rootTitle: string;
}

const sidebarConstructionRules: Record<WaypointType, SidebarConstructionRule> = {
  [WaypointType.City]: {
    rootTitle: 'Cities',
  },
  [WaypointType.CollectionItem]: {
    rootTitle: 'Collections',
  },
  [WaypointType.PointOfInterestWaypoint]: {
    rootTitle: 'Points Of Interest',
  },
  [WaypointType.Waypoint]: {
    rootTitle: 'Waypoints',
  },
};

function isBranchNode(treeNode: SidebarTree[number]): treeNode is SidebarBranchNode {
  return (treeNode as SidebarBranchNode).__type === 'branchNode';
}

const lexograpicalTreeSort = (a: SidebarTree[number], b: SidebarTree[number]) => a.title.localeCompare(b.title);

const constructTreeFromWaypoints = (waypoints: Waypoint[]): SidebarTree => {
  const sidebarResult: SidebarBranchNode[] = Object.entries(sidebarConstructionRules).map(([key, ruleset]) => ({
    __type: 'branchNode',
    title: ruleset.rootTitle,
    items: waypoints
      .filter(({ type }) => type === parseInt(key))
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
              wpInsertionPoint = newBranchNode.items;
              wpInsertionPoint.sort(lexograpicalTreeSort);
            }
          });
          wpInsertionPoint.push({
            __type: 'leafNode',
            title: waypoint.name,
            waypointId: waypoint.id!,
          });
          wpInsertionPoint.sort(lexograpicalTreeSort);
        } else {
          acc.push({
            __type: 'leafNode',
            title: waypoint.name,
            waypointId: waypoint.id!,
          });
          acc.sort(lexograpicalTreeSort);
        }

        return acc;
      }, [] as SidebarTree),
  }));

  return sidebarResult;
};

export const sidebarTreeSelector = selector({
  key: 'sidebarTree',
  get: ({ get }) => {
    const waypoints = get(waypointsForSidebarDisplaySelector);

    return constructTreeFromWaypoints(waypoints);
  },
});

export const sidebarSelectedNodeSelector = atom<null | string>({
  key: 'sidebarSelectedNode',
  default: null,
});

export const sidebarSelectedWaypointIdSetSelector = selector<Set<number> | null>({
  key: 'sidebarSelectedWaypointIdSet',
  get: ({ get }) => {
    const sidebarSelectedNode = get(sidebarSelectedNodeSelector);

    if (!sidebarSelectedNode) return null;

    const sidebarTree = get(sidebarTreeSelector);

    const sidebarTreePart: SidebarTree[number] = loGet(sidebarTree, sidebarSelectedNode);

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
  },
});
