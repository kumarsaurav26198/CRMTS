import { Dispatch } from 'redux';
import { ActionType } from '../actions-types';
import { Action } from '../actions';
import { apiUri } from '../../../service/apiEndPoints';
import service from '../../../service/axios';

/**
 *
 * @param data
 */
export const sendSelected = (data: any) => {
    return async (dispatch: Dispatch<Action | any>) => {
        dispatch({
            type: ActionType.SEND_SELECTED_INIT,
        });

        try {
            const response = await service.post(apiUri.surfMLP.sendSelected, data);
            console.log('send Selected Props ===> ', response)
            if (response?.data?.success) {
                dispatch({
                    type: ActionType.SEND_SELECTED_SUCCESS,
                    payload: response.data,
                })
                return response;
            }

            return response;
        } catch (e: any) {
            dispatch({
                type: ActionType.SEND_SELECTED_ERROR,
                payload: 'Somethings wents wrong',
            });
        }
    };
};
