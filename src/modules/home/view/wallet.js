import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector, useDispatch} from 'react-redux';

// Screens
import {History} from './../../data';
import {Container, Header} from '@app/components';
import {Colors, Routes} from '@app/constants';
import {selectExpenseHistory, selectAccountDetails} from '../selectors';
import {getStyle} from './styles';
import {getExpenseHistory} from '../slice';

const WalletScreen = ({navigation}) => {
  const styles = getStyle();
  const account = useSelector(selectAccountDetails);
  const expenseHistory = useSelector(selectExpenseHistory);
  const dispatch = useDispatch();
  console.log({expenseHistory}, '-------expenseHistory');

  useEffect(() => {
    dispatch(getExpenseHistory());
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.transactionsList}>
        <View style={styles.listItem}>
          <MaterialCommunityIcons
            name={item?.iconName}
            color="#fff"
            size={26}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleLabel}>{item?.title}</Text>
          <Text style={styles.titleAccount}>{item?.date}</Text>
        </View>

        <View style={[styles.paymentContainer, {paddingHorizontal: 10}]}>
          <Text style={[styles.price, {color: '#000'}]}>${item?.amount}</Text>
        </View>
      </View>
    );
  };

  const listEmptyComponent = () => {
    return (
      <View style={styles.listEmpty}>
        <Text>{'Data Not Found'}</Text>
      </View>
    );
  };

  const listFooterComponent = () => {
    if (expenseHistory?.length > 20) {
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
      <Header
        title={'Wallet'}
        onPress={() => navigation.navigate(Routes.NotificationScreen)}
        onPressProfile={() => navigation.navigate(Routes.ProfileScreen)}
      />
      <View style={styles.walletContainer}>
        <View style={styles.priceContainer}>
          <Text style={[styles.priceLabel, {fontWeight: 'bold'}]}>
            {'$ '}
            <Text style={{fontSize: 40, color: Colors.White}}>
              {account?.price}
            </Text>
          </Text>
          <TouchableOpacity
            style={styles.addCashBtn}
            onPress={() => navigation.navigate(Routes.CashScreen)}>
            <Text style={styles.addCashLabel}>{'+Add Amount'}</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.transactionContainer, {marginTop: 30}]}>
          <Text style={styles.transactionHeader}>{'Expenses History'}</Text>
          <TouchableOpacity style={styles.viewAllContainer}>
            <Text>{'View all'}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={expenseHistory}
            renderItem={renderItem}
            ListEmptyComponent={listEmptyComponent}
            keyExtractor={item => item?.id}
            ListFooterComponent={listFooterComponent}
          />
        </View>
      </View>
    </Container>
  );
};

export {WalletScreen};
