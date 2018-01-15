import * as React from "react";
import * as ReactDOM from "react-dom";
import injectTapEventPlugin = require("react-tap-event-plugin");
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import {ToDoPageContainer} from "./src/pages/ToDoPageContainer";
import {ToDoPageContainerII} from "./src/pages/ToDoPageContainerII";
import {App} from "./src/components/App";

class Index {
    public constructor() {

        const Start = () => (
                <BrowserRouter>
                    <Switch>
                    <Route exact path="/" component={App}/>
                    <Route path="/2" component={ToDoPageContainerII}/>
                    </Switch>
                </BrowserRouter>
        );

        injectTapEventPlugin();
        ReactDOM.render(
            <div>
                <Start/>
            </div>,
            document.getElementById('root')
        );
    }
}

new Index();