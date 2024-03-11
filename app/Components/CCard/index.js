import React from 'react';
import {Image, Text, View} from 'react-native';

const CCard = props => {
  const {image = '', title = ''} = props;

  return (
    <View>
      <View style={{width: '100%', height: 250}}>
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
