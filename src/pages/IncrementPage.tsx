import * as React from "react";
import InjectedIntlProps = ReactIntl.InjectedIntlProps;
import {IncrementePageDTO} from "../domain/pages/IncrementePageDTO";

export interface IPropsIncrementePage {
    incrementPageDTO: IncrementePageDTO;
}

export interface IDispatchPropsIncrementePage {
}

export interface IStateIncrementePage {

}

export class IncrementPage extends React.Component<IPropsIncrementePage & IDispatchPropsIncrementePage, IStateIncrementePage> {
    public constructor(props: IPropsIncrementePage & IDispatchPropsIncrementePage) {
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