import { ActionType } from '../actions-types';

interface GetContactInitAction {
    type: ActionType.GET_CONTACT_INIT;
}

interface GetContactSuccessAction {
    type: ActionType.GET_CONTACT_SUCCESS;
    payload: any;
}


interface GetContactErrorAction {
    type: ActionType.GET_CONTACT_ERROR;
    payload: string;
}


export type Action =
    | GetContactInitAction
    | GetContactSuccessAction
    | GetContactErrorAction