import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {CountryList} from 'react-native-country-codes-picker';

const CountryPicker = () => {
  const [countryCode, setCountryCode] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          width: '80%',
          height: 60,
          backgroundColor: 'black',
          padding: 10,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
          }}>
          {countryCode}
        </Text>
      </TouchableOpacity>

      <CountryList
        lang={'pl'}
        pickerButtonOnPress={item => {
          setCountryCode(item.dial_code);
        }}
      />
    </View>
  );
};

export {CountryPicker};
