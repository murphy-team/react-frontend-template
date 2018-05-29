import {ActionConstants} from "./ActionConstants";

export interface IIncrementNumberAction {
    type: string;
}

export function IncrementNumberAction(): IIncrementNumberAction {
    return {
        type: ActionConstants.INCREMENT_NUMBER
    };
}