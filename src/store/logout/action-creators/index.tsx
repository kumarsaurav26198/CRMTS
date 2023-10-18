import { Dispatch } from 'redux';
import { ActionType } from '../actions-types';
import { Action } from '../actions';
import { apiUri } from '../../../service/apiEndPoints';
import service from '../../../service/axios';


export const logout = () => {
    return async (dispatch: Dispatch<Action | any>) => {
        dispatch({
            type: ActionType.LOGOUT,
        });

        try {
            const response = await service.post(apiUri.auth.logout);

            if (response?.data?.success) {
                dispatch({
                    first_name: '',
                    last_name: '',
                    image: '',
                    u_first_name: '',
                    u_last_name: '',
                    u_image: '',
                })
                return response;
            } else {
                dispatch(setAuthentication(false));
            }

            return response;
        } catch (e: any) {
            dispatch({
                type: ActionType.LOGOUT_ERROR,
                payload: 'Unable to logout,Please try again',
            });
        }
    };
};

/**
 * @param value
 */
export const setAuthentication = (value: boolean) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_AUTHENTICATION,
            payload: value,
        });
    };
};
