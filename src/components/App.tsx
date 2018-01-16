import * as React from "react";
import {createStore, applyMiddleware, combineReducers} from "redux";
import * as ReduxThunk from "redux-thunk";
import {Provider} from "react-redux";
import {IntlProvider, intlReducer} from "react-intl-redux";
import reducers from "../reducers/IndexReducers";
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import {WelcomePageContainer} from "../pages/WelcomePageContainer";
import {ToDoPageContainerII} from "../pages/ToDoPageContainerII";
import {ToDoPageContainer} from "../pages/ToDoPageContainer";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {NavigationBarComponent} from "./NavigationBarComponent";
import {TestPage} from "../pages/TestPage";

const reducer = combineReducers({
    reducers,
    intl: intlReducer,
    //routing: routerReducer,
});

const middlewares = [ReduxThunk["default"], logger];

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
                        <Router>
                            <div>
                                <NavigationBarComponent/>
                                <Route exact path="/" component={TestPage}/>
                                <Route exact path="/test1" component={ToDoPageContainer}/>
                                <Route exact path="/test2" component={ToDoPageContainerII}/>
                            </div>
                        </Router>
                        {this.props.children}
                    </div>
                </IntlProvider>
            </Provider>
        );
    }
}