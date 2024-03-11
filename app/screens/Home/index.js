import React from 'react';
import {FlatList, Text, View} from 'react-native';
import CCard from '../../Components/CCard';

const Home = () => {
  const flatListData = [
    {
      id: 1,
      name: 'One',
      image:
        'https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?size=338&ext=jpg&ga=GA1.1.1395880969.1710115200&semt=sph',
    },
  ];

  return (
    <View style={{flex: 1, paddingHorizontal: 15, paddingTop: 15}}>
      {/* <FlatList
        data={flatListData}
        scrollEnabled
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
        decelerationRate={'normal'}
        renderItem={({item, index}) => (
          <CCard image={item.image} title={item.name} />
        )}
        keyExtractor={item => item.id}
        scrollEventThrottle={16}
      /> */}
    </View>
  );
};

export default Home;
