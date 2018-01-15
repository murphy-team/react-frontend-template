import {combineReducers} from "redux";
import {ToDoPageReducer, ToDoPageState} from "./ToDoPageReducer";
import {ToDoPageReducerII, ToDoPageStateII} from "./ToDoPageReducerII";

export default combineReducers <IReducers> ({
    ToDoPageReducer,
    ToDoPageReducerII,
});

export interface IReducers {
    ToDoPageReducer: ToDoPageState
    ToDoPageReducerII: ToDoPageStateII
}