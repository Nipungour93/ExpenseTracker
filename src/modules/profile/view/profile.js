/**
 * @format
 * Profile Screen
 */

import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {Appbar} from 'react-native-paper';
import Icons from 'react-native-vector-icons/AntDesign';
import Enypto from 'react-native-vector-icons/Entypo';
import {useSelector} from 'react-redux';

// Screens
import {Container} from '@app/components';
import {selectUserDetails} from '@app/modules/common';
import {Images, Routes, Colors} from '@app/constants';
import {getStyle} from './styles';

const ProfileScreen = ({navigation}) => {
  const styles = getStyle();
  const user = useSelector(selectUserDetails);
  console.log(user, 'hhhhhh');
  return (
    <Container scrollEnabeld={false}>
      <Appbar style={styles.head}>
        <Appbar.BackAction
          color="#fff"
          icon={() => <Icons name="left" size={22} />}
          onPress={() => navigation.goBack()}
        />
        <Appbar.Content title={'Profile'} titleStyle={styles.headerTitle} />
        <Appbar.Action />
      </Appbar>
      <View style={{flex: 1}}>
        <View style={styles.profileBackContainer} />
        <View style={styles.profileContainer}>
          <View style={{marginTop: -80}}>
            <Image
              source={Images.User}
              // source={user?.userImage ? {uri: user?.userImage} : Images.User}
              style={styles.image}
            />
            <TouchableOpacity
              style={styles.cameraIcon}
              onPress={() => navigation.navigate(Routes.EditProfileScreen)}>
              <Enypto name="pencil" color="#FF6600" size={20} />
            </TouchableOpacity>
          </View>

          <Text style={styles.nameProfile}>{user?.userName}</Text>
          <Text style={styles.emailProfile}>{user?.email}</Text>
          <Text style={styles.emailProfile}>{user?.country}</Text>
          <View style={styles.about}>
            <Text style={[styles.nameProfile, {fontSize: 15}]}>{'About'}</Text>
            <Text style={styles.emailProfile}>
              {
                'inserting any fantasy text or a famous text, be it a poem, a speech,  exclusive Lorem Ipsum'
              }
            </Text>
          </View>
        </View>
      </View>
    </Container>
  );
};

export {ProfileScreen};
