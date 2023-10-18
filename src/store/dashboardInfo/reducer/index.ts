import produce from 'immer';
import { Action } from '../actions';
import { ActionType } from '../actions-types';

interface RepositoriesStateInterface {
    dashboardInfoloading: boolean;
    error: string | null;
    dashboardInfoData: any;
}

const initialState = {
    dashboardInfoloading: false,
    error: null,
    dashboardInfoData: {}
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
            case ActionType.DASHBOARD_INFO_INIT:
                draft.dashboardInfoloading = true;
                draft.dashboardInfoData = {};
                draft.error = null;
                return draft;
            case ActionType.DASHBOARD_INFO_SUCCESS:
                draft.dashboardInfoloading = false;
                draft.dashboardInfoData = action.payload;
                draft.error = null;
                return draft;
            case ActionType.DASHBOARD_INFO_ERROR:
                draft.dashboardInfoloading = false;
                draft.dashboardInfoData = {};
                draft.error = action.payload;
                return draft;
            default:
                return draft;
        }
    });

export default reducer;