/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, useRef, useCallback} from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  Dimensions,
  View,
  ScrollView,
  Switch,
  Touchable,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
  Animated,
} from 'react-native';
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   withTiming,
//   withSpring,
//   withRepeat,
//   useAnimatedGestureHandler,
//   useDerivedValue,
//   useAnimatedScrollHandler,
//   interpolate,
//   interpolateColor,
//   withDecay,
//   withDelay,
// } from 'react-native-reanimated';
import {
  PanGestureHandler,
  GestureHandlerRootView,
  PinchGestureHandler,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Page from './components/Page';
import Page2 from './components/Page2';

import Svg, {Circle} from 'react-native-svg';
import ListItem from './components/ListItem';
import BottomSheet from './components/BottomSheet';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

/*  
  1.BASICS OF REACT NATIVE REANIMATED 2
*/
// function App() {
//   const SIZE = 100.0;
//   const progress = useSharedValue(1);
//   const scale = useSharedValue(2);

//   const reanimatedStyle = useAnimatedStyle(() => {
//     return {
//       opacity: progress.value,
//       borderRadius: (progress.value * SIZE) / 2,
//       transform: [
//         {scale: scale.value},
//         {rotate: `${progress.value * 2 * Math.PI}rad`},
//       ],
//     };
//   }, []);

//   useEffect(() => {
//     progress.value = withRepeat(withSpring(0.5, {duration: 1000}), 3, true);
//     // scale.value = withSpring(1);
//     scale.value = withRepeat(withSpring(1), 3, true);
//   });

//   return (
//     <SafeAreaView
//       style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Ca bone</Text>
//       <Animated.View
//         style={[
//           {
//             height: SIZE,
//             width: SIZE,
//             backgroundColor: 'blue',
//           },
//           reanimatedStyle,
//         ]}
//       />
//     </SafeAreaView>
//   );
// }

/*  
  2.BASICS OF PenGestureHandler with Reanimated 2 from React-Native-Gesture-Handler
*/
// function App() {
//   const SIZE = 100.0;
//   const CIRCLE_RADIUS = SIZE * 2;
//   const translateX = useSharedValue(0);
//   const translateY = useSharedValue(0);

//   const panGestureEvent = useAnimatedGestureHandler({
//     onStart: (event, context) => {
//       context.translateX = translateX.value;
//       context.translateY = translateY.value;
//     },
//     onActive: (event, context) => {
//       translateX.value = event.translationX + context.translateX;
//       translateY.value = event.translationY + context.translateY;
//       console.log(event.translationX);
//     },
//     onEnd: event => {
//       const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2);

//       if (distance < CIRCLE_RADIUS + SIZE / 2) {
//         translateX.value = withSpring(0);
//         translateY.value = withSpring(0);
//       }
//     },
//   });

//   const reanimatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [
//         {translateX: translateX.value},
//         {translateY: translateY.value},
//         // {translateX: withSpring(lastPositionX.value)},
//         // {translateY: withSpring(lastPositionY.value)},
//       ],
//     };
//   });

//   return (
//     <GestureHandlerRootView style={{flex: 1}}>
//       <SafeAreaView
//         style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//         <View
//           style={{
//             width: CIRCLE_RADIUS * 2,
//             height: CIRCLE_RADIUS * 2,
//             borderRadius: CIRCLE_RADIUS,
//             borderWidth: 3,
//             borderColor: 'blue',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}>
//           <PanGestureHandler onGestureEvent={panGestureEvent}>
//             <Animated.View
//               style={[
//                 {
//                   width: SIZE,
//                   height: SIZE,
//                   backgroundColor: 'rgba(0,0,256,0.5)',
//                   borderRadius: 20,
//                 },
//                 reanimatedStyle,
//               ]}></Animated.View>
//           </PanGestureHandler>
//         </View>
//       </SafeAreaView>
//     </GestureHandlerRootView>
//   );
// }

/*
  3.Interpolate wit ScrollView like a pro(React Native Reanimated 2 )
*/

// function App() {
//   const WORDS = [
//     {title: 'Whats up mobile devs', color: 'blue'},
//     {title: 'mobile', color: 'red'},
//     {title: 'devs?', color: 'yellow'},
//   ];

//   const translateX = useSharedValue(0);

//   const scrollHandler = useAnimatedScrollHandler(event => {
//     translateX.value = event.contentOffset.x;
//     console.log(event.contentOffset.x);
//   });

//   return (
//     <Animated.ScrollView
//       pagingEnabled={true}
//       horizontal
//       onScroll={scrollHandler}
//       onScrollEventThrottle={16}
//       contentContainerStyle={{alignItems: 'center'}}>
//       {WORDS.map((item, index) => {
//         return (
//           <Page index={index} title={item.title} translateX={translateX}></Page>
//         );
//       })}
//     </Animated.ScrollView>
//   );
// }

/*
4.THEME Color Switch with React Native Reanimated 2
*/
// function App() {
//   const Colors = {
//     dark: {
//       backgroud: '#1E1E1E',
//       circle: '#252525',
//       text: '#F8F8F8',
//     },
//     light: {
//       backgroud: '#F8F8F8',
//       circle: '#FFF',
//       text: '#1E1E1E',
//     },
//   };

//   const SWITCH_TRACK_COLOR = {
//     true: 'rgba(256,0,256,0.2)',
//     false: 'rgba(0,0,0,0.1)',
//   };

//   const [theme, setTheme] = useState('light');
//   // const progress = useSharedValue(0);

//   const progress = useDerivedValue(() => {
//     return theme === 'dark' ? withTiming(1) : withTiming(0);
//   }, [theme]);

//   const animatedStyle = useAnimatedStyle(() => {
//     const backgroundColor = interpolateColor(
//       progress.value,
//       [0, 1],
//       [Colors.light.backgroud, Colors.dark.backgroud],
//     );
//     return {backgroundColor: backgroundColor};
//   });

//   const circleStyle = useAnimatedStyle(() => {
//     const backgroundColor = interpolateColor(
//       progress.value,
//       [0, 1],
//       [Colors.light.circle, Colors.dark.circle],
//     );
//     return {backgroundColor: backgroundColor};
//   });

//   const textStyle = useAnimatedStyle(() => {
//     const color = interpolateColor(
//       progress.value,
//       [0, 1],
//       [Colors.light.text, Colors.dark.text],
//     );
//     return {color: color};
//   });

//   return (
//     <Animated.View
//       style={[
//         {flex: 1, alignItems: 'center', justifyContent: 'center'},
//         animatedStyle,
//       ]}>
//       <Animated.Text
//         style={[
//           {
//             fontSize: 70,
//             fontWeight: 'bold',
//             textTransform: 'uppercase',
//             letterSpacing: 14,
//             marginBottom: 35,
//           },
//           textStyle,
//         ]}>
//         Theme
//       </Animated.Text>

//       <Animated.View
//         style={[
//           {
//             width: width * 0.7,
//             height: width * 0.7,
//             backgroundColor: 'white',
//             alignItems: 'center',
//             justifyContent: 'center',
//             borderRadius: width / 2,
//             shadowOffset: {
//               width: 0,
//               height: 20,
//             },
//             elevation: 8,
//             shadowRadius: 10,
//             shadowOpacity: 0.1,
//           },
//           circleStyle,
//         ]}>
//         <Switch
//           value={theme === 'dark'}
//           onValueChange={toggled => {
//             setTheme(toggled ? 'dark' : 'light');
//           }}
//           trackColor={SWITCH_TRACK_COLOR}
//           thumbColor={'red'}></Switch>
//       </Animated.View>
//     </Animated.View>
//   );
// }

/*
5. ZOOM IN AND ZOOM BACK- The basics of PinchGestureHandler with ReactNative Reanimated 2
*/
// function App() {
//   const scale = useSharedValue(1);
//   const focalX = useSharedValue(0);
//   const focalY = useSharedValue(0);

//   const pinchHandler = useAnimatedGestureHandler({
//     onActive: event => {
//       console.log(event);
//       scale.value = event.scale;
//       focalX.value = event.focalX;
//       focalY.value = event.focalY;
//     },

//     onEnd: event => {
//       scale.value = withTiming(1);
//     },
//   });

//   const imageStyle = useAnimatedStyle(() => {
//     return {
//       transform: [
//         {translateX: focalX.value},
//         {translateY: focalY.value},
//         {translateX: -width / 2},
//         {translateY: -height / 2},
//         {scale: scale.value},
//         {translateX: -focalX.value},
//         {translateY: -focalY.value},
//         {translateX: width / 2},
//         {translateY: height / 2},
//       ],
//     };
//   });

//   return (
//     <GestureHandlerRootView style={{flex: 1}}>
//       <PinchGestureHandler onGestureEvent={pinchHandler}>
//         <Animated.Image
//           style={[{height: '100%', width: '100%'}, imageStyle]}
//           source={require('./assets/myphoto.jpg')}
//           resizeMode="cover"></Animated.Image>
//       </PinchGestureHandler>
//     </GestureHandlerRootView>
//   );
// }

/*
6.  Animate on DoubleTap like Instagram (React Native Reanimated 2)
*/

// function App() {
//   const scale = useSharedValue(0);

//   const doubleTapRef = useRef();

//   const reanimatedStyle = useAnimatedStyle(() => ({
//     transform: [{scale: Math.max(scale.value, 0)}],
//   }));

//   const onDoubleTap = () => {
//     scale.value = withSpring(1, undefined, isFinished => {
//       if (isFinished) {
//         scale.value = withDelay(500, withSpring(0));
//       }
//     });
//   };

//   // useEffect(() => {
//   //   if (scale.value === 1) {
//   //     setTimeout((scale.value = withSpring(0)), 1000);
//   //   }
//   // }, [scale]);

//   return (
//     <GestureHandlerRootView
//       style={{
//         flex: 1,
//         backgroundColor: 'pink',
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}>
//       <TapGestureHandler
//         waitFor={doubleTapRef}
//         onActivated={() => {
//           console.log('single tap');
//         }}>
//         <TapGestureHandler
//           ref={doubleTapRef}
//           maxDelayMs={250}
//           numberOfTaps={2}
//           onActivated={onDoubleTap}>
//           <Animated.Image
//             source={require('./assets/like.png')}
//             style={[
//               {
//                 resizeMode: 'center',
//                 shadowColor: 'gray',
//                 shadowOpacity: 0.01,
//                 shadowRadius: 2,
//                 shadowOffset: {width: 1, height: 5},
//                 // elevation: 3,
//               },
//               reanimatedStyle,
//             ]}
//           />
//         </TapGestureHandler>
//       </TapGestureHandler>
//     </GestureHandlerRootView>
//   );
// }

