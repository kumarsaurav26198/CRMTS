// @ts-ignore
import React from 'react';
// @ts-ignore
import { createStackNavigator } from '@react-navigation/stack';
import navigationStrings from '../navigation/navigationStrings';
import { useTheme } from '@react-navigation/native';
import { useTypedSelector } from "../hooks/useTypedSelector";
import { surfMails } from '.';
import { styled } from 'styled-components/native';
import SurfMailDrawer from './surfMailDrawer';
const Stack = createStackNavigator();

function surfMailStackNavigator(props: any) {
    const { isAuthenticated } = useTypedSelector((state) => state.auth);

    // @ts-ignore
    return (
        <Stack.Navigator initialRouteName={navigationStrings.LOGIN} >
            <Stack.Screen
                name={navigationStrings.TAB_BAR_MESSAGE}
                component={surfMails}
                options={{
                    headerShown: false,
                    animationTypeForReplace: isAuthenticated ? 'push' : 'pop',
                }}
            />
        </Stack.Navigator>
    )
}
export default surfMailStackNavigator;

const ImageView = styled.Image`
    height:30px;
    width:30px;
    resize-mode:contain;
    margin-right:16px;
`;
