import React, { useMemo, useState } from "react";
import { styled, useTheme, withTheme } from "styled-components/native";
import TextField from "../../../components/TextField";
import { Formik } from 'formik';
import { LOGIN_SCHEMA } from "../../public/Login/helpers";
import { arrowDownBorderIcon, profileIcon, uncheckIcon } from '../../../utils/assets'
import { Platform, ScrollView, TouchableOpacity, View } from "react-native";
import RadioGroup from 'react-native-radio-buttons-group';
import PrimaryButton from '../../../components/Button'
import ButtonSecondary from "../../../components/ButtonSecondary";
import ImagePicker from 'react-native-image-crop-picker';

const Setting = () => {
    const { colors } = useTheme()
    const radioButtons = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Ring surf Phone, than forward to personal',
            value: 'option1'
        },
        {
            id: '2',
            label: 'Ring personal phone and surf Phone at the same time',
            value: 'option2'
        }
    ]), []);

    const [imagePath, setImagePath] = useState<any>(null);
    const saveImage = (image: any) => {
        if (image === null) {
            alert('Image path error');
        } else {
            const formData = new FormData();
            let osPath =
                Platform.OS === 'android'
                    ? imagePath.path
                    : imagePath.path.replace('file://', '');
            setImagePath(osPath)
            formData.append('file', {
                // @ts-ignore
                uri: osPath,
                type: 'image/jpeg',
                name: 'photo.png',
            });
            console.log('Image ===> ', imagePath)


        }
    }

    const [selectedId, setSelectedId] = useState();

    return (
        <MainWrapper>
            <ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%' }}>
                <Formik
                    validationSchema={LOGIN_SCHEMA}
                    initialValues={{
                        email: 'fd@m.c',
                        password: 'as',
                    }}
                    onSubmit={(values) => {

                    }}>
                    {({ setFieldValue, handleSubmit, errors }) => (
                        <FormikWrapper>
                            <TextField
                                accessibilityLabel='Name'
                                color={colors.black}
                                accessibilityLabelColor={colors.black}
                                placeholder='Your Full Name'
                                placeholderColor='#C1C1C1'
                                borderColor='#C1C1C1'
                                borderRadius={18}
                                onChangeText={(value: any) => {
                                    setFieldValue('email', value);
                                }}
                                keyboardType={'email-address'}
                                autoCapitalize={'none'}
                            // error={errors ? errors.email : null}
                            />
                            <TextField
                                accessibilityLabel='surf Email'
                                color={colors.black}
                                placeholder='surf Phone Number'
                                placeholderColor='#C1C1C1'
                                borderColor='#C1C1C1'
                                borderRadius={18}
                                onChangeText={(value: any) => {
                                    setFieldValue('email', value);
                                }}
                                keyboardType={'email-address'}
                                autoCapitalize={'none'}
                            // error={errors ? errors.email : null}
                            />
                            <TextField
                                accessibilityLabel='surf Phone'
                                color={colors.black}
                                placeholder='surf phone number'
                                placeholderColor='#C1C1C1'
                                borderColor='#C1C1C1'
                                borderRadius={18}
                                onChangeText={(value: any) => {
                                    setFieldValue('email', value);
                                }}
                                keyboardType={'email-address'}
                                autoCapitalize={'none'}
                            // error={errors ? errors.email : null}
                            />
                            <TextField
                                accessibilityLabel='Email Signature'
                                color={colors.black}
                                placeholder='
                            %agent_name% 
                            %agent_phone%
                            %agent_app%
                            '
                                placeholderColor='#C1C1C1'
                                borderColor='#C1C1C1'
                                borderRadius={18}
                                onChangeText={(value: any) => {
                                    setFieldValue('email', value);
                                }}
                                keyboardType={'email-address'}
                                autoCapitalize={'none'}
                                multiline={true}
                                // error={errors ? errors.email : null}
                                style={{ height: 100, textAlign: 'start' }}
                            />
                            <TextView fontSize={14} marginTop={16} marginLeft={0} color={colors.black}>Photo</TextView>
                            <HorizontalWrapper>
                                {
                                    imagePath ?
                                        <ImageView height={70} width={70} source={{ uri: imagePath ? imagePath.path : null }} />
                                        : <ImageView height={70} width={70} source={profileIcon} />
                                }
                                <TouchableOpacity
                                    onPress={() => {
                                        ImagePicker.openPicker({
                                            cropping: true,
                                            compressImageQuality:
                                                Platform.OS === 'android'
                                                    ? 1
                                                    : 0.8,
                                            mediaType: 'photo',
                                            forceJpg: true,
                                        }).then(async (image) => {
                                            setImagePath(image)
                                            saveImage(image)
                                        });
                                    }}>
                                    <ButtonView>
                                        <TextView fontSize={14} marginTop={0} marginLeft={0} color={colors.gray}>Replace</TextView>
                                    </ButtonView>
                                </TouchableOpacity>

                                <ButtonView>
                                    <TextView fontSize={14} marginTop={0} marginLeft={0} color={colors.gray}>Remove</TextView>
                                </ButtonView>
                            </HorizontalWrapper>

                            <TextField
                                accessibilityLabel='Time Zone'
                                color={colors.black}
                                placeholder='Eastern Time - GMT 04:00 '
                                placeholderColor='#C1C1C1'
                                editable={false}
                                borderColor='#C1C1C1'
                                borderRadius={18}
                                onChangeText={(value: any) => {
                                    setFieldValue('email', value);
                                }}
                                keyboardType={'email-address'}
                                autoCapitalize={'none'}
                                icon={true}
                                imageIcon={arrowDownBorderIcon}
                            // error={errors ? errors.email : null}
                            />

                            <TextField
                                accessibilityLabel='Personal Phone'
                                color={colors.black}
                                placeholder='surf Phone Number'
                                placeholderColor='#C1C1C1'
                                borderColor='#C1C1C1'
                                borderRadius={18}
                                onChangeText={(value: any) => {
                                    setFieldValue('email', value);
                                }}
                                keyboardType={'email-address'}
                                autoCapitalize={'none'}
                            // error={errors ? errors.email : null}
                            />
                            <TextField
                                accessibilityLabel='Personal Email'
                                color={colors.black}
                                placeholder='Personal Email'
                                placeholderColor='#C1C1C1'
                                borderColor='#C1C1C1'
                                borderRadius={18}
                                onChangeText={(value: any) => {
                                    setFieldValue('email', value);
                                }}
                                keyboardType={'email-address'}
                                autoCapitalize={'none'}
                            // error={errors ? errors.email : null}
                            />
                        </FormikWrapper>
                    )}
                </Formik>

                <HorizontalWrapper>
                    <HorizontalWrapper style={{ alignItems: 'center' }}>
                        <Checkbox source={uncheckIcon} />
                        <TextView fontSize={16} marginTop={0} marginLeft={10} color={colors.black}>Share your emails</TextView>
                    </HorizontalWrapper>

                    <HorizontalWrapper style={{ marginLeft: 5, alignItems: 'center' }}>
                        <Checkbox source={uncheckIcon} />
                        <TextView fontSize={16} marginTop={0} marginLeft={10} color={colors.black}>Share your calendar</TextView>
                    </HorizontalWrapper>

                </HorizontalWrapper>

                <TextView fontSize={29} marginTop={16} marginLeft={0} color={colors.black}>Call Routing</TextView>
                <TextView fontSize={16} marginTop={10} marginLeft={0} color={colors.black}>Incoming calls</TextView>
                <RadioGroup
                    containerStyle={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: -10, }}
                    radioButtons={radioButtons}
                    onPress={setSelectedId}
                    selectedId={selectedId}
                />
                <TextView fontSize={22} marginTop={10} marginLeft={0} color={colors.black}>Outgoing calls</TextView>
                <TextView fontSize={16} marginTop={10} marginLeft={0} color={colors.black}>When calling from the app, use*</TextView>
                <View style={{ width: 150 }}>
                    <TextField
                        color={colors.black}
                        placeholder='surf Phone'
                        placeholderColor='#C1C1C1'
                        editable={false}
                        borderColor='#C1C1C1'
                        borderRadius={18}
                        onChangeText={(value: any) => {
                            setFieldValue('email', value);
                        }}
                        keyboardType={'email-address'}
                        autoCapitalize={'none'}
                        icon={true}
                        imageIcon={arrowDownBorderIcon}
                    // error={errors ? errors.email : null}
                    />
                </View>
                <TextView fontSize={11} marginTop={10} marginLeft={0} color={colors.black}>*Company phone # used by default.</TextView>
                <TextView fontSize={16} marginTop={10} marginLeft={0} color={colors.black}>Always use this method of connection when
                    calling.</TextView>
                <View style={{ width: 150 }}>
                    <TextField
                        color={colors.black}
                        placeholder='surf Phone'
                        placeholderColor='#C1C1C1'
                        editable={false}
                        borderColor='#C1C1C1'
                        borderRadius={18}
                        onChangeText={(value: any) => {
                            setFieldValue('email', value);
                        }}
                        keyboardType={'email-address'}
                        autoCapitalize={'none'}
                        icon={true}
                        imageIcon={arrowDownBorderIcon}
                    // error={errors ? errors.email : null}
                    />
                </View>
                <Divider />

                <HorizontalBtnWrapper>
                    <PrimaryButton
                        onPress={() => { }}
                        borderColor={colors.primary}
                        width={120}
                        heightBT={40}
                        backgroundColor={colors.white}
                        btnText={'Cancel'}
                        loading={false}
                        color={colors.black}
                    />

                    <ButtonSecondary
                        onPress={() => { }}
                        style={{ marginLeft: 16 }}
                        btnText='Save'
                        height={40}
                        fontSize={15}
                        isIconLeft={false}>

                    </ButtonSecondary>
                </HorizontalBtnWrapper>

                <TextView textAlign='center' fontSize={11} marginTop={10} marginLeft={0} color={colors.red}>Reset password</TextView>

            </ScrollView>
        </MainWrapper >
    )
}

