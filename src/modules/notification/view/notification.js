/**
 * @format
 * Profile Screen
 */

import React, {useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity,Image} from 'react-native';
import {Appbar} from 'react-native-paper';
import Icons from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Screens
import {Reminder} from './../../data';
import {Colors, Routes,Images} from '@app/constants';
import {Container} from '@app/components';
import {setNotificationCount} from '@app/modules/common';
import {getNotification} from '../slice';
import {selectNotification} from '../selectors';
import {getStyle} from './styles';

const NotificationScreen = ({navigation}) => {
  const styles = getStyle();
  const dispatch = useDispatch();
  const notification = useSelector(selectNotification);

  useEffect(() => {
    dispatch(getNotification());
    // dispatch(setNotificationCount(0));
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.transactionsList}
        onPress={() => navigation.navigate(Routes.ReminderDetailScreen, item)}>
        <View style={styles.listItem}>
          <MaterialCommunityIcons
            name={item.iconName}
            color={Colors.White}
            size={26}
          />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.titleLabel}>{item?.name}</Text>
          <Text style={styles.titleAccount}>{item?.date}</Text>
        </View>
        <View style={styles.paymentContainer}>
          <Text style={[styles.price, {color: '#000'}]}>${item?.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const listEmptyComponent = () => {
    return (
      <View style={styles.listEmpty}>
        <Image source={Images.Empty} style={{resizeMode:'cover'}} />
      </View>
    );
  };

  const listFooterComponent = () => {
    if (Reminder?.length > 20) {
      return (
        <View style={styles.listEmpty}>
          <Button
            title={'load more'}
            color={'primary'}
            onPress={() => dispatch(getBookList())}
          />
        </View>
      );
    }
    return null;
  };
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
      <View>
        <FlatList
          // data={Reminder}
          data={notification}
          renderItem={renderItem}
          ListEmptyComponent={listEmptyComponent}
          keyExtractor={item => item?.id}
          ListFooterComponent={listFooterComponent}
        />
      </View>
    </Container>
  );
};

export {NotificationScreen};
