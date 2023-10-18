import React, { useEffect, useRef, useState } from "react";
import { styled, useTheme, withTheme } from "styled-components/native";
import TextField from "../../../components/TextField";
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import { StyleSheet, Text, View } from 'react-native'
import { Platform, ScrollView, TouchableOpacity } from "react-native";
import { profileIcon } from "../../../utils/assets";
import PrimaryButton from '../../../components/Button'
import ButtonSecondary from "../../../components/ButtonSecondary";
import ImagePicker from 'react-native-image-crop-picker';
import { Formik } from 'formik';
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { ADD_CONTACT_SCHEMA } from "../../public/Login/helpers";
import { useActions } from "../../../hooks/useActions";
import Activity from "../../../components/Activity";
import { LoaderView } from "../../../utils/globalStyles";


const AddContact = ({ navigation }) => {
    const { colors } = useTheme()
    const ref = useRef()
    const refCity = useRef()
    const existingContactRef = useRef()
    const [value, setValue] = useState([]);
    const [otherRoles, setOtherRoles] = useState([]);
    const [city, setCity] = useState([])
    const [cityOfInterest, setCityOfInterest] = useState('')
    const [isFocus, setIsFocus] = useState(false);
    const [imagePath, setImagePath] = useState<any>(null);
    const [imageOSPath, setImageOSPath] = useState('')
    const [showOtherContactType, setOtherContactType] = useState(false)
    const { getCities } = useActions()

    const {
        getContacts,
        createContact
    } = useActions()
    const { citiesloading, citiesData } = useTypedSelector(
        state => state.citiesData,
    )

    const { createContactloading, createContactData } = useTypedSelector(
        state => state.createContactData,
    )

    const { loading, error, isAuthenticated, u_image, u_first_name, u_last_name, roles, other_roles } = useTypedSelector(
        state => state.auth,
    );

    const { s_loading, s_isAuthenticated, image, first_name, last_name, s_roles, s_other_roles } = useTypedSelector(
        state => state.socialLogin,
    );

    const { contactsloading, contactListData } = useTypedSelector(
        state => state.contactListData,
    )

    useEffect(() => {
        Promise.all[
            getCities(), getContacts()
        ]
    }, [])

    const saveImage = (image: any) => {
        if (image === null) {
            alert('Image path error');
        } else {
            let osPath =
                Platform.OS === 'android'
                    ? image.path
                    : image.path.replace('file://', '');
            setImagePath(image)
            setImageOSPath(osPath)
        }
    }

    return (
        <MainView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            {
                false ? <LoaderView>
                    <Activity />
                </LoaderView > :
                    <MainWrapper>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <Formik
                                validationSchema={ADD_CONTACT_SCHEMA}
                                initialValues={{
                                    user_email: '',
                                    user_fullname: '',
                                    user_mobile: '',
                                    userrole: '',
                                    other_contact_type: '',
                                    company_name: '',
                                    city_of_interest: '',
                                    street_address: '',
                                    city: '',
                                    state: '',
                                    zip: '',
                                    facebook_url: '',
                                    google_url: '',
                                    instagram_url: '',
                                    linkedin_url: '',
                                    existing_contacts: '',
                                    // contactimg: ''
                                }}
                                onSubmit={async (values) => {
                                    const formData = new FormData()
                                    formData.append('user_email', values.user_email)
                                    formData.append('user_fullname', values.user_fullname)
                                    formData.append('user_mobile', values.user_mobile)
                                    formData.append('userrole', values.userrole)
                                    formData.append('other_contact_type', values.other_contact_type)
                                    formData.append('company_name', values.company_name)
                                    formData.append('city_of_interest', values.city_of_interest)
                                    formData.append('street_address', values.street_address)
                                    formData.append('city', values.city)
                                    formData.append('state', values.state)
                                    formData.append('zip', values.zip)
                                    formData.append('facebook_url', values.facebook_url)
                                    formData.append('google_url', values.google_url)
                                    formData.append('instagram_url', values.instagram_url)
                                    formData.append('linkedin_url', values.linkedin_url)
                                    formData.append('existing_contacts', values.existing_contacts)
                                    // formData.append('contactimg', {
                                    //     // @ts-ignore
                                    //     uri: imageOSPath,
                                    //     type: 'image/jpeg',
                                    //     name: 'photo.png',
                                    // })
                                    console.log('Image Path ==>', JSON.stringify({
                                        // @ts-ignore
                                        uri: imageOSPath,
                                        type: 'image/jpeg',
                                        name: 'photo.png',
                                    }))
                                    await createContact(formData)
                                    navigation.goBack()
                                }}>
                                {({ setFieldValue, handleSubmit, errors }) => (
                                    <FormikWrapper>
                                        <TextField
                                            accessibilityLabel={'Full name'}
                                            color={colors.black}
                                            accessibilityLabelColor={colors.black}
                                            borderColor={colors.gray}
                                            borderRadius={18}
                                            onChangeText={(value: any) => {
                                                setFieldValue('user_fullname', value);
                                            }}
                                            placeholder="email"
                                            keyboardType={'email-address'}
                                            autoCapitalize={'none'}
                                            error={errors ? errors.user_fullname : null}
                                        />

                                        <TextField
                                            accessibilityLabel={'Email'}
                                            accessibilityLabelColor={colors.black}
                                            borderColor={colors.gray}
                                            color={colors.black}
                                            borderRadius={18}
                                            onChangeText={(value: any) => {
                                                setFieldValue('user_email', value);
                                            }}
                                            placeholder="email"
                                            keyboardType={'email-address'}
                                            autoCapitalize={'none'}
                                            error={errors ? errors.user_email : null}
                                        />

                                        <TextField
                                            accessibilityLabel={'Mobile Phone'}
                                            accessibilityLabelColor={colors.black}
                                            color={colors.black}
                                            borderColor={colors.gray}
                                            borderRadius={18}
                                            onChangeText={(value: any) => {
                                                setFieldValue('user_mobile', value);
                                            }}
                                            placeholder="mobile phone"
                                            keyboardType={'numeric'}
                                            autoCapitalize={'none'}
                                            error={errors ? errors.user_mobile : null}
                                        />

                                        <TextWrapper color={colors.black}>
                                            Contact Type
                                        </TextWrapper>

                                        <DropDownWrapper>
                                            <Dropdown
                                                style={{ width: '100%' }}
                                                data={isAuthenticated ? roles : s_roles}
                                                iconStyle={{ tintColor: colors.black }}
                                                maxHeight={300}
                                                selectedTextStyle={{ color: colors.black }}
                                                labelField="name"
                                                valueField="name"
                                                placeholder={!isFocus ? 'Select contact' : '...'}
                                                searchPlaceholder="Search..."
                                                value={value}
                                                onFocus={() => setIsFocus(true)}
                                                onBlur={() => setIsFocus(false)}
                                                onChange={item => {
                                                    item.name === 'Partner Contact' ? setOtherContactType(true) : setOtherContactType(false)
                                                    setFieldValue('userrole', item.name)
                                                    setValue(item.name);
                                                    setIsFocus(false);
                                                }}
                                            />
                                        </DropDownWrapper>
                                        {errors.userrole != null && (
                                            <ErrorWrapper>
                                                <ErrorWrapper__Text>{errors.userrole}</ErrorWrapper__Text>
                                            </ErrorWrapper>
                                        )}

                                        {
                                            showOtherContactType &&
                                            <View>
                                                <TextWrapper color={colors.black}>
                                                    Contact Type
                                                </TextWrapper>

                                                <DropDownWrapper>
                                                    <Dropdown
                                                        style={{ width: '100%' }}
                                                        data={isAuthenticated ? other_roles : s_other_roles}
                                                        iconStyle={{ tintColor: colors.black }}
                                                        maxHeight={300}
                                                        selectedTextStyle={{ color: colors.black }}
                                                        labelField="name"
                                                        valueField="name"
                                                        placeholder={!isFocus ? 'Select contact' : '...'}
                                                        searchPlaceholder="Search..."
                                                        value={otherRoles}
                                                        onFocus={() => setIsFocus(true)}
                                                        onBlur={() => setIsFocus(false)}
                                                        onChange={item => {
                                                            setFieldValue('other_contact_type', item.name)
                                                            setOtherRoles(item.name);
                                                            setIsFocus(false);
                                                        }}
                                                    />
                                                </DropDownWrapper>
                                                {errors.other_contact_type !== '' ? (
                                                    <ErrorWrapper>
                                                        <ErrorWrapper__Text>{errors.other_contact_type}</ErrorWrapper__Text>
                                                    </ErrorWrapper>
                                                ) : null}

                                                <ExtraView marginTop={-20}>
                                                    <TextField
                                                        accessibilityLabel={'Company Name'}
                                                        accessibilityLabelColor={colors.black}
                                                        color={colors.black}
                                                        borderColor={colors.gray}
                                                        borderRadius={18}
                                                        onChangeText={(value: any) => {
                                                            setFieldValue('company_name', value);
                                                        }}
                                                        placeholder="company name"
                                                        keyboardType={'number'}
                                                        autoCapitalize={'none'}
                                                        error={errors ? errors.company_name : null}
                                                    />
                                                </ExtraView>
                                            </View>
                                        }

                                        <TextWrapper color={colors.black}>
                                            City of interest
                                        </TextWrapper>
                                        <MultiSelect
                                            ref={refCity}
                                            style={styles.dropdown}
                                            placeholderStyle={styles.placeholderStyle}
                                            selectedTextStyle={styles.selectedTextStyle}
                                            inputSearchStyle={styles.inputSearchStyle}
                                            iconStyle={styles.iconStyle}
                                            itemTextStyle={styles.itemTextStyle}
                                            search
                                            data={citiesData?.success ? citiesData?.data?.Cities : []}
                                            visibleSelectedItem
                                            labelField="data_name"
                                            valueField="data_customvalue"
                                            placeholder="Select City"
                                            searchPlaceholder="Search..."
                                            value={cityOfInterest}
                                            onChange={async item => {
                                                refCity.current.close()
                                                setFieldValue('city_of_interest', item.toString())
                                                setCityOfInterest(item);
                                            }}
                                            selectedStyle={styles.selectedStyle}
                                        />
                                        {errors.city_of_interest !== null ? (
                                            <ErrorWrapper style={{ marginTop: 5 }}>
                                                <ErrorWrapper__Text>{errors.city_of_interest}</ErrorWrapper__Text>
                                            </ErrorWrapper>
                                        ) : null}
                                        <HorizontalWrapper style={{ marginTop: -20 }}>
                                            <TextField
                                                width={'45%'}
                                                accessibilityLabel={'Address'}
                                                accessibilityLabelColor={colors.black}
                                                color={colors.black}
                                                borderColor={colors.gray}
                                                placeholderTextColor={colors.gray}
                                                borderRadius={18}
                                                onChangeText={(value: any) => {
                                                    setFieldValue('street_address', value);
                                                }}
                                                placeholder="Street Address"
                                                keyboardType={'default'}
                                                autoCapitalize={'none'}
                                                error={errors ? errors.street_address : null}
                                            />
                                            <TextField
                                                width={'45%'}
                                                accessibilityLabel={''}
                                                accessibilityLabelColor={colors.black}
                                                color={colors.black}
                                                borderColor={colors.gray}
                                                placeholderTextColor={colors.gray}
                                                borderRadius={18}
                                                onChangeText={(value: any) => {
                                                    setFieldValue('city', value);
                                                }}
                                                placeholder="City"
                                                keyboardType={'default'}
                                                autoCapitalize={'none'}
                                                error={errors ? errors.city : null}
                                            />
                                        </HorizontalWrapper>

                                        <HorizontalWrapper>
                                            <TextField
                                                width={'45%'}
                                                accessibilityLabelColor={colors.black}
                                                borderColor={colors.gray}
                                                placeholderTextColor={colors.gray}
                                                color={colors.black}
                                                borderRadius={18}
                                                onChangeText={(value: any) => {
                                                    setFieldValue('state', value);
                                                }}
                                                placeholder="State"
                                                keyboardType={'default'}
                                                autoCapitalize={'none'}
                                                error={errors ? errors.state : null}
                                            />
                                            <TextField
                                                width={'45%'}
                                                accessibilityLabelColor={colors.black}
                                                color={colors.black}
                                                borderColor={colors.gray}
                                                placeholderTextColor={colors.gray}
                                                borderRadius={18}
                                                onChangeText={(value: any) => {
                                                    setFieldValue('zip', value);
                                                }}
                                                placeholder="Zip"
                                                keyboardType={'number'}
                                                autoCapitalize={'none'}
                                                error={errors ? errors.zip : null}
                                            />
                                        </HorizontalWrapper>

                                        <HorizontalWrapper>
                                            <TextField
                                                width={'45%'}
                                                accessibilityLabel={'Social Media'}
                                                accessibilityLabelColor={colors.black}
                                                color={colors.black}
                                                borderColor={colors.gray}
                                                placeholderTextColor={colors.gray}
                                                borderRadius={18}
                                                onChangeText={(value: any) => {
                                                    setFieldValue('facebook_url', value);
                                                }}
                                                placeholder="Facebook URL"
                                                keyboardType={'default'}
                                                autoCapitalize={'none'}
                                                error={errors ? errors.facebook_url : null}
                                            />
                                            <TextField
                                                width={'45%'}
                                                accessibilityLabel={''}
                                                accessibilityLabelColor={colors.black}
                                                color={colors.black}
                                                borderColor={colors.gray}
                                                placeholderTextColor={colors.gray}
                                                borderRadius={18}
                                                onChangeText={(value: any) => {
                                                    setFieldValue('google_url', value);
                                                }}
                                                placeholder="Google URL"
                                                keyboardType={'default'}
                                                autoCapitalize={'none'}
                                                error={errors ? errors.google_url : null}
                                            />
                                        </HorizontalWrapper>

                                        <HorizontalWrapper>
                                            <TextField
                                                width={'45%'}
                                                accessibilityLabelColor={colors.black}
                                                color={colors.black}
                                                borderColor={colors.gray}
                                                placeholderTextColor={colors.gray}
                                                borderRadius={18}
                                                onChangeText={(value: any) => {
                                                    setFieldValue('instagram_url', value);
                                                }}
                                                placeholder="Instagram URL"
                                                keyboardType={'default'}
                                                autoCapitalize={'none'}
                                                error={errors ? errors.instagram_url : null}
                                            />
                                            <TextField
                                                width={'45%'}
                                                accessibilityLabelColor={colors.black}
                                                color={colors.black}
                                                borderColor={colors.gray}
                                                placeholderTextColor={colors.gray}
                                                borderRadius={18}
                                                onChangeText={(value: any) => {
                                                    setFieldValue('linkedin_url', value);
                                                }}
                                                placeholder="Linked URL"
                                                keyboardType={'number'}
                                                autoCapitalize={'none'}
                                                error={errors ? errors.linkedin_url : null}
                                            />
                                        </HorizontalWrapper>
                                        <TextWrapper color={colors.black}>
                                            Link existing contact(s)
                                        </TextWrapper>
                                        <MultiSelect
                                            ref={existingContactRef}
                                            style={styles.dropdown}
                                            placeholderStyle={styles.placeholderStyle}
                                            selectedTextStyle={styles.selectedTextStyle}
                                            inputSearchStyle={styles.inputSearchStyle}
                                            iconStyle={styles.iconStyle}
                                            itemTextStyle={styles.itemTextStyle}
                                            search
                                            data={contactListData.success ? contactListData?.data : []}
                                            visibleSelectedItem
                                            labelField="post_title"
                                            valueField="ID"
                                            placeholder="Select Contacts"
                                            searchPlaceholder="Search..."
                                            value={city}
                                            onChange={async item => {
                                                setFieldValue('existing_contacts', item.toString())
                                                setCity(item);
                                                existingContactRef.current.close()
                                            }}
                                            selectedStyle={styles.selectedStyle}
                                        />

                                        {errors.existing_contacts !== null ? (
                                            <ErrorWrapper style={{ marginTop: 5 }}>
                                                <ErrorWrapper__Text>{errors.existing_contacts}</ErrorWrapper__Text>
                                            </ErrorWrapper>
                                        ) : null}
                                        <TextWrapper color={colors.black}>
                                            Photo
                                        </TextWrapper>

                                        <HorizontalWrapper1>
                                            {
                                                imageOSPath ?
                                                    <ImageView height={70} width={70} source={{ uri: imageOSPath ? imageOSPath : null }} />
                                                    : <ImageView height={70} width={70} source={profileIcon} />
                                            }
                                            <TouchableOpacity onPress={() => {
                                                ImagePicker.openPicker({
                                                    cropping: true,
                                                    compressImageQuality:
                                                        Platform.OS === 'android'
                                                            ? 1
                                                            : 0.8,
                                                    mediaType: 'photo',
                                                    forceJpg: true,
                                                }).then(async (image) => {
                                                    saveImage(image)
                                                });
                                            }}>
                                                <ButtonView>
                                                    <TextView fontSize={14} marginTop={0} marginLeft={0} color={colors.gray}>Replace</TextView>
                                                </ButtonView>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => {
                                                // setFieldValue('image', '')
                                                setImagePath(null)
                                            }}>
                                                <ButtonView>
                                                    <TextView fontSize={14} marginTop={0} marginLeft={0} color={colors.gray}>Remove</TextView>
                                                </ButtonView>
                                            </TouchableOpacity>
                                        </HorizontalWrapper1>
                                        {/* {imageOSPath === null && (
                                            <ErrorWrapper>
                                                <ErrorWrapper__Text>Image is required</ErrorWrapper__Text>
                                            </ErrorWrapper>
                                        )} */}
                                        <HorizontalBtnWrapper>
                                            <PrimaryButton
                                                onPress={() => { navigation.goBack() }}
                                                borderColor={colors.primary}
                                                width={120}
                                                heightBT={40}
                                                backgroundColor={colors.white}
                                                btnText={'Cancel'}
                                                loading={false}
                                                showIcon={false}
                                                color={colors.black}
                                            />

                                            <ButtonSecondary
                                                onPress={() => { handleSubmit() }}
                                                style={{ marginLeft: 16 }}
                                                btnText='Save'
                                                height={40}
                                                fontSize={15}
                                                showIcon={false}
                                                isIconLeft={false}>

                                            </ButtonSecondary>
                                        </HorizontalBtnWrapper>
                                    </FormikWrapper>)}
                            </Formik>

                        </ScrollView>
                    </MainWrapper>
            }
        </MainView>

    )
}

