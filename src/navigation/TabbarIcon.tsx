// @ts-ignore
import PropTypes from 'prop-types';
// @ts-ignore
import React from 'react';
import { Image } from 'react-native';
// @ts-ignore
import { ContactsIcon, MessageIcon, PropertiesIcon, SurfIconIcon, UsersIconIcon, chatTabIcon, phoneTabIcon } from '../assets';
import navigationStrings from '../navigation/navigationStrings';

const tabIcon = {
    [navigationStrings.TAB_BAR_PROPERTIES]: PropertiesIcon,
    [navigationStrings.TAB_BAR_CHAT]: chatTabIcon,
    [navigationStrings.TAB_BAR_CONTACTS]: ContactsIcon,
    [navigationStrings.TAB_BAR_MESSAGE]: MessageIcon,
    [navigationStrings.TAB_BAR_DASHBOARD]: SurfIconIcon,
    [navigationStrings.TAB_BAR_USERS]: UsersIconIcon,
    [navigationStrings.TAB_BAR_CALL]: phoneTabIcon,
};

type TabBarIconProps = {
    color: string;
    routeName: string;
};

export const TabBarIcon: React.FC<TabBarIconProps> = ({ color, routeName }) => {
    return (
        <Image
            accessibilityIgnoresInvertColors
            source={tabIcon[routeName]}
            style={{ tintColor: color }}
        />
    );
};

TabBarIcon.propTypes = {
    color: PropTypes.string.isRequired,
    routeName: PropTypes.string.isRequired,
};