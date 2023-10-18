import { ActionType } from '../actions-types';

interface SocialLoginAction {
    type: ActionType.SOCIAL_LOGIN;
}

interface SocialLoginSuccessAction {
    type: ActionType.SOCIAL_LOGIN_SUCCESS;
    payload: SocialLoginSuccessResponseObject;
}

interface SocialLoginSuccessResponseObject {
    authToken: string;
    user_email: string;
}

interface SocialLoginErrorAction {
    type: ActionType.SOCIAL_LOGIN_ERROR;
    payload: string;
}

interface SocailSetAuthentication {
    type: ActionType.SOCIAL_SET_AUTHENTICATION;
    payload: boolean;
}


export type Action =
    | SocialLoginAction
    | SocialLoginSuccessAction
    | SocialLoginErrorAction
    | SocailSetAuthentication