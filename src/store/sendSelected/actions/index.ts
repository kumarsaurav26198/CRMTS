import { ActionType } from '../actions-types';

interface SendSelectedInitAction {
    type: ActionType.SEND_SELECTED_INIT;
}

interface SendSelectedSuccessAction {
    type: ActionType.SEND_SELECTED_SUCCESS;
    payload: any;
}


interface SendSelectedErrorAction {
    type: ActionType.SEND_SELECTED_ERROR;
    payload: string;
}


export type Action =
    | SendSelectedInitAction
    | SendSelectedSuccessAction
    | SendSelectedErrorAction