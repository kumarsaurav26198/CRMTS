// @ts-ignore
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// @ts-ignore
import { navigationRef } from './RootNavigation';
// @ts-ignore
import MainDrawer from '../navigation/Drawer';
import { StatusBar } from 'react-native';

type RouteProps = {
    scheme: any;
};

const Routes: React.FC<RouteProps> = ({ scheme }) => {
    return (
        <NavigationContainer ref={navigationRef} theme={scheme}  >
            <StatusBar backgroundColor='#496D8C' barStyle={'light-content'}></StatusBar>
            <MainDrawer />
        </NavigationContainer>
    );
};
export default Routes;