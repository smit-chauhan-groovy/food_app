import React from 'react';
import {Image, Text, View} from 'react-native';
import BaseColor from '../../Config/colors';

const CCard = props => {
  const {image = '', title = ''} = props;

  return (
    <View
      style={{
        width: '100%',
        height: 250,
        shadowOffset: {width: -2, height: 4},
        shadowColor: BaseColor.black10,
        shadowOffset: {
          width: 10,
          height: 10,
        },
        shadowOpacity: 0.15,
        shadowRadius: 8.3,
      }}>
      <View>
        <Image
          source={{uri: `${image}`}}
          style={{width: '100%', minHeight: 200, resizeMode: 'stretch'}}
        />
      </View>
      <View>
        <Text>{title}</Text>
      </View>
    </View>
  );
};

export default CCard;