export default withTheme(Setting)


type TextViewProps = {
    fontSize: number;
    marginLeft?: number;
    marginTop?: number;
    color?: number;
    textAlign?: string;
}

type ImageProps = {
    height: number;
    width: number;
}

const HorizontalBtnWrapper = styled.View`
    flex-direction:row;
    justify-content:center;
    margin-top:16px;
    `;
const Divider = styled.View`
    height:1px;
    width:100%;
    margin-top:16px;
    background-color:${({ theme }: any) => theme.colors.gray};
`;

const Checkbox = styled.Image`
    height:22px;
    width:22px;
`;

const ButtonView = styled.View`
    padding:8px;
    border-radius:10px;
    height:35px;
    margin-left:10px;
    border-width:1px;
    border-color:${({ theme }: any) => theme.colors.gray};
`;

const ImageView = styled.Image<ImageProps>`
    height:${({ height }: any) => height}px;
    width:${({ width }: any) => width}px;
    border-radius:35px;
    resize-mode:contain;
`;

const HorizontalWrapper = styled.View`
    flex-direction:row;
    margin-top:16px;
`;

const TextView = styled.Text<TextViewProps>`
    font-size:${({ fontSize }: any) => fontSize}px;
    color:${({ color }: any) => color};
    margin-top:${({ marginTop }: any) => marginTop}px;
    margin-left:${({ marginLeft }: any) => marginLeft}px;
    text-align:${({ textAlign }: any) => textAlign}
`;


const FormikWrapper = styled.View`
    width:100%;
`;

const MainWrapper = styled.View`
    height:100%;
    width:100%;
    align-items:center;
    padding:16px;
    background-color:white;
`;