import * as React from "react";
import {createStore, applyMiddleware, combineReducers} from "redux";
import * as ReduxThunk from "redux-thunk";
import {Provider} from "react-redux";
import {IntlProvider, intlReducer} from "react-intl-redux";
import reducers from "../reducers/IndexReducers";
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
import {ToDoPageContainer} from "../pages/ToDoPageContainer";
import {ToDoPageContainerII} from "../pages/ToDoPageContainerII";
import { Route, Switch, Router} from 'react-router-dom';
import createHistory from 'history/createHashHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

const reducer = combineReducers({
    reducers,
    intl: intlReducer,
});

const history = createHistory();
const middlewares = [ReduxThunk["default"], logger, routerMiddleware(history)];

export const store = createStore(reducer,
    composeWithDevTools(
        applyMiddleware(...middlewares)),
);


export class App extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <Provider store={store}>
                <IntlProvider>
                    <div className="container-fluid">
                        <Router history={history}>
                            <Switch>
                                <Route path={"/"} component={ToDoPageContainer}/>
                                <Route path={"/2"} component={ToDoPageContainerII}/>
                            </Switch>
                        </Router>
                        {this.props.children}
                    </div>
                </IntlProvider>
            </Provider>
        );
    }
}