export default withTheme(AddContact)

type TextProps = {
    color?: string;
}

type ImageProps = {
    height: number;
    width: number;
}

type TextViewProps = {
    fontSize: number;
    marginLeft?: number;
    marginTop?: number;
    color?: number;
    textAlign?: string;
}

type ExtraViewProps = {
    marginTop?: number;
}

const ExtraView = styled.View<ExtraViewProps>`
    margin-top:${({ marginTop }: any) => marginTop}px;
`;

const ErrorWrapper = styled.View`
  padding-left: 2px;
`;
const ErrorWrapper__Text = styled.Text`
  color: red;
`;

const FormikWrapper = styled.View`
    width:100%;
`;

const HorizontalBtnWrapper = styled.View`
    flex-direction:row;
    justify-content:flex-end;
    margin-top:16px;
    `;

const TextView = styled.Text<TextViewProps>`
    font-size:${({ fontSize }: any) => fontSize}px;
    color:${({ color }: any) => color};
    margin-top:${({ marginTop }: any) => marginTop}px;
    margin-left:${({ marginLeft }: any) => marginLeft}px;
    text-align:${({ textAlign }: any) => textAlign}
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
    resize-mode:contain;
    border-radius:35px;
`;

const HorizontalWrapper1 = styled.View`
    flex-direction:row;
    margin-top:16px;
`;

