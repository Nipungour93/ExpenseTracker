/**
 * @format
 * Bottom Tab for app
 */

import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Enypto from 'react-native-vector-icons/Entypo';

// Sceens
import {Colors, ScaledSheet} from '@app/styles';
import {
  HomeScreen,
  ExpensesScreen,
  WalletScreen,
  SettingsScreen,
  AddExpenseScreen
} from '@app/modules/home';

const BottomTab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
        tabBarActiveTintColor: '#FF6600',
        tabBarInactiveTintColor: 'gray',
      })}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Enypto name="home" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Expenses"
        component={ExpensesScreen}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Enypto name="wallet" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Add"
        component={AddExpenseScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <TouchableOpacity>
              <Icon name="pluscircle" color="#FF6600" size={35} />
            </TouchableOpacity>
          ),
        }}
      />
      <BottomTab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Enypto name="wallet" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Ionicons name="settings-outline" color={color} size={26} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const styles = ScaledSheet.create({
  bottomTabIcon: {
    height: '25@ms',
    width: '25@ms',
  },
  tabbarStyle: {
    backgroundColor: Colors.Primary,
    height: '45@ms',
    paddingTop: '5@ms',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0.3},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 20,
  },
});
export {BottomTabs};
