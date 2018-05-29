import {Action} from "redux";
import {IncrementePageDTO} from "../domain/pages/IncrementePageDTO";

export class IncrementPageState {
    _incrementePageDTO: IncrementePageDTO;

    public constructor() {
        this._incrementePageDTO = new IncrementePageDTO();

    }
}

export function IncrementPageReducer(state: IncrementPageState = new IncrementPageState(), action: Action): IncrementPageState {
    let newState: IncrementPageState;

    switch (action.type) {

        default:
            return state;
    }
}