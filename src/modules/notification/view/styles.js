/**
 * @format
 * Notification Style
 */

import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '@app/constants';

export const getStyle = () => {
  return ScaledSheet.create({
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
    listEmpty: {
      // flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      resizeMode: 'cover',
    },
    notification: {
      marginHorizontal: '10@ms',
    },
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
    titleAccount: {
      fontSize: '10@ms',
      color: '#808080',
      fontWeight: 'bold',
    },
    paymentContainer: {
      position: 'absolute',
      right: '10@ms',
      paddingHorizontal: '10@ms',
    },
    price: {
      fontSize: '15@ms',
      color: Colors.Green,
      fontWeight: 'bold',
    },
    listItem: {
      backgroundColor: Colors.Purple,
      width: 35,
      height: 35,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    walletContainer: {
      marginHorizontal: '10@ms',
      marginVertical: '10@ms',
    },
    priceContainer: {
      backgroundColor: Colors.Purple,
      height: '130@ms',
      borderRadius: '30@ms',
      width: '100%',
      justifyContent: 'center',
      paddingHorizontal: '25@ms',
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 0.3},
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 10,
    },
    priceLabel: {
      color: Colors.Gray,
      fontSize: '20@ms',
    },
    addCashBtn: {
      backgroundColor: Colors.Orange,
      width: '100@ms',
      height: '30@ms',
      borderRadius: '15@ms',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      right: '20@ms',
      shadowColor: '#fff',
      shadowOffset: {width: 0, height: 0.3},
      shadowOpacity: 0.3,
      shadowRadius: 3,
      elevation: 20,
    },
    addCashLabel: {
      color: Colors.White,
      fontWeight: 'bold',
    },
    listItem: {
      backgroundColor: Colors.Purple,
      width: 35,
      height: 35,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    dayStatus: {
      color: Colors.GrayDark,
      fontSize: '10@ms',
      marginHorizontal: '10@ms',
      marginVertical: '5@ms',
    },
    profileContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.Orange,
      padding: '15@ms',
      marginVertical: '20@ms',
      marginHorizontal: '35@ms',
      borderRadius: '10@ms',
      height: '550@ms',
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 0.3},
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 10,
    },
    nameProfile: {
      color: Colors.White,
      fontSize: '20@ms',
      fontWeight: 'bold',
      marginVertical: '5@ms',
    },
    payBtn: {
      backgroundColor: Colors.Purple,
      width: '100@ms',
      height: '30@ms',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '20@ms',
      marginHorizontal: '10@ms',
      marginVertical: '10@ms',
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 0.3},
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 10,
    },
    payBtnText: {
      color: Colors.White,
      fontSize: '13@ms',
      fontWeight: 'bold',
    },
  });
};