const HorizontalWrapper = styled.View`
    flex-direction:row;
    width:100%;
    justify-content:space-between;
`;

const DropDownWrapper = styled.View`
    width:100%;
    flex-direction:row;
    border-width:1px;
    border-radius:16px;
    padding:0px 16px 0px 16px;
    margin-top:10px;
    border-color:${({ theme }: any) => theme.colors.gray};
`;

const TextWrapper = styled.Text<TextProps>`
    color:${({ color }: any) => color};
    margin-top:16px;
`;

const MainWrapper = styled.View`
    height:100%;
    width:100%;
    padding:0px 16px 16px 16px;
    background-color:${({ theme }: any) => theme.colors.white}
`;

const MainView = styled.KeyboardAvoidingView`
    flex:1;
`;

const styles = StyleSheet.create({
    selectedStyle: {
        borderRadius: 12,
    },
    itemTextStyle: {
        fontSize: 16,
        color: 'black'
    },
    iconStyle: {
        width: 20,
        height: 20,
        tintColor: 'black'
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
        color: 'black'
    },
    selectedTextStyle: {
        fontSize: 16,
        color: 'black'
    },
    placeholderStyle: {
        fontSize: 16,
        color: "black"
    },
    dropdown: {
        marginTop: 16,
        backgroundColor: 'white',
        borderRadius: 16,
        borderWidth: 1,
        paddingHorizontal: 16,
        borderColor: '#D9D8D8',
        width: "100%",
    },
})