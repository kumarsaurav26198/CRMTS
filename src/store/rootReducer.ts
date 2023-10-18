import { combineReducers } from 'redux';
import auth from '../store/login/reducer';
import logout from '../store/logout/reducer';
import socialLogin from '../store/socialLogin/reducer';
import modalSheet from '../store/global_modal/reducer'
import getFilterData from '../store/getFilter/reducer'
import clearFilterData from '../store/clearFIlter/reducer'
import getAllPPropertiesData from '../store/getAllProperites/reducer'
import getSinglePropertyData from '../store/singleProperty/reducer'
import contactListData from '../store/getContacts/reducer'
import sendSeletedData from '../store/sendSelected/reducer'
import dashboardInfoData from '../store/dashboardInfo/reducer'
import citiesData from '../store/getCities/reducer'
import createContactData from '../store/createContact/reducer'

const reducers = combineReducers({
    auth,
    logout,
    socialLogin,
    modalSheet,
    getFilterData,
    getAllPPropertiesData,
    clearFilterData,
    getSinglePropertyData,
    contactListData,
    sendSeletedData,
    dashboardInfoData,
    citiesData,
    createContactData
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;