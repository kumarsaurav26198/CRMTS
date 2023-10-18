import produce from 'immer';
import { Action } from '../actions';
import { ActionType } from '../actions-types';

interface RepositoriesStateInterface {
    singlePropertyloading: boolean;
    error: string | null;
    singlePropertyData: any;
}

const initialState = {
    singlePropertyloading: false,
    error: null,
    singlePropertyData: {}
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
            case ActionType.SINGLE_PROPERTY_INIT:
                draft.singlePropertyloading = true;
                draft.singlePropertyData = {};
                draft.error = null;
                return draft;
            case ActionType.SINGLE_PROPERTY_SUCCESS:
                draft.singlePropertyloading = false;
                draft.singlePropertyData = action.payload;
                draft.error = null;
                return draft;
            case ActionType.SINGLE_PROPERTY_ERROR:
                draft.singlePropertyloading = false;
                draft.singlePropertyData = {};
                draft.error = action.payload;
                return draft;
            default:
                return draft;
        }
    });

export default reducer;