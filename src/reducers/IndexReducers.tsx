import {combineReducers} from "redux";
import {IncrementPageReducer, IncrementPageState} from "./IncrementPageReducer";

export default combineReducers <IReducers> ({
    IncrementPageReducer,
});

export interface IReducers {
    IncrementePageReducer: IncrementPageState
}