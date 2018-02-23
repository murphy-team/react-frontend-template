import {combineReducers} from "redux";
import {WelcomePageReducer, WelcomePageState} from "./WelcomePageReducer";
import {NavigationBarComponentReducer, NavigationBarComponentState} from "./NavigationBarComponentReducer";

export default combineReducers <IReducers> ({
    NavigationBarComponentReducer,
    WelcomePageReducer,
});

export interface IReducers {
    NavigationBarComponentReducer: NavigationBarComponentState
    WelcomePageReducer: WelcomePageState
}