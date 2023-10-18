import { Dispatch } from 'redux';
import { ActionType } from '../actions-types';
import { Action } from '../actions';
import { apiUri } from '../../../service/apiEndPoints';
import service from '../../../service/axios';

/**
 *
 * @param data
 */
export const getDashboardInfo = () => {
    return async (dispatch: Dispatch<Action | any>) => {
        dispatch({
            type: ActionType.DASHBOARD_INFO_INIT,
        });

        try {
            const response = await service.get(apiUri.dashboard.dashboardInfo);
            if (response?.data?.success) {
                dispatch({
                    type: ActionType.DASHBOARD_INFO_SUCCESS,
                    payload: response.data,
                })
                return response;
            }

            return response;
        } catch (e: any) {
            dispatch({
                type: ActionType.DASHBOARD_INFO_ERROR,
                payload: 'Somethings wents wrong',
            });
        }
    };
};
