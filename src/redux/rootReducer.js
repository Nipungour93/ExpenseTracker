/**
 * @format
 * App root reducer with presist gate configuration
 */

import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Screens
import {commonReducer} from '../modules/common/index';
import {appBootstrapReducer} from '@app/modules/app-bootstrap';
import {homeReducer} from '@app/modules/home';
import {notificationReducer} from '@app/modules/notification';


const rootPresistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const authPersistConfig = {
  key: 'commonReducer',
  storage: AsyncStorage,
  blacklist: ['loaders'],
};

const rootReducer = combineReducers({
  commonReducer: persistReducer(authPersistConfig, commonReducer),
  appBootstrapReducer,
  homeReducer,
  notificationReducer
});

const persistRootReducer = persistReducer(rootPresistConfig, rootReducer);

export {persistRootReducer};
