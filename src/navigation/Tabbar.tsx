// @ts-ignore
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
// @ts-ignore
import styled from 'styled-components/native';
import { Chat, Contacts, Dashboard, Properties } from '../navigation/index';
import navigationStrings from './navigationStrings';
import { TabBarIcon } from './TabbarIcon';
import { MenuIcon } from '../assets';
import surfLeads from '../screens/private/surfLeads';
import { CalenderWhiteIcon, NotificatioWhiteIcon } from '../utils/assets';
import SurfMailDrawer from './surfMailDrawer';
import surfCallTabs from './surfCallTabbar';
import { navigationRef } from './RootNavigation';

const Tab = createBottomTabNavigator();

function DashboardTabs(props: any) {
    const { colors, type }: any = useTheme();

    return (
        <Tab.Navigator
            initialRouteName="Dashboard"
            screenOptions={({ route }) => ({
                tabBarHideOnKeyboard: true,
                tabBarIcon: ({ color }) => (
                    <TabBarIcon color={color} routeName={route.name} />
                ),

                tabBarStyle: { backgroundColor: colors.primary, },
                tabBarActiveTintColor: colors.white,
                tabBarInactiveTintColor: colors.black,
                headerTintColor: colors.white,
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerLeft: () => (
                    <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
                        <NavigationBurgerIcon
                            source={type === 'dark' ? MenuIcon : MenuIcon}
                        />
                    </TouchableOpacity>
                ),
                headerRight: () => (
                    <IconWrapper>
                        <TouchableOpacity onPress={() => { navigationRef.current.navigate(navigationStrings.NOTIFICATION) }}>
                            <HeaderIcon
                                source={NotificatioWhiteIcon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigationRef.current.navigate(navigationStrings.CALENDER_SCREEN) }}>
                            <HeaderIcon
                                source={CalenderWhiteIcon}
                            />
                        </TouchableOpacity>
                    </IconWrapper>
                ),
            })}>
            <Tab.Screen name={navigationStrings.TAB_BAR_PROPERTIES} component={Properties} options={{
                tabBarLabel: () => { return null }
            }} />

            <Tab.Screen name={navigationStrings.TAB_BAR_USERS} component={surfLeads} options={{
                tabBarLabel: () => { return null }
            }} />

            <Tab.Screen
                name={navigationStrings.TAB_BAR_CONTACTS}
                component={Contacts}
                options={{
                    tabBarLabel: () => { return null }
                }}
            />
            <Tab.Screen name={navigationStrings.TAB_BAR_DASHBOARD} component={Dashboard} options={{
                tabBarHideOnKeyboard: true,

                tabBarLabel: () => { return null }
            }} />

            <Tab.Screen name={navigationStrings.TAB_BAR_MESSAGE} component={SurfMailDrawer} options={{
                tabBarHideOnKeyboard: true,

                tabBarLabel: () => { return null }
            }} />
            <Tab.Screen name={navigationStrings.TAB_BAR_CALL} component={surfCallTabs} options={{
                tabBarLabel: () => { return null }
            }} />
            <Tab.Screen name={navigationStrings.TAB_BAR_CHAT} component={Chat} options={{
                tabBarLabel: () => { return null }
            }} />
        </Tab.Navigator>
    );
}

export default DashboardTabs;

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