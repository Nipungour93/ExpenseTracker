import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Appbar} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import DateTimePicker from '@react-native-community/datetimepicker';

// Screens
import {
  Container,
  Input,
  Button,
  ExpenseDropdown,
  Header,
} from '@app/components';
import {Colors} from '@app/constants';
import {getAddExpense} from '../slice';
import {getStyle} from './styles';

const AddExpenseScreen = ({navigation}) => {
  const [amount, setAmount] = useState('');
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [selected, setSelected] = useState('2023');
  const dispatch = useDispatch();
  const styles = getStyle();

  const [formData, setFormData] = useState({
    category: '',
    product: '',
    date: '',
    amount: '',
  });

  const onSubmit = () => {
    dispatch(getAddExpense(formData));
  };
  function showDatePicker() {
    setDatePicker(true);
  }

  function onDateSelected(event, value) {
    setDatePicker(false);
    setDate(value);
  }

  return (
    <Container scrollEnabeld={false}>
      <View style={styles.addCash}>
        <Input
          placeholder="Enter category here"
          placeholderTextColor={Colors.GrayDark}
          onChangeText={category => setFormData({...formData, category})}
          textStyles={{color: Colors.White}}
          containerStyle={{marginBottom: 30}}
        />
        <Input
          placeholder="Enter product here"
          placeholderTextColor={Colors.GrayDark}
          onChangeText={product => setFormData({...formData, product})}
          textStyles={{color: Colors.White}}
          containerStyle={{marginBottom: 30}}
        />

        <TouchableOpacity
          style={styles.datepickerContainer}
          onPress={showDatePicker}>
          <Text style={styles.text}> {date.toDateString()}</Text>
        </TouchableOpacity>

        {datePicker && (
          <DateTimePicker
            value={date}
            mode={'date'}
            onChange={onDateSelected}
          />
        )}

        <Input
          placeholder="Enter amount here"
          placeholderTextColor={Colors.GrayDark}
          onChangeText={amount => setFormData({...formData, amount})}
          keyboardType="numeric"
          textStyles={{color: Colors.White}}
          containerStyle={{marginBottom: 30}}
        />

        <Button
          title={'submit'}
          onPress={onSubmit}
          // disabled={!date || !amount}
        >
          {'Submit'}
        </Button>
      </View>
    </Container>
  );
};

export {AddExpenseScreen};
