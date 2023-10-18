import axios from "axios";
import { baseURL } from "../service/apiEndPoints";
import Snackbar from "react-native-snackbar";
// @ts-ignore
import AsyncStorage from '@react-native-async-storage/async-storage';
import { clearAll } from "../storage";
import { persistor } from "../store";
import { setAuthentication } from "../store/login/action-creators";
import { setSAuthentication } from "../store/socialLogin/action-creators";
import { navigationRef } from "../navigation/RootNavigation";
import navigationStrings from "../navigation/navigationStrings";
import { useDispatch } from "react-redux";

const instance = axios.create({
    baseURL: baseURL,
    timeout: 50000,
    timeoutErrorMessage: "Timeout error",
});

AsyncStorage.getItem('TOKEN').then((asyncStorageRes) => {
    // @ts-ignore
    instance.defaults.headers['access_token'] = asyncStorageRes;
});
export const setAuthInitalToken = (token: string) => {
    instance.defaults.headers['access_token'] = token;
    console.log('access_token', token)
};
instance.defaults.headers.common.Accept = `application/json`;
instance.defaults.headers.common.Connection = "keep-alive"
instance.defaults.headers['security_key'] = "SurfLokal52"


instance.interceptors.request.use(payload => {
    return payload;
});

instance.interceptors.response.use(
    async response => {

        if (!response.data.success) {
            const { dispatch } = useDispatch()

            console.log('response.data.code ', response.data.code)
            if (response.data.code === 401) {
                await clearAll();
                await persistor.flush();
                await persistor.purge();
                dispatch(setAuthentication(false))
                dispatch(setSAuthentication(false))
                delete axios.defaults.headers.common["security_key"];
                delete axios.defaults.headers.common["access_token"];
                navigationRef.current.navigation.reset({
                    index: 0,
                    routes: [{ name: navigationStrings.LOGIN }],
                });
                Snackbar.show({
                    text: 'Session expired,Please login again...',
                    duration: Snackbar.LENGTH_SHORT,
                })
            } else {
                Snackbar.show({
                    backgroundColor: '#496D8C',
                    text: response && response.data.message,
                    duration: Snackbar.LENGTH_SHORT,
                })
            }

        } else {

        }
        return response;
    },
    error => {
        Snackbar.show({
            text: error && error.response.data.message,
            duration: Snackbar.LENGTH_SHORT,
        })
        if (error.response.data && !error.response.data.status) {
            // Snackbar.show({
            //   text: error && error.response.data.message,
            //   duration: Snackbar.LENGTH_SHORT,
            // })
        }

        return Promise.reject(error);
    },
);

export default instance;