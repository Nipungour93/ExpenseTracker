/**
 * @format
 * Main section for app
 */

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '@app/constants';
// Screens
import {
  HomeScreen,
  ExpensesScreen,
  WalletScreen,
  CashScreen,
  SettingsScreen,
  AddExpenseScreen,
  PaymentScreen,
  TransactionsDetailsScreen,
} from '@app/modules/home';
import {
  NotificationScreen,
  ReminderDetailScreen,
} from '@app/modules/notification';
import {
  ProfileScreen,
  EditProfileScreen,
  ChangePasswordScreen,
} from '@app/modules/profile';
import {BottomTabs} from './bottom-tab';

const Stack = createNativeStackNavigator();

function MainSection() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'BottomTabs'} component={BottomTabs} />
      <Stack.Screen name={Routes.HomeScreen} component={HomeScreen} />
      <Stack.Screen name={Routes.ExpensesScreen} component={ExpensesScreen} />
      <Stack.Screen name={Routes.WalletScreen} component={WalletScreen} />
      <Stack.Screen name={Routes.CashScreen} component={CashScreen} />
      <Stack.Screen name={Routes.SettingsScreen} component={SettingsScreen} />
      <Stack.Screen
        name={Routes.ChangePasswordScreen}
        component={ChangePasswordScreen}
      />
      <Stack.Screen
        name={Routes.AddExpenseScreen}
        component={AddExpenseScreen}
      />
      <Stack.Screen name={Routes.PaymentScreen} component={PaymentScreen} />
      <Stack.Screen
        name={Routes.NotificationScreen}
        component={NotificationScreen}
      />
      <Stack.Screen
        name={Routes.ReminderDetailScreen}
        component={ReminderDetailScreen}
      />
      <Stack.Screen name={Routes.ProfileScreen} component={ProfileScreen} />
      <Stack.Screen
        name={Routes.TransactionsDetailsScreen}
        component={TransactionsDetailsScreen}
      />
      <Stack.Screen
        name={Routes.EditProfileScreen}
        component={EditProfileScreen}
      />
    </Stack.Navigator>
  );
}
export {MainSection};
