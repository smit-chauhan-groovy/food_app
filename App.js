import 'react-native-gesture-handler';
import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {persistor, store} from './app/redux/store/configStore';
import {PersistGate} from 'redux-persist/integration/react';
import NavigatingStart from './app/navigation';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigatingStart />
        </PersistGate>
      </Provider>
    </View>
  );
};

export default App;
