/**
 * @format
 * List Component
 */

import React from 'react';
import {View, Text,TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Screens
import {Colors} from '../constants';

const List = ({onPress, iconName, title}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.transactionsList}>
        <View style={[styles.listItem, {backgroundColor: Colors.Purple}]}>
          <MaterialCommunityIcons name={iconName} color="#fff" size={14} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleLabel}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  transactionsList: {
    flexDirection: 'row',
    marginHorizontal: '10@ms',
    borderRadius: '10@ms',
    backgroundColor: Colors.Gray,
    marginVertical: '5@ms',
    height: '45@ms',
    alignItems: 'center',
    padding: '10@ms',
  },
  titleContainer: {
    paddingHorizontal: '10@ms',
  },
  titleLabel: {
    fontSize: '13@ms',
    color: Colors.Black,
    fontWeight: 600,
  },
  listItem: {
    backgroundColor: Colors.Purple,
    width: 35,
    height: 35,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {List};
