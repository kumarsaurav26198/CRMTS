import { Dispatch } from 'redux';
import { ActionType } from '../actions-types';
import { Action } from '../actions';
import { apiUri } from '../../../service/apiEndPoints';
import service from '../../../service/axios';

/**
 *
 * @param data
 */
export const clearFilter = (limit: any) => {
    return async (dispatch: Dispatch<Action | any>) => {
        dispatch({
            type: ActionType.CLEAR_FILTER_INIT,
        });

        try {
            const response = await service.get(apiUri.surfMLP.clearFilter);

            if (response?.data?.success) {
                dispatch({
                    type: ActionType.CLEAR_FILTER_SUCCESS,
                    payload: response.data,
                })
                return response;
            }

            return response;
        } catch (e: any) {
            dispatch({
                type: ActionType.CLEAR_FILTER_ERROR,
                payload: 'Invalid email/password',
            });
        }
    };
};
