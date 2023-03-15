/**
 * Forgot Password Screen
 * @format
 */

import React, {useState, useEffect} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Appbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import Enypto from 'react-native-vector-icons/Entypo';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {CountryPicker} from 'react-native-country-codes-picker';

// Screens
import {Input, Button, Container, ImagePickerModal} from '@app/components';
import {Images, Colors, Routes} from '@app/constants';
import {selectUser, selectUserDetails} from '@app/modules/common';
import {editProfile} from '../slice';
import {getStyle} from './styles';

const options = {
  // saveToPhotos: false,
  // mediaType: 'photo',
  includeBase64: true,
};

function EditProfileScreen({navigation}) {
  const user = useSelector(selectUserDetails);
  const [formData, setFormData] = useState();
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('');
  const dispatch = useDispatch();
  const styles = getStyle();

  // const allField = Object.values(formData)?.filter(item => item == '');

  useEffect(() => {
    setFormData(user);
  }, [user]);

  const onSubmit = () => {
    dispatch(editProfile(formData));
  };

  const onImageLibraryPress = async () => {
    const {assets} = await launchImageLibrary(options);
    const userImage = assets[0].base64;
    setVisible(false);
    setFormData({
      ...FormData,
      ...{userImage: `data:image/png;base64,${userImage}`},
    });
  };

  const onCameraPress = async () => {
    const {assets} = await launchCamera(options);
    const userImage = assets[0].base64;

    setVisible(false);
    setFormData({
      ...FormData,
      ...{userImage: `data:image/png;base64,${userImage}`},
    });
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
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.Orange,
          height: 170,
          borderBottomRightRadius: 50,
          borderBottomLeftRadius: 50,
        }}>
        <Image
          source={
            formData?.userImage ? {uri: formData?.userImage} : Images.User
          }
          style={[styles.image, {borderColor: Colors.White}]}
        />
        <TouchableOpacity
          style={[styles.cameraIcon, {right: 125, top: 100}]}
          onPress={() => setVisible(true)}>
          <Enypto name="camera" color="#FF6600" size={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.editContainer}>
        <Input
          placeholder="Edit Name here"
          placeholderTextColor={Colors.GrayDark}
          onChangeText={userName => setFormData({...formData, ...{userName}})}
          value={formData?.userName}
          containerStyle={{marginVertical: 20}}
        />
        <Input
          placeholder="Edit Email here"
          placeholderTextColor={Colors.GrayDark}
          onChangeText={email => setFormData({...formData, ...{email}})}
          value={formData?.email}
          containerStyle={{marginVertical: 20}}
        />

        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => setShow(true)}
            style={styles.countryContainer}>
            <Text style={styles.countryContent}>{countryCode}</Text>
          </TouchableOpacity>

          <CountryPicker
            show={show}
            pickerButtonOnPress={item => {
              setCountryCode(item.dial_code);
              setShow(false);
            }}
          />
        </View>

        {/* <Input
          placeholder="Edit Password here"
          placeholderTextColor={Colors.GrayDark}
          onChangeText={password => setFormData({...formData, ...{password}})}
          value={formData?.password}
          secureTextEntry={true}
          containerStyle={{marginVertical: 20}}
        /> */}

        <Button
          title={'Submit'}
          onPress={onSubmit}
          // disabled={Boolean(allField?.length ?? 0)}
          containerStyle={{marginVertical: 20}}>
          {'Submit'}
        </Button>
      </View>
      <ImagePickerModal
        isVisible={visible}
        onClose={() => setVisible(false)}
        onImageLibraryPress={onImageLibraryPress}
        onCameraPress={onCameraPress}
      />
    </Container>
  );
}

export {EditProfileScreen};
