import * as React from "react";
import InjectedIntlProps = ReactIntl.InjectedIntlProps;
import {ToDoTableComponent} from "../components/ToDoTableComponent";
import {ToDoPageDTO} from "../domain/pages/ToDoPageDTO";

export interface IPropsToDoPage {
    intl?: any;
    toDoPage: ToDoPageDTO;
    history?: any;
}

export interface IDispatchPropsToDoPage {
}

export interface IStateToDoPage {
}

export class ToDoPage extends React.Component<IPropsToDoPage & IDispatchPropsToDoPage & InjectedIntlProps, IStateToDoPage> {
    public constructor(props: IPropsToDoPage & IDispatchPropsToDoPage & InjectedIntlProps) {
        super(props);
    }

    componentWillMount() {
        console.log("LA HISTORIA ",this.props.history);
    }

    public render() {
        return(
            <div>
                <ToDoTableComponent columnList={this.props.toDoPage._tableHeaderColumns} dataList={this.props.toDoPage._toDoItems}/>
            </div>
        );
    }
}