import * as React from "react";
import {applyMiddleware, combineReducers, createStore} from "redux";
import * as ReduxThunk from "redux-thunk";
import {Provider} from "react-redux";
import {IntlProvider, intlReducer} from "react-intl-redux";
import reducers from "../reducers/IndexReducers";
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
import {ConnectedRouter, routerMiddleware, routerReducer} from 'react-router-redux';
import {IncrementePageContainer} from "../pages/IncrementePageContainer";
import {Route} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import {Constants} from "../common/Constants";

export const history = createHistory();

const routerMid = routerMiddleware(history);

const reducer = combineReducers({
    reducers,
});


const middlewares = [ReduxThunk["default"], logger, routerMid];

export const store = createStore(reducer,
    composeWithDevTools(
        applyMiddleware(...middlewares))
);


export class App extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <Provider store={store}>
                    <div className="container-fluid">
                        <IncrementePageContainer/>
                        {this.props.children}
                    </div>
            </Provider>
        );
    }
}