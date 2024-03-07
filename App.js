import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {persistor, store} from './app/redux/store/configStore';
import {PersistGate} from 'redux-persist/integration/react';
import BaseColor from './app/Config/colors';
import {FontFamily} from './app/Config/typography';

const App = () => {
  return (
    <View>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Text>Hello w</Text>
        </PersistGate>
      </Provider>
    </View>
  );
};

export default App;
