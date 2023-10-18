// @ts-ignore
import PropTypes from 'prop-types';
// @ts-ignore
import React from 'react';
import { Image } from 'react-native';
// @ts-ignore
import {
    ContactsIcon,
    keypadIcon,
    recentsIcon,
    voicemailIcon,
} from '../assets';
import navigationStrings from '../navigation/navigationStrings';

const tabIcon = {
    [navigationStrings.KEYPAD]: keypadIcon,
    [navigationStrings.RECENTS]: recentsIcon,
    [navigationStrings.SURF_CONTACTS]: ContactsIcon,
    [navigationStrings.VOICEMAIL]: voicemailIcon,
};

type SurfTabBarIconProps = {
    color: string;
    routeName: string;
};

export const SurfTabBarIcon: React.FC<SurfTabBarIconProps> = ({ color, routeName }) => {
    return (
        <Image
            accessibilityIgnoresInvertColors
            source={tabIcon[routeName]}
            style={{ tintColor: color }}
        />
    );
};

SurfTabBarIcon.propTypes = {
    color: PropTypes.string.isRequired,
    routeName: PropTypes.string.isRequired,
};