/**
 * @format
 * ImagePicker Component
 */
import React from 'react';
import {SafeAreaView, Text, Image, Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modal';
import {ScaledSheet} from 'react-native-size-matters';
// Screens
import {Colors} from '../constants';

const ImagePickerModal = ({
  isVisible,
  onClose,
  onImageLibraryPress,
  onCameraPress,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      style={styles.modal}>
      <SafeAreaView style={styles.buttons}>
        <Pressable style={styles.button} onPress={onImageLibraryPress}>
          <Icon name="image" size={20} color={Colors.Orange} />
          <Text style={styles.buttonText}>Gallery</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={onCameraPress}>
          <Icon name="camera" size={20} color={Colors.Orange} />
          <Text style={styles.buttonText}>Camera</Text>
        </Pressable>
      </SafeAreaView>
    </Modal>
  );
};

const styles = ScaledSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  buttonIcon: {
    width: '30@ms',
    height: '10@ms',
    margin: '10@ms',
  },
  buttons: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderTopRightRadius: '30@ms',
    borderTopLeftRadius: '30@ms',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20@ms',
  },
  buttonText: {
    fontSize: '14@ms',
    fontWeight: '600',
    color: Colors.Orange,
  },
});
export {ImagePickerModal};
