import {ActionConstants} from "./ActionConstants";

export interface IWriteNumberAction {
    type: string;
    textFromInput: string
}

export function WriteNumberAction (textFromInput: string): IWriteNumberAction {
    return {
        type: ActionConstants.WRITE_INPUT_NUMBER,
        textFromInput: textFromInput
    };
}