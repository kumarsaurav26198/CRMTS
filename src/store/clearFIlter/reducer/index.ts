import produce from 'immer';
import { Action } from '../actions';
import { ActionType } from '../actions-types';

interface RepositoriesStateInterface {
    clearFilterloading: boolean;
    error: string | null;
    clearFilterData: any;
}

const initialState = {
    clearFilterloading: false,
    error: null,
    clearFilterData: []
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
            case ActionType.CLEAR_FILTER_INIT:
                draft.clearFilterloading = true;
                draft.clearFilterData = [];
                draft.error = null;
                return draft;
            case ActionType.CLEAR_FILTER_SUCCESS:
                draft.clearFilterloading = false;
                draft.clearFilterData = action.payload;
                draft.error = null;
                return draft;
            case ActionType.CLEAR_FILTER_ERROR:
                draft.clearFilterloading = false;
                draft.clearFilterData = [];
                draft.error = action.payload;
                return draft;
            default:
                return draft;
        }
    });

export default reducer;