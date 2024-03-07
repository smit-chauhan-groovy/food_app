import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import {thunk} from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import {applyMiddleware, createStore} from 'redux';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateRecoiler: autoMergeLevel2,
};

let middleware = [thunk];
middleware = [...middleware];

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);

export {store, persistor};
