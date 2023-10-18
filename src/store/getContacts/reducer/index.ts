import produce from 'immer';
import { Action } from '../actions';
import { ActionType } from '../actions-types';

interface RepositoriesStateInterface {
    contactsloading: boolean;
    error: string | null;
    contactListData: any;
}

const initialState = {
    contactsloading: false,
    error: null,
    contactListData: []
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
            case ActionType.GET_CONTACT_INIT:
                draft.contactsloading = true;
                draft.contactListData = [];
                draft.error = null;
                return draft;
            case ActionType.GET_CONTACT_SUCCESS:
                draft.contactsloading = false;
                draft.contactListData = action.payload;
                draft.error = null;
                return draft;
            case ActionType.GET_CONTACT_ERROR:
                draft.contactsloading = false;
                draft.contactListData = [];
                draft.error = action.payload;
                return draft;
            default:
                return draft;
        }
    });

export default reducer;