import React, { useRef, useState } from "react";
import { styled, useTheme, withTheme } from "styled-components/native";
import { MainWrapperWhite } from "../../utils/globalStyles";
import { dropdownIcon, sendIcon, thumbsupIcon } from '../../utils/assets'
import { RichEditor, RichToolbar, actions } from 'react-native-pell-rich-editor'
import { Dropdown } from 'react-native-element-dropdown';
import ButtonSecondary from "../ButtonSecondary";
import { Formik } from 'formik';
import { SEND_SELECTED_PROPERTIES_SCHEMA } from "../../screens/public/Login/helpers";
import TextField from "../TextField";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Snackbar from "react-native-snackbar";

const SendSelectedPropertiesSheet = (props: any) => {
    const RichText = useRef(); //reference to the RichEditor component
    const { colors } = useTheme()
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const { sendSelected, closeModal } = useActions()
    const { sendSelectedloading } = useTypedSelector(
        state => state.sendSeletedData,
    )
    return (
        <MainWrapperWhite>
            <TopWrapper>
                <ImageView source={thumbsupIcon} />
                <TextView fontSize={18}>Send Selected Properties</TextView>
            </TopWrapper>
            <Formik
                validationSchema={SEND_SELECTED_PROPERTIES_SCHEMA}
                initialValues={{
                    client_emails: '',
                    subject: '',
                    message: ''
                }}
                onSubmit={async (values) => {
                    const formData = new FormData()
                    formData.append('client_emails', values.client_emails)
                    formData.append('subject', values.subject)
                    formData.append('message', values.message)
                    formData.append('type', '1')
                    formData.append('selected_properties', props.sendSelectedProps)
                    await sendSelected(formData)
                    closeModal()
                    Snackbar.show({
                        backgroundColor: colors.primary,
                        text: 'Properties send successfully!',
                        duration: Snackbar.LENGTH_SHORT,
                    })
                }}>
                {({ setFieldValue, handleSubmit, errors }) => (
                    <FormikWrapper>
                        <TextView fontSize={14}>Client Name</TextView>
                        <DropdownView>
                            <Dropdown
                                style={{ width: '100%' }}
                                data={props?.data}
                                iconStyle={{ tintColor: colors.black }}
                                search
                                maxHeight={300}
                                labelField="email"
                                valueField="email"
                                placeholder={!isFocus ? 'Select Client' : '...'}
                                searchPlaceholder="Search..."
                                value={value}
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                renderRightIcon={() => {
                                    return (
                                        <ImageView source={dropdownIcon} />
                                    )
                                }}
                                onChange={item => {
                                    // setValue(item.value);
                                    setFieldValue('client_emails', item?.email)
                                    setIsFocus(false);
                                }}

                            />
                        </DropdownView>

                        {errors !== null && (
                            <ErrorWrapper>
                                <ErrorWrapper__Text>{errors.client_emails}</ErrorWrapper__Text>
                            </ErrorWrapper>
                        )}

                        <TextField
                            accessibilityLabel={'Subject'}
                            accessibilityLabelColor={colors.black}
                            borderColor={colors.gray}
                            borderRadius={5}
                            color={colors.black}
                            onChangeText={(value: any) => {
                                setFieldValue('subject', value);
                            }}
                            placeholder="subject"
                            keyboardType={'default'}
                            autoCapitalize={'none'}
                            error={errors ? errors.subject : null}
                        />

                        <TextView fontSize={14}>Message</TextView>

                        <RichBox>
                            <RichToolbar
                                style={{ backgroundColor: 'white' }}
                                placeholder='Type here...'
                                editor={RichText}
                                actions={[
                                    actions.undo,
                                    actions.redo,
                                    actions.setBold,
                                    actions.setItalic,
                                    actions.setUnderline,
                                    actions.alignCenter,
                                    actions.alignFull,
                                    actions.alignLeft,
                                    actions.alignRight,
                                    actions.blockquote,
                                    actions.checkboxList,
                                    actions.insertLink]}
                            />
                            <RichEditor
                                ref={RichText}
                                containerStyle={{ height: 150 }}
                                style={{ height: 150 }}
                                onChange={descriptionText => {
                                    setFieldValue('message', descriptionText)
                                    console.log("descriptionText:", descriptionText);
                                }}
                            />
                        </RichBox>
                        {errors !== null && (
                            <ErrorWrapper>
                                <ErrorWrapper__Text>{errors.message}</ErrorWrapper__Text>
                            </ErrorWrapper>
                        )}

                        <BtnWrapper>
                            <ButtonSecondary
                                disable={sendSelectedloading ? true : false}
                                onPress={() => { handleSubmit() }}
                                btnText={sendSelectedloading ? '  Loading...  ' : '  Send  '}
                                fontSize={16}
                                isIconLeft={false}
                                icon={sendIcon}>

                            </ButtonSecondary>
                        </BtnWrapper>
                    </FormikWrapper>
                )}
            </Formik>


        </MainWrapperWhite>
    )
}

export default withTheme(SendSelectedPropertiesSheet)

type TextViewProps = {
    fontSize: number;
}


const ErrorWrapper = styled.View`
  margin-top: 3px;
  padding-left: 2px;
`;
const ErrorWrapper__Text = styled.Text`
  color: red;
`;

const BtnWrapper = styled.View`
    margin-top:16px;
`;

const RichBox = styled.View`
    border-radius:10px;
    border-width:1px;
    padding:10px;
    min-height:150px;
    margin-top:10px;
    border-color:${({ theme }: any) => theme.colors.gray}
`;
const DropdownView = styled.View`
    border-radius:8px;
    border-width:1px;
    margin-top:10px;
    padding:4px;
    justify-content:space-between;
    flex-direction:row;
    border-color:${({ theme }: any) => theme.colors.gray};
`;

const TextView = styled.Text<TextViewProps>`
    font-size:${({ fontSize }: any) => fontSize}px;
    color:${({ theme }: any) => theme.colors.black};
    margin-top:10px;
`;

const ImageView = styled.Image`
    height:30px;
    width:30px;
    resize-mode:contain;
`;

const FormikWrapper = styled.View`
    width:100%;
    margin-top:20px;
`;

const TopWrapper = styled.View`
    justify-content:center;
    align-items:center;
`;