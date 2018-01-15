import {combineReducers} from "redux";
import {ToDoPageReducer, ToDoPageState} from "./ToDoPageReducer";

export default combineReducers <IReducers> ({
    ToDoPageReducer,
});

export interface IReducers {
    ToDoPageReducer: ToDoPageState
}