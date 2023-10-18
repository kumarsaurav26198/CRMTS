import { Dispatch } from 'redux';
import { ActionType } from '../actions-types';
import { Action } from '../actions';
import { apiUri } from '../../../service/apiEndPoints';
import service from '../../../service/axios';

/**
 *
 * @param data
 */
export const createContact = (data: any) => {
    console.log('image res ==>1 ', JSON.stringify(data))

    return async (dispatch: Dispatch<Action | any>) => {
        dispatch({
            type: ActionType.CREATE_CONTACT_INIT,
        });

        try {
            const response = await service.post(apiUri.contact.createContact, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            if (response?.data?.success) {
                dispatch({
                    type: ActionType.CREATE_CONTACT_SUCCESS,
                    payload: response.data,
                })
                return response;
            }

            return response;
        } catch (e: any) {
            dispatch({
                type: ActionType.CREATE_CONTACT_ERROR,
                payload: 'Something wents wrong...',
            });
        }
    };
};
