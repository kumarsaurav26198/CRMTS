import { Dispatch } from 'redux';
import { ActionType } from '../actions-types';
import { Action } from '../actions';
import { apiUri } from '../../../service/apiEndPoints';
import service, { setAuthInitalToken } from '../../../service/axios';
import { storeData } from 'storage';
import { storageConstants } from '../../../storage/storage-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 *
 * @param data
 */
export const login = (data: any) => {
    console.log('email ===> data ', data)
    return async (dispatch: Dispatch<Action | any>) => {
        dispatch({
            type: ActionType.LOGIN,
        });

        try {
            const response = await service.post(apiUri.auth.login, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            console.log('email ===> ', response.data)
            if (response?.data?.success) {
                setAuthInitalToken(response.data.data.authToken);
                await storeData(storageConstants.authToken, response.data.data.authToken);

                AsyncStorage.setItem('TOKEN', "" + response)
                AsyncStorage.setItem('user_email', response.data.data.user_email)
                await dispatch(
                    setUser({
                        authToken: response.data.data.authToken,
                        user_email: response.data.data.user_email,
                        u_first_name: response.data.data.first_name,
                        u_last_name: response.data.data.last_name,
                        u_image: response.data.data?.user_url,
                        totalactivity: response.data.data?.totalactivity,
                        roles: response?.data?.data?.roles,
                        other_roles: response?.data?.data?.other_roles
                    }),
                );
                dispatch(setAuthentication(true));
                return response;

            } else {
                dispatch(setAuthentication(false));
            }

            return response;
        } catch (e: any) {
            dispatch({
                type: ActionType.LOGIN_ERROR,
                payload: 'Invalid email/password',
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

/**
 *
 */
export const setUser = (fn: any) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.LOGIN_SUCCESS,
            payload: {
                authToken: fn?.authToken,
                user_email: fn?.user_email,
                u_first_name: fn?.u_first_name,
                u_last_name: fn?.u_last_name,
                u_image: fn?.u_image,
                totalactivity: fn?.totalactivity,
                roles: fn?.roles,
                other_roles: fn?.other_roles
            },
        });
    };
};
