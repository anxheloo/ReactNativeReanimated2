/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';

const Page2 = ({index, title, width, translateX}) => {
  const pageOffset = width * index;

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value + pageOffset}],
    };
  });

  return (
    <Animated.View
      style={[
        {
          ...StyleSheet.absoluteFillObject,
          flex: 1,
          backgroundColor: `rgba(0,0,256,0.${index + 2})`,
        },
        reanimatedStyle,
      ]}>
      <Text>{title}</Text>
    </Animated.View>
    // key={index.toString()}
  );
};

export default Page2;
