import React from 'react';
import {
    View,
    Image,
    Animated,
    Easing,
    Text,
} from 'react-native';

// Utils
import calculateDegreeFromLabels from '../utils/calculate-degree-from-labels';
import calculateLabelFromValue from '../utils/calculate-label-from-value';
import limitValue from '../utils/limit-value';
import validateSize from '../utils/validate-size';
// Style
import style, { width as deviceWidth } from '../utils/index';
import LinearGradient from 'react-native-linear-gradient';


type Props = {
    value?: any,
    defaultValue?: any,
    size?: any,
    minValue?: any,
    maxValue?: any,
    easeDuration?: any,
    allowedDecimals?: any,
    labels?: [],
    needleImage?: any,
    wrapperStyle?: any,
    outerCircleStyle?: any,
    halfCircleStyle?: any,
    imageWrapperStyle?: any,
    imageStyle?: any,
    innerCircleStyle?: any,
    labelWrapperStyle?: any,
    labelStyle?: any,
    labelNoteStyle?: any,
    useNativeDriver?: any,
    marginTopLebel?: any,
    labelFontSize?: any,
    backgroundColor?: any
}

const Speedmeter = ({
    value,
    defaultValue,
    size,
    minValue,
    maxValue,
    easeDuration,
    allowedDecimals,
    labels,
    needleImage,
    wrapperStyle,
    outerCircleStyle,
    halfCircleStyle,
    imageWrapperStyle,
    imageStyle,
    innerCircleStyle,
    labelWrapperStyle,
    labelStyle,
    labelNoteStyle,
    useNativeDriver,
    marginTopLebel = -70,
    labelFontSize = 25,
    backgroundColor = '#EFEFEF'
}: Props) => {
    const degree = 180;
    const perLevelDegree = calculateDegreeFromLabels(degree, labels);
    const label = calculateLabelFromValue(
        limitValue(value, minValue, maxValue, allowedDecimals), labels, minValue, maxValue,
    );
    let speedometerValue = new Animated.Value(defaultValue)
    Animated.timing(
        speedometerValue,
        {
            toValue: limitValue(value, minValue, maxValue, allowedDecimals),
            duration: easeDuration,
            easing: Easing.linear,
            useNativeDriver: true,
        },
    ).start();

    const rotate = speedometerValue.interpolate({
        inputRange: [minValue, maxValue],
        outputRange: ['-90deg', '90deg'],
    });

    const currentSize = validateSize(size, deviceWidth - 20);
    return (
        <View style={[style.wrapper, {
            width: currentSize,
            height: currentSize / 2,
            marginTop: 15,
        }, wrapperStyle]}
        >
            <LinearGradient
                colors={['#4c669f', '#3b5998']}
                style={[style.outerCircle, {
                    width: currentSize,
                    height: currentSize / 2,
                    borderTopLeftRadius: currentSize / 2,
                    borderTopRightRadius: currentSize / 2,
                    backgroundColor: '#000',
                }, outerCircleStyle]}
            >
                {labels && labels.map((level, index) => {
                    const circleDegree = 90 + (index * perLevelDegree);
                    return (

                        <View
                            key={level?.name}
                            style={[style.halfCircle, {
                                // backgroundColor: level.activeBarColor,
                                width: currentSize / 2,
                                height: 10,
                                borderRadius: currentSize / 2,
                                transform: [
                                    { translateX: currentSize / 4 },
                                    { rotate: `${circleDegree}deg` },
                                    { translateX: (currentSize / 4 * -1) },
                                ],
                            }, halfCircleStyle]}
                        />

                    );
                })}

                <Animated.View style={[style.imageWrapper,
                {
                    top: -(currentSize / 15),
                    transform: [{ rotate }],
                },
                    imageWrapperStyle]}
                >
                    <Image
                        style={[style.image,
                        {
                            width: currentSize,
                            height: currentSize,
                        }, imageStyle]}
                        source={needleImage}
                    />
                </Animated.View>
                <View style={[style.innerCircle, {
                    width: currentSize * 0.9,
                    height: (currentSize / 2) * 0.88,
                    borderTopLeftRadius: currentSize / 2,
                    borderTopRightRadius: currentSize / 2,
                    backgroundColor: backgroundColor
                }, innerCircleStyle]}
                />
                {/* </View> */}
            </LinearGradient>

            <View style={[style.labelWrapper, labelWrapperStyle, { marginTop: marginTopLebel }]}>
                <Text style={
                    [style.label, labelStyle, { fontSize: labelFontSize }]}
                >
                    {limitValue(value, minValue, maxValue, allowedDecimals)}
                </Text>

            </View>
        </View>
    );
}

export default Speedmeter;