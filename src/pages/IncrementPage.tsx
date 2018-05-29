import * as React from "react";
import InjectedIntlProps = ReactIntl.InjectedIntlProps;
import {IncrementePageDTO} from "../domain/pages/IncrementePageDTO";

export interface IPropsIncrementePage {
    incrementPageDTO?: IncrementePageDTO;
}

export interface IDispatchPropsIncrementePage {
    onClickAddButton : () => any;
    onWriteNumber : (inputNumber) => any;
}

export interface IStateIncrementePage {

}

export class IncrementPage extends React.Component<IPropsIncrementePage & IDispatchPropsIncrementePage, IStateIncrementePage> {
    public constructor(props: IPropsIncrementePage & IDispatchPropsIncrementePage) {
        super(props);
    }

    private onInputTextBox(event: any) {
        this.props.onWriteNumber(event.target.value);
    }

    private onAddButtonClicked() {
        this.props.onClickAddButton();
    }

    public render() {
        return (
            <div>
                <h2>Mete números</h2>
                <input type="number" onChange={this.onInputTextBox.bind(this)}/>
                <button onClick={this.onAddButtonClicked.bind(this)}>Sumar lo que tengo</button>
                <div>
                    <h3>El resultado ahora es: {this.props.incrementPageDTO._finalValueNumber}</h3>
                </div>
            </div>
        );
    }
}