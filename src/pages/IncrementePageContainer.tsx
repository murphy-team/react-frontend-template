import {connect} from "react-redux";
import * as React from "react";
import {injectIntl} from "react-intl";
import {IReducers} from "../reducers/IndexReducers";
import {IDispatchPropsIncrementePage, IPropsIncrementePage, IncrementPage} from "./IncrementPage";

const mapStateToProps = (state: IReducers): IPropsIncrementePage => ({
    incrementPageDTO: state['reducers'].IncrementePageReducer._incrementePageDTO,
});

const mapDispatchToProps = (dispatch): IDispatchPropsIncrementePage => ({
});

export const IncrementePageContainer = connect<IPropsIncrementePage,IDispatchPropsIncrementePage, {} >(
    mapStateToProps,
    mapDispatchToProps
)(IncrementPage);