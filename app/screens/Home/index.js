import React, {useRef} from 'react';
import {
  Text,
  View,
  Animated,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

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

  const images = [
    'https://media.istockphoto.com/id/1476198147/photo/colors-catalogue.webp?b=1&s=170667a&w=0&k=20&c=SXQLDsZ3DZmGx0go3CTYjmR_6z2PDN5pqLSER-oyWRY=',

    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWTMYxzeubsZoEECBMdj3RakSB2BPenhN0jZJU-Njzug&s',

    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSCTuNdmmptX_v0aR0ZBqVfo7aF7ENs_KW4WlOUpVcdQ&s',
  ];

  // useEffect(() => {
  //   startAnimation();
  // }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/* // animation */}
      {/* <Animated.View
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
      </Animated.View> */}
      <Carousel
        loop
        mode="parallax"
        width={Dimensions.get('window').width / 1}
        height={Dimensions.get('window').width / 1}
        autoPlay={false}
        data={[...images]}
        scrollAnimationDuration={1000}
        onSnapToItem={index => console.log('current index:', index)}
        renderItem={({index, item}) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={{uri: `${item}`}}
              style={{width: '90%', height: '100%'}}></Image>
          </View>
        )}
      />
    </View>
  );
};

export default Home;
