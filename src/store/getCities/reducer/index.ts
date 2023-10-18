import produce from 'immer';
import { Action } from '../actions';
import { ActionType } from '../actions-types';

interface RepositoriesStateInterface {
    citiesloading: boolean;
    error: string | null;
    citiesData: object;
}

const initialState = {
    citiesloading: false,
    error: null,
    citiesData: {}
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
            case ActionType.GET_CITIES_INIT:
                draft.citiesloading = true;
                draft.citiesData = {};
                draft.error = null;
                return draft;
            case ActionType.GET_CITIES_SUCCESS:
                draft.citiesloading = false;
                draft.citiesData = action.payload;
                draft.error = null;
                return draft;
            case ActionType.GET_CITIES_ERROR:
                draft.citiesloading = false;
                draft.citiesData = {};
                draft.error = action.payload;
                return draft;
            default:
                return draft;
        }
    });

export default reducer;