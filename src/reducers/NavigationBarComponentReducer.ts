import * as objectAssign from "object-assign";
import {Action} from "redux";
import {ActionConstants} from "../actions/ActionConstants";

export class NavigationBarComponentState {
    _selectedItem: number;
    _historyObject: any;

    public constructor() {
        this._selectedItem = 0;
        this._historyObject = null;
    }
}

export function NavigationBarComponentReducer(state: NavigationBarComponentState = new NavigationBarComponentState(), action: Action): NavigationBarComponentState {
    let newState: NavigationBarComponentState;

    switch (action.type) {
        case ActionConstants.CHANGE_ROUTE:
            let newNavigationRouteState = objectAssign({}, state._selectedItem, {});
            newNavigationRouteState = action["route"];

            console.log("PULSADA LA RUTA ", newNavigationRouteState);
            let historyObject = action["historyObject"];

            console.log("HISTORIA EN EL REDUCTOR ", historyObject);

            //historyObject.push("/");

            // if (newNavigationRouteState === 0) {
            //     historyObject.push("/");
            // } else if (newNavigationRouteState === 1) {
            //     historyObject.push("/test1")
            // } else if (newNavigationRouteState === 2) {
            //     historyObject.push("/test1")
            // }
            newState = objectAssign({}, state, {_selectedItem: newNavigationRouteState});
            return newState;
    }
            return state;

}
