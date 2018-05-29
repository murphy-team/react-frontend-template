import {Action} from "redux";
import {IncrementePageDTO} from "../domain/pages/IncrementePageDTO";
import {ActionConstants} from "../actions/ActionConstants";
import objectAssign = require("object-assign");

export class IncrementPageState {
    _incrementePageDTO: IncrementePageDTO;

    public constructor() {
        this._incrementePageDTO = new IncrementePageDTO();
        this._incrementePageDTO._finalValueNumber = 0;
        this._incrementePageDTO._inputTextNumber = "";
    }
}

export function IncrementPageReducer(state: IncrementPageState = new IncrementPageState(), action: Action): IncrementPageState {
    let newState: IncrementPageState;

    switch (action.type) {
        case ActionConstants.WRITE_INPUT_NUMBER:

            let incrementePageWithNewText: IncrementePageDTO;
            incrementePageWithNewText = new IncrementePageDTO();
            incrementePageWithNewText = objectAssign({}, state._incrementePageDTO, {});

            let textFromInput: string;
            textFromInput= action["textFromInput"];
            incrementePageWithNewText._inputTextNumber = textFromInput;
            newState = objectAssign({}, state, {_incrementePageDTO: incrementePageWithNewText});
            return newState;

        case ActionConstants.INCREMENT_NUMBER:

            let pageWithNewSum: IncrementePageDTO;
            pageWithNewSum = new IncrementePageDTO();
            pageWithNewSum = objectAssign({}, state._incrementePageDTO, {});

            pageWithNewSum._finalValueNumber = pageWithNewSum._finalValueNumber + parseInt(pageWithNewSum._inputTextNumber.toString());
            newState = objectAssign({}, state, {_incrementePageDTO: pageWithNewSum});
            return newState;
    }
    return state;
}