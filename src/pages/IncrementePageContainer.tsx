import {connect} from "react-redux";
import * as React from "react";
import {injectIntl} from "react-intl";
import {IReducers} from "../reducers/IndexReducers";
import {IDispatchPropsIncrementePage, IPropsIncrementePage, IncrementPage} from "./IncrementPage";
import {WriteNumberAction} from "../actions/WriteNumberAction";
import {IncrementNumberAction} from "../actions/IncrementNumberAction";

const mapStateToProps = (state: IReducers): IPropsIncrementePage => ({
    incrementPageDTO: state['reducers'].IncrementPageReducer._incrementePageDTO,
});

const mapDispatchToProps = (dispatch): IDispatchPropsIncrementePage => ({
    onWriteNumber: (textToNewItem) => dispatch(WriteNumberAction(textToNewItem)),
    onClickAddButton : () => dispatch(IncrementNumberAction())
});

export const IncrementePageContainer = connect<IPropsIncrementePage,IDispatchPropsIncrementePage, {} >(
    mapStateToProps,
    mapDispatchToProps
)(IncrementPage);