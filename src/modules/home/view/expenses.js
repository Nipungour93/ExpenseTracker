import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
} from 'react-native';
import Enypto from 'react-native-vector-icons/Entypo';
import {useSelector, useDispatch} from 'react-redux';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import {PieChart} from 'react-native-chart-kit';

// Screens
import {PieData} from './../../data';
import {Container, Header, PercentageBar} from '@app/components';
import {Images, Colors, Routes} from '@app/constants';
import {getCategory, getExpense} from '../slice';
import {
  selectCategory,
  selectExpense,
  selectAccountDetails,
} from '../selectors';
import {getStyle} from './styles';

console.disableYellowBox = true;
const {width: screenWidth} = Dimensions.get('window');

const chartConfig = {
  backgroundGradientFrom: '#Ffffff',
  backgroundGradientTo: '#ffffff',
  barPercentage: 1.3,
  decimalPlaces: 0,
  color: () => `#5D3FD3`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, 1)`,
  style: {
    borderRadius: 16,
  },
  propsForBackgroundLines: {
    strokeWidth: 1,
    stroke: '#efefef',
    strokeDasharray: '0',
  },
};

const ExpensesScreen = ({navigation}) => {
  const account = useSelector(selectAccountDetails);
  const expense = useSelector(selectExpense);
  const category = useSelector(selectCategory);
  const dispatch = useDispatch();
  const styles = getStyle();
  console.log({category});

  useEffect(() => {
    dispatch(getExpense());
    dispatch(getCategory());
  }, []);

  let datesWhitelist = [
    {
      start: moment(),
      end: moment().add(30, 'days'), // total 4 days enabled
    },
  ];
  let datesBlacklist = [moment().add(1, 'days')]; // 1 day disabled

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.storeContainer}>
        <View style={styles.storeDetails}>
          <Image source={Images.User} style={styles.image} />
          <View style={styles.titleContainer}>
            <Text style={[styles.titleLabel, {fontWeight: 'bold'}]}>
              {item.shopName}
            </Text>
            <Text style={styles.titleAccount}>{'Bank Account'}</Text>
          </View>
          <View style={styles.paymentContainer}>
            <Text style={styles.titleAccount}>{item.date}</Text>
          </View>
        </View>
        <View style={styles.storeDetails}>
          <View>
            <Text style={styles.storeTotal}>{'Total Spend'}</Text>
            <Text style={styles.priceTotal}>$ {item.totalSpend}</Text>
          </View>
          <View>
            <Text style={styles.storeTotal}>{'Total Budget'}</Text>
            <Text style={[styles.priceTotal, {color: '#000'}]}>
              $ {item.totalAmount}
            </Text>
          </View>
          <View style={styles.perRatio}>
            <Text style={styles.storeTotal}>{''}</Text>
            <Text style={styles.priceTotal}>{item.percentage}</Text>
          </View>
        </View>
        <View style={{width: '100%', justifyContent: 'center'}}>
          <PercentageBar
            height={10}
            // backgroundColor={'grey'}
            completedColor={Colors.Purple}
            percentage={item.percentage}
          />
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
    if (expense?.length > 20) {
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
  return (
    <Container scrollEnabeld={false}>
      <Header
        title={'Expenses'}
        onPress={() => navigation.navigate(Routes.NotificationScreen)}
        onPressProfile={() => navigation.navigate(Routes.ProfileScreen)}
      />
      <ScrollView>
        <View style={{marginHorizontal: 15}}>
          <View style={styles.calenderContainer}>
            <CalendarStrip
              calendarAnimation={{type: 'sequence', duration: 30}}
              daySelectionAnimation={{
                type: 'border',
                duration: 100,
                borderWidth: 1,
                borderHighlightColor: Colors.Orange,
              }}
              style={{height: 100, marginTop: 25, paddingBottom: 10}}
              calendarHeaderStyle={{color: Colors.Black}}
              dateNumberStyle={{color: Colors.Black}}
              dateNameStyle={{color: Colors.Black}}
              highlightDateNumberStyle={{color: Colors.Orange}}
              highlightDateNameStyle={{color: Colors.Orange}}
              disabledDateNameStyle={{color: 'grey'}}
              disabledDateNumberStyle={{color: 'grey'}}
              // datesWhitelist={datesWhitelist}
              // datesBlacklist={datesBlacklist}
              iconContainer={{flex: 0.1}}
            />
          </View>
          {/*------------- Account View -----------------*/}

          <View style={styles.ammountContainer}>
            <View>
              <View style={styles.balenceContainer}>
                <Text style={styles.totBal}>{'Total Balence'}</Text>
                <Text style={styles.totPrice}>${account.price}</Text>
              </View>
              <View style={styles.balenceBottomContainer}>
                <Enypto name="wallet" color="#CBC3E3" size={36} />
                <View>
                  <Text style={[styles.titleLabel, {fontWeight: 'bold'}]}>
                    {'Bank Account'}
                  </Text>
                  <Text style={styles.titleAccount}>{'1234567'}</Text>
                </View>
              </View>
            </View>
            <View>
              <View
                style={[
                  styles.balenceContainer,
                  {backgroundColor: Colors.Orange},
                ]}>
                <Text style={styles.totBal}>{'Total Balence'}</Text>
                <Text style={styles.totPrice}>${account.price}</Text>
              </View>
              <View style={styles.balenceBottomContainer}>
                <Enypto name="wallet" color="#ffb38a" size={36} />
                <View>
                  <Text style={[styles.titleLabel, {fontWeight: 'bold'}]}>
                    {'Bank Account'}
                  </Text>
                  <Text style={styles.titleAccount}>{'1234567'}</Text>
                </View>
              </View>
            </View>
          </View>

          {/*------------- Expense List -----------------*/}
          <View style={styles.transactionContainer}>
            <Text style={styles.transactionHeader}>{'Expenses'}</Text>
            <TouchableOpacity style={styles.viewAllContainer}>
              <Text>{'View all'}</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal={true}
            data={expense}
            renderItem={renderItem}
            ListEmptyComponent={listEmptyComponent}
            keyExtractor={item => item?.id}
            ListFooterComponent={listFooterComponent}
            showsHorizontalScrollIndicator={false}
          />

          {/*----------- Analaytics ----------- */}
          <View style={styles.monthSpendContainer}>
            <View style={styles.ammountContainer}>
              <View style={{maxWidth: 150}}>
                <Text style={[styles.titleLabel, {fontWeight: 'bold'}]}>
                  {'You have Spend '}
                  <Text style={{color: Colors.Orange}}>{' $6,584 '}</Text>
                  {'this month'}
                </Text>
              </View>

              <View style={styles.paymentContainer}>
                <Text style={styles.titleAccount}>{'April 2023'}</Text>
              </View>
            </View>
            <View style={{width: '100%', justifyContent: 'center'}}>
              <PercentageBar
                height={40}
                completedColor={Colors.Purple}
                percentage={'75%'}
              />
            </View>
          </View>
          {/*----------- Analaytics Graph ----------- */}
          <View style={styles.transactionContainer}>
            <Text style={styles.transactionHeader}>{'Analytics'}</Text>
            <TouchableOpacity style={styles.viewAllContainer}>
              <Text>{'View all'}</Text>
            </TouchableOpacity>
          </View>

          <PieChart
            data={PieData}
            // data={category}
            width={screenWidth - 60}
            height={180}
            chartConfig={chartConfig}
            accessor="percentage"
            backgroundColor="transparent"
          />
        </View>
      </ScrollView>
    </Container>
  );
};

export {ExpensesScreen};
