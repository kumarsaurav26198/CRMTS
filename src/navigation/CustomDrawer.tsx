// @ts-ignore
import React, { useEffect, useState } from 'react';
// @ts-ignore
import styled from 'styled-components/native';
import { useNavigation, useTheme } from '@react-navigation/native';
import { FlatList, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { withTheme } from 'styled-components';
import navigationStrings from './navigationStrings';
import { clearAll } from "../storage";
import { persistor } from "../store";
import { useActions } from "../hooks/useActions";
import axios from "axios";
import { profileIcon, settingIcon } from '../assets';
import { sideMenuOptions } from '../utils/constants'
import { useTypedSelector } from '../hooks/useTypedSelector';

function CustomDrawer(props: any) {
  const { setAuthentication, setSAuthentication, logout } = useActions();
  const { colors }: any = useTheme();
  const navigation = useNavigation()
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLast_Name] = useState('')
  const [userImage, setUserImage] = useState('')
  const { loading, error, isAuthenticated, u_image, u_first_name, u_last_name } = useTypedSelector(
    state => state.auth,
  );
  const { logoutloading } = useTypedSelector(
    state => state.logout,
  );
  const { s_loading, s_isAuthenticated, image, first_name, last_name } = useTypedSelector(
    state => state.socialLogin,
  );
  const logoutAction = async () => {
    await logout()
    props.navigation.closeDrawer()

    await clearAll();
    await persistor.flush();
    await persistor.purge();
    setAuthentication(false);
    setSAuthentication(false)
    delete axios.defaults.headers.common["security_key"];
    delete axios.defaults.headers.common["access_token"];
    props.navigation.reset({
      index: 0,
      routes: [{ name: navigationStrings.LOGIN }],
    });
  };

  useEffect(() => {
    setFirstName(isAuthenticated ? u_first_name : first_name)
    setLast_Name(isAuthenticated ? u_last_name : last_name)
    setUserImage(isAuthenticated ? u_image : image)
  })

  // @ts-ignore
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }}>
      <ScrollView>
        <DrawerWrapper backgroundColor={colors.primary}>
          <MainWrapper>

            <HorizontalWrapper>
              <ItemWrapper backgroundColor={colors.primary}>
                <ImageView style={{ borderRadius: 14 }} source={userImage ? { uri: userImage } : profileIcon}></ImageView>
                <UserName color={colors.white}>{firstName + " " + lastName}</UserName>
              </ItemWrapper>
              <TouchableOpacity onPress={() => {
                navigation.navigate(navigationStrings.SETTING)
              }}>
                <ImageView source={settingIcon}></ImageView>
              </TouchableOpacity>
            </HorizontalWrapper>
            <FlatList
              data={sideMenuOptions}
              ItemSeparatorComponent={<Divider backgroundColor={colors.white}></Divider>}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity onPress={() => {
                    setSelectedIndex(index)
                    item.value === 1 ? navigation.navigate(navigationStrings.TAB_BAR_DASHBOARD) :
                      item.value === 2 ? navigation.navigate(navigationStrings.TAB_BAR_CONTACTS) :
                        item.value === 3 ? navigation.navigate(navigationStrings.TAB_BAR_USERS) :
                          item.value === 4 ? navigation.navigate(navigationStrings.SELF_SOURCED_LEADS) :
                            item.value === 5 ? navigation.navigate(navigationStrings.TRANSACTION_DESK) :
                              item.value === 6 ? navigation.navigate(navigationStrings.DOCUMENT_PORTAL) :
                                item.value === 7 ? navigation.navigate(navigationStrings.TAB_BAR_PROPERTIES) :
                                  item.value === 8 ? navigation.navigate(navigationStrings.CALL_CENTER) :
                                    item.value === 9 ? navigation.navigate(navigationStrings.AGENTS) :
                                      item.value === 10 ? navigation.navigate(navigationStrings.RETALORS) :
                                        item.value === 11 ? navigation.navigate(navigationStrings.MARKETING) :
                                          item.value ? logoutAction() : null

                  }}>
                    <ItemWrapper backgroundColor={selectedIndex + 1 === item.value ? colors.primary : colors.primary}>
                      <ImageView tintColor={selectedIndex + 1 === item.value ? colors.white : colors.white} source={item.image}></ImageView>
                      <UserName color={selectedIndex + 1 === item.value ? colors.white : colors.white}>{item.label}</UserName>
                    </ItemWrapper>
                  </TouchableOpacity>
                )
              }}>

            </FlatList>
          </MainWrapper>
        </DrawerWrapper>
      </ScrollView >
    </SafeAreaView >
  );
}

export default withTheme(CustomDrawer);

type DrawerWrapperProps = {
  backgroundColor: string;
};

type ItemWrapperProps = {
  backgroundColor: string;
}

type UserNameProps = {
  color: string;
}

const UserName = styled.Text<UserNameProps>`
  color:${({ color }: any) => color};
  font-size:18px;
`;

const ImageView = styled.Image`
  margin: 10px;
  height:28px;
  width:28px;
  resize-mode:contain;
`;

const HorizontalWrapper = styled.View`
  flex-direction:row;
  justify-content:space-between;
`;

const ItemWrapper = styled.View<ItemWrapperProps>`
  flex-direction:row;
  justify-content:flex-start;
  align-items:center;
  background-color: ${({ backgroundColor }: any) => backgroundColor};
`;

const Divider = styled.View<DrawerWrapperProps>`
  height: 1px;
  margin-left:10px;
  margin-right:10px;
  background-color: ${({ backgroundColor }: any) => backgroundColor};
`;

const MainWrapper = styled.View`
  flex: 1;
`;

const DrawerWrapper = styled.View<DrawerWrapperProps>`
  background-color: ${({ backgroundColor }: any) => backgroundColor};
  margin-top: 20px;
  justify-content: space-between;
`;