/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
// eslint-disable-next-line prettier/prettier
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withRepeat,
  useAnimatedGestureHandler,
  useDerivedValue,
  useAnimatedScrollHandler,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Page = ({index, title, translateX}) => {
  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [0, 1, 0],
      Extrapolate.CLAMP,
    );

    const borderRadius = interpolate(
      translateX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [0, (width * 0.7) / 2, 0],
      Extrapolate.CLAMP,
    );

    return {
      borderRadius: borderRadius,
      transform: [{scale}],
    };
  });

  const textStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      translateX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [height / 2, 0, -height / 2],
      Extrapolate.CLAMP,
    );

    const scale = interpolate(
      translateX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [0, 1, 0],
      Extrapolate.CLAMP,
    );

    const opacity = interpolate(
      translateX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [-1, 1, -1],
      Extrapolate.CLAMP,
    );

    return {
      opacity: opacity,
      transform: [{translateY: translateY}],
    };
  });

  return (
    <View
      style={{
        width: width,
        height: height,
        backgroundColor: `rgba(0,0,256, 0.${index + 2})`,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      key={index.toString()}>
      <Animated.View
        style={[
          {
            width: width * 0.7,
            height: width * 0.7,
            backgroundColor: 'rgba(0,0,256,0.4)',
          },
          animatedStyle,
        ]}></Animated.View>

      <Animated.Text
        numberOfLines={1}
        style={[
          {
            position: 'absolute',
            fontSize: 60,
            color: 'white',
            textTransform: 'uppercase',
            fontWeight: '700',
          },
          textStyle,
        ]}>
        {title}
      </Animated.Text>
    </View>
  );
};

export default Page;
