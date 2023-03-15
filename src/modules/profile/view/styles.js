/**
 * @format
 * Profile Style
 */

import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '@app/constants';

export const getStyle = () => {
  return ScaledSheet.create({
    head: {
      height: '70@ms',
      backgroundColor: Colors.Orange,
    },
    headerTitle: {
      fontWeight: 'bold',
      color: Colors.White,
      textAlign: 'center',
      fontSize: '15@ms',
    },

    notification: {
      marginHorizontal: '10@ms',
    },
    image: {
      width: '110@ms',
      height: '110@ms',
      borderRadius: '50@ms',
      borderWidth: '3@ms',
      borderColor: Colors.White,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 0.3},
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 10,
    },
    nameProfile: {
      fontSize: '25@ms',
      marginTop: '10@ms',
      color: Colors.GrayDark,
      fontWeight: 'bold',
    },
    emailProfile: {
      fontSize: '15@ms',
      color: Colors.GrayDark,
    },
    profileContainer: {
      // justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.White,
      padding: '15@ms',
      marginTop: '-150@ms',
      marginHorizontal: '35@ms',
      borderRadius: '10@ms',
      height: '270@ms',
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 0.3},
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 10,
      zIndex: 1000,
    },
    profileBackContainer: {
      backgroundColor: Colors.Orange,
      height: '350@ms',
      borderBottomRightRadius: '270@ms',
    },
    cameraIcon: {
      position: 'absolute',
      top: '70@ms',
      right: '0@ms',
      backgroundColor: Colors.White,
      borderRadius: '50@ms',
      width: '35@ms',
      height: '35@ms',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: Colors.Black,
      shadowOffset: {width: 0, height: 0.3},
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 10,
    },
    // EditProfile
    editContainer: {
      marginHorizontal: '10@ms',
      marginVertical: '55@ms',
    },
    countryContainer: {
      height: '48@ms',
      width: '100%',
      borderColor: '#CECECE',
      borderWidth: '1.5@ms',
      paddingVertical: '15@ms',
      paddingHorizontal: '15@ms',
      marginVertical: '15@ms',
      borderRadius: '5@ms',
    },
    countryContent: {
      width: '100%',
      height: '46@ms',
      backgroundColor: 'transparent',
      color: Colors.Black,
    },
    galleryIcon: {
      backgroundColor: Colors.Orange,
      borderRadius: '60@ms',
      width: '35@ms',
      height: '35@ms',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: Colors.Black,
      shadowOffset: {width: 0, height: 0.3},
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 10,
      marginHorizontal: '5@ms',
    },
    about: {
      backgroundColor: Colors.Gray,
      width: '100%',
      borderRadius: '10@ms',
      height: '110@ms',
      padding: '10@ms',
      marginVertical: '10@ms',
    },
    containerChangePassword: {
      flex: 1,
      alignItems: 'center',
      // justifyContent:'center',
      // width: '100%',
      // paddingHorizontal: '15@ms',
      margin: '15@ms',
    },
    deleteAccount: {
      color: Colors.Orange,
    },
    deleteAccountContainer: {
      height: '20@ms',
    },
  });
};
