import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import {Appbar, Modal, Portal, Provider} from 'react-native-paper';
import {
  StripeProvider,
  initStripe,
  CardField,
  useConfirmPayment,
  createToken,
} from '@stripe/stripe-react-native';
import {useDispatch, useSelector} from 'react-redux';

// Screens
import {selectUser, selectStripeConfiguration} from '@app/modules/common';
import {Container, Label} from '@app/components';
import {makePayment} from '../slice';
import {Colors} from '@app/constants';
import {getStyle} from './styles';

const PaymentScreen = ({navigation, visible, onHide, onCancel, route}) => {
  const [cardDetails, setCardDetails] = useState({complete: false});
  const stripeConfiguration = useSelector(selectStripeConfiguration);
  const [loading, setLoading] = useState(false);
  const {confirmPayment} = useConfirmPayment();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const styles = getStyle();

  const publishableKeyId =
    'pk_test_51MdWHWSAESLCFb7O9hqJnUjkSdjOJfjdVjJIYp8iFCOi9Zug4rr83c1c7aX1lGysjuqbKSHufgIrRCst6piWrDo700pp5r8JBX';

  useEffect(() => {
    if (publishableKeyId) {
      initStripe({
        publishableKey: publishableKeyId,
        merchantIdentifier: 'com.expensetracker',
      });
    }
  });

  const onConfirm = async () => {
    try {
      const paymentToken = await createToken({
        type: 'Card',
      });
      console.log(paymentToken, 'paymentToken');
      dispatch(
        makePayment({
          ...paymentToken.token,
          amount: parseFloat(route.params.amount),
          availableAmount: parseFloat(route.params.availableAmount),
        }),
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container scrollEnabeld={false}>
      <Appbar>
        <Appbar.BackAction
          color="#000"
          icon={() => <Icons name="left" size={22} />}
          onPress={() => navigation.goBack()}
        />
        <Appbar.Content title={'Payment'} titleStyle={styles.headerTitle} />
        <Appbar.Action />
      </Appbar>
      <Text style={styles.amountAdd}>
        {'Amount : $'}
        {route.params.amount}
      </Text>
      <StripeProvider
        publishableKey={publishableKeyId}
        merchantIdentifier={'com.expensetracker'}>
        <View style={styles.modalContentContainer}>
          <CardField
            postalCodeEnabled={false}
            placeholders={{
              number: '4242 4242 4242 4242',
            }}
            // cardStyle={{
            //   textColor: Colors.White,
            //   placeholderColor: Colors.Black,
            // }}
            style={styles.cardStyle}
            autofocus={true}
            onCardChange={setCardDetails}
          />
          <View>
            <View style={styles.memberContainer}>
              <TouchableOpacity onPress={onCancel}>
                <View style={styles.memberBtn2}>
                  <Label textStyles={styles.memberBtnText2}>Cancel</Label>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onConfirm}
                disabled={cardDetails?.complete === false}>
                <View
                  style={[
                    styles.memberBtn2,
                    {
                      backgroundColor:
                        cardDetails?.complete === false
                          ? Colors.Gray
                          : Colors.Orange,
                    },
                  ]}>
                  <Label textStyles={styles.memberBtnText2}>Make Payment</Label>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {!!loading && (
            <View style={styles.loaderContainer}>
              <ActivityIndicator size={'large'} color={Colors.Orange} />
            </View>
          )}
        </View>
      </StripeProvider>
    </Container>
  );
};

export {PaymentScreen};
