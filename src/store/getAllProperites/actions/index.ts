import { ActionType } from '../actions-types';

interface GetAllPropertiesAction {
    type: ActionType.GET_ALL_PROPERTIES;
}

interface GetAllPropertiesSuccessAction {
    type: ActionType.GET_ALL_PROPERTIES_SUCCESS;
    payload: any;
}


interface GetAllPropertiesErrorAction {
    type: ActionType.GET_ALL_PROPERTIES_ERROR;
    payload: string;
}


export type Action =
    | GetAllPropertiesAction
    | GetAllPropertiesSuccessAction
    | GetAllPropertiesErrorAction