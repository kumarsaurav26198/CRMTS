// @ts-ignore
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import surfMailStackNavigator from './SurfMailStackNavigator';
import navigationStrings from './navigationStrings';
import SurfMailCustomDrawer from './surfMailCustomDrawer';

const Drawer = createDrawerNavigator();

function SurfMailDrawer() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <SurfMailCustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerActiveTintColor: 'white',
                drawerActiveBackgroundColor: 'transparent',
            }}>
            <Drawer.Screen name={navigationStrings.TAB_BAR_MESSAGE} component={surfMailStackNavigator} />
        </Drawer.Navigator>
    );
}

export default SurfMailDrawer;