import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  cancelAnimation,
  Easing,
} from 'react-native-reanimated';
import { styled } from 'styled-components/native';
const Loader = () => {
  const rotation = useSharedValue(0);
  const rotation1 = useSharedValue(0);
  const rotation3 = useSharedValue(0);

  useEffect(() => {
    startRotationAnimation(rotation, 2000);
    startRotationAnimation(rotation1, 1500);
    startRotationAnimation(rotation3, 1000);

    return () => {
      cancelAnimation(rotation);
      cancelAnimation(rotation1);
      cancelAnimation(rotation3);
    };
  }, []);

  const startRotationAnimation = (animatedValue, duration) => {
    animatedValue.value = withRepeat(
      withTiming(360, {
        duration: duration,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      -1
    );
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${rotation.value}deg`,
        },
      ],
    };
  });

  const animatedStyles1 = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${rotation1.value}deg`,
        },
      ],
    };
  });

  const animatedStyles3 = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${rotation3.value}deg`,
        },
      ],
    };
  });

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: "100%" }}>
      <View style={styles.container}>
        <Animated.View style={[styles.spinner, animatedStyles,]} />
        <Animated.View style={[styles.spinner2, animatedStyles1]} />
        <Animated.View style={[styles.spinner3, animatedStyles3]} />
        <View style={{ borderLeftColor: 'red', height: 100, width: 100 }}></View>
      </View>
    </View>
  );
};

export default Loader;


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: "100%",
    backgroundColor: 'transparent'
  },
  spinner: {
    height: 80,
    width: 80,
    borderRadius: 100,
    borderWidth: 2,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: '#244aaf',
    position: 'absolute',
  },
  spinner2: {
    height: 70,
    width: 70,
    borderRadius: 100,
    borderWidth: 2,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: '#b07d8c',
    position: 'absolute',

  },
  spinner3: {
    height: 60,
    width: 60,
    borderRadius: 100,
    borderWidth: 2,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: '#0dc3f8',
    position: 'absolute',
  },
});