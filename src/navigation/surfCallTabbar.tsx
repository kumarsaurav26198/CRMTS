// @ts-ignore
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
// @ts-ignore
import styled from 'styled-components/native';
import { surfContacts, surfKeypad, surfRecents, surfVoicecall } from '../navigation/index';
import navigationStrings from './navigationStrings';
import { SurfTabBarIcon } from './surfPhoneTabbarIcon'

const Tab = createBottomTabNavigator();

function surfCallTabs(props: any) {
    const { colors, type }: any = useTheme();

    return (
        <Tab.Navigator
            initialRouteName={navigationStrings.KEYPAD}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => (
                    <SurfTabBarIcon color={color} routeName={route.name} />
                ),
                tabBarStyle: {
                    backgroundColor: '#F5F5F5',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.black,
                headerShown: false,
                headerTintColor: colors.white,
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: colors.primary,
                },

            })}>
            <Tab.Screen name={navigationStrings.KEYPAD} component={surfKeypad} options={{
                tabBarLabel: navigationStrings.KEYPAD
            }} />

            <Tab.Screen name={navigationStrings.RECENTS} component={surfRecents} options={{
                tabBarLabel: navigationStrings.RECENTS
            }} />


            <Tab.Screen name={navigationStrings.SURF_CONTACTS} component={surfContacts} options={{
                tabBarLabel: navigationStrings.SURF_CONTACTS
            }} />


            <Tab.Screen name={navigationStrings.VOICEMAIL} component={surfVoicecall} options={{
                tabBarLabel: navigationStrings.VOICEMAIL, tabBarBadge: 5, tabBarBadgeStyle: { backgroundColor: colors.green }
            }} />

        </Tab.Navigator>
    );
}

export default surfCallTabs;

const HeaderIcon = styled.Image`
    margin-right:16px;
    height:22px;
    width:22px;
`;

const IconWrapper = styled.View`
    flex-direction:row;
`;

const NavigationBurgerIcon = styled.Image`
  margin-left: 16px;
`;