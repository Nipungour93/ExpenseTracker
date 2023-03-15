import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const circleSize = 250;
const CreditCard = ({suffix, date, name, amount}) => {
  const dotStyle = [s.dot, {backgroundColor: '#fff'}];
  return (
    <>
      {/* <View style={{ backgroundColor: `#5D3FD3`, width: 250,height:80,borderRadius:30}}></View> */}
      <View style={[s.container, {backgroundColor: '#3A3B3C'}]}>
        <View style={[s.bgCircle, s.rightBgCircle]} />
        <View style={[s.bgCircle, s.bottomBgCircle]} />
        <View style={s.ammountContainer}>
          <Text style={[s.text, {color: '#fff', fontWeight: 'bold'}]}>
            {'Total Balence'}
          </Text>
          <Text style={s.amount}>$ {amount}</Text>
        </View>
        <View style={s.cardNumberContainer}>
          <View style={s.cardNumberPart}>
            <View style={dotStyle} />
            <View style={dotStyle} />
            <View style={dotStyle} />
            <View style={dotStyle} />
          </View>
          <View style={s.cardNumberPart}>
            <View style={dotStyle} />
            <View style={dotStyle} />
            <View style={dotStyle} />
            <View style={dotStyle} />
          </View>
          <View style={s.cardNumberPart}>
            <View style={dotStyle} />
            <View style={dotStyle} />
            <View style={dotStyle} />
            <View style={dotStyle} />
          </View>

          <Text style={[s.text, {color: '#fff'}]}>{suffix}</Text>
          <View style={s.logoContainer}>
            <View style={[s.circle, s.leftCircle]} />
            <View style={[s.circle, s.rightCircle]} />
          </View>
        </View>
        <View style={s.footerContainer}>
          <Text style={[s.text, {color: '#fff'}]}>{name}</Text>
          <Text style={[s.text, {color: '#fff'}]}>{date}</Text>
        </View>
      </View>
    </>
  );
};

const s = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 40,
    borderRadius: 12,
    width: '100%',
    position: 'relative',
    marginBottom: 25,
    marginTop: -45,
    zIndex: 1000,
  },
  logoContainer: {position: 'relative', right: 10},
  circle: {width: 25, height: 25, borderRadius: 17},
  rightCircle: {backgroundColor: '#f9a000', position: 'absolute', left: 20},
  leftCircle: {backgroundColor: '#ed0006', zIndex: 999},
  cardNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  cardNumberPart: {flexDirection: 'row'},
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 4,
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'Courier',
    fontSize: 16,
    letterSpacing: 0.53,
  },
  amount: {
    fontFamily: 'Courier',
    fontSize: 25,
    letterSpacing: 0.53,
    color: '#fff',
    fontWeight: 'bold',
  },
  ammountContainer: {
    marginVertical: 10,
  },
  bgCircle: {
    position: 'absolute',
    backgroundColor: 'white',
    opacity: 0.05,
    height: circleSize,
    width: circleSize,
    borderRadius: circleSize,
  },
  rightBgCircle: {
    top: (-1 * circleSize) / 4,
    right: (-1 * circleSize) / 2,
  },
  bottomBgCircle: {
    bottom: (-1 * circleSize) / 2,
    left: (0 * (-1 * circleSize)) / 2,
  },
});

export {CreditCard};
