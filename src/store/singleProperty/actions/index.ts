import { ActionType } from '../actions-types';

interface SinglePropertyInitAction {
    type: ActionType.SINGLE_PROPERTY_INIT;
}

interface SinglePropertySuccessAction {
    type: ActionType.SINGLE_PROPERTY_SUCCESS;
    payload: any;
}


interface SinglePropertyErrorAction {
    type: ActionType.SINGLE_PROPERTY_ERROR;
    payload: string;
}


export type Action =
    | SinglePropertyInitAction
    | SinglePropertySuccessAction
    | SinglePropertyErrorAction