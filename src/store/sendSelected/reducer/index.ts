import produce from 'immer';
import { Action } from '../actions';
import { ActionType } from '../actions-types';

interface RepositoriesStateInterface {
    sendSelectedloading: boolean;
    error: string | null;
    sendSeletedData: any;
}

const initialState = {
    sendSelectedloading: false,
    error: null,
    sendSeletedData: {}
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
            case ActionType.SEND_SELECTED_INIT:
                draft.sendSelectedloading = true;
                draft.sendSeletedData = {};
                draft.error = null;
                return draft;
            case ActionType.SEND_SELECTED_SUCCESS:
                draft.sendSelectedloading = false;
                draft.sendSeletedData = action.payload;
                draft.error = null;
                return draft;
            case ActionType.SEND_SELECTED_ERROR:
                draft.sendSelectedloading = false;
                draft.sendSeletedData = {};
                draft.error = action.payload;
                return draft;
            default:
                return draft;
        }
    });

export default reducer;