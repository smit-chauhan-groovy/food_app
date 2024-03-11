import React, {useState} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import BaseColor from '../../Config/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

const BottomTabs = ({navigation}) => {
  const [selectedTab, setSelectedTab] = useState('Home');

  return (
    <View style={styles.mainContainer}>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => {
            setSelectedTab('Home');
            navigation.navigate('Home');
          }}>
          <Ionicons
            name={selectedTab === 'Home' ? 'home' : 'home-outline'}
            style={{color: BaseColor.white, fontSize: 22}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedTab('History');
            navigation.navigate('History');
          }}>
          <Ionicons
            name={selectedTab === 'History' ? 'cart-sharp' : 'cart-outline'}
            style={{color: BaseColor.white, fontSize: 25}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedTab('Wallet');
            navigation.navigate('Wallet');
          }}>
          <Ionicons
            name={selectedTab === 'Wallet' ? 'wallet-sharp' : 'wallet-outline'}
            style={{color: BaseColor.white, fontSize: 22}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomTabs;
