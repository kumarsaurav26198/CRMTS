import React, { useEffect } from "react";
import { Platform, View } from 'react-native'
import { styled, withTheme } from "styled-components/native";
import ContactSurfUI from "../../../components/ContactSurfUI";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { LoaderView } from "../../../utils/globalStyles";
import Activity from "../../../components/Activity";
import { useIsFocused } from '@react-navigation/native';

const Contacts = () => {
    const { getContacts } = useActions()
    const isFocused = useIsFocused();
    const { contactListData, contactsloading } = useTypedSelector(state => state.contactListData)
    useEffect(() => {
        if (isFocused) {
            getContacts()
        }
    }, [isFocused])
    return (
        <MainView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            {
                contactsloading ? <LoaderView>
                    <Activity />
                </LoaderView > :
                    <MainWrapper>
                        <ContactSurfUI data={contactListData.data} sreenName='Contacts' ></ContactSurfUI>
                    </MainWrapper >
            }
        </MainView>
    )
}

export default withTheme(Contacts)

const MainWrapper = styled.View``;

const MainView = styled.KeyboardAvoidingView`
    flex:1;
`;