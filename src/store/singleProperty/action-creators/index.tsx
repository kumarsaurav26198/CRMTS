import { Dispatch } from 'redux';
import { ActionType } from '../actions-types';
import { Action } from '../actions';
import { apiUri } from '../../../service/apiEndPoints';
import service from '../../../service/axios';

/**
 *
 * @param data
 */
export const getSingleProperty = (id: any) => {
    return async (dispatch: Dispatch<Action | any>) => {
        dispatch({
            type: ActionType.SINGLE_PROPERTY_INIT,
        });

        try {
            const response = await service.get(apiUri.surfMLP.singleProperty + id.ID);

            if (response?.data?.success) {
                dispatch({
                    type: ActionType.SINGLE_PROPERTY_SUCCESS,
                    payload: response.data,
                })
                return response;
            }

            return response;
        } catch (e: any) {
            dispatch({
                type: ActionType.SINGLE_PROPERTY_ERROR,
                payload: 'Somethings wents wrong',
            });
        }
    };
};
