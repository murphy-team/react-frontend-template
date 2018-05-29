import {ActionConstants} from "./ActionConstants";

export interface IIncrementNumberAction {
    type: string;
    number: number
}

export function IncrementNumberAction(number: number): IIncrementNumberAction {
    return {
        type: ActionConstants.INCREMENT_NUMBER,
        number: number
    };
}