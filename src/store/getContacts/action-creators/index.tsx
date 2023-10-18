import { Dispatch } from 'redux';
import { ActionType } from '../actions-types';
import { Action } from '../actions';
import { apiUri } from '../../../service/apiEndPoints';
import service from '../../../service/axios';

/**
 *
 * @param data
 */
export const getContacts = () => {
    return async (dispatch: Dispatch<Action | any>) => {
        dispatch({
            type: ActionType.GET_CONTACT_INIT,
        });

        try {
            const response = await service.get(apiUri.contact.contactList);

            if (response?.data?.success) {
                dispatch({
                    type: ActionType.GET_CONTACT_SUCCESS,
                    payload: response.data,
                })
                return response;
            }

            return response;
        } catch (e: any) {
            dispatch({
                type: ActionType.GET_CONTACT_ERROR,
                payload: 'Somethings wents wrong',
            });
        }
    };
};
