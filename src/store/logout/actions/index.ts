import { ActionType } from '../actions-types';

interface LogoutAction {
    type: ActionType.LOGOUT;
}

interface LogoutSuccessAction {
    type: ActionType.LOGOUT_SUCCESS;
    payload: string;
}



interface LogoutErrorAction {
    type: ActionType.LOGOUT_ERROR;
    payload: string;
}

interface SetAuthentication {
    type: ActionType.SET_AUTHENTICATION;
    payload: boolean;
}


export type Action =
    | LogoutAction
    | LogoutSuccessAction
    | LogoutErrorAction
    | SetAuthentication