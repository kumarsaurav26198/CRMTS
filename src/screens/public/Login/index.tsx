import React, { useEffect } from "react";
import { styled, withTheme } from "styled-components/native";
import { LoaderView, MainWrapper } from '../../../utils/globalStyles'
import navigationStrings from "../../../navigation/navigationStrings";
import { useTheme } from "styled-components";
import TextField from '../../../components/TextField';
import { Formik } from 'formik';
import { LOGIN_SCHEMA } from "./helpers";
import PrimaryButton from '../../../components/Button';
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import { googleIcon } from "../../../utils/assets";
import { TouchableOpacity } from "react-native";
import messaging from '@react-native-firebase/messaging';
import { useActions } from '../../../hooks/useActions'
import { requestUserPermission, NotificationListerner } from '../../../utils/pushnotifications_helper'
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import Activity from '../../../components/Activity'
import { PermissionsAndroid } from 'react-native';

const Login = ({ navigation }) => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
    const { colors }: any = useTheme();
    const { login, sociallogin } = useActions();
    const { loading, error, isAuthenticated } = useTypedSelector(
        state => state.auth,
    );
    const { s_loading, s_isAuthenticated } = useTypedSelector(
        state => state.socialLogin,
    );
    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '681904798882-r41s7mipcih0gdmsau2ds4c21pq4p476.apps.googleusercontent.com',
            iosClientId: '681904798882-24aavuvkrsg3l1mqrkn49g4kh0s4pom5.apps.googleusercontent.com',
        });
    }, [])

    useEffect(() => {
        if (isAuthenticated || s_isAuthenticated) {
            navigation.reset({
                index: 0,
                routes: [{ name: navigationStrings.TAB_BAR_DASHBOARD }],
            });
        }
    }, [isAuthenticated, s_isAuthenticated])

    useEffect(() => {
        requestUserPermission()
        NotificationListerner()
    }, [])

    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            await GoogleSignin.signOut()
            const userInfo = await GoogleSignin.signIn();
            const fcmtoken = await messaging().getToken()
            const formData = new FormData()
            formData.append('email', userInfo?.user?.email)
            formData.append('username', userInfo?.user?.email)
            formData.append('social_id', userInfo?.user?.id)
            formData.append('social_token', userInfo?.idToken)
            formData.append('last_name', userInfo?.user.familyName)
            formData.append('first_name', userInfo?.user.givenName)
            formData.append('image', userInfo?.user?.photo)
            formData.append('device_type', '2')
            formData.append('device_token', fcmtoken)
            formData.append('user_type', '2')
            await sociallogin(formData)
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            } else if (error.code === statusCodes.IN_PROGRESS) {
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            } else {
            }
        }
    };

    return (
        <MainView>
            {
                loading || s_loading ? <LoaderView>
                    <Activity />
                </LoaderView > : null

            }
            <MainWrapper>
                <LoginWrapper>
                    <TextWrapper marginTop={0} color={colors.white} fontSize={18} fontWeight={700}>Lokal CRM WIP</TextWrapper>
                    <TextWrapper marginTop={30} color={colors.white} fontSize={40} fontWeight={700}>Welcome</TextWrapper>
                    <Formik
                        validationSchema={LOGIN_SCHEMA}
                        initialValues={{
                            email: 'tester1.webperfection@gmail.com',
                            password: 'john@12345',
                        }}
                        onSubmit={async (values) => {
                            const fcmtoken = await messaging().getToken()
                            const formData = new FormData()
                            formData.append('username', values.email)
                            formData.append('password', values.password)
                            formData.append('device_type', '2')
                            formData.append('device_token', fcmtoken)
                            formData.append('user_type', '2')
                            await login(formData)
                        }}>
                        {({ setFieldValue, handleSubmit, errors }) => (
                            <FormikWrapper>
                                <TextField
                                    onChangeText={(value: any) => {
                                        setFieldValue('email', value);
                                    }}
                                    placeholder="email"
                                    keyboardType={'email-address'}
                                    autoCapitalize={'none'}
                                    error={errors ? errors.email : null}
                                />
                                <TextField
                                    onChangeText={(value: any) => {
                                        setFieldValue('password', value);
                                    }}
                                    placeholder="********"
                                    secureTextEntry={true}
                                    error={errors ? errors.password : null}
                                />

                                <ButtonWrapper>
                                    <PrimaryButton
                                        onPress={handleSubmit}
                                        backgroundColor={colors.white}
                                        btnText={'Continue'}
                                        loading={false}
                                        color={colors.black}
                                    />
                                    <TouchableOpacity onPress={() => { signIn() }}>
                                        <GoogleButton>
                                            <ImageView source={googleIcon}></ImageView>
                                            <TextWrapper marginTop={0} color={colors.white} fontSize={18} fontWeight={700}>Sign in with google</TextWrapper>
                                        </GoogleButton>
                                    </TouchableOpacity>
                                </ButtonWrapper>
                            </FormikWrapper>
                        )}
                    </Formik>
                </LoginWrapper>
            </MainWrapper>
        </MainView>

    )
}

export default withTheme(Login)

type TextProps = {
    color?: string;
    fontSize?: number;
    fontWeight?: number;
    marginTop?: number;
}


const ImageView = styled.Image`
    justify-content:center;
    align-items:center;
    height:30px;
    width:30px;
    resize-mode:contain;
    margin-right:10px;
`;

const GoogleButton = styled.View`
    border-color:white;
    border-width:1px;
    padding:5px;
    flex-direction:row;
    margin: 0px 10px 0px 10px;
    align-items:center;
    border-radius:20px;
    margin-top:20px;
`;

const FormikWrapper = styled.View`
    width:100%;
    margin-top:20px;
`;

const ButtonWrapper = styled.View`
  margin-top: 80px;
  align-items: center;
  width:100%;
`;

const TextWrapper = styled.Text<TextProps>`
    color: ${({ theme, color }: any) => color};
    font-size: ${({ theme, fontSize }: any) => fontSize}px;
    font-weight: ${({ theme, fontWeight }: any) => fontWeight};
    margin-top:${({ theme, marginTop }: any) => marginTop}px;
`;

const LoginWrapper = styled.View`
    height:100%;
    width:100%;
    justify-content:center;
    align-items:center;
`

const MainView = styled.View`
    flex:1;
`;