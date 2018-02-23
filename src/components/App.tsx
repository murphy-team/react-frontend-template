import * as React from "react";
import {applyMiddleware, combineReducers, createStore} from "redux";
import * as ReduxThunk from "redux-thunk";
import {Provider} from "react-redux";
import {IntlProvider, intlReducer} from "react-intl-redux";
import reducers from "../reducers/IndexReducers";
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
import {ConnectedRouter, routerMiddleware, routerReducer} from 'react-router-redux';
import {WelcomePageContainer} from "../pages/WelcomePageContainer";
import {Route} from 'react-router-dom'
import {TestPage} from "../pages/TestPage";
import createHistory from 'history/createBrowserHistory'
import {NavigationBarContainer} from "./NavigationBar/NavigationBarContainer";
import {Constants} from "../common/Constants";

export const history = createHistory();

const routerMid = routerMiddleware(history);

const reducer = combineReducers({
    reducers,
    intl: intlReducer,
    routing: routerReducer,
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
                <IntlProvider>
                    <div className="container-fluid">
                        <ConnectedRouter history={history}>
                            <div>
                                <NavigationBarContainer/>
                                <Route exact path={Constants.INDEX_ROUTE} component={TestPage}/>
                                <Route path={Constants.ROUTE_PATH_EXAMPLE} component={WelcomePageContainer}/>
                            </div>
                        </ConnectedRouter>
                        {this.props.children}
                    </div>
                </IntlProvider>
            </Provider>
        );
    }
}