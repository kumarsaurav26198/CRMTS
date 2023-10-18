import { ActionType } from '../actions-types';

interface GetCitiesInitAction {
    type: ActionType.GET_CITIES_INIT;
}

interface GetCitiesSuccessAction {
    type: ActionType.GET_CITIES_SUCCESS;
    payload: any;
}

interface GetCitiesErrorAction {
    type: ActionType.GET_CITIES_ERROR;
    payload: string;
}

export type Action =
    | GetCitiesInitAction
    | GetCitiesSuccessAction
    | GetCitiesErrorAction