/*
7. ScrollView from scratch with PanGestureHandler in React Native (Reanimated 2)
*/

// const titles = ['Whats', 'up', 'mobile', 'devs?'];
// function App() {
//   const translateX = useSharedValue(0);

//   const clampedTranslateX = useDerivedValue(() => {
//     console.log(translateX.value);

//     const MAX_TRANSLATE_X = -width * (titles.length - 1);

//     return Math.max(Math.min(translateX.value, 0), MAX_TRANSLATE_X);
//   });

//   const panGestureEvent = useAnimatedGestureHandler({
//     onStart: (_, context) => {
//       // context.x = translateX.value;
//       context.x = clampedTranslateX.value;
//     },
//     onActive: (event, context) => {
//       console.log(event.translationX);
//       translateX.value = event.translationX + context.x;
//     },
//     onEnd: event => {
//       translateX.value = withDecay({velocity: event.velocityX});
//     },
//   });

//   return (
//     <GestureHandlerRootView style={{flex: 1}}>
//       <View style={{flex: 1}}>
//         <PanGestureHandler onGestureEvent={panGestureEvent}>
//           <Animated.View style={[{flex: 1, flexDirection: 'row'}]}>
//             {titles.map((title, index) => {
//               return (
//                 <Page2
//                   key={index.toString()}
//                   index={index}
//                   title={title}
//                   translateX={clampedTranslateX}
//                   width={width}></Page2>
//               );
//             })}
//           </Animated.View>
//         </PanGestureHandler>
//       </View>
//     </GestureHandlerRootView>
//   );
// }

