import * as React from "react";
import * as ReactDOM from "react-dom";
import injectTapEventPlugin = require("react-tap-event-plugin");
import {Route, Switch, BrowserRouter, HashRouter} from 'react-router-dom';
import {ToDoPageContainer} from "./src/pages/ToDoPageContainer";
import {ToDoPageContainerII} from "./src/pages/ToDoPageContainerII";
import {App} from "./src/components/App";
import createHashHistory from 'history/createHashHistory';
import {Router} from "react-router";

class Index {
    public constructor() {

        const history = createHashHistory();

        const Start = () => (
            <div>
                <Router history={history}>
                    <Route path="" component={App}/>
                </Router>
            </div>
        );

        injectTapEventPlugin();
        ReactDOM.render((
            <Start/>
           ),
            document.getElementById('root')
        );
    }
}

new Index();