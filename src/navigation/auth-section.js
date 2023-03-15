/**
 * @format
 * Auth section routes for app
 */

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LoginScreen, RegisterScreen} from '@app/modules/auth/index';
import {Routes} from '@app/constants/index';

const Stack = createNativeStackNavigator();

function AuthSection() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.LoginScreen} component={LoginScreen} />
      <Stack.Screen name={Routes.RegisterScreen} component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export {AuthSection};
