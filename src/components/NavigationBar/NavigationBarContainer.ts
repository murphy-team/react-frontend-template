import {connect} from "react-redux";
import {IReducers} from "../../reducers/IndexReducers";
import {
    INavigationBarComponentDispatch, INavigationBarComponentProps, INavigationBarComponentRouteProps,
    NavigationBarComponent
} from "./NavigationBarComponent";
import {injectIntl} from "react-intl";
import {ChangeRouteAction} from "../../actions/ChangeRouteAction";
import { withRouter } from 'react-router-dom';
import {ChangeRouteActionThunk} from "../../actions/ChangeRouteActionThunk";


const mapStateToProps = (state: IReducers): INavigationBarComponentProps => ({
    currentRoute: state['reducers'].NavigationBarComponentReducer._selectedItem
});

const mapDispatchToProps = (dispatch): INavigationBarComponentDispatch => ({
    onChangeRoute: (route, historyObject) => dispatch(ChangeRouteActionThunk(route, historyObject))
});

export const NavigationBarContainer = withRouter(connect<INavigationBarComponentProps,INavigationBarComponentDispatch, INavigationBarComponentRouteProps >(
    mapStateToProps,
    mapDispatchToProps
)((NavigationBarComponent)));