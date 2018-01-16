import {combineReducers} from "redux";
import {ToDoPageReducer, ToDoPageState} from "./ToDoPageReducer";
import {ToDoPageReducerII, ToDoPageStateII} from "./ToDoPageReducerII";
import {WelcomePageReducer, WelcomePageState} from "./WelcomePageReducer";

export default combineReducers <IReducers> ({
    ToDoPageReducer,
    ToDoPageReducerII,
    WelcomePageReducer,
});

export interface IReducers {
    ToDoPageReducer: ToDoPageState
    ToDoPageReducerII: ToDoPageStateII
    WelcomePageReducer: WelcomePageState
}