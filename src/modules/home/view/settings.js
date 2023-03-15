import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';

// Screens
import {Routes} from '@app/constants';
import {logout} from '@app/modules/auth';
import {Container, Header, List} from '@app/components';

import {getStyle} from './styles';

const SettingsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const styles = getStyle();

  return (
    <Container scrollEnabeld={false}>
      <Header
        title={'Setting'}
        onPress={() => navigation.navigate(Routes.NotificationScreen)}
        onPressProfile={() => navigation.navigate(Routes.ProfileScreen)}
      />
      <List
        title={'Logout'}
        iconName={'logout'}
        onPress={() => dispatch(logout())}
      />
      <List title={'Tell a friends'} iconName={'account-question'} />
      <List
        title={'Change Password'}
        iconName={'logout'}
        onPress={() => navigation.navigate(Routes.ChangePasswordScreen)}
      />
      <List title={'Help and Feedback'} iconName={'logout'} />
      {/* <View style={styles.termscondition}>
        <TouchableOpacity>
          <Text style={styles.termsconditionContent}>
            {'Terms and conditions'}{' '}
            <Text style={[styles.termsconditionContent, {color: '#000'}]}>
              {' & '}
            </Text>
            <Text style={styles.termsconditionContent}>{'Privacy Policy'}</Text>
          </Text>
        </TouchableOpacity>
      </View> */}
    </Container>
  );
};

export {SettingsScreen};