/*
8.1. Progress Bar Animation in React Native using Animated API and onLayout
*/

// const Progress = ({steps, step, height}) => {
//   const animatedValue = useRef(new Animated.Value(-1000)).current;
//   const reactive = useRef(new Animated.Value(-1000)).current;
//   const [w, setW] = useState(0);

//   useEffect(() => {
//     Animated.timing(animatedValue, {
//       toValue: reactive,
//       duration: 300,
//       useNativeDriver: true,
//     }).start();
//   }, []);

//   useEffect(() => {
//     reactive.setValue(-w + (w * step) / steps);

//     console.log(`THis is -${w} + ${w}*${step} / ${steps}`);
//     console.log(`THis is -${w} + ${w * step} / ${steps}`);
//     console.log(`THis is -${w} + ${(w * step) / steps}`);
//     console.log(reactive);
//   }, [step, w]);

//   return (
//     <>
//       <Text
//         style={{
//           fontFamily: 'Menlo',
//           fontSize: 12,
//           fontWeight: '900',
//           marginBottom: 4,
//         }}>
//         {step} / {steps}
//       </Text>

//       <View
//         onLayout={e => {
//           const newWidth = e.nativeEvent.layout.width;
//           setW(newWidth);
//         }}
//         style={{
//           height: height,
//           backgroundColor: 'rgba(0,0,0,0.1)',
//           borderRadius: height,
//           overflow: 'hidden',
//         }}>
//         <Animated.View
//           style={{
//             height,
//             width: '100%',
//             borderRadius: height,
//             backgroundColor: 'rgba(0,0,0,0.5)',
//             transform: [{translateX: animatedValue}],
//           }}></Animated.View>
//       </View>
//     </>
//   );
// };

