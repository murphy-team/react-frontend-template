import * as React from "react";
import * as ReactDOM from "react-dom";
import injectTapEventPlugin = require("react-tap-event-plugin");
import {App} from "./src/components/App";
import {IncrementePageContainer} from "./src/pages/IncrementePageContainer";

class Index {
    public constructor() {
        injectTapEventPlugin();
        ReactDOM.render((
                <div>
                    <App/>
                </div>
            ),
            document.getElementById('root')
        );
    }
}

new Index();