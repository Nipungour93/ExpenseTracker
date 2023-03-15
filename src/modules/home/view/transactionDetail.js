import React from 'react';
import {View, Text, Image} from 'react-native';
import {Appbar} from 'react-native-paper';

// Screens
import {Container} from '@app/components';
import {Colors, Images, Routes} from '@app/constants';
import {getStyle} from './styles';

const TransactionsDetailsScreen = ({navigation, route}) => {
  const styles = getStyle();

  return (
    <Container scrollEnabeld={false}>
      <Appbar style={styles.head}>
        <Appbar.BackAction
          color="#000"
          icon={() => <Icons name="left" size={22} />}
          onPress={() => navigation.goBack()}
        />
        <Appbar.Content
          title={'Transaction-Details'}
          titleStyle={styles.headerTitle}
        />
        <Appbar.Action />
      </Appbar>
      <View style={{marginHorizontal: 15, marginVertical: 20}}>
        <View style={styles.transactionDetails}>
          <Image
            source={Images.User}
            style={[
              styles.image,
              {
                width: 120,
                height: 120,
                borderWidth: 2,
                borderColor: Colors.White,
              },
            ]}
          />
          <Text style={styles.transactionTitle}>
            {route.params.title}-${route.params.price}
          </Text>
          <Text style={[styles.transactionTitle, {fontSize: 15}]}>
            {route.params.date}
          </Text>
          <Text style={[styles.transactionTitle, {fontSize: 12}]}>
            Acc No-{route.params.accountNumber}
          </Text>
        </View>
      </View>
    </Container>
  );
};

export {TransactionsDetailsScreen};
