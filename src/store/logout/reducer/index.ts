import produce from 'immer';
import { Action } from '../actions';
import { ActionType } from '../actions-types';

interface RepositoriesStateInterface {
    logoutloading: boolean;
    error: string | null;
    authToken: string;
    user_email: string;
    isAuthenticated: boolean;
}

const initialState = {
    logoutloading: false,
    error: null,
    authToken: '',
    user_email: '',
    isAuthenticated: false,
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
            case ActionType.LOGOUT:
                draft.logoutloading = true;
                draft.error = null;
                draft.authToken = '';
                draft.user_email = '';
                draft.isAuthenticated = true;
                return draft;
            case ActionType.LOGOUT_SUCCESS:
                draft.logoutloading = false;
                draft.error = null;
                draft.isAuthenticated = false;
                return draft;
            case ActionType.LOGOUT_ERROR:
                draft.logoutloading = false;
                draft.error = action.payload;
                draft.authToken = '';
                draft.user_email = '';
                draft.isAuthenticated = false;
                return draft;

            case ActionType.SET_AUTHENTICATION:
                draft.loading = false;
                draft.isAuthenticated = action.payload;
                return draft;

            default:
                return draft;
        }
    });

export default reducer;