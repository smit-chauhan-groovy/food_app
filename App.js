import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {persistor, store} from './app/redux/store/configStore';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <View>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Text>Hello</Text>
        </PersistGate>
      </Provider>
    </View>
  );
};

export default App;
