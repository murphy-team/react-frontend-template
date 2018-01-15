import {combineReducers} from "redux";
import {ToDoPageReducer, ToDoPageState} from "./ToDoPageReducer";
import {ToDoPageReducerII, ToDoPageStateII} from "./ToDoPageReducerII";
import {routerReducer} from 'react-router-redux';

export default combineReducers <IReducers> ({
    ToDoPageReducer,
    ToDoPageReducerII,
    routerReducer,
});

export interface IReducers {
    ToDoPageReducer: ToDoPageState
    ToDoPageReducerII: ToDoPageStateII
}