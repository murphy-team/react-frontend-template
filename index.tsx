import * as React from "react";
import * as ReactDOM from "react-dom";

// import {App} from "./src/components/App";
// import {TodoPageContainer} from "./src/pages/TodoPageContainer";
import injectTapEventPlugin = require("react-tap-event-plugin");
import {App} from "./src/components/HelloWorld";

class Index {
    public constructor() {

        injectTapEventPlugin();
        ReactDOM.render(
            <App/>,
            document.getElementById('root')
        );
    }
}

new Index();