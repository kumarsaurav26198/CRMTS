import { ActionType } from '../actions-types';

interface CreateContactAction {
    type: ActionType.CREATE_CONTACT_INIT;
}

interface CreateContactSuccessAction {
    type: ActionType.CREATE_CONTACT_SUCCESS;
    payload: any;
}

interface CreateContactErrorAction {
    type: ActionType.CREATE_CONTACT_ERROR;
    payload: string;
}

export type Action =
    | CreateContactAction
    | CreateContactSuccessAction
    | CreateContactErrorAction