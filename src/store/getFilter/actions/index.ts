import { ActionType } from '../actions-types';

interface GetFilterAction {
    type: ActionType.GET_FILTER;
}

interface GetFilterSuccessAction {
    type: ActionType.GET_FILTER_SUCCESS;
    payload: any;
}


interface GetFilterErrorAction {
    type: ActionType.GET_FILTER_ERROR;
    payload: string;
}


export type Action =
    | GetFilterAction
    | GetFilterSuccessAction
    | GetFilterErrorAction