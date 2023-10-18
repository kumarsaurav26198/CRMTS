import { Dispatch } from 'redux';
import { ActionType } from '../actions-types';
import { Action } from '../actions';
import { apiUri } from '../../../service/apiEndPoints';
import service from '../../../service/axios';

/**
 *
 * @param data
 */
export const getCities = () => {
    return async (dispatch: Dispatch<Action | any>) => {
        dispatch({
            type: ActionType.GET_CITIES_INIT,
        });

        try {
            const response = await service.get(apiUri.contact.cities);
            if (response?.data?.success) {
                dispatch({
                    type: ActionType.GET_CITIES_SUCCESS,
                    payload: response.data,
                })
                return response;
            }

            return response;
        } catch (e: any) {
            dispatch({
                type: ActionType.GET_CITIES_ERROR,
                payload: 'Somethings wents wrong',
            });
        }
    };
};
