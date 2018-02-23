import * as React from "react";
import InjectedIntlProps = ReactIntl.InjectedIntlProps;
import {Link} from "react-router-dom";
import {WelcomePageDTO} from "../domain/pages/WelcomePageDTO";

export interface IPropsWelcomePage {
    intl?: any;
    welcomePage: WelcomePageDTO;
}

export interface IDispatchPropsWelcomePage {
}

export interface IStateWelcomePage {

}

export class WelcomePage extends React.Component<IPropsWelcomePage & IDispatchPropsWelcomePage & InjectedIntlProps, IStateWelcomePage> {
    public constructor(props: IPropsWelcomePage & IDispatchPropsWelcomePage & InjectedIntlProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                <h2>Soy otro componente</h2>
            </div>
        );
    }
}