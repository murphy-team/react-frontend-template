import {ActionConstants} from "./ActionConstants";

export interface IChangeRouteAction {
    type: string;
    route: string
    historyObject: any
}

export function ChangeRouteAction(route: string, historyObject: any): IChangeRouteAction {
    return {
        type: ActionConstants.CHANGE_ROUTE,
        route: route,
        historyObject: historyObject
    };
}