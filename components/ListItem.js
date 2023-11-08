/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListItem = ({task, width, onDismiss, scrollViewRef}) => {
  const translateX = useSharedValue(0);
  const itemHeight = useSharedValue(70);
  const opacityContainer = useSharedValue(1);
  const marginVertical = useSharedValue(10);

  const TRANSLATE_X_THRESHOLD = -width * 0.4;

  const panGesture = useAnimatedGestureHandler({
    // onStart: (_, context) => {
    //   context.x = translateX.value;
    // },
    onActive: (event, context) => {
      console.log(event.translationX);
      // translateX.value = event.translationX + context.x;

      translateX.value = event.translationX;
    },
    onEnd: event => {
      // if (-translateX.value < width / 2.5) {
      //   translateX.value = withTiming(0);
      // }
      const shouldBeDismissed = translateX.value < TRANSLATE_X_THRESHOLD;
      if (shouldBeDismissed) {
        translateX.value = withTiming(-width);
        itemHeight.value = withTiming(0);
        marginVertical.value = withTiming(0);
        opacityContainer.value = withTiming(0, undefined, isFinished => {
          if (isFinished && onDismiss) {
            runOnJS(onDismiss)(task);
          }
        });
      } else {
        translateX.value = withTiming(0);
      }
    },
  });

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  });

  const iconStyle = useAnimatedStyle(() => {
    const opacity = withTiming(
      translateX.value < TRANSLATE_X_THRESHOLD ? 1 : 0,
    );
    return {
      opacity,
    };
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      height: itemHeight.value,
      marginVertical: marginVertical.value,
      opacity: opacityContainer.value,
    };
  });

  return (
    <GestureHandlerRootView>
      <Animated.View
        style={[{width: '100%', alignItems: 'center'}, containerStyle]}>
        <Animated.View
          style={[
            {
              height: 70,
              width: 70,
              position: 'absolute',
              right: '10%',
              alignItems: 'center',
              justifyContent: 'center',
            },
            iconStyle,
          ]}>
          <Icon name="trash" size={70 * 0.4} color="red" />
        </Animated.View>

        <PanGestureHandler
          simultaneousHandlers={scrollViewRef}
          onGestureEvent={panGesture}>
          <Animated.View
            style={[
              {
                width: '90%',
                height: 70,
                backgroundColor: 'white',
                justifyContent: 'center',
                paddingLeft: 20,
                borderRadius: 10,

                //shadow for ios
                shadowOpacity: 0.08,
                shadowOffset: {
                  width: 0,
                  height: 20,
                },
                shadowRadius: 10,
                //shadow for android
                elevation: 4,
              },
              reanimatedStyle,
            ]}>
            <Text style={{fontSize: 16}}>{task.title}</Text>
          </Animated.View>
        </PanGestureHandler>
      </Animated.View>
    </GestureHandlerRootView>
  );
};

export default ListItem;
