import { ActionType } from '../actions-types';

interface DashboardInfoInitAction {
    type: ActionType.DASHBOARD_INFO_INIT;
}

interface DashboardInfoSuccessAction {
    type: ActionType.DASHBOARD_INFO_SUCCESS;
    payload: any;
}


interface DashboardInfoErrorAction {
    type: ActionType.DASHBOARD_INFO_ERROR;
    payload: string;
}


export type Action =
    | DashboardInfoInitAction
    | DashboardInfoSuccessAction
    | DashboardInfoErrorAction