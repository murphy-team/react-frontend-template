import * as React from "react";
import * as ReactDOM from "react-dom";
import injectTapEventPlugin = require("react-tap-event-plugin");
import {App} from "./src/components/App";
import createHashHistory from 'history/createHashHistory';
import {Router} from "react-router";

class Index {
    public constructor() {

        const history = createHashHistory();

        const Start = () => (
            <div>
                <App/>
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