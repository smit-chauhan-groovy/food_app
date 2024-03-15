import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import BaseColor from '../../Config/colors';
import {FontFamily} from '../../Config/typography';

const CHeader = () => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar
        backgroundColor={BaseColor.primary}
        translucent
        animated={true}
      />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <Entypo
          name="location-pin"
          style={{color: BaseColor.blackColor, fontSize: 40}}
        />
        <View>
          <Text
            style={{
              fontFamily: FontFamily.medium,
              fontSize: 18,
              fontWeight: 600,
              color: BaseColor.blackColor,
            }}>
            Center square
          </Text>
          <Text
            style={{
              fontFamily: FontFamily.medium,
              fontSize: 14,
              fontWeight: 200,
              color: BaseColor.blackColor,
            }}>
            Nadiad
          </Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: BaseColor.lightPurple,
          height: 40,
          width: 40,
          borderRadius: 20,
        }}>
        <Text style={{color: 'blue'}}>S</Text>
      </View>
    </View>
  );
};

export default CHeader;
