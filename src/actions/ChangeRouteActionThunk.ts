import {ChangeRouteAction} from "./ChangeRouteAction";
import {history} from "../components/App"
import {Constants} from "../common/Constants";

export function ChangeRouteActionThunk(route) {
    return function (dispatch) {
        dispatch(ChangeRouteAction(route));
        if (route === 0) {
            console.log("Voy a hacer push al index");
            history.push(Constants.INDEX_ROUTE);
        } else if (route === 1) {
            console.log("Voy a hacer push al 1");
            history.push(Constants.ROUTE_PATH_EXAMPLE)
        }
    }
}
