import {FlashList} from '@shopify/flash-list';
import React from 'react';
import {Text, View} from 'react-native';

const Wallet = () => {
  const flashData = [
    {
      id: 1,
      title: 'Title 1',
    },
    {
      id: 2,
      title: 'Title 2',
    },
    {
      id: 3,
      title: 'Title 3',
    },
    {
      id: 4,
      title: 'Title 4',
    },
    {
      id: 5,
      title: 'Title 5',
    },
    {
      id: 6,
      title: 'Title 6',
    },
    {
      id: 7,
      title: 'Title 7',
    },
    {
      id: 8,
      title: 'Title 8',
    },
    {
      id: 9,
      title: 'Title 9',
    },
    {
      id: 10,
      title: 'Title 10',
    },
  ];

  return (
    <View style={{flex: 1}}>
      <FlashList
        data={flashData}
        renderItem={({item}) => (
          <View style={{borderColor: 'red', borderWidth: 1, height: 100}}>
            <Text>{item?.title}</Text>
          </View>
        )}
        estimatedItemSize={100}
      />
    </View>
  );
};

export default Wallet;
