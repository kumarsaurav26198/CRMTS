import { Dispatch } from 'redux';
import { ActionType } from '../actions-types';
import { Action } from '../actions';
import { apiUri } from '../../../service/apiEndPoints';
import service from '../../../service/axios';

/**
 *
 * @param data
 */
export const getFilter = () => {
    return async (dispatch: Dispatch<Action | any>) => {
        dispatch({
            type: ActionType.GET_FILTER,
        });

        try {
            const response = await service.get(apiUri.surfMLP.getFilter);

            if (response?.data?.success) {
                dispatch({
                    type: ActionType.GET_FILTER_SUCCESS,
                    payload: response.data,
                })
                return response;
            }

            return response;
        } catch (e: any) {
            dispatch({
                type: ActionType.GET_FILTER_ERROR,
                payload: 'Invalid email/password',
            });
        }
    };
};
