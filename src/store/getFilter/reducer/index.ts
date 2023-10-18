import produce from 'immer';
import { Action } from '../actions';
import { ActionType } from '../actions-types';

interface RepositoriesStateInterface {
    getFilterloading: boolean;
    error: string | null;
    getFilterData: any;
}

const initialState = {
    getFilterloading: false,
    error: null,
    getFilterData: []
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
            case ActionType.GET_FILTER:
                draft.getFilterloading = true;
                draft.getFilterData = [];
                draft.error = null;
                return draft;
            case ActionType.GET_FILTER_SUCCESS:
                draft.getFilterloading = false;
                draft.getFilterData = action.payload;
                draft.error = null;
                return draft;
            case ActionType.GET_FILTER_ERROR:
                draft.getFilterloading = false;
                draft.getFilterData = [];
                draft.error = action.payload;
                return draft;
            default:
                return draft;
        }
    });

export default reducer;