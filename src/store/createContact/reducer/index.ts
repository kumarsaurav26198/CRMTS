import produce from 'immer';
import { Action } from '../actions';
import { ActionType } from '../actions-types';

interface RepositoriesStateInterface {
    createContactloading: boolean;
    error: string | null;
    createContactData: any;
}

const initialState = {
    createContactloading: false,
    error: null,
    createContactData: {}
};

/**
 * @param state
 * @param action
 */
const reducer = (
    state: RepositoriesStateInterface = initialState,
    action: Action,
): RepositoriesStateInterface =>
    produce(state, draft => {
        switch (action.type) {
            case ActionType.CREATE_CONTACT_INIT:
                draft.createContactloading = true;
                draft.createContactData = {};
                draft.error = null;
                return draft;
            case ActionType.CREATE_CONTACT_SUCCESS:
                draft.createContactloading = false;
                draft.createContactData = action.payload;
                draft.error = null;
                return draft;
            case ActionType.CREATE_CONTACT_ERROR:
                draft.createContactloading = false;
                draft.createContactData = {};
                draft.error = action.payload;
                return draft;
            default:
                return draft;
        }
    });

export default reducer;