// function App() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', padding: 20}}>
//       <StatusBar hidden></StatusBar>

//       <Progress step={7} steps={10} height={20}></Progress>
//     </View>
//   );
// }

/*
9. Swipe to delete Animation in React Native with Reanimated 2
*/

// function App() {
//   const TASKS = [
//     {title: 'Lorem10', index: 1},
//     {title: 'CA bone plak si je', index: 2},
//     {title: 'Ca bone nona si je', index: 3},
//     {title: 'Ca bane a la ', index: 4},
//     {title: 'Mir a la po ti', index: 5},
//   ];

//   const [tasks, setTasks] = useState(TASKS);
//   const scrollViewRef = useRef(null);

//   const onDismiss = task => {
//     setTasks(prevTasks => prevTasks.filter(item => item.index !== task.index));
//   };

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <Text style={{fontSize: 60, marginVertical: 20, paddingLeft: '5%'}}>
//         Tasks
//       </Text>

//       <ScrollView
//         ref={scrollViewRef}
//         style={{flex: 1}}
//         contentContainerStyle={{
//           // paddingVertical: 20,
//           // gap: 20,
//           flexGrow: 1,
//         }}>
//         {tasks.map(task => {
//           return (
//             <ListItem
//               key={task.index}
//               task={task}
//               width={width}
//               onDismiss={onDismiss}
//               scrollViewRef={scrollViewRef}></ListItem>
//           );
//         })}
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

/*
10. Introduction to Animated API (React Native)
*/
//No package needed to be installed cuz we will use RN AnimatedApi
// function App() {
//   const progress = useRef(new Animated.Value(0)).current; //similar as useSharedValue in Reanimated
//   const scale = useRef(new Animated.Value(1)).current;
//   const borderRadius = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.timing(progress, {
//       toValue: 1,
//       useNativeDriver: true,
//     }).start();

//     Animated.timing(scale, {
//       toValue: 2,
//       useNativeDriver: true,
//     }).start();

//     Animated.timing(borderRadius, {
//       toValue: 100,
//       useNativeDriver: true,
//     }).start();
//   }, []);

//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Animated.View
//         style={{
//           width: 100,
//           height: 100,
//           backgroundColor: 'blue',
//           opacity: progress,
//           borderRadius: borderRadius,
//           transform: [
//             {scale: scale},
//             {
//               rotate: progress.interpolate({
//                 inputRange: [0, 1],
//                 // outputRange: [Math.PI, 2 * Math.PI],
//                 outputRange: ['180deg', '360deg'],
//               }),
//             },
//           ],
//         }}></Animated.View>
//     </View>
//   );
// }

// export default App;
