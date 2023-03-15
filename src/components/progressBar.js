import React, {useState} from 'react';

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const PercentageBar = ({
  percentage,
  height,
  // backgroundColor,
  completedColor,
}) => {
  const [getPercentage, setPercentage] = useState(percentage);
  // const [leftPercentage, setLeftPercentage] = useState(percentage-100);
  const [getheight, setHeight] = useState(height);
  // const [getBackgroundColor, setBackgroundColor] = useState(backgroundColor);
  const [getCompletedColor, setCompletedColor] = useState(completedColor);
  return (
    <View>
      <View style={{justifyContent: 'center'}}>
        <View
          style={{
            width: '100%',
            height: getheight,
            marginVertical: 10,
            borderRadius: 5,
            // borderColor: getBackgroundColor,
            // borderWidth: 1,
          }}
        />
        <View
          style={{
            width: getPercentage ? getPercentage : 0,
            height: getheight,
            marginVertical: 10,
            borderRadius: 10,
            backgroundColor: getCompletedColor,
            position: 'absolute',
            bottom: 20,
          }}>
          <Text style={{marginVertical:10,marginHorizontal:10,color:'#fff'}}>{getPercentage}</Text>
        </View>
        <View
          style={{
            width: getPercentage ? getPercentage : 0,
            height: getheight,
            bottom: 10,
          }}>
          {/* <Text style={{textAlign: 'right'}}>{leftPercentage}</Text> */}
        </View>
      </View>
    </View>
  );
};
export {PercentageBar};
