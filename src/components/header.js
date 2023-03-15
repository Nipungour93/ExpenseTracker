import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {Appbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/EvilIcons';

// Screens
import {Images, Colors} from '@app/constants';
import {ScaledSheet} from 'react-native-size-matters';

const Header = ({title, onPress, onPressProfile}) => {
  return (
    <Appbar style={styles.head}>
      <TouchableOpacity onPress={onPressProfile}>
        <Image source={Images.User} style={styles.image} />
      </TouchableOpacity>
      <Appbar.Content title={title} titleStyle={styles.headerTitle} />
      <TouchableOpacity onPress={onPress}>
        <Icon
          name={'bell'}
          color={'#000'}
          size={30}
          style={styles.notification}
        />
      </TouchableOpacity>
    </Appbar>
  );
};

const styles = ScaledSheet.create({
  head: {
    height: '70@ms',
    backgroundColor: Colors.White,
  },
  headerTitle: {
    fontWeight: 'bold',
    color: Colors.Black,
    textAlign: 'center',
    fontSize: '15@ms',
  },
  image: {
    marginVertical: '10@ms',
    marginHorizontal: '10@ms',
    width: '40@ms',
    height: '40@ms',
    borderRadius: '50@ms',
    borderWidth: '2@ms',
    borderColor: Colors.Orange,
  },

  notification: {
    marginHorizontal: '10@ms',
  },
});

export {Header};
