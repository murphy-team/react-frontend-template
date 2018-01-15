import * as React from "react";
import {createStore, applyMiddleware, combineReducers} from "redux";
import * as ReduxThunk from "redux-thunk";
import {Provider} from "react-redux";
import {IntlProvider, intlReducer} from "react-intl-redux";
import reducers from "../reducers/IndexReducers";
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
import * as spanish from "react-intl/locale-data/es";
import * as english from "react-intl/locale-data/en";
import {addLocaleData} from "react-intl";
import {ConnectedRouter, routerReducer, routerMiddleware, push} from 'react-router-redux'
import {ToDoPageContainer} from "../pages/ToDoPageContainer";

addLocaleData([...spanish, ...english]);

const reducer = combineReducers({
    reducers,
    intl: intlReducer,
});

const middlewares = [ReduxThunk["default"], logger];

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
                        <ToDoPageContainer/>
                        {this.props.children}
                    </div>
                </IntlProvider>
            </Provider>
        );
    }
}