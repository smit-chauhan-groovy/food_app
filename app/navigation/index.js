import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text, View} from 'react-native';
import BottomTabs from './BottomTabs';
import Home from '../screens/Home';
import History from '../screens/History';
import Wallet from '../screens/Wallet';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './rootNavigation';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import BaseColor from '../Config/colors';

const NavigatingStart = () => {
  const DashboardBottomTabs = () => {
    const Tab = createBottomTabNavigator();

    return (
      <Tab.Navigator
        initialRouteName="Home"
        backBehavior="initialRoute"
        tabBar={props => [
          <View
            style={{
              backgroundColor: BaseColor.whiteColor,
              bottom: 0,
              right: 0,
              left: 0,
            }}>
            <BottomTabs {...props} />
          </View>,
        ]}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
          }}
        />
        <Tab.Screen
          name="History"
          component={History}
          options={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
          }}
        />
        <Tab.Screen
          name="Wallet"
          component={Wallet}
          options={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
          }}
        />
      </Tab.Navigator>
    );
  };

  const StackNavigator = () => {
    const Stack = createStackNavigator();

    return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          animationEnabled: false,
          gestureEnabled: true,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen
          name="Home"
          component={DashboardBottomTabs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default NavigatingStart;
