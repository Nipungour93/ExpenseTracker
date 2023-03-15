import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import {useSelector, useDispatch} from 'react-redux';

// Screens
import {Transactions, Bardata} from './../../data';
import {Container, Header, CreditCard, Dropdown} from '@app/components';
import {Images, Routes} from '@app/constants';
import {
  getTransactionsList,
  getAccountDetails,
  getMonthExpense,
} from '../slice';
import {
  selectTransactionsList,
  selectAccountDetails,
  selectMonthExpense,
} from '../selectors';
import {getStyle} from './styles';

const HomeScreen = ({navigation}) => {
  const {width: screenWidth} = Dimensions.get('window');
  const styles = getStyle();

  const transactions = useSelector(selectTransactionsList);
  const account = useSelector(selectAccountDetails);
  const monthExpense = useSelector(selectMonthExpense);
  const dispatch = useDispatch();
  console.log({account});

  const [selected, setSelected] = useState('2023');
  const data = [
    {label: '2023', value: '1'},
    {label: '2022', value: '2'},
    {label: '2021', value: '3'},
    {label: '2020', value: '4'},
    {label: '2019', value: '5'},
  ];

  useEffect(() => {
    dispatch(getTransactionsList());
    dispatch(getAccountDetails());
    dispatch(getMonthExpense());
  }, []);

  const chartConfig = {
    backgroundGradientFrom: '#Ffffff',
    backgroundGradientTo: '#ffffff',
    barPercentage: 1.3,
    decimalPlaces: 0, // optional, defaults to 2dp
    color: () => `#5D3FD3`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, 1)`,

    style: {
      borderRadius: 16,
      fontFamily: 'Bogle-Regular',
    },

    propsForBackgroundLines: {
      strokeWidth: 1,
      stroke: '#efefef',
      strokeDasharray: '0',
    },
    propsForLabels: {
      fontFamily: 'Bogle-Regular',
    },
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.transactionsList}
        onPress={() =>
          navigation.navigate(Routes.TransactionsDetailsScreen, item)
        }>
        <Image source={Images.User} style={styles.image} />
        <View style={styles.titleContainer}>
          <Text style={styles.titleLabel}>{item?.title}</Text>
          <Text style={styles.titleAccount}>{item?.accountNumber}</Text>
        </View>
        <View style={styles.paymentContainer}>
          <Text style={styles.price}>${item?.price}</Text>
          <Text style={styles.titleAccount}>{item?.date}</Text>
        </View>
      </TouchableOpacity>
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
    if (transactions?.length > 20) {
      return (
        <View style={styles.listEmpty}>
          <Button
            title={'load more'}
            color={'primary'}
            onPress={() => dispatch(getTransactionsList())}
          />
        </View>
      );
    }
    return null;
  };

  const dotStyle = [styles.dot, {backgroundColor: '#fff'}];
  // const {accountNumber, expireDate, name, price} = account;
  return (
    <Container scrollEnabeld={false}>
      <Header
        title={'Home'}
        onPress={() => navigation.navigate(Routes.NotificationScreen)}
        onPressProfile={() => navigation.navigate(Routes.ProfileScreen)}
      />
      <ScrollView>
        <View style={{marginHorizontal: 15}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 50,
            }}>
            <CreditCard
              name={account?.name}
              date={account?.expireDate}
              suffix={account?.accountNumber}
              amount={account?.price}
            />
          </View>

          <View style={styles.transactionContainer}>
            <Text style={styles.transactionHeader}>{'Analaytics'}</Text>
            <View style={styles.dropdown}>
              <Dropdown label="2023" data={data} onSelect={setSelected} />
            </View>
          </View>

          <BarChart
            style={styles.graphStyle}
            showBarTops={false}
            showValuesOnTopOfBars={true}
            withInnerLines={true}
            data={monthExpense}
            width={screenWidth - 15}
            height={175}
            yAxisLabel=""
            chartConfig={chartConfig}
            verticalLabelRotation={0}
          />

          <View>
            <View style={styles.transactionContainer}>
              <Text style={styles.transactionHeader}>{'Transactions'}</Text>
              <TouchableOpacity style={styles.viewAllContainer}>
                <Text>{'View all'}</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={transactions}
              renderItem={renderItem}
              ListEmptyComponent={listEmptyComponent}
              keyExtractor={item => item?.id}
              ListFooterComponent={listFooterComponent}
            />
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export {HomeScreen};
