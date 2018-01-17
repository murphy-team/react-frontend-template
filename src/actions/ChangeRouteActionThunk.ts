import {ChangeRouteAction} from "./ChangeRouteAction";

export function ChangeRouteActionThunk(route, history) {
    return function (dispatch) {
        dispatch(ChangeRouteAction(route, history));
        if (route === 0) {
            console.log("Voy a hacer push al index");
            history.push("/");
        } else if (route === 1) {
            console.log("Voy a hacer push al 1");
            history.push("/test1")
        } else if (route === 2) {
            console.log("Voy a hacer push al 2");
            history.push("/test1")
        }
    }
}
