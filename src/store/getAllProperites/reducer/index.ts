import produce from 'immer';
import { Action } from '../actions';
import { ActionType } from '../actions-types';

interface RepositoriesStateInterface {
    getAllPropertiesloading: boolean;
    error: string | null;
    getAllPPropertiesData: any;
}

const initialState = {
    getAllPropertiesloading: false,
    error: null,
    getAllPPropertiesData: []
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
            case ActionType.GET_ALL_PROPERTIES:
                draft.getAllPropertiesloading = true;
                draft.getAllPPropertiesData = [];
                draft.error = null;
                return draft;
            case ActionType.GET_ALL_PROPERTIES_SUCCESS:
                draft.getAllPropertiesloading = false;
                draft.getAllPPropertiesData = action.payload;
                draft.error = null;
                return draft;
            case ActionType.GET_ALL_PROPERTIES_ERROR:
                draft.getAllPropertiesloading = false;
                draft.getAllPPropertiesData = [];
                draft.error = action.payload;
                return draft;
            default:
                return draft;
        }
    });

export default reducer;