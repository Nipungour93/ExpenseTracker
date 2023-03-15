import React, {useState} from 'react';
import {View} from 'react-native';
import {Appbar, Modal, Text, Portal, Provider} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Screens
import {Colors, Routes} from '@app/constants';
import {Container, Input, Button} from '@app/components';
import {selectAccountDetails} from '../selectors';
import {getStyle} from './styles';

const CashScreen = ({navigation}) => {
  const [number, setNumber] = useState('');
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => navigation.goBack();
  const payment = useSelector(selectAccountDetails);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getTransactionsList());
  // }, []);

  const containerStyle = {
    backgroundColor: Colors.Orange,
    padding: 30,
    width: 270,
    borderRadius: 10,
    alignItem: 'center',
    borderWidth: 2,
    borderColor: Colors.White,
  };
  const styles = getStyle();

  const onSubmit = () => {
    if (!number) {
      return showMessage({
        message: 'Please enter Amount',
        type: 'danger',
      });
    }

    navigation.navigate(Routes.PaymentScreen, {
      amount: number,
      availableAmount: payment?.price,
    });
    // showModal();
    // dispatch(payment({number}));
  };

  return (
    <Container scrollEnabeld={false}>
      <Provider>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            style={{justifyContent: 'center', alignItems: 'center'}}
            contentContainerStyle={containerStyle}>
            <View style={{alignItems: 'center'}}>
              <MaterialIcons name="celebration" color="#fff" size={30} />
            </View>
            <Text style={styles.modalText}>
              {'You sucessfully have added amount'}
            </Text>
          </Modal>
        </Portal>
        <Appbar style={styles.head}>
          <Appbar.BackAction
            color="#000"
            icon={() => <Icons name="left" size={22} />}
            onPress={() => navigation.goBack()}
          />
          <Appbar.Content
            title={'Add Amount'}
            titleStyle={styles.headerTitle}
          />
        </Appbar>
        <Text
          style={[
            styles.dayStatus,
            {fontWeight: 'bold', fontSize: 15, marginVertical: 5},
          ]}>
          {'Balence Amount'}
        </Text>
        <View style={styles.addCash}>
          <Text
            style={[
              styles.priceLabel,
              {fontWeight: 'bold', color: Colors.GrayDark},
            ]}>
            {'$ '}
            <Text style={{fontSize: 40, color: Colors.Black}}>
              {payment?.price}
            </Text>
          </Text>

          <Input
            placeholder="Enter amount here"
            placeholderTextColor={Colors.GrayDark}
            onChangeText={number => setNumber(number)}
            keyboardType="numeric"
            returnKeyType="done"
            blurOnSubmit={true}
            containerStyle={{marginVertical: 40}}
          />

          <Button
            title={'Submit'}
            onPress={onSubmit}
            containerStyle={{marginVertical: 20}}>
            {'Submit'}
          </Button>
        </View>
      </Provider>
    </Container>
  );
};

export {CashScreen};
