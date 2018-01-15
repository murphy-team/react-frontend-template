import {connect} from "react-redux";
import * as React from "react";
import {injectIntl} from "react-intl";
import {IReducers} from "../reducers/IndexReducers";
import {IDispatchPropsToDoPage, IPropsToDoPage, ToDoPage} from "./ToDoPage";

const mapStateToProps = (state: IReducers): IPropsToDoPage => ({
    toDoPage: state['reducers'].ToDoPageReducer._toDoPage,
});

const mapDispatchToProps = (dispatch): IDispatchPropsToDoPage => ({
});

export const ToDoPageContainer = connect<IPropsToDoPage,IDispatchPropsToDoPage, {} >(
    mapStateToProps,
    mapDispatchToProps
)(injectIntl(ToDoPage));