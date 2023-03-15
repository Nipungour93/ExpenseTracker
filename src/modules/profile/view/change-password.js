import React, {useState} from 'react';
import {View, TouchableOpacity, Alert} from 'react-native';
import {Appbar} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import GIcon from 'react-native-vector-icons/AntDesign';

import {Button, Input, Container, InputLabel, Label} from '@app/components';
import {changePassword, deleteProfile} from '../slice';
import {getStyle} from './styles';
import {showMessage} from 'react-native-flash-message';
import {Colors} from '@app/constants';

function ChangePasswordScreen({navigation}) {
  const [formData, setFormData] = useState({
    currentPass: null,
    newPassword: null,
    confirmPassword: null,
  });

  const styles = getStyle();
  const dispatch = useDispatch();

  const deleteAccount = () => {
    Alert.alert('Delete Account', 'Are you sure to delete your account ?', [
      {
        text: 'Confirm',
        onPress: () => {
          dispatch(deleteProfile());
        },
      },
      {
        text: 'Cancel',
        style: 'cancel',
        onPress: () => {},
      },
    ]);
  };

  const onSubmit = () => {
    if (formData?.confirmPassword !== formData?.newPassword) {
      return showMessage({
        message: 'New password and confirm password is not mmatched!',
        type: 'danger',
      });
    }
    if (
      formData?.confirmPassword &&
      formData?.newPassword &&
      formData?.currentPass
    ) {
      dispatch(changePassword(formData));
    } else {
      return showMessage({
        message: 'All field is required!',
        type: 'danger',
      });
    }
  };

  return (
    <Container>
      <Appbar style={styles.head}>
        <Appbar.BackAction
          color="#fff"
          icon={() => <Icon name="left" size={22} />}
          onPress={() => navigation.goBack()}
        />
        <Appbar.Content
          title={'Edit-Profile'}
          titleStyle={styles.headerTitle}
        />
        <Appbar.Action />
      </Appbar>
      <View style={styles.containerChangePassword}>
        <InputLabel textStyles={styles.title}>Old password</InputLabel>
        <Input
          placeholder="Atleast 6 Character"
          placeholderTextColor={Colors.Gray}
          onChangeText={currentPass =>
            setFormData({...formData, ...{currentPass}})
          }
        />
        <InputLabel textStyles={styles.title}>New password</InputLabel>
        <Input
          placeholder="Atleast 6 Character"
          placeholderTextColor={Colors.Gray}
          onChangeText={newPassword =>
            setFormData({...formData, ...{newPassword}})
          }
        />
        <InputLabel textStyles={styles.title}>Confirm password</InputLabel>
        <Input
          placeholder="Re-type password"
          placeholderTextColor={Colors.Gray}
          onChangeText={confirmPassword =>
            setFormData({...formData, ...{confirmPassword}})
          }
        />

        <Button onPress={onSubmit} containerStyle={styles.containerStyle}>
          {'Update'}
        </Button>

        <TouchableOpacity
          style={styles.deleteAccountContainer}
          onPress={deleteAccount}>
          <Label textStyles={styles.deleteAccount}>
            {'Delete Your Account'}
          </Label>
        </TouchableOpacity>
      </View>
    </Container>
  );
}

export {ChangePasswordScreen};
