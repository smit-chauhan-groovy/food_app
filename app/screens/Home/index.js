import React, {useRef} from 'react';
import {Text, View, Animated, TouchableOpacity, Dimensions} from 'react-native';

const Home = () => {
  const translateXRef = useRef(new Animated.Value(0)).current;
  const translateYRef = useRef(new Animated.Value(0)).current;
  const opacityRef = useRef(new Animated.Value(0)).current;
  const translateXOtherRef = useRef(new Animated.Value(0)).current;
  const translateYOtherRef = useRef(new Animated.Value(0)).current;
  const mainViewRefWidth = useRef(
    new Animated.Value(Dimensions.get('screen').width),
  ).current;
  const mainViewRefHight = useRef(
    new Animated.Value(Dimensions.get('screen').height),
  ).current;
  const mainViewRefBorderRadius = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(mainViewRefWidth, {
          toValue: 270,
          useNativeDriver: false,
          duration: 1000,
        }),
        Animated.timing(mainViewRefHight, {
          toValue: 270,
          useNativeDriver: false,
          duration: 1000,
        }),
        Animated.timing(mainViewRefBorderRadius, {
          toValue: 1000,
          useNativeDriver: false,
          duration: 1000,
        }),
      ]),
      Animated.parallel([
        Animated.timing(mainViewRefWidth, {
          toValue: Dimensions.get('screen').width,
          useNativeDriver: false,
          duration: 1000,
        }),
        Animated.timing(mainViewRefHight, {
          toValue: Dimensions.get('screen').height,
          useNativeDriver: false,
          duration: 1000,
        }),
        Animated.timing(mainViewRefBorderRadius, {
          toValue: 0,
          useNativeDriver: false,
          duration: 1000,
        }),
      ]),
      Animated.timing(translateXRef, {
        toValue: 100,
        useNativeDriver: false,
        duration: 1000,
      }),
      Animated.timing(translateXRef, {
        toValue: -100,
        useNativeDriver: false,
        duration: 1000,
      }),
      Animated.timing(translateXRef, {
        toValue: 0,
        useNativeDriver: false,
        duration: 1000,
      }),
      Animated.parallel([
        Animated.timing(translateXRef, {
          toValue: 100,
          useNativeDriver: false,
          duration: 1000,
        }),
        Animated.timing(translateYRef, {
          toValue: -100,
          useNativeDriver: false,
          duration: 1000,
        }),
        Animated.timing(opacityRef, {
          toValue: 1,
          useNativeDriver: false,
          duration: 1000,
        }),
        Animated.timing(translateXOtherRef, {
          toValue: -100,
          useNativeDriver: false,
          duration: 1000,
        }),
        Animated.timing(translateYOtherRef, {
          toValue: -122,
          useNativeDriver: false,
          duration: 1000,
        }),
      ]),
    ]).start();
  };

  // useEffect(() => {
  //   startAnimation();
  // }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Animated.View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          // flex: 1,
          backgroundColor: 'pink',
          width: mainViewRefWidth,
          borderRadius: mainViewRefBorderRadius,
          height: mainViewRefHight,
        }}>
        <Animated.View
          style={{
            backgroundColor: 'orange',
            height: 100,
            width: 100,
            transform: [
              {translateX: translateXRef},
              {translateY: translateYRef},
            ],
          }}></Animated.View>
        <Animated.View
          style={{
            backgroundColor: 'orange',
            height: 100,
            width: 100,
            opacity: opacityRef,
            position: 'absolute',
            transform: [
              {translateX: translateXOtherRef},
              {translateY: translateYOtherRef},
            ],
          }}></Animated.View>
        <TouchableOpacity
          onPress={() => {
            startAnimation();
          }}
          style={{
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            height: 30,
            width: 200,
            marginTop: 20,
          }}>
          <Text style={{color: 'white'}}>Start</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default Home;
