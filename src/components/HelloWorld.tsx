import * as React from "react";

export class App extends React.Component <{}, {}>{

    public render(): JSX.Element {
        return (
            <div>
                <header>
                    <h1>Welcome to React</h1>
                </header>
                <p>
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }

}