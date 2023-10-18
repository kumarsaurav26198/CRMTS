import { ActionType } from '../actions-types';

interface ClearFilterInitAction {
    type: ActionType.CLEAR_FILTER_INIT;
}

interface ClearFilterSuccessAction {
    type: ActionType.CLEAR_FILTER_SUCCESS;
    payload: any;
}


interface ClearFilterErrorAction {
    type: ActionType.CLEAR_FILTER_ERROR;
    payload: string;
}


export type Action =
    | ClearFilterInitAction
    | ClearFilterSuccessAction
    | ClearFilterErrorAction