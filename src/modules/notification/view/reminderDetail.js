/**
 * @format
 * Profile Screen
 */

import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {Appbar} from 'react-native-paper';
import Icons from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Screens
import {Container} from '@app/components';
import {Colors} from '@app/constants';
import {getStyle} from './styles';

const ReminderDetailScreen = ({navigation,route}) => {
  const styles = getStyle();

  return (
    <Container scrollEnabeld={false}>
      <Appbar style={styles.head}>
        <Appbar.BackAction
          color="#000"
          icon={() => <Icons name="left" size={22} />}
          onPress={() => navigation.goBack()}
        />
        <Appbar.Content title={'Reminder'} titleStyle={styles.headerTitle} />
        <Appbar.Action />
      </Appbar>
      <View style={styles.profileContainer}>
        <Text style={[styles.payBtnText,{position:'absolute',top:10,right:10}]}>{'Bal'}-${'475'}</Text>
        <View style={[styles.listItem, {width: 55, height: 55}]}>
          <MaterialCommunityIcons name={route.params.iconName} color={Colors.White} size={35} />
        </View>

        <Text style={styles.nameProfile}>
          {route.params.name}-${route.params.price}
        </Text>
        <Text style={[styles.nameProfile, {fontSize: 15}]}>
          {route.params.subTitle}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.payBtn}>
            <Text style={styles.payBtnText}>{'Pay Now'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.payBtn}>
            <Text style={styles.payBtnText}>{'Remind Later'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export {ReminderDetailScreen};
