import * as React from "react";
import * as ReactDOM from "react-dom";
import injectTapEventPlugin = require("react-tap-event-plugin");
import {App} from "./src/components/App";
import { Router, Route, Switch } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import {ToDoPageContainer} from "./src/pages/ToDoPageContainer";
import {ToDoPageContainerII} from "./src/pages/ToDoPageContainerII";

const history = new createHashHistory();

class Index {
    public constructor() {

        injectTapEventPlugin();
        ReactDOM.render(
            <div>
                <App/>
            </div>,
            document.getElementById('root')
        );
    }
}

new Index();